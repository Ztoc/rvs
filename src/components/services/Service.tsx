import React from "react";
import Image from "next/image";

import ITStaffing from "../icons/ITStaffing";

const Service = () => {
  return (
    <div className="bg-rvs-green-dark px-[238px] py-[120px] flex flex-col relative">
      <h1 className="  text-white font-semibold text-[48px] text-center leading-12">
        <span className="text-rvs-green">Staffing</span> Solutions services
      </h1>
      <p className="text-white text-center text-[18px] leading-[27px] font-normal mt-7">
        With our multi-domain expertise, we deliver high-quality staffing
        solutions <br /> across a wide range of industries and sectors.
      </p>
      <div className="mt-[60px] grid grid-cols-2 gap-x-[20px] gap-y-[20px] relative z-10">
        <div className="card bg-rvs-blue-light rounded-[20px] p-[20px] w-[480px] h-[360px] flex flex-col justify-between">
          <ITStaffing />
          <div className="flex flex-col gap-y-5">
            <h3 className="text-white text-[30px] leading-[100%]">
              IT Staffing
            </h3>
            <p className="text-white font-18">
              IT staffing offers numerous benefits <br /> to businesses by
              enabling companies to scale <br /> their workforce based on
              project demands, <br />
              reducing overhead costs associated with <br /> full-time hires.
            </p>
          </div>
        </div>
      </div>
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
