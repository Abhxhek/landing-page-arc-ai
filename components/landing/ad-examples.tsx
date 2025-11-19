"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function AdExamples() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pexels royalty-free images for ad mockups
  const examples = [
    { 
      id: 1, 
      brand: "Coursiv",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "We asked ChatGPT for 20 reasons to call off work. Which one are you using next?",
      views: "12.6K",
      revenue: "$16K",
      delta: "+195%",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 2, 
      brand: "Learna",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "Want to scale your accounts like crazy in 30 seconds without lifting a finger?",
      views: "12.6K",
      revenue: "$16K",
      delta: "+195%",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 3, 
      brand: "Glam",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "📸 Transform your photo into a professional shoot with Glam AI.",
      views: "18.5K",
      revenue: "$27K",
      delta: "+95%",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 4, 
      brand: "MellowFlow",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "Struggling with procrastination? Here's how MellowFlow keeps ADHD brains on track.",
      views: "25.2K",
      revenue: "$32K",
      delta: "+270%",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 5, 
      brand: "Glam",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "Build it. Animate it. Own your style. Try our new Glam feature today.",
      views: "15.1K",
      revenue: "$18K",
      delta: "+14%",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 6, 
      brand: "Learna",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "Make your brand pop with #glamai and turn every viewer into a buyer.",
      views: "11.8K",
      revenue: "$19K",
      delta: "+17%",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 7, 
      brand: "MellowFlow",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "¡Superar la procrastinación no debería ser difícil! Descubre MellowFlow.",
      views: "11.2K",
      revenue: "$10.1K",
      delta: "+26%",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    { 
      id: 8, 
      brand: "My IQ",
      tag: "Sponsored",
      status: "ACTIVE",
      text: "Boost your brain in 30 seconds a day with My IQ. Tap to see how.",
      views: "9K",
      revenue: "$14K",
      delta: "+120%",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
  ];

  // Auto-scroll functionality with seamless loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let intervalId: NodeJS.Timeout | null = null;
    const scrollSpeed = 0.5; // pixels per frame
    const scrollDelay = 50; // milliseconds between scrolls

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
    <section className="py-24 md:py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">Zyka Coursiv</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Coursiv</h2>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              {["All", "UGC", "Reviews", "Actors", "Statement"].map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 rounded-full border ${
                    tag === "All" ? "bg-white text-black border-white" : "border-white/20 text-white/70"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
              <div key={`${example.id}-${index}`} className="flex-shrink-0 w-56 md:w-64 group cursor-pointer">
                <div className="relative rounded-[2.3rem] bg-gradient-to-b from-[#111111] to-[#050505] p-2.5 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)] border border-white/5 aspect-9/16">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-20" />
                  
                  {/* Phone frame */}
                  <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative bg-black">
                    {/* Real image from Pexels */}
                    <Image
                      src={example.image}
                      alt={example.text}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 224px, 256px"
                      unoptimized
                    />
                    
                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-5 text-left z-10">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">
                          <span>{example.tag}</span>
                          <span>{example.status}</span>
                        </div>
                        <div className="text-white/80 text-xs mb-1">{example.brand}</div>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium leading-relaxed mb-4 drop-shadow">
                          {example.text}
                        </p>
                        <div className="flex items-center justify-between text-white/90 text-xs font-semibold">
                          <div>
                            <p className="uppercase tracking-[0.4em] text-white/50 text-[10px]">Views</p>
                            <p>{example.views}</p>
                          </div>
                          <div className="text-right">
                            <p className="uppercase tracking-[0.4em] text-white/50 text-[10px]">Revenue</p>
                            <p>{example.revenue} <span className="text-green-400">{example.delta}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Play button - Red YouTube style */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-20">
                      <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl">
                        <div className="w-0 h-0 border-l-10 border-l-white border-y-7 border-y-transparent ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

