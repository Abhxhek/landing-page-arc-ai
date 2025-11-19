import Image from "next/image";

export function VideoDemo() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <div className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full mb-6">
                ✨ See it in action
              </div>
              
              <h2 className="text-5xl font-bold mb-6">
                Create stunning ads in{" "}
                <span className="italic font-serif">minutes</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Watch how easy it is to generate professional-quality advertisements
                with our AI-powered platform. No design skills needed.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "AI-powered script generation",
                  "Professional voiceover options",
                  "Automatic scene composition",
                  "Brand-aligned styling",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Try it yourself →
              </button>
            </div>

            {/* Video Side */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_35px_100px_-40px_rgba(15,23,38,0.45)] aspect-video border border-black/5">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-16 border-l-black border-y-10 border-y-transparent ml-1" />
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-3xl font-bold text-black">2.5M+</div>
                <div className="text-sm text-gray-600">Videos Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

