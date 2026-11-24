'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';

/*
 * The contact page enquiry form.
 * It checks the fields itself, sends them to the form endpoint and, when the
 * endpoint answers { success: true }, opens /thank-you.
 * It has no data-site-form attribute, so assets/js/forms.js leaves it alone.
 */

const ENDPOINT = (site.api && site.api.contact) || '/api/contact';
const THANK_YOU = '/thank-you';

const digitsOf = (v) => String(v || '').replace(/\D/g, '');

/** Returns { fieldName: 'message' } for every field that is not right. */
function validate(form) {
  const errors = {};
  const get = (name) => String(form.elements[name]?.value || '').trim();

  if (!form.querySelector('input[name="service"]:checked')) {
    errors.service = 'Please choose at least one service.';
  }

  const name = get('name');
  if (!name) errors.name = 'Please enter your full name.';
  else if (name.length < formRules.name_min) errors.name = `Your name needs at least ${formRules.name_min} letters.`;
  else if (/\d/.test(name)) errors.name = 'Your name should not contain numbers.';

  const email = get('email');
  if (!email) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email address, like name@example.com.';

  const phone = get('phone');
  const d = digitsOf(phone).length;
  if (!phone) errors.phone = 'Please enter your phone number.';
  else if (d < formRules.phone_min_digits) errors.phone = `Your phone number needs at least ${formRules.phone_min_digits} digits.`;
  else if (d > formRules.phone_max_digits) errors.phone = `Your phone number can have at most ${formRules.phone_max_digits} digits.`;

  const message = get('message');
  if (!message) errors.message = 'Please tell us what you would like help with.';
  else if (message.length < formRules.message_min) errors.message = `Please write at least ${formRules.message_min} characters.`;

  return errors;
}

/** Small red line under a field (styled by forms.css). */
function FieldError({ id, text }) {
  if (!text) return null;
  return (
    <small className="field-error" id={id} role="alert">
      {text}
    </small>
  );
}

