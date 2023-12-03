import { Image } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1">
        <div className="flex justify-center items-center">
          <h1 className="break-normal max-w-[600px] text-center text-2xl font-medium">
            Hello. My name is NGUYEN HUNG HOAI NAM. I am a Fullstack Deveoper
            with one year exprerience.
          </h1>
          <Image
            width={500}
            height={500}
            src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/worcestershire-herefordshire/places/clent-hills/library/autumn/beech-tree-clent-hills-worcestershire-1591489.jpg"
            alt="Avatar"
          />
        </div>
        <div>
          This is my blog. I will share my knowledge and experience here.
        </div>
      </div>
    </>
  );
}
