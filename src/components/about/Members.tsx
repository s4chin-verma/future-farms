import Image from 'next/image';
import { members } from '@/lib/content/members';
export default function Members() {
  return (
    <>
      <h1 className="text-3xl font-bold my-10 text-center">Team Members</h1>
      <div className="">
        {members.map((member, index) => (
          <div
            className="h-56 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            key={index}
          >
            <Image
              className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={member.imageSrc}
              width={200}
              height={200}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
