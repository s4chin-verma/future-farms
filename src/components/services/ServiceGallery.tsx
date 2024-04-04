import { ImageTemplate, ContainerFarms } from '../ui/service-utils';

export default function ServiceGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-7">
      <ImageTemplate src="/farm4.webp" />
      <ContainerFarms
        title=" Indoor Farms"
        description=" Using the Technology of Controlled Environment Agriculture. Powerful,
          smart Grow Towers built for any environment, anywhere in the world."
      />

      <ImageTemplate src="/farm2.webp" />
      <ContainerFarms
        title="Outdoor Farms"
        description=" Powerful, smart Grow Towers built for any environment, anywhere in the world."
      />

      <ContainerFarms
        title="Container Farms"
        description="  An integrated wireless plug and play automation solution. Smart Deploy
          and Grow solutions"
      />

      <ImageTemplate src="/farm3.webp" />

      <ContainerFarms
        title="Feasibility Study"
        description=" We study and asses your land to understand the practicality and
          opportunities of setting up a farm"
      />
      <ImageTemplate src="/farm4.webp" />
    </div>
  );
}
