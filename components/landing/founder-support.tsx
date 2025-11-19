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
    <section className="py-36 md:py-44 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-[#6b4dff]/12 blur-[180px]" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            <span className="italic font-serif font-normal">Founder Level</span> Support
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto">
            Our team of performance marketers and builders are here to help you win faster.
          </p>

         
        

          {/* Support Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-10 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.9)] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">24/7 Live Chat</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Direct access to our team anytime, anywhere
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-10 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.9)] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Strategy Calls</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Weekly calls to optimize your campaigns
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-10 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.9)] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Priority Support</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Get your questions answered first
              </p>
            </div>
          </div>

          <button className="mt-6 rounded-full border-2 border-white/20 hover:border-white/40 px-10 py-4 text-sm uppercase tracking-[0.35em] text-white/80 hover:text-white font-medium hover:bg-white/5 transition-all duration-300">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
