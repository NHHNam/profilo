/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1 p-2 sm:p-0">
        <div className="sm:w-[1080px]">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <h1 className="break-normal max-w-[600px] text-center text-2xl font-medium">
              NGUYEN HUNG HOAI NAM
            </h1>
            <Avatar
              src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/worcestershire-herefordshire/places/clent-hills/library/autumn/beech-tree-clent-hills-worcestershire-1591489.jpg"
              className="w-[200px] h-[200px]"
            />
          </div>
          <div>
            <div className="font-medium text-lg underline decoration-gray-300 decoration-8 mb-4 items-center">
              Works
            </div>
            <p>
              Nam is a freelance and a full-stack developer based in Ho Chi Minh
              with a passion for building digital services/stuff he wants. He
              has a knack for all things launching products, from planning and
              designing all the way to solving real-life problems with code.
            </p>
            <div className="items-center text-center mt-5">
              <Button size="sm" className="bg-[#74b5b3]">
                <Link
                  className="text-normal hover:underline text-white"
                  href="/works"
                  aria-current="page"
                >
                  My Portfolio
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="font-medium text-lg underline decoration-gray-300 decoration-8 mb-4 mt-5">
              Bio
            </div>
            <div>
              <span className="font-bold text-xl">2001</span>
              <span className="ml-2">Born in Ho Chi Minh City, Vietnam</span>
            </div>
            <div>
              <span className="font-bold text-xl">2023</span>
              <span className="ml-2">
                Graduated Program Compter Science of Ton Duc Thang University
              </span>
            </div>
          </div>

          <div>
            <div className="font-medium text-lg underline decoration-gray-300 decoration-8 mb-4 mt-5">
              I ♥
            </div>
            <div>Music, Novel, Game</div>
          </div>
        </div>
      </div>
    </>
  );
}
