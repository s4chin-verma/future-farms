import Image from 'next/image';
import Link from 'next/link';
import { EnquiryForm, ServiceGallery } from '@/components';

export default function Page() {
  return (
    <main className="max-w-screen-xl mx-auto pt-10 md:pt-24 pb-10">
      <section className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-56 md:h-[750px] group overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center group-hover:opacity-60"
            sizes="(min-width: 1420px) 640px, (min-width: 780px) calc(44.19vw + 21px), calc(100vw - 48px)"
            src="/services-farm.webp"
            alt="image"
            fill
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white delay-150">
            <h1 className="text-2xl font-bold mb-2">Future farms</h1>
            <p className="mt-2">Please fill the form for any type of enquiry</p>
          </div>
        </div>
        <EnquiryForm />
      </section>

      <section>
        <h1 className="text-xl text-center font-bold my-10 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          FARMING SIMPLIFIED
        </h1>
        <ServiceGallery />
      </section>
    </main>
  );
}
