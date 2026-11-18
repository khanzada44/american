import { site } from '@/lib/site';
import IconButton from '@/components/ui/IconButton';
import EnquiryFields from '@/components/forms/EnquiryFields';

/** "Discuss your book project" dialog, opened by any [data-open-lead] button. */
export default function LeadModal() {
  return (
    <dialog
      id="lead-modal"
      data-lead-modal=""
      aria-labelledby="modal-title"
      className="max-h-[calc(100dvh-24px)] w-[min(620px,calc(100vw-24px))] max-w-none overflow-visible border-0 bg-transparent p-0 text-on-dark-1 open:animate-modal-in backdrop:bg-[rgb(20_16_10/0.42)] backdrop:backdrop-blur-[10px] backdrop:backdrop-saturate-[1.2]"
    >
      {/* Card: shape, glass and corners. It never scrolls, so the corners are never cut. */}
      <div className="glass-dark relative flex max-h-[calc(100dvh-24px)] flex-col overflow-hidden rounded-xl bg-[rgb(22_24_29/0.86)]">
        <IconButton
          icon="#i-close"
          label="Close"
          data-close-modal=""
          size="size-10"
          className="absolute top-3.5 right-3.5 z-2"
        />

        {/* Scroll area: only this part scrolls, with a thin dark scrollbar inside the card. */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-[clamp(22px,4vw,40px)] [scrollbar-color:rgb(255_255_255/0.18)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/35 [&::-webkit-scrollbar-track]:my-5 [&::-webkit-scrollbar-track]:bg-transparent">
          <p className="mt-0 mb-4 inline-flex items-center gap-2.5 bg-transparent pr-12 text-label font-bold tracking-[0.2em] text-bronze-2 uppercase ">
            Discuss your book project
          </p>
          <h2
            id="modal-title"
            className="mt-0 mb-5 pr-10 font-display text-h3 leading-[1.15] font-[380] tracking-[-0.015em] text-balance [font-variation-settings:'SOFT'_50,'WONK'_0]"
          >
            Where are you with your book?
          </h2>
          <form
            method="post"
            action={site.api.contact || undefined}
            encType="multipart/form-data"
            data-site-form=""
            data-lead-form=""
            className="grid gap-3.5"
          >
            <EnquiryFields rows={3} />
          </form>
        </div>
      </div>
    </dialog>
  );
}