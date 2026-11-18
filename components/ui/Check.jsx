import { cx } from './cx';

/** Checkbox with a long label (consent text), for dark surfaces. */
export default function Check({ name, value = '1', className, children }) {
  return (
    <label
      className={cx(
        'flex items-start gap-3 text-[0.7rem] leading-[1.55] text-on-dark-3 [&_a]:text-on-dark-2 [&_a]:underline',
        className,
      )}
    >
      <input type="checkbox" name={name} value={value} className="mt-0.5 size-[18px] flex-none accent-bronze" />{' '}
      <span>{children}</span>
    </label>
  );
}
