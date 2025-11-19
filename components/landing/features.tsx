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
    <section className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60 mb-4">Zyka AI Studio</p>
              <h2 className="text-5xl md:text-6xl font-semibold mb-6">
                The most realistic and{" "}
                <span className="italic font-serif">captivating</span> AI Actors
              </h2>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                1,000+ AI talents across every vertical. Localized voices, expressions, gestures & pacing fine-tuned to your product.
              </p>

              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Browse AI Actors <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Stacked Phone Showcase */}
            <div className="relative h-[28rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0)_60%)] blur-[80px]" />
              <div className="relative w-full max-w-lg h-full">
                {phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="absolute top-1/2 left-1/2 w-40 md:w-48 aspect-9/16 rounded-[2rem] bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${phone.rotation}deg) translateX(${phone.translateX}px) translateY(${phone.translateY}px)`,
                      zIndex: phone.id,
                    }}
                  >
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative">
                        <Image
                          src={phone.image}
                          alt="AI actor"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 160px, 192px"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-2xl" />
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

