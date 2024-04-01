/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Image } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1 p-2 sm:p-0">
        <div className="sm:w-[600px]">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <div>
              <h1 className="break-normal max-w-[600px] text-center text-3xl font-black">
                NGUYEN HUNG HOAI NAM
              </h1>
              <h5 className="break-normal max-w-[600px] text-center font-black">
                ( FULLSTACK DEVELOPER )
              </h5>
            </div>
            <Avatar src="/avatar.jpg" className="w-[200px] h-[200px]" />
          </div>
          <div>
            <div className="font-bold text-2xl underline decoration-[#525252] decoration-4 mb-4 items-center">
              Works
            </div>
            <p>
              Nam is a freelance and a full-stack developer based in Ho Chi Minh
              with a passion for building digital services/stuff he wants. He
              has a knack for all things launching products, from planning and
              designing all the way to solving real-life problems with code.
            </p>
          </div>
          <div>
            <div className="text-2xl underline decoration-[#525252] decoration-4 mb-4 mt-5 font-bold">
              Bio
            </div>
            <div>
              <span className="text-xl font-medium">2001</span>
              <span className="ml-2">Born in Ho Chi Minh City, Vietnam</span>
            </div>
            <div>
              <span className="font-medium text-xl">2023</span>
              <span className="ml-2">
                Graduated Program Compter Science of Ton Duc Thang University
              </span>
            </div>
          </div>

          <div>
            <div className="font-bold text-2xl underline decoration-[#525252] decoration-4 mb-4 mt-5">
              <div className="">Programming</div>
            </div>
            <div>
              <div>
                <span className="text-xl font-medium">Languages: </span>
                <span className="ml-2">C#, Javascript, Typescript</span>
              </div>

              <div>
                <span className="text-xl font-medium">Frameworks: </span>
                <span className="ml-2">
                  ReactJS, NestJS, ExpressJS, ASP.NET Api Core
                </span>
              </div>

              <div>
                <span className="text-xl font-medium">Databases: </span>
                <span className="ml-2">SQL Server, MYSQL, MongoDB</span>
              </div>

              <div>
                <span className="text-xl font-medium">Source Version: </span>
                <span className="ml-2">Git bash</span>
              </div>

              <div>
                <span className="text-xl font-medium">Source management: </span>
                <span className="ml-2">Github</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-2xl underline decoration-[#525252] decoration-4 mb-4 mt-5 font-bold">
              Contacts
            </div>
            <div>
              <span className="text-xl font-medium">Mobile phone: </span>
              <span className="ml-2">0773762943</span>
            </div>
            <div>
              <span className="text-xl font-medium">Email: </span>
              <span className="ml-2">nguyenhunghoainam.dev@gmail.com</span>
            </div>
          </div>

          <div>
            <div className="font-bold text-2xl underline decoration-[#525252] decoration-4 mb-4 mt-5">
              I ♥
            </div>
            <div>Music, Novel, Game</div>
          </div>
        </div>
      </div>
    </>
  );
}
