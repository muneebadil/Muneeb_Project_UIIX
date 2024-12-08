import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="w-full h-[711px] relative bg-[#23856D]">
      {/* Content Area */}
      <div className="flex items-center justify-between w-full h-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-[35px] px-6 lg:px-16 z-10 max-w-[700px]">
          <h5 className="font-Montserrat font-semibold text-[16px] leading-[24px] text-white">
            SUMMER 2020
          </h5>
          <h1 className="font-Montserrat font-semibold text-[58px] leading-[80px] text-white">
            NEW COLLECTION
          </h1>
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white max-w-[500px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="w-[221px] h-[62px] rounded-[5px] px-[40px] py-[15px] bg-[#2DC071] text-white text-[24px] font-Montserrat leading-[32px] justify-center">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-[443px] h-[685px]">
          <Image
            src="/herosec.png" // Ensure this path is correct in your public folder
            alt="hero image"
            layout="fill"
            objectFit="cover"
            className="rounded-[15px]"
          />
        </div>
      </div>
    </div>
  );
}
