import Image from 'next/image';
import { members } from '@/lib/content/members';
import { montserrat } from '@/lib/fonts';

export default function Members() {
  return (
    <section className={''}>
      <h1 className="heading-primary">Team Members</h1>
      <h6 className="heading-secondary">
        These are our hardworking team members who have contributed to this
        project with their minds and wealth. We are thankful to them.
      </h6>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 my-10 sm:my-20">
        {members.map((member, index) => (
          <div
            className="h-48 sm:h-56 flex flex-row items-start bg-white border border-gray-200 rounded-lg shadow md:w-[36rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            key={index}
          >
            <div className="h-48 sm:h-56 w-56 sm:w-48 rounded-s-lg relative overflow-hidden">
              <Image
                className="object-cover w-36"
                src={member.imageSrc}
                fill
                sizes="(min-width: 640px) 192px, calc(40.31vw - 26px)"
                alt="members_images.jpeg"
              />
            </div>

            <div className="w-[20rem] sm:w-[24rem] flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <h4 className="text-sm md:text-lg font-medium text-gray-700 dark:text-white mb-2">
                {member.title}
              </h4>
              <p className="text-xs md:text-base mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
