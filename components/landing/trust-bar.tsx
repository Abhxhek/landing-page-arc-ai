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
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-24 right-12 h-56 w-56 bg-[#6b4dff]/30 blur-[130px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Zyka AI</p>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Used by millions of <span className="italic">the best marketers</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Powering high-performing creative for agencies, DTC brands, B2B SaaS & enterprise teams worldwide.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6 flex flex-wrap items-center justify-center gap-6 text-white text-sm mb-12">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Creators</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs">412 online</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">AI Actors</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs">1,024 available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">AI Studios</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs">98 global</span>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16">
          {companyLogos.map(({ name, icon: Icon, color }) => (
            <div key={name} className="flex flex-col items-center text-xs uppercase tracking-[0.4em] text-white/60">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                <Icon size={24} style={{ color }} aria-label={name} />
              </div>
              <span className="mt-3 text-[11px]">{name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { value: "10M+", label: "Ads created" },
            { value: "500K+", label: "Marketers onboarded" },
            { value: "98%", label: "Success rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white text-4xl md:text-5xl font-semibold mb-1 tracking-tight">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

