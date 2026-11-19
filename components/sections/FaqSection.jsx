'use client';

import { useId, useState } from 'react';

/* Edit categories and questions here. Answers are plain text. */
const groups = [
  {
    key: 'general',
    label: 'General',
    icon: 'home',
    items: [
      { q: 'Who is this service for?', a: 'First-time and returning authors who want professional help with writing, editing, design or publishing, whether the manuscript is an idea, a draft or ready to print.' },
      { q: 'Do I keep the rights to my book?', a: 'Yes. You keep full ownership of your manuscript, cover and all production files. Every right stays with you, and this is written into your agreement.' },
      { q: 'Can I choose only the services I need?', a: 'Yes. You can start with a single service such as editing or cover design, or choose the full publishing route. Your editor will tell you which steps are needed now and which can wait.' },
      { q: 'Is this service for?', a: 'First-time and returning authors who want professional help with writing, editing, design or publishing, whether the manuscript is an idea, a draft or ready to print.' },
      { q: 'I keep the rights to my book?', a: 'Yes. You keep full ownership of your manuscript, cover and all production files. Every right stays with you, and this is written into your agreement.' },
      { q: 'Choose only the services I need?', a: 'Yes. You can start with a single service such as editing or cover design, or choose the full publishing route. Your editor will tell you which steps are needed now and which can wait.' },
    ],
  },
  {
    key: 'writing',
    label: 'Writing & editing',
    icon: 'pen',
    items: [
      { q: 'Will a ghostwritten book sound like me?', a: 'Your writer studies your interviews, notes and samples to match your voice. You review every chapter and request changes before the next stage begins.' },
      { q: 'What kinds of editing do you offer?', a: 'Developmental editing, line editing, copyediting and proofreading. A short assessment of your manuscript shows which level it needs.' },
    ],
  },
  {
    key: 'publishing',
    label: 'Publishing',
    icon: 'book',
    items: [
      { q: 'Where will my book be available?', a: 'We prepare print, eBook and audio files and submit listings to the major online retailers and distribution networks included in your package.' },
      { q: 'Do I need an ISBN?', a: 'Yes, each format needs its own ISBN. We can register ISBNs and copyright in your name as part of the publishing process.' },
    ],
  },
  {
    key: 'pricing',
    label: 'Pricing & process',
    icon: 'quote',
    items: [
      { q: 'How is the price decided?', a: 'After a consultation you receive a written, itemised quote based on your manuscript and the services you choose. There are no hidden fees.' },
      { q: 'How long does publishing take?', a: 'It depends on the services and the length of the book. Your quote includes a schedule with milestones, so you always know what comes next.' },
    ],
  },
];

const icons = {
  home: <path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />,
  pen: <path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" />,
  book: <path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2zM6 18a2 2 0 0 1 2-2h10" />,
  quote: <path d="M7 7h4v4c0 3-1.5 5-4 6M14 7h4v4c0 3-1.5 5-4 6" />,
};

