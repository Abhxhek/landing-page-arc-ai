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
    <section className="relative min-h-screen overflow-hidden pt-36 md:pt-44 pb-32 bg-[radial-gradient(circle_at_top,#fff9f4,#fdf3ec_35%,#f6efe8_70%,#f5f5f3)]">
      {/* Blurred background orbs */}
      <div className="absolute -top-20 left-1/3 h-64 w-64 bg-[#f9d1c2] opacity-40 blur-[120px]" />
      <div className="absolute top-20 -left-10 h-72 w-72 bg-[#fde6c5] opacity-50 blur-[140px]" />
      <div className="absolute bottom-6 right-10 h-64 w-64 bg-[#f3d6ff] opacity-40 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-black/5 rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-gray-600 mb-6 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6b4dff]" />
            Trusted by 500K+ growth teams worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-[4.5rem] font-semibold mb-6 tracking-[-0.03em] text-black leading-[1.05]">
            Create winning ads{" "}
            <span className="italic">with AI</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Use our library of 1,000+ captivating AI Actors, or create your own AI Avatar from a single photo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg transition-all"
            >
              Create Your AI Ad <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <button className="text-base font-semibold text-black/70 hover:text-black underline decoration-black/20">
              Watch 1-min video
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-8 w-8 rounded-full bg-black/5 border border-white" />
                ))}
              </div>
              <span>4.9/5 rating from 10M+ ads</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-[#6b4dff] hidden md:block" />
            <div>Works with TikTok · Meta · YouTube · Shopify</div>
          </div>
        </div>

        {/* Phone Mockups Grid - Floating Pattern */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
          {heroImages.map((imageUrl, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 aspect-9/16 relative">
                {/* Phone frame with notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-2xl z-10 border-x border-t border-gray-100" />
                
                {/* Phone mockup content */}
                <div className="absolute inset-0 pt-2 pb-1 px-1.5">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                    {/* Real image from Pexels */}
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

