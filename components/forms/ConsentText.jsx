import Link from 'next/link';
import { site } from '@/lib/site';

/** SMS marketing consent text used by every enquiry form. */
export default function ConsentText() {
  return (
    <>
      {`I agree to receive marketing text messages about book services from ${site.name} at the number I provide, including automated messages. This choice is optional and is not required to purchase a service. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. `}
      <Link href="/privacy-policy">Privacy Policy</Link>
      {' & '}
      <Link href="/terms-and-conditions">{'Terms & Conditions'}</Link>.
    </>
  );
}
