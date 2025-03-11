"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="flex justify-between items-center px-20 h-[100px] backdrop-blur-[30px] bg-white fixed top-0 left-0 right-0 z-100">
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="logo" width={210} height={50} />
      </div>
      <div className="flex items-center gap-x-[60px]">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`text-black px-6 py-3 font-medium text-xl rounded-[30px] ${
              activeItem?.href === item.href
                ? "bg-rvs-green-light font-bold"
                : "bg-transparent"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button className="flex items-center gap-[10px] px-[30px] py-[18px] bg-rvs-yellow text-black rounded-[30px]">
        Get in touch{" "}
        <Image
          src="/assets/arrow-up-right.svg"
          alt="arrow-right"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Header;
