"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "@/components/ui/video-modal";

export function Hero() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Videos for hero phone mockups
  const heroVideos = [
    "/landing/video_1.mp4",
    "/landing/video_2.mp4",  
    "/landing/video_3.mp4",
    "/landing/video_4.mp4",
    "/landing/video_5.mp4", 
    "/landing/video_6.mp4",
    "/landing/video_7.mp4",
    "/landing/video_8.mp4",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fefcfb] via-[#fdf8f4] to-[#fcf5f0] pt-16 sm:pt-20 pb-8 sm:pb-12">
      {/* CSS Animations for infinite scrolling */}
      <style jsx>{`
        @keyframes scrollDown {
          from {
            transform: translateY(0%);
          }
          to {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollUp {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0%);
          }
        }
        .scroll-container-left,
        .scroll-container-right {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%);
          background: transparent;
        }
        .scroll-container-left > div,
        .scroll-container-right > div {
          background: transparent;
        }
      `}</style>

      {/* Enhanced blurred background orbs */}
      <div className="absolute -top-32 left-1/4 h-80 w-80 bg-[#ffd4c2] opacity-30 blur-[140px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-32 -left-20 h-96 w-96 bg-[#ffe8d1] opacity-35 blur-[160px]" />
      <div className="absolute bottom-20 right-16 h-80 w-80 bg-[#f0d4ff] opacity-30 blur-[130px] animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        {/* Mobile & Desktop Layout */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:py-0">

          {/* Left Column - Phone Mockups Scrolling Down (Desktop only) */}
          <div className="hidden lg:block w-48 relative overflow-hidden scroll-container-left bg-transparent shrink-0" style={{ height: '80vh', background: 'transparent' }}>
            <div className="flex flex-col gap-4 bg-transparent " style={{ animation: 'scrollDown 30s linear infinite' }}>
              {/* Triple videos for seamless infinite loop */}
              {[...heroVideos.slice(0, 4), ...heroVideos.slice(0, 4), ...heroVideos.slice(0, 4)].map((videoUrl, index) => (
                <div 
                  key={`left-${index}`} 
                  className="relative w-48 shrink-0 cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(videoUrl);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-9/16 relative">
                    {/* Phone frame with notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />

                    {/* Phone mockup content */}
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-4xl overflow-hidden relative">
                        <video
                          src={videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Text Content */}
          <div className="w-full lg:flex-1 max-w-2xl flex flex-col items-center justify-center text-center px-4 sm:px-0">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 bg-white/90 border border-black/8 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-6 sm:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#6b4dff] animate-pulse" />
              <span className="whitespace-nowrap">Trusted by 500K+ growth teams worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 tracking-[-0.03em] text-black leading-[1.1] text-center w-full">
              AI that creates ads{" "}
              <span className="italic font-serif font-normal">that works</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl leading-relaxed text-center w-full">
              Choose from 1,000+ captivating AI actors—or turn your photo into a custom AI avatar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-0 w-full px-4 sm:px-0">
              {/* CTA Button */}
              <a href="https://zyka.ai/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group cursor-pointer bg-black text-white hover:bg-[#fefcfb] hover:text-black hover:border hover:border-black w-full sm:w-auto px-6 sm:px-9 py-5 sm:py-7 text-sm sm:text-base font-semibold rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105"
                >
                  Create Your AI Ad <ArrowRight className="group-hover:translate-x-2 duration-300 ml-1" />
                </Button>
              </a>
              <button className="cursor-pointer text-sm sm:text-base font-semibold text-black/70 hover:text-black transition-colors underline decoration-black/20 hover:decoration-black/40 text-center">
                Watch 1-min video
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-xs sm:text-sm text-gray-500 w-full">
              <div className="flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {['H', 'M', 'P'].map((i, index) => {
                    // Deterministic colors based on index to avoid hydration mismatch
                    const colors = ['hsl(28 80% 20%)', 'hsl(262 80% 20%)', 'hsl(349 80% 20%)'];
                    return (
                      <div
                        key={i}
                        className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white text-white flex items-center justify-center text-xs sm:text-sm`}
                        style={{ backgroundColor: colors[index] }}
                      >
                        {i}
                      </div>
                    );
                  })}
                </div>
                <span className="whitespace-nowrap">4.9/5 rating from 10M+ ads</span>
              </div>
              <div className="text-center">Works with TikTok · Meta · YouTube · Shopify</div>
            </div>
          </div>

          {/* Right Column - Phone Mockups Scrolling Up (Desktop only) */}
          <div className="hidden lg:block w-48 relative overflow-hidden scroll-container-right shrink-0" style={{ height: '80vh', background: 'transparent' }}>
            <div className="flex flex-col gap-4" style={{ animation: 'scrollUp 30s linear infinite', background: 'transparent' }}>
              {/* Triple videos for seamless infinite loop */}
              {[...heroVideos.slice(4, 8), ...heroVideos.slice(4, 8), ...heroVideos.slice(4, 8)].map((videoUrl, index) => (
                <div 
                  key={`right-${index}`} 
                  className="relative w-48 shrink-0 cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(videoUrl);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-9/16 relative">
                    {/* Phone frame with notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />

                    {/* Phone mockup content */}
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-4xl overflow-hidden relative">
                        <video
                          src={videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoSrc={selectedVideo}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVideo(null);
        }}
      />
    </section>
  );
}

    