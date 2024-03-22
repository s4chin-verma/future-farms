'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(link => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                {
                  'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500':
                    pathname == link.href,
                }
              )}
              aria-current="page"
            >
              <p>{link.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
}
