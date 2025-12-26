"use client"

import React from "react";
import { AnimatedButton } from "../ui/animated-button";
import { useBookingModal } from "../shared/booking-modal-provider";

const Header: React.FC = () => {
  const { openModal } = useBookingModal();

  return (
    <div className="w-full fixed top-2 flex justify-center px-4 z-30">
      <div className={`w-full flex items-center justify-between px-4 py-4`}>
        <AnimatedButton id="zyka-ai-logo" className=" cursor-none text-sm uppercase tracking-wider shadow-2xl rounded-full inline-flex items-center gap-2 px-4 py-2">
          ZYKA AI
        </AnimatedButton>
        <div className="flex items-center gap-3">
          <AnimatedButton 
            className="rounded-2xl text-[16px] bg-blue-500 text-white hover:bg-blue-600"
            onClick={openModal}
          >
            Book Demo
          </AnimatedButton>
          <AnimatedButton 
            className="rounded-2xl text-[16px]"
            onClick={() => window.open("https://create.zyka.ai/", "_blank", "noopener,noreferrer")}
          >
            Login or Sign Up
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
