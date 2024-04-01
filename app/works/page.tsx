'use client';
import { Image } from '@nextui-org/react';
import React, { use } from 'react';
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
                  Shopcoin
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
                alt="Shopcoin"
              />
              <div className="text-center mt-3">
                <div className={`text-[23px] p-2 rounded-lg font-bold`}>
                  Fund
                </div>
                <div className="text-center">A Fund App</div>
              </div>
            </Link>
          </div>
          <div className="font-black text-lg">Old Works</div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
