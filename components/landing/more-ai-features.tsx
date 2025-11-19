import Image from "next/image";

export function MoreAIFeatures() {
  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Emotion Control */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Emotion Control
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                You have full emotion control. Just select from our presets.
              </p>
              
              {/* Two Square Images Side by Side */}
              <div className="flex gap-4">
                {[
                  "https://images.pexels.com/photos/5591792/pexels-photo-5591792.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
                  "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
                ].map((src, idx) => (
                  <div key={src} className="flex-1 aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.8)] relative">
                    <Image
                      src={src}
                      alt={`Emotion preset ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-white/80">
                      {idx === 0 ? "Calm" : "Excited"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Localize in every language */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Localize in every language
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Automatic translation into 50+ languages. Reach the world.
              </p>
              
              {/* Image with Globe Icon */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_35px_120px_-50px_rgba(0,0,0,0.9)] aspect-4/3">
                <Image
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                  alt="Localization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-4xl md:text-5xl font-semibold tracking-wide mb-3">50+ Languages</div>
                  <p className="text-white/80 text-sm uppercase tracking-[0.4em]">Instantly localized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

