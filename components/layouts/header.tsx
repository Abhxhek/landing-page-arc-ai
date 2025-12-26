"use client"

import React, { useEffect, useState, useRef } from "react";
import { AnimatedButton } from "../ui/animated-button";

const Header: React.FC = () => {
 
  return (
    <div className="w-full fixed top-2 flex justify-center px-4 z-10">
      <div className={`w-full flex items-center justify-between px-4 py-4`}>
        <AnimatedButton id="zyka-ai-logo" className=" cursor-none text-sm uppercase tracking-wider shadow-2xl rounded-full inline-flex items-center gap-2 px-4 py-2">
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
