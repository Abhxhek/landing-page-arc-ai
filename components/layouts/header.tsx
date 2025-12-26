"use client"

import React from "react";
import { AnimatedButton } from "../ui/animated-button";
import { useBookingModal } from "../shared/booking-modal-provider";

const Header: React.FC = () => {
  const { openModal } = useBookingModal();

  return (
    <div className="w-full fixed top-2 flex justify-center px-2 sm:px-4 z-30">
      <div className={`w-full flex items-center justify-between px-2 sm:px-4 py-2 sm:py-4`}>
        <AnimatedButton id="zyka-ai-logo" className="cursor-none text-xs sm:text-sm uppercase tracking-wider shadow-2xl rounded-full inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2">
          ZYKA AI
        </AnimatedButton>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <AnimatedButton 
            className="rounded-2xl text-xs sm:text-[16px] bg-blue-500 text-white hover:bg-blue-600 px-2 sm:px-4 py-1.5 sm:py-2"
            onClick={openModal}
          >
            <span className="hidden sm:inline">Book Demo</span>
            <span className="sm:hidden">Demo</span>
          </AnimatedButton>
          <AnimatedButton 
            className="rounded-2xl text-xs sm:text-[16px] px-2 sm:px-4 py-1.5 sm:py-2"
            onClick={() => window.open("https://create.zyka.ai/", "_blank", "noopener,noreferrer")}
          >
            <span className="hidden sm:inline">Login or Sign Up</span>
            <span className="sm:hidden">Login</span>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
