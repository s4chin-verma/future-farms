import Image from 'next/image';

export default function Page() {
  // Define an array of image links
  const imageLinks = [
    '/gal1.jpeg',
    '/gal2.jpeg',
    '/gal3.jpeg',
    '/gal4.jpeg',
    '/gal5.jpeg',
    '/gal6.jpeg',
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12">
      <h1 className="heading-primary">Image Gallery</h1>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-8 justify-center">
        {imageLinks.map((link, index) => (
          <div
            key={index}
            className="h-64 w-[21.5rem] sm:h-80 sm:w-[25.5rem] overflow-hidden rounded-lg relative group"
          >
            <Image
              alt={`gallery-${index}`}
              src={link}
              fill
              className="object-cover object-center group-hover:opacity-60"
              sizes="(min-width: 640px) 408px, 344px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
