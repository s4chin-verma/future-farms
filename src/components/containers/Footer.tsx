'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { QuickLinks, Project, socialServices } from '@/lib/content/footer';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 max-w-screen-xl mx-auto">
      <div className="container py-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-green-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {QuickLinks.map(link => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Project
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {Project.map(link => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex items-center gap-3">
            <Icon icon={'twemoji:four-leaf-clover'} height={25} width={25} />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              Future Farms
            </span>
          </Link>

          <div className="flex -mx-2">
            {socialServices.map(social => (
              <Link
                href={social.href}
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                key={social.icon}
              >
                <Icon icon={social.icon} height={25} width={25} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
