"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  // Pexels images for hero phone mockups
  const heroImages = [
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#fefcfb] via-[#fdf8f4] to-[#fcf5f0] pt-20">
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

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 h-full flex items-center">
        {/* Three Column Layout: Images - Text - Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">

          {/* Left Column - Phone Mockups Scrolling Down */}
          <div className="hidden lg:block w-48 relative overflow-hidden scroll-container-left bg-transparent" style={{ height: '80vh', background: 'transparent' }}>
            <div className="flex flex-col gap-4 bg-transparent " style={{ animation: 'scrollDown 30s linear infinite' }}>
              {/* Triple images for seamless infinite loop */}
              {[...heroImages.slice(0, 4), ...heroImages.slice(0, 4), ...heroImages.slice(0, 4)].map((imageUrl, index) => (
                <div key={`left-${index}`} className="relative w-48 shrink-0">
                  <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-9/16 relative">
                    {/* Phone frame with notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />

                    {/* Phone mockup content */}
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-4xl overflow-hidden relative">
                        <Image
                          src={imageUrl}
                          alt={`Hero ad example ${(index % 4) + 1}`}
                          fill
                          className="object-cover"
                          sizes="200px"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Text Content */}
          <div className="flex-1 max-w-2xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-black/8 rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold text-gray-700 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6b4dff] animate-pulse" />
              Trusted by 500K+ growth teams worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 tracking-[-0.03em] text-black leading-[1.1] animate-fade-in-up">
              Create winning ads{" "}
              <span className="italic font-serif font-normal">with AI</span>
            </h1>

            {/* Sub-headline */}
            <p className=" text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Use our library of 1,000+ captivating AI Actors, or create your own AI Avatar from a single photo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* CTA Button */}
              <Button
                size="lg"
                className="group cursor-pointer bg-black text-white hover:bg-[#fefcfb] hover:text-black hover:border hover:border-black px-9 py-7 text-base font-semibold rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105"
              >
                Create Your AI Ad <ArrowRight className="group-hover:translate-x-2 duration-300" />
              </Button>
              <button className="cursor-pointer text-base font-semibold text-black/70 hover:text-black transition-colors underline decoration-black/20 hover:decoration-black/40">
                Watch 1-min video
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['H', 'M', 'P'].map((i, index) => {
                    // Deterministic colors based on index to avoid hydration mismatch
                    const colors = ['hsl(28 80% 20%)', 'hsl(262 80% 20%)', 'hsl(349 80% 20%)'];
                    return (
                      <div
                        key={i}
                        className={`h-8 w-8 rounded-full border border-white text-white flex items-center justify-center`}
                        style={{ backgroundColor: colors[index] }}
                      >
                        {i}
                      </div>
                    );
                  })}
                </div>
                <span>4.9/5 rating from 10M+ ads</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-[#6b4dff] hidden md:block" />
              <div>Works with TikTok · Meta · YouTube · Shopify</div>
            </div>
          </div>

          {/* Right Column - Phone Mockups Scrolling Up */}
          <div className="hidden lg:block w-48 relative overflow-hidden scroll-container-right" style={{ height: '80vh', background: 'transparent' }}>
            <div className="flex flex-col gap-4" style={{ animation: 'scrollUp 30s linear infinite', background: 'transparent' }}>
              {/* Triple images for seamless infinite loop */}
              {[...heroImages.slice(4, 8), ...heroImages.slice(4, 8), ...heroImages.slice(4, 8)].map((imageUrl, index) => (
                <div key={`right-${index}`} className="relative w-48 shrink-0">
                  <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-9/16 relative">
                    {/* Phone frame with notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />

                    {/* Phone mockup content */}
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-4xl overflow-hidden relative">
                        <Image
                          src={imageUrl}
                          alt={`Hero ad example ${(index % 4) + 5}`}
                          fill
                          className="object-cover"
                          sizes="200px"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile View - Show images at bottom for smaller screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto px-4 mt-12 lg:hidden">
          {heroImages.map((imageUrl, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="bg-black rounded-[2.5rem] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-9/16 relative">
                {/* Phone frame with notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />

                {/* Phone mockup content */}
                <div className="absolute inset-0 p-2">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <Image
                      src={imageUrl}
                      alt={`Hero ad example ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

