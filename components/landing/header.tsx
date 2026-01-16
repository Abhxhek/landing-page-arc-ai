"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function Header() {
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Calendar Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className=" w-full max-w-7xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <Button
              onClick={closeModal}
              className="absolute cursor-pointer rounded-full top-5 right-1/13 z-100"
              
            >
              <X className="w-4 h-4" /> <span className="text-sm font-medium">Close</span>
            </Button>

            {/* Calendar iframe */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YawIQTALL92z5arJyh-aY94EpJHcnG3Ro5pw2C4cER8EkMoUIBj6xNFmRrNwixGGKsMH_e1B0?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              className="w-full"
            />
          </div>
        </div>
      )}

      <header className="fixed top-2 sm:top-4 left-0 w-full z-50 flex justify-center px-2 sm:px-4 pointer-events-none" onClick={() => push("/")}>
        <div className="flex w-full max-w-5xl items-center justify-between rounded-xl sm:rounded-2xl bg-white/40 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-xl pointer-events-auto">
          <div className="cursor-pointer text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-center whitespace-nowrap" >
            zyka.ai
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link href="/auth/login" onClick={(e) => e.stopPropagation()}>
              <button className="cursor-pointer rounded-full bg-black px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-white shadow-md transition hover:bg-white hover:border-black border-black border hover:text-black hover:scale-[1.04] whitespace-nowrap">
                <span className="hidden sm:inline">Login or Sign up</span>
                <span className="sm:hidden">Login</span>
              </button>
            </Link>

            {/* Book Demo Button - Opens modal with calendar iframe */}
            <button
              onClick={handleBookDemoClick}
              className="cursor-pointer rounded-full bg-[#039BE5] px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#0288D1] hover:scale-[1.04] whitespace-nowrap"
            >
              <span className="hidden sm:inline">Book Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

