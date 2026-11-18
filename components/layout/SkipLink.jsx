import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main"
      className="fixed -top-[60px] left-4 z-1000 rounded-sm bg-ink px-4 py-2.5 text-ivory transition-[top] duration-[280ms] focus:top-4"
    >
      Skip to content
    </Link>
  );
}
