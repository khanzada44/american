/**
 * Runs the original page scripts (public/assets/js/*.js) on every page,
 * including pages opened with <Link> (client-side navigation, no reload).
 *
 * The scripts were written for full page loads: they find their elements,
 * attach listeners, start timers and observers, and never clean up. So for
 * each page visit this runtime:
 *
 *   enter(): turns on only this page's stylesheets, sets the page's
 *            <body class>, then runs the page's scripts in order while
 *            recording every listener, timer, animation frame and observer
 *            they create (also those created later from inside their own
 *            callbacks).
 *   leave(): removes everything recorded, and puts the shared layout
 *            (header, mobile menu, footer, lead modal) back the way it was,
 *            so the next run starts clean and nothing is attached twice.
 *
 * Code that is not from these scripts (React, Next.js, chat widget) is never
 * recorded or touched.
 */

let installed = false;
let active = false; // true while code from the page scripts is running
let registry = []; // cleanup functions for the current page visit
let session = 0;
const sources = new Map(); // script URL -> source text (fetched once)
let layoutSnapshot = null;

/** Wraps a callback so that anything it creates is recorded too. */
function tracked(fn) {
  if (typeof fn !== 'function') return fn;
  return function (...args) {
    const prev = active;
    active = true;
    try {
      return fn.apply(this, args);
    } finally {
      active = prev;
    }
  };
}

function install() {
  if (installed) return;
  installed = true;
  const w = window;

  // addEventListener / removeEventListener
  const ETP = w.EventTarget.prototype;
  const add = ETP.addEventListener;
  const remove = ETP.removeEventListener;
  const wrappers = new WeakMap(); // original fn -> Map(key -> wrapped fn)
  const keyOf = (type, opts) => `${type}|${typeof opts === 'boolean' ? opts : !!(opts && opts.capture)}`;
  ETP.addEventListener = function (type, fn, opts) {
    if (!active || typeof fn !== 'function') return add.call(this, type, fn, opts);
    const key = keyOf(type, opts);
    let byKey = wrappers.get(fn);
    if (!byKey) wrappers.set(fn, (byKey = new Map()));
    if (byKey.has(key)) return undefined; // same listener added twice: browsers ignore it too
    const wrapped = tracked(fn);
    byKey.set(key, wrapped);
    add.call(this, type, wrapped, opts);
    const target = this;
    registry.push(() => {
      remove.call(target, type, wrapped, opts);
      byKey.delete(key);
    });
    return undefined;
  };
  ETP.removeEventListener = function (type, fn, opts) {
    const byKey = typeof fn === 'function' && wrappers.get(fn);
    const wrapped = byKey && byKey.get(keyOf(type, opts));
    if (wrapped) {
      byKey.delete(keyOf(type, opts));
      return remove.call(this, type, wrapped, opts);
    }
    return remove.call(this, type, fn, opts);
  };

  // Deprecated MediaQueryList.addListener
  if (w.MediaQueryList && w.MediaQueryList.prototype.addListener) {
    const MQP = w.MediaQueryList.prototype;
    const addL = MQP.addListener;
    const removeL = MQP.removeListener;
    MQP.addListener = function (fn) {
      if (!active || typeof fn !== 'function') return addL.call(this, fn);
      const wrapped = tracked(fn);
      addL.call(this, wrapped);
      const mq = this;
      registry.push(() => removeL.call(mq, wrapped));
      return undefined;
    };
  }

  // Timers and animation frames
  const timer = (set, clear) =>
    function (fn, ...rest) {
      if (!active) return set.call(w, fn, ...rest);
      const id = set.call(w, tracked(fn), ...rest);
      registry.push(() => clear.call(w, id));
      return id;
    };
  w.setTimeout = timer(w.setTimeout, w.clearTimeout);
  w.setInterval = timer(w.setInterval, w.clearInterval);
  w.requestAnimationFrame = timer(w.requestAnimationFrame, w.cancelAnimationFrame);

  // Observers
  ['IntersectionObserver', 'MutationObserver', 'ResizeObserver'].forEach((name) => {
    const Orig = w[name];
    if (!Orig) return;
    const Wrapped = function (cb, opts) {
      if (!active) return new Orig(cb, opts);
      const obs = new Orig(tracked(cb), opts);
      registry.push(() => obs.disconnect());
      return obs;
    };
    Wrapped.prototype = Orig.prototype;
    w[name] = Wrapped;
  });
}

