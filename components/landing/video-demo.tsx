import Image from "next/image";

export function VideoDemo() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#fefcfb] via-white to-[#fefcfb]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-black text-white text-sm px-5 py-2.5 rounded-full mb-8 shadow-lg">
                <span className="text-lg">✨</span>
                <span className="font-semibold">See it in action</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Create stunning ads in{" "}
                <span className="italic font-serif font-normal">minutes</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
                Watch how easy it is to generate professional-quality advertisements
                with our AI-powered platform. No design skills needed.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  "AI-powered script generation",
                  "Professional voiceover options",
                  "Automatic scene composition",
                  "Brand-aligned styling",
                ].map((feature) => (
                  <li key={feature} className="flex items-start group">
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg md:text-xl text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-black text-white px-10 py-5 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] hover:scale-105">
                Try it yourself →
              </button>
            </div>

            {/* Video Side */}
            <div className="relative">
              <div className="relative rounded-[2.8rem] overflow-hidden shadow-[0_40px_120px_-40px_rgba(15,23,38,0.5)] hover:shadow-[0_45px_140px_-35px_rgba(15,23,38,0.6)] transition-all duration-300 aspect-video border border-black/10">
                {/* Video placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
                    alt="Zyka video demo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 rounded-full bg-white/95 flex items-center justify-center shadow-[0_20px_70px_rgba(0,0,0,0.4)] hover:scale-110 hover:bg-white transition-all duration-300 group">
                    <div className="w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent ml-1.5 group-hover:border-l-gray-800" />
                  </button>
                </div>

                {/* Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-1 rounded-full bg-white" />
                    <span className="w-32 h-1 rounded-full bg-white/30" />
                  </div>
                  <span>00:58 / 02:15</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-[1.5rem] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] p-7 border border-gray-100">
                <div className="text-4xl font-bold text-black tracking-tight">2.5M+</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Videos Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