const Icon = ({ name, className = 'size-[18px]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {icons[name]}
  </svg>
);

const glass =
  'border border-[#a3804a]/25 bg-white/70 backdrop-blur-xl backdrop-saturate-150';

export default function FaqSection() {
  const uid = useId();
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const group = groups[tab];

  const pickTab = (i) => {
    setTab(i);
    setOpen(0);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((g) =>
      g.items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
    ),
  };

  return (
    <section aria-labelledby="faq-title" className="relative isolate overflow-hidden py-[clamp(64px,8vw,112px)]">
      {/* Background: blurred photo + warm wash. Put your image at /public/assets/images/faq-bg.webp */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-110 bg-[#e9e8ef] bg-[url('/assets/images/faq-bg.webp')] bg-cover bg-center blur-[6px]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(255_255_255/0.6),rgb(244_241_235/0.8))]" />

      <div className="container-site">
        {/* Editorial bar */}
        <div className="mb-[clamp(40px,6vw,72px)] border-t border-b border-t-[#a3804a]/60 border-b-[#21213c]/10 py-4">
          <div className="grid grid-cols-2 items-center gap-4 text-[0.62rem] font-bold tracking-[0.22em] text-[#21213c]/55 uppercase sm:grid-cols-3">
            <span className="justify-self-start">Publish Your Books Today / Questions</span>
            <span className="hidden justify-self-center sm:block">Before You Begin</span>
            <span className="justify-self-end">Answered</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-[clamp(32px,5vw,52px)] max-w-7xl">
          {/* <p className="mt-0 mb-6 flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.24em] text-[#a3804a] uppercase">
            <span className="h-px w-10 bg-[#a3804a]" aria-hidden="true" />
            Questions &amp; answers
          </p> */}
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
            <h2
              id="faq-title"
              className="m-0 font-display text-[clamp(1.9rem,1.25rem+2.5vw,3.2rem)] leading-[1.08] font-[380] tracking-[-0.02em] text-balance text-[#21213c]"
            >
              Everything You Want To Know{' '}
              <em className="font-[330] text-[#a3804a] italic">Before You Begin</em>
            </h2>
            <p className="m-0 border-l border-[#21213c]/15 pl-5 text-[0.92rem] leading-relaxed text-[#21213c]/65">
              Straight answers about rights, process and pricing. If your question is not here, our team will answer it on
              a free consultation.
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-start">


          {/* Questions panel */}
          <div
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${tab}`}
            className={`${glass} min-w-0 flex-1 rounded-[22px] p-5 sm:p-7`}
          >
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <h3 className="m-0 text-[0.95rem] font-semibold text-[#21213c]">{group.label}</h3>
              <span className="text-[0.75rem] text-[#21213c]/45">
                {group.items.length} {group.items.length === 1 ? 'question' : 'questions'}
              </span>
            </div>

            <ul role="list" className="m-0 list-none p-0">
              {group.items.map((it, i) => {
                const isOpen = open === i;
                const btnId = `${uid}-q-${tab}-${i}`;
                const ansId = `${uid}-a-${tab}-${i}`;
                return (
                  <li key={it.q} className="border-b border-[#21213c]/10 last:border-b-0">
                    <h4 className="m-0">
                      <button
                        type="button"
                        id={btnId}
                        aria-expanded={isOpen}
                        aria-controls={ansId}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="group flex w-full cursor-pointer items-start gap-4 border-0 bg-transparent py-4 text-left focus-visible:rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21213c]"
                      >
                        <span className="w-7 shrink-0 font-display text-[1.05rem] leading-6 text-[#a3804a] italic">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1">
                          <span className={`block text-[0.98rem] leading-6 font-semibold transition-colors ${isOpen ? 'text-[#21213c]' : 'text-[#21213c]/80 group-hover:text-[#21213c]'}`}>
                            {it.q}
                          </span>
                          {/* progress line under the open question */}
                          <span className="mt-2 block h-px w-full bg-[#21213c]/10">
                            <span className={`block h-[2px] -translate-y-px bg-[#a3804a] transition-[width] duration-500 ease-site ${isOpen ? 'w-1/3' : 'w-0'}`} />
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#21213c]/15 text-[#21213c]/60 transition-transform duration-300 ${isOpen ? 'rotate-45 border-[#a3804a] bg-[#a3804a] text-white' : 'bg-white/60'}`}
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </button>
                    </h4>
                    <div
                      id={ansId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`grid transition-[grid-template-rows] duration-400 ease-site ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-0 mb-5 pl-11 pr-10 text-[0.88rem] leading-relaxed text-[#21213c]/65">{it.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[14px] border border-white/80 bg-white/50 px-4 py-3">
              <span className="text-[0.85rem] text-[#21213c]/70">Still have a question?</span>
              <button
                type="button"
                data-open-lead=""
                className="inline-flex min-h-10 cursor-pointer items-center rounded-full border-0 bg-[#21213c] px-5 text-[0.8rem] font-bold text-white transition-colors duration-300 hover:bg-[#a3804a] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21213c]"
              >
                Talk to our team
              </button>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}