"use client";

import Image from "next/image";
import React, { useState } from "react";

import ArrowUpRight from "../icons/ArrowUpRight";
import ChevronUp from "@/components/icons/ChevronUp";
import ChevronDown from "@/components/icons/ChevronDown";

const services = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Description for service 1. This explains what the service offers and its benefits.",
    image: "/assets/service.png",
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Description for service 2. This explains what the service offers and its benefits.",
    image: "/assets/bottom-bg.png",
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const nextSlide = () => {
    setDirection("down");
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("up");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-12 relative z-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row h-[463px] gap-[101px] items-center">
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            width={463}
            height={463}
            className={`object-cover rounded-[20px] w-[463px] h-[463px] ${
              direction === "up"
                ? "animate-slide-in-up"
                : "animate-slide-in-down"
            }`}
          />
          <div className="flex flex-col w-[480px]">
            <h3 className="text-[36px] leading-[40px] font-bold">
              Crafting Staffing Solutions
            </h3>
            <p className="text-[18px] leading-[27px] font-normal mt-6">
              We empower organizations to achieve their goals and scale
              efficiently, minimizing risks by providing top-tier learning and
              technology talent.
            </p>
            <button className="bg-transparent border-white border-[1px] text-[18px] leading-[27px] font-normal flex items-center gap-2 py-[18px] px-[30px] mt-12 w-fit rounded-[30px] cursor-pointer">
              Know more <ArrowUpRight color="white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={nextSlide}
            className="p-[18px] rounded-full bg-transparent border-white border-[1px] transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronUp />
          </button>

          <div className="my-6 flex flex-col items-center">
            {services.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer my-1  transition-all ${
                  index === currentIndex
                    ? "w-4 h-4 bg-rvs-yellow"
                    : "w-2 h-2 bg-gray-300 rounded-2xl"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="p-[18px] rounded-full bg-transparent border-white border-[1px] transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
