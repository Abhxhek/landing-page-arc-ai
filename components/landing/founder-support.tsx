export function FounderSupport() {
  const founders = [
    { name: "John D.", company: "TechCorp", avatar: "JD" },
    { name: "Sarah M.", company: "DesignCo", avatar: "SM" },
    { name: "Alex K.", company: "StartupX", avatar: "AK" },
    { name: "Emma L.", company: "BrandLab", avatar: "EL" },
    { name: "Michael R.", company: "GrowthHub", avatar: "MR" },
    { name: "Lisa P.", company: "CreativeAI", avatar: "LP" },
  ];

  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="italic">Founder Level</span> Support
          </h2>
          
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Our team of performance marketers and builders are here to help you win faster.
          </p>

          {/* Founder Avatars */}
          <div className="flex justify-center items-center mb-12">
            <div className="flex -space-x-4">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className="relative group"
                  style={{
                    zIndex: founders.length - index,
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 shadow-lg flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform cursor-pointer">
                    {founder.avatar}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-black text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      <div className="font-semibold">{founder.name}</div>
                      <div className="text-gray-300">{founder.company}</div>
                    </div>
                    <div className="w-2 h-2 bg-black rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base mb-2">24/7 Live Chat</h3>
              <p className="text-white/70 text-sm">
                Direct access to our team anytime, anywhere
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base mb-2">Strategy Calls</h3>
              <p className="text-white/70 text-sm">
                Weekly calls to optimize your campaigns
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base mb-2">Priority Support</h3>
              <p className="text-white/70 text-sm">
                Get your questions answered first
              </p>
            </div>
          </div>

          <button className="mt-4 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/80">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

