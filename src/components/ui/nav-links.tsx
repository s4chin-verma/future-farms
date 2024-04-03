'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

interface NavLinksProps {
  onClick: (event: React.MouseEvent) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();
  return (
    <>
      {links.map(link => (
        <li key={link.name} onClick={onClick}>
          <Link
            href={link.href}
            className={clsx(
              'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent capitalize',
              {
                'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500':
                  pathname === link.href,
              }
            )}
            aria-current="page"
          >
            <p>{link.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
