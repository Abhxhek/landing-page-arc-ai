"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, videoSrc, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && videoSrc) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen, videoSrc]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
            onEnded={onClose}
          />
        </div>
      </div>
    </div>
  );
}

