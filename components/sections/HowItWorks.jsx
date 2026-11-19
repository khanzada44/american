import Image from 'next/image';

/* Edit the steps here. `icon` must be one of the keys in `icons` below. */
const steps = [
  {
    title: 'Tell Us Where You Are',
    text: 'Share the genre, word count and the point where you are stuck. The form is short, and you do not need an account or an introductory call to complete it.',
    icon: 'form',
  },
  {
    title: 'Choose The Right Studio',
    text: 'You can begin with ghostwriting, editing, design, formatting or the full publishing route. An editorial director will tell you which parts are necessary now and which can wait.',
    icon: 'grid',
  },
  {
    title: 'Speak With An Editor',
    text: 'We spend forty-five minutes on your goals, schedule and voice. Afterwards, you receive a written assessment and a fixed, itemised quote.',
    icon: 'chat',
  },
  {
    title: 'Make The Book',
    text: 'A matched writer, editor or designer begins the agreed work. You see drafts at set milestones, give feedback and approve the direction before the next stage.',
    icon: 'edit',
  },
  {
    title: 'Prepare For Publication',
    text: 'After the final revisions, we prepare the agreed print, eBook and audio files, submit the listings and hand over every production asset.',
    icon: 'book',
  },
];

const icons = {
  form: <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />,
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  edit: <path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4M4 4h7" />,
  book: <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11M9 8h6" />,
};

function StepIcon({ name }) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-[#a3804a]/40 bg-[#21213c]/[0.04] text-[#21213c]">
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icons[name]}
      </svg>
    </span>
  );
}

/** "How it works" — five-step route from manuscript to publication. */
export default function HowItWorks() {
  return (
    <section aria-labelledby="route-title" >
      <div className="container-site grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Left: intro, button and illustration */}
        <div className="lg:sticky lg:top-28">
          <p className="mt-0 mb-4 text-[0.68rem] font-bold tracking-[0.24em] text-[#a3804a] uppercase">How it works</p>
          <h2
            id="route-title"
            className="mt-0 mb-5 font-display text-[clamp(1.9rem,1.25rem+2.5vw,3.2rem)] leading-[1.1] font-[380] tracking-[-0.02em] text-[#21213c]"
          >
            A Clear Route From{' '}
            <em className="block font-[330] text-[#a3804a] italic">Manuscript To Publication</em>
          </h2>
          <p className="mt-0 mb-8 max-w-[46ch] text-[0.95rem] leading-relaxed text-[#21213c]/70">
            Our book publishing packages follow five stages, and each stage is written into the scope before the first
            invoice. You always know who has the manuscript, what they are doing with it and what will come back to you
            for approval.
          </p>
          <button
            type="button"
            data-open-lead=""
            className="inline-flex min-h-12 cursor-pointer items-center rounded-full border-0 bg-[#21213c] px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#a3804a] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a3804a]"
          >
            Book A Free Consultation
          </button>

          <Image
            src="/assets/images/photos/how-it-works.webp"
            width="560"
            height="460"
            alt="Laptop, books and a manuscript with a feather pen"
            loading="lazy"
            sizes="(max-width: 1024px) 90vw, 440px"
            className="mt-10 h-auto w-full max-w-[440px]"
          />
        </div>

        {/* Right: zig-zag steps */}
        <ol role="list" className="relative m-0 grid list-none gap-5 p-0 before:absolute before:top-6 before:bottom-6 before:left-[22px] before:w-px before:bg-[#a3804a]/30 lg:before:hidden">
          {steps.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={step.title}
                className={`relative w-full lg:w-[78%] ${right ? 'lg:ml-auto' : ''}`}
              >
                <article
                  className={`flex gap-4 rounded-[14px] border border-[#a3804a]/30 bg-white p-4 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#a3804a] sm:p-5 ${
                    right ? 'lg:flex-row-reverse lg:text-right' : ''
                  }`}
                >
                  <div className={`flex shrink-0 items-start gap-2 ${right ? 'lg:flex-row-reverse' : ''}`}>
                    <StepIcon name={step.icon} />
                    <span className="font-display text-2xl leading-9 text-[#a3804a]" aria-hidden="true">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="mt-1 mb-1.5 font-display text-[1.05rem] leading-snug font-medium text-[#21213c]">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="m-0 text-[0.85rem] leading-relaxed text-[#21213c]/65">{step.text}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}