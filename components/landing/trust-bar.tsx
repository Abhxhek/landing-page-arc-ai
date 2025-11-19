import {
  SiShopify,
  SiAmazon,
  SiMeta,
  SiGoogle,
  SiTiktok,
  SiSnapchat,
  SiSpotify,
} from "react-icons/si";

const companyLogos = [
  { name: "Shopify", icon: SiShopify, color: "#95BF47" },
  { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
  { name: "Meta", icon: SiMeta, color: "#1877F2" },
  { name: "Google", icon: SiGoogle, color: "#4285F4" },
  { name: "TikTok", icon: SiTiktok, color: "#25F4EE" },
  { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
  { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
];

export function TrustBar() {
  return (
    <section className="relative bg-[#0a0a0a] py-28 md:py-36 overflow-hidden">
      <div className="absolute -top-32 right-20 h-72 w-72 bg-[#6b4dff]/25 blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-10 h-64 w-64 bg-[#ff4df0]/15 blur-[140px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-5">Zyka AI</p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Used by millions of <span className="italic font-serif font-normal">the best marketers</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Powering high-performing creative for agencies, DTC brands, B2B SaaS & enterprise teams worldwide.
          </p>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-4xl px-10 py-7 flex flex-wrap items-center justify-center gap-8 text-white text-sm mb-16 backdrop-blur-sm shadow-[0_20px_70px_-30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Creators</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm border border-white/10">412 online</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">AI Actors</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm border border-white/10">1,024 available</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">AI Studios</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm border border-white/10">98 global</span>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-20">
          {companyLogos.map(({ name, icon: Icon, color }) => (
            <div key={name} className="flex flex-col items-center text-xs uppercase tracking-[0.4em] text-white/60 transition-all duration-300 hover:text-white/90 cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/4 border border-white/10 flex items-center justify-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                <Icon size={26} style={{ color }} aria-label={name} />
              </div>
              <span className="mt-3.5 text-[10px] font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { value: "10M+", label: "Ads created" },
            { value: "500K+", label: "Marketers onboarded" },
            { value: "98%", label: "Success rate" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="text-white text-5xl md:text-6xl font-bold mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
              <div className="text-gray-400 text-xs uppercase tracking-[0.25em] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

