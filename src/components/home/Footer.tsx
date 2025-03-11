import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white px-[238px] py-[142px] relative">
      <div className="flex gap-x-[100px] justify-between py-14 px-[100px]  bg-rvs-green-dark rounded-[20px] h-[472px] mt-[450px] relative z-10">
        <div className="flex flex-col gap-y-[35px] max-w-[360px] relative z-10">
          <Image
            src="/assets/logo-light.svg"
            alt="logo"
            width={148.66}
            height={44.23}
          />
          <p className="text-white text-sm font-normal">
            Our mission is to revolutionize workforce management through
            innovative software solutions. We design cutting-edge staffing
            technology that streamlines hiring, enhances efficiency, and
            empowers businesses to build high-performing teams.
          </p>
          <p className="text-white text-sm font-normal">
            Our commitment is to deliver excellence, adaptability, and seamless
            user experiences, helping organizations thrive through smarter
            staffing solutions.
          </p>
        </div>
        <div className="flex flex-col justify-between h-full w-full relative z-10">
          <div className="flex">
            <div className="w-2/3 flex gap-x-[20px] justify-between pe-[40px]">
              <div className="flex flex-col gap-y-[19px]">
                <h6 className="text-rvs-yellow text-xl font-bold">
                  Quick Links
                </h6>
                <p className="text-white text-sm font-normal">Home</p>
                <p className="text-white text-sm font-normal">Careers</p>
              </div>
              <div className="flex flex-col gap-y-[19px]">
                <h6 className="text-rvs-yellow text-xl font-bold">Services</h6>
                <p className="text-white text-sm font-normal">
                  Software development and maintenance
                </p>
                <p className="text-white text-sm font-normal">
                  Staffing Solutions
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col gap-y-[19px] ps-[20px]">
                <h6 className="text-rvs-yellow text-xl font-bold">Offices</h6>
                <p className="text-white text-sm font-normal">
                  RAVS Technologies LLC
                </p>
                <p className="text-white text-xs font-normal">
                  5565 Stonegrove OverLook, Johns Creek, GA 30097
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2/3 flex flex-col gap-y-[13px]">
              <h6 className="text-rvs-yellow text-xl font-bold">Contact</h6>
              <div className="flex flex-col gap-y-[9px]">
                <p className="text-white text-sm font-normal">
                  connect.hr@ravstechnologies.com
                </p>
                <p className="text-white text-sm font-normal">
                  +1 (704) 458-4396
                </p>
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-y-[20px] ps-[20px]">
              <p className="text-white text-sm font-normal">Copyright © 2025</p>
              <p className="text-white text-sm font-normal">
                RAVS Technologies LLC <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/footer-bg.svg"
          alt="footer-bg"
          width={468}
          height={468}
          className="absolute top-0 left-0 w-[468px] h-[468px] z-0"
        />
      </div>
      <Image
        src="/assets/footer-left.svg"
        alt="footer-bg"
        width={835}
        height={835}
        className="absolute top-[230px] left-[-100px] w-[835px] h-[835px] z-0"
      />
      <Image
        src="/assets/footer-right.svg"
        alt="footer-bg"
        width={751}
        height={751}
        className="absolute top-[230px] right-[-100px] w-[751px] h-[751px] z-0"
      />
    </div>
  );
};

export default Footer;
