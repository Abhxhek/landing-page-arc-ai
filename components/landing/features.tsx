"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { VideoModal } from "@/components/ui/video-modal";

export function Features() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // All 8 videos available
  const allVideos = [
    "/landing/video_1.mp4",
    "/landing/video_2.mp4",
    "/landing/video_3.mp4",
    "/landing/video_4.mp4",
    "/landing/video_5.mp4",
    "/landing/video_6.mp4",
    "/landing/video_7.mp4",
    "/landing/video_8.mp4",
  ];

  // Default videos for SSR (same on server and client initially)
  const defaultVideos = ["/landing/video_1.mp4", "/landing/video_2.mp4", "/landing/video_3.mp4"];
  
  // Randomly select 3 videos only on client side after mount
  const [selectedVideos, setSelectedVideos] = useState<string[]>(defaultVideos);

  useEffect(() => {
    // Only run on client side after hydration
    const shuffled = [...allVideos].sort(() => Math.random() - 0.5);
    setSelectedVideos(shuffled.slice(0, 3));
  }, []);

  // Track loading state for each video
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const handleVideoLoad = (phoneId: number) => {
    setLoadedVideos((prev) => new Set(prev).add(phoneId));
  };

  const phones = [
    {
      id: 1,
      video: selectedVideos[0],
      rotation: -12,
      translateX: -40,
      translateY: 20,
    },
    {
      id: 2,
      video: selectedVideos[1],
      rotation: 0,
      translateX: 0,
      translateY: -10,
    },
    {
      id: 3,
      video: selectedVideos[2],
      rotation: 10,
      translateX: 50,
      translateY: 30,
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-20 h-80 w-80 bg-[#6b4dff]/20 blur-[150px]" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-white/50 mb-5 font-medium">Zyka AI Studio</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
                The most lifelike and{" "}
                <span className="italic font-serif font-normal">engaging</span> AI actors available
              </h2>
              
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                Over 1,000 AI talents for every vertical — with localized voices, expressions, gestures, and pacing finely tuned to your brand.
              </p>

              <button className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.25)] hover:scale-105">
                Browse AI Actors <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Stacked Phone Showcase */}
            <div className="relative h-[32rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_65%)] blur-[100px]" />
              <div className="relative w-full max-w-lg h-full">
                {phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="absolute top-1/2 left-1/2 w-44 md:w-52 aspect-9/16 rounded-[2.3rem] bg-gradient-to-b from-[#1a1a1a] to-black shadow-[0_50px_150px_-40px_rgba(0,0,0,0.8)] border border-white/[0.12] overflow-hidden transition-all duration-500 hover:scale-105 hover:z-50 cursor-pointer"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${phone.rotation}deg) translateX(${phone.translateX}px) translateY(${phone.translateY}px)`,
                      zIndex: phone.id,
                    }}
                    onClick={() => {
                      setSelectedVideo(phone.video);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="absolute inset-0 p-2.5">
                      <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                        {/* Skeleton loader */}
                        {!loadedVideos.has(phone.id) && (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] animate-pulse">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <div className="w-12 h-12 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                            </div>
                          </div>
                        )}
                        {/* Video */}
                        <video
                          src={phone.video}
                          loop
                          muted
                          playsInline
                          onLoadedData={() => handleVideoLoad(phone.id)}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            loadedVideos.has(phone.id) ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/90 rounded-b-2xl backdrop-blur-sm" />
                  </div>
                ))}
              </div>
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

