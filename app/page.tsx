/* eslint-disable react/no-unescaped-entities */
import { Avatar } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1 p-2 sm:p-0">
        <div className="sm:max-w-4xl">
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
              I'm a freelance and a full-stack developer based in Ho Chi Minh
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
                <span className="mr-2">
                  Graduated Program Compter Science of
                </span>
                <strong className="font-bold">Ton Duc Thang University</strong>
              </span>
            </div>
            <div>
              <span className="font-medium text-xl">2022 - 2024</span>
              <span className="ml-2">
                <span>Worked as a Full-Stack Developer at </span>
                <span className="font-bold">Aiking Investment, </span>
                <span>
                  responsible for developing features, fixing issues, and
                  maintaining Fintech applications.
                </span>
              </span>
            </div>
            <div>
              <span className="font-medium text-xl">April 2024 - Feb 2025</span>
              <span className="ml-2">
                <span>Worked as a Full-Stack Developer at </span>
                <strong className="font-bold">HDWebsoft, </strong>
                <span>
                  responsible for developing features, fixing issues, and
                  maintaining data central application .
                </span>
              </span>
            </div>
            <div>
              <span className="font-medium text-xl">2025 - Now</span>
              <span className="ml-2">
                <span>Worked as a Full-Stack Developer at </span>
                <strong className="font-bold">Military, </strong>
                <span>
                  responsible for developing features, resolving issues, and
                  maintaining digital transformation applications for paperwork
                  management and operational processes.
                </span>
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
                <span className="ml-2">Javascript, Typescript</span>
              </div>

              <div>
                <span className="text-xl font-medium">Frameworks: </span>
                <span className="ml-2">
                  ReactJS, NestJS, ExpressJS, React Native, ElectronJS
                </span>
              </div>

              <div>
                <span className="text-xl font-medium">Databases: </span>
                <span className="ml-2">
                  SQL Server, MYSQL, MongoDB, PostgresSQL, Redis
                </span>
              </div>

              <div>
                <span className="text-xl font-medium">Source Version: </span>
                <span className="ml-2">Git bash, Sourcetree</span>
              </div>

              <div>
                <span className="text-xl font-medium">Source management: </span>
                <span className="ml-2">Github, Gitlab</span>
              </div>

              <div>
                <span className="text-xl font-medium">Task management: </span>
                <span className="ml-2">Jira</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-2xl underline decoration-[#525252] decoration-4 mb-4 mt-5 font-bold">
              Contacts
            </div>
            <div>
              <span className="text-xl font-medium flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span>Email:</span>
              </span>
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
