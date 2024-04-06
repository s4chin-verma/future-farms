import Image from 'next/image';

export const ImageTemplate = ({ src }: { src: string }) => {
  return (
    <div className="w-36 h-68 md:w-72 overflow-hidden rounded-sm relative group">
      <Image
        alt={`service:${src}`}
        src={src}
        fill
        className="object-cover object-center group-hover:opacity-60"
        sizes="(min-width: 780px) 288px, 144px"
      />
    </div>
  );
};

export const ContainerFarms = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center p-6 h-68 w-38 md:w-72 relative">
      <h1 className="text-3xl font-bold text-gray-900 text-center">{title}</h1>
      <p className="text-base text-center text-gray-600 mt-4">{description}</p>
    </div>
  );
};
