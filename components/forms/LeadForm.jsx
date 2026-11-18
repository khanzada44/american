import { site } from '@/lib/site';
import EnquiryFields from './EnquiryFields';

/** The "Share your book plans" enquiry form shown inside pages. */
export default function LeadForm({ id, title = 'Share your book plans', rows = 4, messageLabel }) {
  return (
    <form
      method="post"
      action={site.api.contact || undefined}
      encType="multipart/form-data"
      data-site-form=""
      data-lead-form=""
      data-reveal="scale"
      style={{ '--d': '.1s' }}
      id={id}
      aria-labelledby="form-title"
      className="glass-dark grid gap-4 rounded-xl bg-[rgb(28_30_36/0.55)] p-[clamp(24px,3.4vw,40px)] text-on-dark-1"
    >
      <h3
        id="form-title"
        className="m-0 font-display text-[1.6rem] leading-[1.15] font-[380] tracking-[-0.018em]"
      >
        {title}
      </h3>
      <p className="-mt-1.5 mb-1 text-[0.9rem] text-on-dark-2">
        Describe your book, draft or publishing plans. We will review your message and get in touch.
      </p>
      <EnquiryFields rows={rows} messageLabel={messageLabel} />
    </form>
  );
}
