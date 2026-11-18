import Link from 'next/link';
import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';
import ConsentText from '@/components/forms/ConsentText';
import FormSecurity from '@/components/forms/FormSecurity';

/* Dark glass form controls. forms.js validates them by name/required/minLength. */
const control =
  'peer w-full rounded-[14px] border border-white/14 bg-white/[0.05] px-4 pt-[22px] pb-2 text-[0.95rem] text-white outline-none ' +
  'transition-[border-color,background-color,box-shadow] duration-300 ' +
  'hover:border-white/25 focus:border-bronze/70 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgb(176_141_87/0.14)] ' +
  'focus-visible:rounded-[14px] focus-visible:outline-none aria-[invalid=true]:border-[#ff8f80]/60';

const floating =
  'pointer-events-none absolute top-[17px] left-[17px] text-[0.9rem] text-white/45 transition-[top,font-size,color] duration-300 ease-site ' +
  'peer-focus:top-[7px] peer-focus:text-[0.64rem] peer-focus:tracking-[0.1em] peer-focus:text-bronze peer-focus:uppercase ' +
  'peer-[:not(:placeholder-shown)]:top-[7px] peer-[:not(:placeholder-shown)]:text-[0.64rem] peer-[:not(:placeholder-shown)]:tracking-[0.1em] ' +
  'peer-[:not(:placeholder-shown)]:text-bronze peer-[:not(:placeholder-shown)]:uppercase';

/* forms.js puts <small class="field-error"> inside the [data-field] label */
const errorSlot =
  '[&_.field-error]:mt-1.5 [&_.field-error]:block [&_.field-error]:text-[0.78rem] [&_.field-error]:leading-[1.4] [&_.field-error]:text-[#ffb4a8]';

function Field({ label, multiline = false, full = false, ...props }) {
  const Control = multiline ? 'textarea' : 'input';
  return (
    <label data-field="" className={`relative block ${full ? 'col-span-full' : ''} ${errorSlot}`}>
      <Control placeholder=" " className={`${control} ${multiline ? 'min-h-32 resize-y' : 'min-h-[54px]'}`} {...props} />
      <span className={floating}>{label}</span>
    </label>
  );
}

const glass =
  'border border-white/10 bg-white/[0.04] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl';

const points = [
  { title: 'A reply within one business day', text: 'An editor reads your note and answers with clear next steps.' },
  { title: 'Your manuscript stays yours', text: 'Every right and file remains in your name, start to finish.' },
  { title: 'A written, itemised quote', text: 'You see the scope and the price before any work begins.' },
];

/** Enquiry form — dark editorial theme, placed under the FAQ. */
export default function ContactFormSection() {
  return (
    <section
      aria-labelledby="enquiry-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#2a2119_0%,#15110d_55%)] py-[clamp(64px,8vw,112px)] text-white"
    >
      {/* soft bronze light */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgb(176_141_87/0.16),transparent_65%)]"
      />

      <div className="container-site">
        {/* Editorial bar */}
        <div className="mb-[clamp(40px,6vw,72px)] border-t border-b border-t-white/30 border-b-white/10 py-4">
          <div className="grid grid-cols-2 items-center gap-4 text-[0.62rem] font-bold tracking-[0.22em] text-white/60 uppercase sm:grid-cols-3">
            <span className="justify-self-start">Publish Your Books Today / Enquiry</span>
            <span className="hidden justify-self-center sm:block">Start Your Book</span>
            <span className="justify-self-end">Free Consultation</span>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Left: intro */}
          <div className="lg:sticky lg:top-28">
            <p className="mt-0 mb-6 flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.24em] text-bronze uppercase">
              <span className="h-px w-10 bg-bronze" aria-hidden="true" />
              Tell us about your book
            </p>
            <h2
              id="enquiry-title"
              className="mt-0 mb-5 font-display text-[clamp(1.9rem,1.25rem+2.5vw,3.2rem)] leading-[1.08] font-[380] tracking-[-0.02em] text-balance text-white"
            >
              Ready To Take The{' '}
              <em className="font-[330] text-bronze italic">Next Step?</em>
            </h2>
            <p className="mt-0 mb-8 max-w-[44ch] text-[0.95rem] leading-relaxed text-white/60">
              Share where you are with your manuscript. There is no account to create and no obligation, just an honest
              answer from an editor.
            </p>

            <ul role="list" className="m-0 grid list-none gap-4 border-t border-white/10 p-0 pt-6">
              {points.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="w-7 shrink-0 font-display text-[1.05rem] leading-6 text-bronze/80 italic">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-[0.95rem] leading-6 font-semibold text-white">{p.title}</span>
                    <span className="block text-[0.85rem] leading-relaxed text-white/55">{p.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 mb-0 text-[0.85rem] text-white/55">
              Prefer email?{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:decoration-bronze"
              >
                {site.email}
              </a>
            </p>
          </div>

          {/* Right: form card */}
          <div className={`${glass} rounded-[22px] p-[clamp(20px,3.5vw,36px)]`}>
            <form
              method="post"
              action={site.api.contact || undefined}
              encType="multipart/form-data"
              data-site-form=""
              className="grid gap-3.5"
            >
              <FormSecurity kind="enquiry" />

              <div className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
                <Field
                  label="Full name *"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={formRules.name_min}
                  maxLength={formRules.name_max}
                />
                <Field label="Email address *" type="email" name="email" autoComplete="email" required maxLength={formRules.email_max} />
                <Field label="Phone number *" type="tel" name="phone" autoComplete="tel" required maxLength="40" />

                <label data-field="" className={`relative block ${errorSlot}`}>
                  <select
                    name="service"
                    defaultValue=""
                    className={`${control} min-h-[54px] cursor-pointer appearance-none pr-10 [&_option]:bg-[#1d1813] [&_option]:text-white`}
                  >
                    <option value="">Not sure yet</option>
                    {formRules.services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-[7px] left-[17px] text-[0.64rem] tracking-[0.1em] text-bronze uppercase">
                    Service
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </label>

                <Field
                  label="Where are you with your book? *"
                  full
                  multiline
                  name="message"
                  rows={4}
                  required
                  minLength={formRules.message_min}
                  maxLength={formRules.message_max}
                />
              </div>

              <label className="flex items-start gap-3 text-[0.7rem] leading-[1.55] text-white/45 [&_a]:text-white/75 [&_a]:underline">
                <input type="checkbox" name="marketing_consent" value="1" className="mt-0.5 size-[18px] flex-none accent-bronze" />
                <span>
                  <ConsentText />
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] cursor-pointer items-center gap-3 rounded-full border-0 bg-[#f4ece0] px-7 text-[0.9rem] font-bold text-ink transition-colors duration-300 hover:bg-bronze focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze disabled:cursor-wait disabled:opacity-60 max-[520px]:w-full max-[520px]:justify-center"
                >
                  Send Your Enquiry
                </button>
                <p
                  role="status"
                  data-form-status=""
                  className="m-0 min-h-[1.4em] text-[0.85rem] text-white/70 [&_a]:underline [&.is-err]:text-[#ffb4a8] [&.is-ok]:text-[#a9d6b0]"
                />
              </div>

              <p className="m-0 text-[0.72rem] text-white/40">
                By sending, you agree to our{' '}
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}