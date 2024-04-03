import Image from 'next/image';

export default function ServiceGallery() {
  return (
    <div className="grid grid-cols-4 gap-7">
      <Image
        className=""
        src="/farm1.webp"
        height={300}
        width={300}
        objectFit="cover"
        alt="blur"
      />
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Indoor Farms
        </h1>
        <p className="text-base text-center text-gray-600 mt-4">
          Using the Technology of Controlled Environment Agriculture. Powerful,
          smart Grow Towers built for any environment, anywhere in the world.
        </p>
      </div>

      <Image
        className="w-23"
        src="/farm2.webp"
        height={300}
        width={300}
        alt="blur"
        objectFit="cover"
      />
      <div className="flex flex-col justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Container Farms
        </h1>
        <p className="text-base text-center text-gray-600 mt-4">
          An integrated wireless plug and play automation solution. Smart Deploy
          and Grow solutions
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Indoor Farms
        </h1>
        <p className="text-base text-center text-gray-600 mt-4">
          Using the Technology of Controlled Environment Agriculture. Powerful,
          smart Grow Towers built for any environment, anywhere in the world.
        </p>
      </div>
      <Image
        className=""
        src="/farm3.webp"
        height={350}
        width={350}
        alt="blur"
      />
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Feasibility Study
        </h1>
        <p className="text-base text-center text-gray-600 mt-4">
          We study and asses your land to understand the practicality and
          opportunities of setting up a farm
        </p>
      </div>
      <Image
        className=""
        src="/farm4.webp"
        height={300}
        width={300}
        alt="blur"
      />
    </div>
  );
}
