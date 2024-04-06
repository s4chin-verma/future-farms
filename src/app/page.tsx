import { Carousal } from '@/components';
import Gallery from '@/app/gallery/page';
import Service from '@/app/services/page';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto pt-16">
      {/* <Carousal /> */}
      <Service />
      <Gallery />
    </main>
  );
}
