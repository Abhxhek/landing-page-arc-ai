import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-32 text-white overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1100&fit=crop"
        alt="Zyka CTA"
        fill
        className="object-cover"
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4">Zyka AI</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Ready to dominate your category?
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed">
            Start creating winning ads today with Zyka AI. Launch creator-grade ads in minutes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-12">
            <button className="bg-white text-black px-10 py-5 rounded-full font-semibold text-base hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center gap-2">
              Create Your Free Ad <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div>4.9/5 rating</div>
            <div>Bank-level security</div>
            <div>No credit card needed</div>
          </div>

          {/* Social proof */}
          <div className="mt-14 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-6 uppercase tracking-[0.4em]">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
              {["Netflix", "Spotify", "Airbnb", "Uber", "Nike"].map((company) => (
                <div key={company} className="text-white text-lg font-semibold tracking-wide">
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

