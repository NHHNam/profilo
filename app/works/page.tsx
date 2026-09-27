'use client';
import { Image } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';

const WorksPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1 p-2 sm:p-0">
        <div className="sm:w-[800px]">
          <div>
            <div className="font-black text-lg">Works</div>
            <Link
              className="mt-3"
              href="https://shopcoinusa.com/"
              target="_blank"
              aria-current="page"
            >
              <Image
                width={'full'}
                height={'full'}
                src="/shopcoin.png"
                alt="Shopcoin"
              />
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  1. Shopcoin
                </div>
                <div className="text-center">A Trading Coin App</div>
              </div>
            </Link>

            <Link
              href="https://aiking.com.vn/services/fund/home"
              target="_blank"
              aria-current="page"
              className="mt-3"
            >
              <Image
                width={'full'}
                height={'full'}
                src="/fund.png"
                alt="Fund"
              />
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  2. Fund
                </div>
                <div className="text-center">A Fund App</div>
              </div>
            </Link>

            <div className="mt-3">
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  3. Data Central
                </div>
                <div className="text-center">
                  The platform collects Amazon orders and
                  distributes/synchronizes the data to other systems
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  4. Information portal
                </div>
                <div className="text-center">Military information portal</div>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  5. Flight Plans
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
