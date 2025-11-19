import Image from "next/image";

export function AIVideoFeatures() {
  const leftImages = [
    "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
    "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
  ];
  const rightImages = [
    "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
    "https://images.pexels.com/photos/3782221/pexels-photo-3782221.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
  ];

  return (
    <section className="py-32 bg-[#0b0b0b] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Create your own AI Actor */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4">Studio • Capture</p>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                Create your own AI Actor
              </h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Generate realistic AI faces and video from your photos, videos and even your voice.
              </p>
              
              {/* Two Phone Mockups Side by Side */}
              <div className="flex gap-4">
                {leftImages.map((src, idx) => (
                  <div key={src} className="bg-white/5 rounded-[2rem] p-2 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.8)] aspect-9/16 flex-1 relative overflow-hidden border border-white/10">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-4 bg-black/60 rounded-b-2xl" />
                    <Image
                      src={src}
                      alt={`AI Actor ${idx + 1}`}
                      fill
                      className="rounded-[1.6rem] object-cover"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.35em] text-white/80">
                      AI Actor {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - AI Video Editing */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4">Studio • Edit</p>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                AI Video Editing
              </h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Add AI-FX, music, gestures and voiceovers to your videos.
              </p>
              
              {/* Two Phone Mockups Side by Side */}
              <div className="flex gap-4">
                {rightImages.map((src, idx) => (
                  <div key={src} className="bg-white/5 rounded-[2rem] p-2 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.8)] aspect-9/16 flex-1 relative overflow-hidden border border-white/10">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-4 bg-black/60 rounded-b-2xl" />
                    <Image
                      src={src}
                      alt={`AI Editing ${idx + 1}`}
                      fill
                      className="rounded-[1.6rem] object-cover"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.3em] text-white/80 text-center">
                      {idx === 0 ? "AI FX & GESTURES" : "AI VIDEO EDITING"}
                    </div>
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

