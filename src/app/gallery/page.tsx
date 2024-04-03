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
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
  ];

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-col md:flex-row md:flex-wrap md:-m-2">
        {imageLinks.map((link, index) => (
          <div key={index} className="flex md:w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt={`gallery-${index}`}
                src={link}
                width={500}
                height={500}
                className="block rounded-lg object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
