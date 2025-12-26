"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
};

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      
      {/* Booking Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className=" w-full max-w-4xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Close Button */}
            <Button
              onClick={closeModal}
              className="absolute top-6 right-80 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5 text-gray-800" />
            </Button>
            
            {/* Google Calendar iframe */}
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
    </BookingModalContext.Provider>
  );
}

