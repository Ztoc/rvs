import React from "react";
import Image from "next/image";

import ServiceCarousel from "./ServiceCarousel";

const Service = () => {
  return (
    <div className="bg-rvs-green-dark px-[238px] py-[100px] flex flex-col gap-y-[110px] relative">
      <h1 className="  text-white font-semibold text-[48px] text-center">
        Our <span className="text-rvs-yellow">Expert</span> Services
      </h1>
      <ServiceCarousel />
      <Image
        src="/assets/service-left.svg"
        alt="service-bg"
        width={657}
        height={657}
        className="absolute top-[191px] left-[-50px] z-0 w-[657px] h-[657px]"
      />
      <Image
        src="/assets/service-right.svg"
        alt="service-bg"
        width={449}
        height={449}
        className="absolute top-[294px] right-[-50px] z-0 w-[449px] h-[449px]"
      />
    </div>
  );
};

export default Service;
