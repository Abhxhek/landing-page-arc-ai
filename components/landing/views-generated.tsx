"use client";

import { useEffect, useRef, useState } from "react";
import { VideoModal } from "@/components/ui/video-modal";

export function ViewsGenerated() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Videos for ad mockups
  const examples = [
    { 
      id: 1, 
      views: "125K", 
      video: "/landing/video_1.mp4"
    },
    { 
      id: 2, 
      views: "89K", 
      video: "/landing/video_2.mp4"
    },
    { 
      id: 3, 
      views: "256K", 
      video: "/landing/video_3.mp4"
    },
    { 
      id: 4, 
      views: "178K", 
      video: "/landing/video_4.mp4"
    },
    { 
      id: 5, 
      views: "312K", 
      video: "/landing/video_5.mp4"
    },
    { 
      id: 6, 
      views: "94K", 
      video: "/landing/video_6.mp4"
    },
    { 
      id: 7, 
      views: "201K", 
      video: "/landing/video_7.mp4"
    },
    { 
      id: 8, 
      views: "167K", 
      video: "/landing/video_8.mp4"
    },
  ];

  // Auto-scroll functionality with seamless loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let intervalId: NodeJS.Timeout | null = null;
    const scrollSpeed = 0.4; // pixels per frame (slightly slower)
    const scrollDelay = 50;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth / 2; // Half because we duplicated items
        
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0; // Reset to start for seamless loop
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startScroll = () => {
      intervalId = setInterval(scroll, scrollDelay);
    };

    const stopScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    startScroll();

    // Pause on hover
    scrollContainer.addEventListener("mouseenter", stopScroll);
    scrollContainer.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      scrollContainer.removeEventListener("mouseenter", stopScroll);
      scrollContainer.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Large Faded Text Background */}
        <div className="absolute top-0 left-0 right-0 text-center pointer-events-none">
          <h2 className="text-[10rem] md:text-[14rem] font-bold text-white/5 select-none tracking-[0.2em]">
            +1B VIEWS
          </h2>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32">
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-white/70">
              with ads created with zyka
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Carousel */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-4 md:gap-6 min-w-max">
              {/* Duplicate items for seamless loop */}
              {[...examples, ...examples].map((example, index) => (
                <div 
                  key={`${example.id}-${index}`} 
                  className="flex-shrink-0 w-56 md:w-64 group cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(example.video);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-9/16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                    
                    {/* Phone frame */}
                    <div className="absolute inset-0 p-2.5">
                      <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                        {/* Video */}
                        <video
                          src={example.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 z-20">
                          <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl">
                            <div className="w-0 h-0 border-l-10 border-l-white border-y-7 border-y-transparent ml-0.5" />
                          </div>
                        </div>

                        {/* Views metric - bottom */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-end z-10">
                          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                            <span className="text-white text-xs font-semibold">{example.views}</span>
                            <span className="text-green-400 text-xs">↑</span>
                          </div>
                        </div>
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

