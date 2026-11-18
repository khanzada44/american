import { cx } from './cx';

const control =
  'peer w-full rounded-[14px] border border-white/14 bg-white/6 px-4 pt-[22px] pb-2 text-[0.95rem] text-on-dark-1 outline-none ' +
  'transition-[border-color,background-color,box-shadow] duration-[280ms] ' +
  'focus:border-bronze-2/70 focus:bg-white/9 focus:shadow-[0_0_0_4px_rgb(176_141_87/0.12)] focus-visible:rounded-[14px] focus-visible:outline-none';

const floating =
  'pointer-events-none absolute top-[17px] left-[17px] text-[0.9rem] text-on-dark-3 transition-[top,font-size,color] duration-[280ms] ease-site ' +
  'peer-focus:top-[7px] peer-focus:text-[0.66rem] peer-focus:tracking-[0.1em] peer-focus:text-bronze-2 peer-focus:uppercase ' +
  'peer-[:not(:placeholder-shown)]:top-[7px] peer-[:not(:placeholder-shown)]:text-[0.66rem] peer-[:not(:placeholder-shown)]:tracking-[0.1em] ' +
  'peer-[:not(:placeholder-shown)]:text-bronze-2 peer-[:not(:placeholder-shown)]:uppercase';

/* forms.js adds <small class="field-error"> inside the label when a value is invalid */
const errorSlot =
  '[&_.field-error]:mt-1.5 [&_.field-error]:block [&_.field-error]:text-[0.8rem] [&_.field-error]:leading-[1.4] [&_.field-error]:text-[#ffb4a8]';

/**
 * Text input or textarea with a floating label, for dark surfaces.
 * Keeps name/required/minLength etc. so assets/js/forms.js validates it;
 * data-field tells forms.js where to put the error message.
 */
export default function Field({ label, multiline = false, full = false, className, ...props }) {
  const Control = multiline ? 'textarea' : 'input';
  return (
    <label data-field="" className={cx('relative block', full && 'col-span-full', errorSlot, className)}>
      <Control
        placeholder=" "
        className={cx(control, multiline ? 'min-h-28 resize-y' : 'min-h-[54px]')}
        {...props}
      />
      <span className={floating}>{label}</span>
    </label>
  );
}
