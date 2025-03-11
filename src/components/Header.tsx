"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

const Header = () => {
  const pathname = usePathname();
  const activeItem = menuItems.find((item) => item.href === pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 h-[80px] md:h-[100px] backdrop-blur-[30px] bg-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={150}
          height={40}
          className="w-auto h-auto md:w-[210px]"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-[30px] lg:gap-x-[60px]">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`text-black px-3 py-2 lg:px-6 lg:py-3 font-medium text-base lg:text-xl rounded-[30px] hover:bg-rvs-green-light/30 ${
              activeItem?.href === item.href
                ? "bg-rvs-green-light font-bold"
                : "bg-transparent"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <button className="hidden md:flex items-center gap-[10px] px-[20px] py-[12px] lg:px-[30px] lg:py-[18px] bg-rvs-yellow text-black rounded-[30px] cursor-pointer text-sm lg:text-base">
        Get in touch{" "}
        <Image
          src="/assets/arrow-up-right.svg"
          alt="arrow-right"
          width={20}
          height={20}
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform ${
            mobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 transition-opacity ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white p-4 shadow-lg flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`text-black px-4 py-3 font-medium text-lg rounded-[30px] ${
                activeItem?.href === item.href
                  ? "bg-rvs-green-light font-bold"
                  : "bg-transparent hover:bg-rvs-green-light/30"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="flex items-center justify-center gap-[10px] px-[20px] py-[12px] bg-rvs-yellow text-black rounded-[30px] cursor-pointer mt-2">
            Get in touch{" "}
            <Image
              src="/assets/arrow-up-right.svg"
              alt="arrow-right"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
