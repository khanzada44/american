import { formRules } from '@/lib/forms';
import Field from '@/components/ui/Field';
import Check from '@/components/ui/Check';
import Button, { ButtonArrow } from '@/components/ui/Button';
import ConsentText from './ConsentText';
import FormSecurity from './FormSecurity';

/** forms.js writes messages here and adds .is-ok / .is-err */
const statusClass = 'm-0 min-h-[1.4em] text-[0.88rem] [&_a]:underline [&.is-err]:text-[#f0b0a8] [&.is-ok]:text-[#a9d6b0]';

/** The fields shared by the lead modal and the page enquiry form. */
export default function EnquiryFields({ rows = 3, messageLabel = 'What would you like help with?' }) {
  return (
    <>
      <FormSecurity />
      <div className="grid grid-cols-2 gap-2.5 max-[520px]:grid-cols-1">
        <Field
          label="Full name *"
          type="text"
          name="name"
          autoComplete="name"
          required
          minLength={formRules.name_min}
          maxLength={formRules.name_max}
        />{' '}
        <Field
          label="Email address *"
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength={formRules.email_max}
        />{' '}
        <Field label="Phone number *" full type="tel" name="phone" autoComplete="tel" required maxLength="40" />{' '}
        <Field
          label={`${messageLabel} *`}
          full
          multiline
          name="message"
          rows={rows}
          required
          minLength={formRules.message_min}
          maxLength={formRules.message_max}
        />
      </div>{' '}
      <Check name="marketing_consent">
        <ConsentText />
      </Check>{' '}
      <div className="flex flex-wrap items-center gap-[18px]">
        <Button variant="light" type="submit" className="max-[520px]:w-full">
          {'Send Your Enquiry '}
          <ButtonArrow />
        </Button>{' '}
        <p className={statusClass} role="status" data-form-status="" />
      </div>
    </>
  );
}
