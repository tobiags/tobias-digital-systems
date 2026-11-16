import { permanentRedirect } from 'next/navigation';

export default function V2RedirectPage() {
  permanentRedirect('/');
}