export default function ContactEnquiryForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: '', isErr: false });
  const [sending, setSending] = useState(false);
  const [tried, setTried] = useState(false);

  // after the first try, errors update while the visitor types
  function recheck() {
    if (tried && formRef.current) setErrors(validate(formRef.current));
  }

  // phone: only digits, spaces, +, -, ( and )
  function onPhone(e) {
    const clean = e.target.value.replace(/[^\d+\-() ]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
    recheck();
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setTried(true);

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ text: 'Please check the marked fields.', isErr: true });
      const first = Object.keys(found)[0];
      const el = first === 'service' ? form.querySelector('input[name="service"]') : form.elements[first];
      el?.focus();
      return;
    }

    setSending(true);
    setStatus({ text: 'Sending your enquiry…', isErr: false });
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      let data = {};
      try {
        data = await res.json();
      } catch {
        /* not JSON */
      }
      // the lead server answers { statusCode: 200, status: 200, message, errors: [] }
      const code = Number(data.statusCode ?? data.status ?? res.status);
      const hasErrors = Array.isArray(data.errors)
        ? data.errors.length > 0
        : data.errors && Object.keys(data.errors).length > 0;
      const sent = res.ok && (data.success === true || (code >= 200 && code < 300)) && !hasErrors;

      if (!sent) {
        // field errors come as { name: 'text' }; anything else is shown as one message
        if (data.errors && !Array.isArray(data.errors)) setErrors(data.errors);
        console.error('Enquiry form:', res.status, ENDPOINT, data);
        throw new Error(data.message || 'We could not send your enquiry. Please try again or call us.');
      }
      setStatus({ text: 'Thank you! Taking you to the next page…', isErr: false });
      form.reset();
      router.push(THANK_YOU);
    } catch (err) {
      setStatus({ text: err.message || 'We could not send your enquiry. Please try again or call us.', isErr: true });
      setSending(false);
    }
  }

  const invalid = (name) => (errors[name] ? 'true' : undefined);
  const describedBy = (name) => (errors[name] ? `ct-${name}-err` : undefined);

  return (
    <form
      ref={formRef}
      method="post"
      action={ENDPOINT}
      encType="multipart/form-data"
      noValidate
      onSubmit={onSubmit}
      onChange={recheck}
      className="ct-form ct-rv is-in"
      id="ct-form"
      data-ct-form=""
      aria-labelledby="ct-form-title"
    >
      <input type="hidden" name="form_kind" defaultValue="contact" />
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <header className="ct-form__head">
        <p className="ct-label">Your project enquiry</p>
        <h3 className="ct-form__title" id="ct-form-title">
          {'Share a little '}
          <em>about the project.</em>
        </h3>
        <p className="ct-form__sub">Tell us what you are writing, how far you have got and what you would like help with.</p>
      </header>

      <fieldset className="ct-set" aria-invalid={invalid('service')} aria-describedby={describedBy('service')}>
        <legend>
          <span className="ct-set__n">01</span>
          Which services interest you?
        </legend>
        <div className="ct-opts">
          {formRules.services.map((s) => (
            <label className="ct-opt" key={s}>
              <input type="checkbox" value={s} name="service" data-ct-service="" />
              <span>{s}</span>
            </label>
          ))}
        </div>
        <FieldError id="ct-service-err" text={errors.service} />
      </fieldset>

      <fieldset className="ct-set">
        <legend>
          <span className="ct-set__n">02</span>
          Your details
        </legend>
        <div className="ct-fields">
          <div className="ct-field">
            <label htmlFor="ct-name">
              {'Full name '}
              <abbr title="required">*</abbr>
            </label>
            <input
              id="ct-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              minLength={formRules.name_min}
              maxLength={formRules.name_max}
              aria-invalid={invalid('name')}
              aria-describedby={describedBy('name')}
              onInput={recheck}
            />
            <FieldError id="ct-name-err" text={errors.name} />
          </div>

          <div className="ct-field">
            <label htmlFor="ct-email">
              {'Email address '}
              <abbr title="required">*</abbr>
            </label>
            <input
              id="ct-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={formRules.email_max}
              aria-invalid={invalid('email')}
              aria-describedby={describedBy('email')}
              onInput={recheck}
            />
            <FieldError id="ct-email-err" text={errors.email} />
          </div>

          <div className="ct-field ct-field--full">
            <label htmlFor="ct-phone">
              {'Phone number '}
              <abbr title="required">*</abbr>
            </label>
            <input
              id="ct-phone"
              type="tel"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              required
              maxLength={20}
              aria-invalid={invalid('phone')}
              aria-describedby={describedBy('phone')}
              onInput={onPhone}
            />
            <FieldError id="ct-phone-err" text={errors.phone} />
          </div>

          <div className="ct-field ct-field--full">
            <label htmlFor="ct-note">
              {'What would you like help with? '}
              <abbr title="required">*</abbr>
            </label>
            <textarea
              required
              minLength={formRules.message_min}
              maxLength={formRules.message_max}
              name="message"
              id="ct-note"
              rows="5"
              data-ct-note=""
              placeholder="Tell us the subject, your progress and the support you are looking for."
              aria-invalid={invalid('message')}
              aria-describedby={describedBy('message')}
              onInput={recheck}
            />
            <FieldError id="ct-message-err" text={errors.message} />
          </div>
        </div>
      </fieldset>

      <div className="ct-form__foot">
        <button className="btn btn--primary ct-submit" type="submit" disabled={sending} aria-busy={sending || undefined}>
          {sending ? 'Sending… ' : 'Send Your Enquiry '}
          <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
            <use href="#i-arrow" />
          </svg>
        </button>
        <p className={`form-status ct-status${status.text ? (status.isErr ? ' is-err' : ' is-ok') : ''}`} role="status">
          {status.text}
        </p>
      </div>
    </form>
  );
}