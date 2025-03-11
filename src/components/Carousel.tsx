"use client";

import React, { useState } from "react";
import Image from "next/image";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

interface CarouselProps {
  images: string[];
  alt?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  alt = "Carousel image",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"right" | "left" | null>(
    null
  );

  const goToPrevious = () => {
    setSlideDirection("left");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setSlideDirection("right");
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full mt-[30px] md:mt-[60px] gap-4 md:gap-10 z-10">
      <button
        className=" absolute bg-rvs-yellow text-black w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full cursor-pointer p-[12px] md:p-[18px] left-[-100px]"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>

      <div className="w-full flex items-center justify-center relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className={`object-cover w-full h-[50vh] md:h-[34vw] rounded-[20px] md:rounded-[40px] transition-transform duration-500 ease-in-out
            ${slideDirection === "right" ? "animate-slide-in-right" : ""}
            ${slideDirection === "left" ? "animate-slide-in-left" : ""}
          `}
          onAnimationEnd={() => setSlideDirection(null)}
        />
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
          className="absolute bottom-0 left-0 w-[80px] h-[80px] md:w-[158px] md:h-[158px] z-10"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/80 pointer-events-none rounded-bottom-[40px] h-[500px] z-0"></div>
        <div className="absolute top-[10%] md:top-[30%] items-center flex flex-col gap-y-1">
          <p className="font-extrabold text-rvs-yellow text-[60px] sm:text-[100px] md:text-[50px] lg:text-[200px] leading-tight">
            Innovate
          </p>
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-center px-4 md:px-0">
            From groundbreaking ideas to transformative solutions, join us{" "}
            <br className="hidden md:block" /> on a journey of continuous
            discovery and growth.
          </p>
        </div>
      </div>

      <button
        className="absolute bg-rvs-yellow text-black w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full cursor-pointer p-[12px] md:p-[18px] right-[-100px]"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
