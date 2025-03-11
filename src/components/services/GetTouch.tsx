"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ArrowUpRight from "../icons/ArrowUpRight";

const GetTouch = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (response: string | null) => {
    console.log(response);
  };
  return (
    <div className="bg-rvs-green-dark-light px-[238px] py-[156px] relative flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-center relative overflow-hidden rounded-b-[30px] z-10">
        <Image
          src="/assets/hero-image.webp"
          alt="get-touch"
          width={1000}
          height={1000}
          className={`object-cover w-full h-[50vh] md:h-[34vw] rounded-[20px] md:rounded-[40px] transition-transform duration-500 ease-in-out rounded-b-[30px]`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/80 pointer-events-none rounded-bottom-[40px] h-[500px] z-0"></div>
        <p className="text-rvs-yellow text-[160px] font-extrabold absolute top-[20%]">
          Get in touch
        </p>
        <Image
          src="/assets/green-polygon-top.svg"
          alt="carousel-image"
          width={158}
          height={158}
          className="absolute top-0 right-0 w-[80px] h-[80px] md:w-[158px] md:h-[158px]"
        />
        <Image
          src="/assets/green-polygon-bottom.svg"
          alt="carousel-image"
          width={158}
          height={158}
          className="absolute top-0 left-0 w-[80px] h-[80px] md:w-[158px] md:h-[158px] z-10 transform scale-x-[-1] rotate-180"
        />
      </div>

      <div className="flex flex-col rounded-[20px] max-w-[860px] py-[76px] px-[156px] bg-white absolute top-[530px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.1)] z-50">
        <h1 className="text-black text-[48px] font-bold leading-none">
          Request <span className="text-rvs-green">Consultation</span>
        </h1>
        <div className="form mt-[60px]">
          <form action="" className="flex flex-col gap-y-[30px]">
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Add your name"
                className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Add your email address"
                className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Add your contact number"
                className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                What are you looking for?
              </label>
              <input
                type="text"
                id="looking-for"
                placeholder="Select any service"
                className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
              />
            </div>
            <div className="flex justify-center mt-[23px]">
              <div className=" scale-75 transform origin-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfC1vAqAAAAACO00Ad4MVD2Jbx5lOngUUObpD7t"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-rvs-yellow text-black py-[18px] px-[58px] rounded-[30px]  flex justify-center items-center gap-x-[10px] text-[18px] leading-none font-bold cursor-pointer"
              >
                Submit request
                <ArrowUpRight color="black" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Image
        src="/assets/get-in-touch-left.svg"
        width="805"
        height="805"
        alt="get-in-touch-left"
        className="absolute top-[65px] left-[-300px] w-[805px] h-[805px] z-0"
      />
      <Image
        src="/assets/get-in-touch-right.svg"
        width="805"
        height="805"
        alt="get-in-touch-right"
        className="absolute top-[49px] right-[-200px] w-[805px] h-[805px] z-0"
      />
    </div>
  );
};

export default GetTouch;
