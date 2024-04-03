import Image from 'next/image';
import Link from 'next/link';
import { EnquiryForm, ServiceGallery } from '@/components';

export default function Page() {
  return (
    <main className="max-w-screen-xl mx-auto pt-24 pb-10">
      <section className="flex">
        <div className="relative w-1/2 h-[750px]">
          <Image
            className="w-full h-full object-cover"
            src="/services-farm.webp"
            height={400}
            width={400}
            alt="image"
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
