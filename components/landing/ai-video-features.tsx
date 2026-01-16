import Image from "next/image";

export function AIVideoFeatures() {
  const leftImages = [
    "/landing/image_1.png",
    "/landing/image_2.png",
  ];
  const rightImages = [
    "/landing/image_3.png",
    "/landing/image_4.png",
  ];

  return (
    <section className="py-32 md:py-40 bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 bg-[#ff4df0]/12 blur-[160px]" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column - Create your own AI Actor */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-5 font-medium">Studio • Capture</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                Create your own AI Actor
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                Generate realistic AI faces and video from your photos, videos and even your voice.
              </p>
              
              {/* Two Phone Mockups Side by Side */}
              <div className="flex gap-5">
                {leftImages.map((src, idx) => (
                  <div key={src} className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[2.3rem] p-2.5 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_120px_-35px_rgba(0,0,0,0.95)] aspect-9/16 flex-1 relative overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group">
                    <Image
                      src={src}
                      alt={`AI Actor ${idx + 1}`}
                      fill
                      className="rounded-[1.8rem] object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute bottom-5 left-4 right-4 text-xs uppercase tracking-[0.35em] text-white/90 font-medium">
                      AI Actor {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - AI Video Editing */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-5 font-medium">Studio • Edit</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                AI Video Editing
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                Add AI-FX, music, gestures and voiceovers to your videos.
              </p>
              
              {/* Two Phone Mockups Side by Side */}
              <div className="flex gap-5">
                {rightImages.map((src, idx) => (
                  <div key={src} className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[2.3rem] p-2.5 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_120px_-35px_rgba(0,0,0,0.95)] aspect-9/16 flex-1 relative overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group">
                    <Image
                      src={src}
                      alt={`AI Editing ${idx + 1}`}
                      fill
                      className="rounded-[1.8rem] object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      unoptimized
                    />
                    <div className="absolute bottom-5 left-4 right-4 text-xs uppercase tracking-[0.3em] text-white/90 text-center font-medium">
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
