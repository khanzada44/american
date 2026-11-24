'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';
import ConsentText from '@/components/forms/ConsentText';
import FormSecurity from '@/components/forms/FormSecurity';

/*
 * The dark enquiry form (home page, under the FAQ).
 * It checks the fields itself, sends them to the form endpoint and, when the
 * endpoint answers { success: true }, opens /thank-you.
 * It has no data-site-form attribute, so assets/js/forms.js leaves it alone.
 */

const ENDPOINT = (site.api && site.api.contact) || '/api/contact';
const THANK_YOU = '/thank-you';

/* Dark glass form controls */
const control =
  'peer w-full rounded-[14px] border border-white/14 bg-white/[0.05] px-4 pt-[22px] pb-2 text-[0.95rem] text-white outline-none ' +
  'transition-[border-color,background-color,box-shadow] duration-300 ' +
  'hover:border-white/25 focus:border-[#c9a56a]/70 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgb(201_165_106/0.16)] ' +
  'focus-visible:rounded-[14px] focus-visible:outline-none aria-[invalid=true]:border-[#ff8f80]/60';

const floating =
  'pointer-events-none absolute top-[17px] left-[17px] text-[0.9rem] text-white/45 transition-[top,font-size,color] duration-300 ease-site ' +
  'peer-focus:top-[7px] peer-focus:text-[0.64rem] peer-focus:tracking-[0.1em] peer-focus:text-[#c9a56a] peer-focus:uppercase ' +
  'peer-[:not(:placeholder-shown)]:top-[7px] peer-[:not(:placeholder-shown)]:text-[0.64rem] peer-[:not(:placeholder-shown)]:tracking-[0.1em] ' +
  'peer-[:not(:placeholder-shown)]:text-[#c9a56a] peer-[:not(:placeholder-shown)]:uppercase';

const errorText = 'mt-1.5 block text-[0.78rem] leading-[1.4] text-[#ffb4a8]';

const digitsOf = (v) => String(v || '').replace(/\D/g, '');

/** Returns { fieldName: 'message' } for every field that is not right. */
function validate(form) {
  const errors = {};
  const get = (name) => String(form.elements[name]?.value || '').trim();

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
  if (!message) errors.message = 'Please tell us where you are with your book.';
  else if (message.length < formRules.message_min) errors.message = `Please write at least ${formRules.message_min} characters.`;

  return errors;
}

/** Text field with a floating label and its error line. */
function Field({ label, error, multiline = false, full = false, ...props }) {
  const Control = multiline ? 'textarea' : 'input';
  const errId = error ? `${props.name}-err` : undefined;
  return (
    <label className={`relative block ${full ? 'col-span-full' : ''}`}>
      <Control
        placeholder=" "
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={errId}
        className={`${control} ${multiline ? 'min-h-32 resize-y' : 'min-h-[54px]'}`}
        {...props}
      />
      <span className={floating}>{label}</span>
      {error ? (
        <small id={errId} role="alert" className={errorText}>
          {error}
        </small>
      ) : null}
    </label>
  );
}

export default function EnquiryForm() {
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
      form.elements[Object.keys(found)[0]]?.focus();
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

  return (
    <form
      ref={formRef}
      method="post"
      action={ENDPOINT}
      encType="multipart/form-data"
      noValidate
      onSubmit={onSubmit}
      onChange={recheck}
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
          error={errors.name}
          onInput={recheck}
        />
        <Field
          label="Email address *"
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength={formRules.email_max}
          error={errors.email}
          onInput={recheck}
        />
        <Field
          label="Phone number *"
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={20}
          error={errors.phone}
          onInput={onPhone}
        />

        <label className="relative block">
          <select
            name="service"
            defaultValue=""
            className={`${control} min-h-[54px] cursor-pointer appearance-none pr-10 [&_option]:bg-[#21213c] [&_option]:text-white`}
          >
            <option value="">Not sure yet</option>
            {formRules.services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute top-[7px] left-[17px] text-[0.64rem] tracking-[0.1em] text-[#c9a56a] uppercase">
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
          error={errors.message}
          onInput={recheck}
        />
      </div>

      <label className="flex items-start gap-3 text-[0.7rem] leading-[1.55] text-white/45 [&_a]:text-white/75 [&_a]:underline">
        <input type="checkbox" name="marketing_consent" value="1" className="mt-0.5 size-[18px] flex-none accent-[#a3804a]" />
        <span>
          <ConsentText />
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-[52px] cursor-pointer items-center gap-3 rounded-full border-0 bg-[#c9a56a] px-7 text-[0.9rem] font-bold text-[#21213c] shadow-[0_14px_30px_-14px_rgb(201_165_106/0.7)] transition-colors duration-300 hover:bg-[#f4ece0] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a56a] disabled:cursor-wait disabled:opacity-60 max-[520px]:w-full max-[520px]:justify-center"
        >
          {sending ? 'Sending…' : 'Send Your Enquiry'}
        </button>
        <p
          role="status"
          className={`m-0 min-h-[1.4em] text-[0.85rem] ${status.isErr ? 'text-[#ffb4a8]' : status.text ? 'text-[#a9d6b0]' : 'text-white/70'}`}
        >
          {status.text}
        </p>
      </div>

      <p className="m-0 text-[0.72rem] text-white/40">
        By sending, you agree to our{' '}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}