import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Features() {
  const phones = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/769421/pexels-photo-769421.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
      rotation: -12,
      translateX: -40,
      translateY: 20,
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
      rotation: 0,
      translateX: 0,
      translateY: -10,
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
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
                The most realistic and{" "}
                <span className="italic font-serif font-normal">captivating</span> AI Actors
              </h2>
              
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                1,000+ AI talents across every vertical. Localized voices, expressions, gestures & pacing fine-tuned to your product.
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
                    className="absolute top-1/2 left-1/2 w-44 md:w-52 aspect-9/16 rounded-[2.3rem] bg-gradient-to-b from-[#1a1a1a] to-black shadow-[0_50px_150px_-40px_rgba(0,0,0,0.8)] border border-white/[0.12] overflow-hidden transition-all duration-500 hover:scale-105 hover:z-50"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${phone.rotation}deg) translateX(${phone.translateX}px) translateY(${phone.translateY}px)`,
                      zIndex: phone.id,
                    }}
                  >
                    <div className="absolute inset-0 p-2.5">
                      <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                        <Image
                          src={phone.image}
                          alt="AI actor"
                          fill
                          className="object-cover transition-transform duration-500"
                          sizes="(max-width: 768px) 176px, 208px"
                          unoptimized
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
    </section>
  );
}

