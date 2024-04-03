import Image from 'next/image';
import { members } from '@/lib/content/members';

export default function Members() {
  return (
    <section>
      <h1 className="heading-primary">Team Members</h1>
      <h6 className="heading-secondary">
        These are our hardworking team members who have contributed to this
        project with their minds and wealth. We are thankful to them.
      </h6>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 my-20">
        {members.map((member, index) => (
          <div
            className="h-48 sm:h-56 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:w-[34rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            key={index}
          >
            <Image
              className="object-cover rounded-s-lg w-36 md:h-56 md:w-48"
              src={member.imageSrc}
              width={200}
              height={200}
              alt=""
            />
            {/* <Image
              src={member.imageSrc}
              width={144}
              height={144}
              className="rounded-s-lg sm:hidden"
              alt=""
            /> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <h4 className="text-base md:text-xl font-semibold text-gray-700 dark:text-white mb-2">
                {member.title}
              </h4>
              <p className="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
