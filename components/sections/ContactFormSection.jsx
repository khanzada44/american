import { site } from '@/lib/site';
import EnquiryForm from '../forms/EnquiryForm';

const glass =
  'border border-white/10 bg-white/[0.04] shadow-[0_30px_60px_-30px_rgb(8_8_20/0.85),inset_0_1px_0_rgb(255_255_255/0.07)] backdrop-blur-xl';

/** Enquiry form — logo navy + gold theme, placed under the FAQ. */
export default function ContactFormSection() {
  return (
    <section
      aria-labelledby="enquiry-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#2e2e55_0%,#21213c_45%,#15152a_100%)] py-[clamp(64px,8vw,112px)] text-white"
    >
      {/* soft gold light */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgb(163_128_74/0.22),transparent_65%)]"
      />

      <div className="container-site">
        {/* Editorial bar */}
        <div className="mb-[clamp(40px,6vw,72px)] border-t border-b border-t-[#c9a56a]/50 border-b-white/10 py-4">
          <div className="grid grid-cols-2 items-center gap-4 text-[0.62rem] font-bold tracking-[0.22em] text-white/60 uppercase sm:grid-cols-3">
            <span className="justify-self-start">Publish Your Books Today / Enquiry</span>
            <span className="hidden justify-self-center sm:block">Start Your Book</span>
            <span className="justify-self-end">Free Consultation</span>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Left: intro */}
          <div className="lg:sticky lg:top-28">
            <p className="mt-0 mb-6 flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.24em] text-[#c9a56a] uppercase">
              <span className="h-px w-10 bg-[#c9a56a]" aria-hidden="true" />
              YOUR STORY IS WORTH THE INK
            </p>

            <h2
              id="enquiry-title"
              className="mt-0 mb-5 font-display text-[clamp(1.9rem,1.25rem+2.5vw,3.2rem)] leading-[1.08] font-[380] tracking-[-0.02em] text-balance text-white"
            >
              Your Book Has a Place Beyond the{' '}
              <em className="font-[330] text-[#c9a56a] italic">Draft.</em>
            </h2>

            <p className="mt-0 mb-8 max-w-[44ch] text-[0.95rem] leading-relaxed text-white/60">
              Every book calls for a different kind of backing. From a writer's touch
              and an editor's eye to a well-planned route to print, let's find the right
              way forward for your title. Tell us where your project stands and what
              you have in mind. We'll help you find the right book publishing services
              to take it from there.
            </p>

            <h3 className="mt-0 mb-5 text-[1.05rem] font-semibold text-white">
              What Makes the First Conversation Worth Having?
            </h3>

            <ul role="list" className="m-0 grid list-none gap-4 border-t border-white/10 p-0 pt-6">
              {[
                {
                  title: 'A Manuscript-Centred Approach',
                  text: "Your book has its own voice, genre, and objectives. We take your project requirements into account when discussing the services it needs."
                },
                {
                  title: 'Clarity Before Commitment',
                  text: 'Understand the proposed scope of work, expected deliverables, and project arrangements before proceeding.'
                },
                {
                  title: 'Support Beyond the First Draft',
                  text: 'From developing written content to preparing a manuscript for publication and promotion, our services address different stages of the book creation process.'
                }
              ].map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="w-7 shrink-0 font-display text-[1.05rem] leading-6 text-[#c9a56a] italic">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-[0.95rem] leading-6 font-semibold text-white">
                      {p.title}
                    </span>
                    <span className="block text-[0.85rem] leading-relaxed text-white/55">
                      {p.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 mb-0 text-[0.85rem] text-white/55">
              Prefer email?{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:decoration-[#c9a56a]"
              >
                {site.email}
              </a>
            </p>
          </div>

          {/* Right: form card */}
          <div className={`${glass} rounded-[22px] p-[clamp(20px,3.5vw,36px)]`}>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}