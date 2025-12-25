"use client"

import React, { useEffect, useState } from "react";
import { AnimatedButton } from "../ui/animated-button";

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
        <AnimatedButton className=" cursor-none text-sm uppercase tracking-wider shadow-2xl rounded-full inline-flex items-center gap-2 px-4 py-2">
          ZYKA AI
        </AnimatedButton>
        <AnimatedButton className="rounded-2xl text-[16px]">
          Login or Sign Up
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Header;
