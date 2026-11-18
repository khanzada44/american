import { cx } from './cx';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 border font-semibold tracking-[0.005em] whitespace-nowrap ' +
  'transition-[translate,background-color,color,border-color,box-shadow] duration-[280ms] ease-site hover:-translate-y-px active:translate-y-0';

const variants = {
  // dark button on light backgrounds
  primary: 'border-transparent bg-ink text-ivory shadow-[0_10px_24px_-12px_rgb(21_23_28/0.6)] hover:bg-black',
  // light button on dark backgrounds
  light: 'border-transparent bg-ivory text-ink shadow-[0_10px_30px_-14px_rgb(0_0_0/0.7)] hover:bg-white',
  outlineDark: 'border-ink/20 bg-transparent text-ink shadow-none hover:border-ink hover:bg-ink/[0.03]',
  glass:
    'border-white/22 bg-white/8 text-on-dark-1 backdrop-blur-[12px] backdrop-saturate-[1.4] hover:border-white/36 hover:bg-white/16',
};

const sizes = {
  md: 'min-h-[52px] rounded-full px-6 text-[0.95rem] focus-visible:rounded-full',
  sm: 'min-h-11 rounded-full px-[18px] text-[0.88rem] focus-visible:rounded-full',
};

/**
 * Classes for a button-styled element (use on <button>, <a> or <Link>).
 * Pass size: null to set height, padding, radius and text size yourself.
 */
export function buttonClass({ variant = 'primary', size = 'md', className } = {}) {
  return cx(base, variants[variant], size && sizes[size], className);
}

/** The arrow icon that slides right on hover. */
export function ButtonArrow() {
  return (
    <svg
      className="size-[17px] flex-none transition-transform duration-[280ms] ease-site group-hover/btn:translate-x-[3px]"
      aria-hidden="true"
    >
      <use href="#i-arrow" />
    </svg>
  );
}

export default function Button({ variant, size, className, type = 'button', children, ...props }) {
  return (
    <button type={type} className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