/** Elements that stay on screen between pages (rendered by app/layout.jsx). */
function layoutRoots() {
  return [
    document.documentElement,
    document.body,
    ...document.querySelectorAll('[data-header], #mobile-menu, footer, .modal:not(#book-modal)'),
  ];
}

const SNAP_ATTRS = ['class', 'style', 'hidden', 'aria-expanded', 'aria-hidden', 'open', 'inert', 'tabindex'];

/** Remembers the original attributes of the layout, before any script ran. */
function snapshotLayout() {
  const snap = [];
  layoutRoots().forEach((root) => {
    const els = root === document.documentElement || root === document.body ? [root] : [root, ...root.querySelectorAll('*')];
    els.forEach((el) => {
      const attrs = {};
      SNAP_ATTRS.forEach((a) => {
        attrs[a] = el.getAttribute(a);
      });
      snap.push([el, attrs]);
    });
  });
  return snap;
}

function restoreLayout() {
  if (!layoutSnapshot) return;
  document.querySelectorAll('dialog[open]').forEach((d) => {
    try {
      d.close();
    } catch (e) {
      /* already closed */
    }
  });
  layoutSnapshot.forEach(([el, attrs]) => {
    if (!el.isConnected) return;
    SNAP_ATTRS.forEach((a) => {
      if (el === document.body && a === 'class') return; // set per page by applyPage()
      if (attrs[a] === null) el.removeAttribute(a);
      else if (el.getAttribute(a) !== attrs[a]) el.setAttribute(a, attrs[a]);
    });
  });
}

const pathOf = (href) => {
  const u = new URL(href, window.location.href);
  return u.pathname + u.search;
};

/** Turns on this page's stylesheets from /assets/css and turns off the others. */
function applyStyles(styles) {
  const wanted = new Set(styles.map(pathOf));
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (!href.startsWith('/assets/css/')) return;
    link.disabled = !wanted.has(pathOf(href));
  });
}

async function load(src) {
  if (!sources.has(src)) {
    sources.set(
      src,
      fetch(src, { credentials: 'same-origin', cache: 'no-cache' }).then((r) => {
        if (!r.ok) throw new Error(`${src}: HTTP ${r.status}`);
        return r.text();
      }),
    );
  }
  return sources.get(src);
}

function run(src, code) {
  const name = src.split('?')[0].split('/').pop();
  const prev = active;
  active = true;
  try {
    // Indirect eval = global scope, exactly like a classic <script src>.
    (0, eval)(`${code}\n//# sourceURL=legacy/${name}`);
  } catch (err) {
    const where = String(err && err.stack).match(new RegExp(`legacy/${name}:(\\d+)`));
    console.warn(`[page script] ${name}${where ? ` line ${where[1]}` : ''}: ${err && err.message}`);
  } finally {
    active = prev;
  }
}

/** This page's stylesheets and <body class>. Called before the page is painted. */
export function applyPage({ styles = [], bodyClass = '' }) {
  if (!layoutSnapshot) layoutSnapshot = snapshotLayout();
  applyStyles(styles);
  document.body.className = bodyClass;
}

/** Start a page visit. */
export async function enter({ scripts = [], styles = [], bodyClass = '' }) {
  install();
  const id = ++session;
  applyPage({ styles, bodyClass });
  const codes = await Promise.all(scripts.map((s) => load(s).catch((err) => (console.error(err), ''))));
  if (id !== session) return; // the visitor already moved on
  scripts.forEach((src, i) => run(src, codes[i]));
}

/** End a page visit: undo everything the page scripts set up. */
export function leave() {
  session++;
  const fns = registry;
  registry = [];
  fns.reverse().forEach((fn) => {
    try {
      fn();
    } catch (e) {
      /* element already gone */
    }
  });
  restoreLayout();
}

/** Number of things the page scripts have set up right now (for debugging). */
export function stats() {
  return registry.length;
}
