import React from "react";
import Image from "next/image";
import ArrowUpRight from "../icons/ArrowUpRight";
const About = () => {
  return (
    <div className="bg-white px-[238px] pt-[200px] pb-[175px] overflow-hidden relative">
      <div className="relative bg-rvs-green h-[514px] w-full rounded-[20px] py-[57px] px-[60px] flex justify-between z-10">
        <div className="flex flex-col z-10 relative max-w-[515px]">
          <h6 className="font-medium text-white text-base leading-[44px] uppercase">
            Welcome to ravs technologies
          </h6>
          <h1 className="font-bold text-white text-[40px] leading-[56px] mt-[10px]">
            Aligning staffing solution <br /> through innovation
          </h1>
          <p className="text-white text-[18px] font-normal leading-[28px] tracking-normal mt-5">
            Whether it's finding skilled professionals or developing innovative
            software, we’re committed to delivering customized solutions that
            empower businesses to grow and succeed in a competitive market.
          </p>
          <button className="flex items-center gap-[10px] px-[30px] py-[18px] bg-white text-black rounded-[30px] font-bold text-[18px] w-fit mt-10 cursor-pointer">
            View services <ArrowUpRight color="black" />
          </button>
        </div>
        <div className="flex flex-col z-10 gap-y-[34px] mt-[-100px]">
          <Image
            src="/assets/1.png"
            width={379}
            height={174}
            alt="about"
            className="w-[379px] h-[174px]"
          />
          <Image
            src="/assets/2.png"
            width={379}
            height={174}
            alt="about"
            className="w-[379px] h-[174px]"
          />
          <Image
            src="/assets/3.png"
            width={379}
            height={174}
            alt="about"
            className="w-[379px] h-[174px]"
          />
        </div>
        <Image
          src="/assets/service-top-green.svg"
          alt="about"
          width={514}
          height={514}
          className="object-cover w-[514px] h-[514px] top-0 left-0 absolute z-0"
        />
        <Image
          src="/assets/service-top-yellow.svg"
          alt="about"
          width={514}
          height={514}
          className="object-cover w-[514px] h-[514px] top-0 right-0 absolute z-0"
        />
      </div>
      <div className="relative bg-rvs-yellow h-[514px] w-full rounded-[20px]  flex items-center z-10 mt-[189px] gap-x-[73px]">
        <Image
          src="/assets/bottom-bg.png"
          alt="about"
          width={569}
          height={514}
          className="object-cover w-[569px] h-[514px] rounded-[20px]"
        />

        <div className="flex flex-col z-10 relative w-full justify-center">
          <h6 className="font-medium text-black text-base leading-[44px] uppercase">
            CAREERS AT RAVS TECHNOLOGIES
          </h6>
          <h1 className="font-bold text-black text-[40px] leading-[56px] mt-[10px]">
            Explore your career with <br /> RAVS Technologies
          </h1>
          <p className="text-black text-[18px] font-normal leading-[28px] tracking-normal mt-5">
            Join our team of experts. <br /> Create innovative solutions.
          </p>
          <button className="flex items-center gap-[10px] px-[30px] py-[18px] bg-white text-black rounded-[30px] font-bold text-[18px] w-fit mt-10 cursor-pointer">
            Apply now <ArrowUpRight color="black" />
          </button>
        </div>
        <Image
          src="/assets/apply-right.svg"
          width={397}
          height={397}
          alt="apply-bg"
          className="absolute top-[60px] right-[60px] w-[397px] h-[397px]"
        />
      </div>
      <Image
        src="/assets/line-top-left.svg"
        alt="about"
        width={411}
        height={411}
        className="absolute top-[376px] left-0 z-0 w-[411px] h-[411px]"
      />
      <Image
        src="/assets/line-top-right.svg"
        alt="about"
        width={411}
        height={411}
        className="absolute top-[138px] right-0 z-0 w-[411px] h-[411px]"
      />
      <Image
        src="/assets/line-bottom-left.svg"
        alt="about"
        width={571}
        height={571}
        className="absolute top-[1162px] left-0 z-0 w-[571px] h-[571px]"
      />
      <Image
        src="/assets/line-bottom-right.svg"
        alt="about"
        width={571}
        height={571}
        className="absolute top-[1118px] right-0 z-0 w-[571px] h-[571px]"
      />
    </div>
  );
};

export default About;
