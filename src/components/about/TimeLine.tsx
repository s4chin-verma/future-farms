import { timeLines } from '@/lib/content/timeline';

export default function TimeLine() {
  return (
    <>
      <h1 className="heading-primary">Time Line</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timeLines.map((timeline, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {timeline.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {timeline.headline}
            </h3>
            <p className="mb-4 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
              {timeline.content}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
