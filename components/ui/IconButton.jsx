import { cx } from './cx';

/** Round glass icon button for dark surfaces (close buttons, social icons). */
export const iconButtonClass =
  'inline-grid place-items-center rounded-full border border-white/14 bg-white/[0.07] text-on-dark-1 ' +
  'backdrop-blur-[12px] backdrop-saturate-[1.4] transition-[background-color,border-color,translate,color] duration-[280ms] ease-site ' +
  'focus-visible:rounded-full hover:border-white/34 hover:bg-white/16 disabled:pointer-events-none disabled:opacity-35 [&_svg]:size-[17px]';

/** size: a Tailwind size class (default 44px). */
export default function IconButton({ icon, label, size = 'size-11', className, ...props }) {
  return (
    <button type="button" aria-label={label} className={cx(iconButtonClass, size, className)} {...props}>
      <svg aria-hidden="true">
        <use href={icon} />
      </svg>
    </button>
  );
}
