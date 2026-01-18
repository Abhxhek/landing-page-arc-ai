"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-40 md:py-48 text-white overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1100&fit=crop"
        alt="Zyka CTA"
        fill
        className="object-cover scale-105 transition-transform duration-700"
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/60" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-6 font-medium">Zyka AI</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Ready to dominate your category?
          </h2>
          
          <p className="text-lg md:text-xl mb-14 text-white/95 leading-relaxed max-w-2xl mx-auto">
            Start creating winning ads today with Zyka AI. Launch creator-grade ads in minutes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <a href="https://zyka.ai/login">
              <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_30px_90px_rgba(0,0,0,0.4)] hover:shadow-[0_35px_110px_rgba(0,0,0,0.5)] flex items-center gap-3 duration-300">
                Create Your Free Ad <ArrowRight className="h-6 w-6" />
              </button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-10 text-white/90 text-base font-medium">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span>4.9/5 rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div>🔒 Bank-level security</div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div>💳 No credit card needed</div>
          </div>

          {/* Social proof */}
          <div className="mt-20 pt-10 border-t border-white/15">
            <p className="text-white/60 text-xs mb-8 uppercase tracking-[0.45em] font-medium">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-14">
              {["Netflix", "Spotify", "Airbnb", "Uber", "Nike"].map((company) => (
                <div key={company} className="text-white text-xl font-bold tracking-wide hover:scale-110 transition-transform duration-300 cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

