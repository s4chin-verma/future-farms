'use client';

import React, { useState } from 'react';
import NavLinks from '../ui/nav-links';
import NavButton from '../ui/Nav-Button';
import Link from 'next/link';
import { useWindowWidth } from '@/lib/hooks/windowWidth';

const Navbar: React.FC = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <header className="fixed inset-x-0 top-0 right-0 bg-gray-50 border-gray-200 dark:bg-gray-900 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-6 sm:mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Future-Farms
          </span>
        </Link>
        <NavButton
          onClick={() => setNavbarCollapsed(!navbarCollapsed)}
          navbarCollapsed={navbarCollapsed}
          className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
        />
        {(navbarCollapsed || windowWidth > 768) && (
          <nav className=" w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLinks
                onClick={() => {
                  setNavbarCollapsed(false);
                }}
              />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
