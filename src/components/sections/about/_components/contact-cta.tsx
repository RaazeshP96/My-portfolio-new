'use client';

import Link from 'next/link';
import { smoothScrollTo } from '@/lib/utils';

export default function ContactCta() {
  return (
    <Link
      href={'contact'}
      onClick={(e) => {
        smoothScrollTo({ e, id: 'contact' });
      }}
      className="w-52 lg:w-40"
      aria-label="contact me"
    >
      <span className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case">
        Contact me!
      </span>
    </Link>
  );
}


