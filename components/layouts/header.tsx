"use client"

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // add blur/bg once scrolling starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-2 flex justify-center bg-transparent px-4 z-10">
      <div className={`w-full flex items-center justify-between px-4 py-4`}>
        <div className="italic font-bold text-lg ml-4">
          Logo
        </div>
        <Button className="group relative overflow-hidden rounded-2xl text-[16px]">
          {/* 1. Invisible copy: Keeps the button width correct */}
          <span className="invisible">Login or Sign Up</span>

          {/* 2. Default Text: Absolute positioned, slides up completely */}
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
            Login or Sign Up
          </span>

          {/* 3. Hover Text: Absolute positioned, slides in from bottom */}
          <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            Login or Sign Up
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
