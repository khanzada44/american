/**
 * Hidden fields every enquiry form needs.
 * The CSRF token is filled in by assets/js/forms.js from site.api.csrf
 * (lib/site.js) just before the form is sent, when that endpoint is set.
 * The "website" field is a honeypot: people never see it, bots fill it in.
 */
export default function FormSecurity({ kind = 'enquiry' }) {
  return (
    <>
      <input type="hidden" name="csrf_token" defaultValue="" />{' '}
      <input type="hidden" name="form_kind" defaultValue={kind} />{' '}
      <div className="!absolute size-px overflow-hidden [clip-path:inset(50%)] whitespace-nowrap" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
    </>
  );
}
