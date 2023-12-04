import { Image } from '@nextui-org/react';
import React, { use } from 'react';

const WorksPage = async () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-x-1 p-2 sm:p-0">
        <div className="sm:w-[800px]">
          <div>
            <div className="font-black text-lg">Works</div>
            <Image
              width={'full'}
              height={'full'}
              src="/shopcoin.png"
              alt="Shopcoin"
            />

            <div className="font-black text-lg text-center">Shopcoin</div>
            <div className="text-center">A Trading Coin App</div>
          </div>
          <div className="font-black text-lg">Old Works</div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
