import Image from "next/image";

export function MoreAIFeatures() {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-20 left-1/3 h-80 w-80 bg-[#6b4dff]/15 blur-[140px]" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column - Emotion Control */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                Emotion Control
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                You have full emotion control. Just select from our presets.
              </p>
              
              {/* Two Square Images Side by Side */}
              <div className="flex gap-5">
                {[
                  "/image_5.png",
                  "/image_6.png",
                ].map((src, idx) => (
                  <div key={src} className="h-100 flex-1 aspect-square rounded-4xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/[0.08] shadow-[0_30px_100px_-40px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_120px_-35px_rgba(0,0,0,0.95)] hover:border-white/[0.15] relative transition-all duration-300 group">
                    <Image
                      src={src}
                      alt={`Emotion preset ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[0.35em] text-white/90 font-medium">
                      {idx === 0 ? "Calm" : "Excited"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Localize in every language */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                Localize in every language
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                Automatic translation into 50+ languages. Reach the world.
              </p>
              
              {/* Image with Globe Icon */}
              <div className="relative rounded-4xl overflow-hidden border border-white/8 shadow-[0_40px_140px_-50px_rgba(0,0,0,0.95)] hover:shadow-[0_45px_160px_-45px_rgba(0,0,0,0.98)] aspect-4/3 group transition-all duration-300">
                <Image
                  src="/image_7.png"
                  alt="Localization"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-5xl md:text-6xl font-bold tracking-tight mb-4">50+ Languages</div>
                  <p className="text-white/90 text-xs uppercase tracking-[0.4em] font-medium">Instantly localized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

