import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

/** Book quick view, filled in by main2f72.js when a book card is clicked. */
export default function BookModal() {
  return (
    <dialog className="modal modal--book" id="book-modal" data-book-modal="" aria-labelledby="bm-title">
      {/* Card: shape, glass and corners. It never scrolls, so the corners are never cut. */}
      <div className="glass on-dark relative flex max-h-[calc(100dvh-24px)] flex-col overflow-hidden rounded-xl bg-[rgb(22_24_29/0.86)]">
        <button
          className="modal__close icon-btn absolute top-3.5 right-3.5 z-2"
          type="button"
          aria-label="Close"
          data-close-modal=""
        >
          <svg aria-hidden="true">
            <use href="#i-close" />
          </svg>
        </button>

        {/* Scroll area: only this part scrolls, with a thin dark scrollbar inside the card. */}
        <div
          data-tilt-zone=""
          className="grid min-h-0 flex-1 items-center gap-[clamp(24px,4vw,48px)] overflow-x-hidden overflow-y-auto overscroll-contain p-[clamp(22px,4vw,40px)] [scrollbar-color:rgb(255_255_255/0.18)_transparent] [scrollbar-width:thin] min-[721px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/35 [&::-webkit-scrollbar-track]:my-5 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          <div className="bm__stage">
            <div className="book3d is-mockup bm__book" data-tilt="">
              <div className="book3d__body">
                <div className="book3d__back" />{' '}
                <Image
                  loading="eager"
                  className="book3d__cover"
                  data-bm-cover=""
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="699"
                  height="1024"
                  alt=""
                />
              </div>
              <div className="book3d__shadow" />
            </div>
          </div>

          <div className="bm__info pr-0 min-[721px]:pr-6">
            <span className="chip chip--gold">{`Published with ${site.name}`}</span>{' '}
            <h2 className="bm__title" id="bm-title" data-bm-title="" />
            <p className="bm__sub" data-bm-sub="" />
            <p className="bm__author">
              {'by '}
              <span data-bm-author="" />
            </p>
            <p className="bm__note bg-transparent">
              Working on a book of your own? Ask us about writing, editing, cover design and the steps towards
              publication.
            </p>
            <div className="bm__ctas">
              <button className="btn btn--primary" type="button" data-open-lead="">
                {'Discuss Your Book '}
                <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </button>{' '}
              <Link className="btn btn--glass" href="/book-publishing">
                Book Publishing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}