import Image from "next/image";

import Carousel from "@/components/Carousel";
import ArrowUpRight from "@/components/icons/ArrowUpRight";

const images = [
  "/assets/hero-image.webp",
  "/assets/bottom-bg.png",
  "/assets/hero-image.webp",
];

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-white py-[90px] px-[238px] mt-[80px] md:mt-[100px] relative">
      <Image
        src="/assets/arrow-up-yellow.svg"
        alt="hero-image"
        width={45}
        height={34}
      />
      <div className="main-section flex flex-col gap-y-[30px] mt-[36px] items-center">
        <h1 className="text-black text-[60px] font-bold leading-none text-center">
          Where <span className="text-rvs-green">Technology</span> Meets
          Innovation
        </h1>
        <p className="text-black text-2xl font-normal text-center">
          Bridging the gap between Ideas and Execution. <br />
          Accelerate your growth with technology.
        </p>
        <button className="bg-rvs-green text-white px-[30px] py-[18px] rounded-[30px] flex items-center gap-[10px] text-center w-fit font-bold cursor-pointer">
          Know more <ArrowUpRight color="white" />
        </button>
      </div>
      <Carousel images={images} />
      <Image
        src="/assets/home-left-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[264px] left-[-100px] z-0 w-[571px] h-[571px]"
      />
      <Image
        src="/assets/home-right-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[353px] right-[-100px] z-0 w-[571px] h-[571px]"
      />
    </div>
  );
};

export default Hero;
