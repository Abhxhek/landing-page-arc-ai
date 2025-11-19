import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AIAgent() {
  const features = [
    { title: "Voice Cloning", desc: "Sound exactly like yourself" },
    { title: "Visual Clone", desc: "Look and move naturally" },
    { title: "Brand Consistency", desc: "Always on-brand messaging" },
    { title: "Multi-language", desc: "Speak in any language" },
  ];

  return (
    <section className="py-32 bg-[#030303] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0%,_rgba(3,3,3,0)_55%)] opacity-80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-4">zyka.ai agents</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Build your own <span className="italic font-serif">AI Agent</span>{" "}
              for marketing
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
              Launch creator-grade AI agents in minutes. Trusted by 15K+ teams to automate
              voice, visuals, and brand messaging at scale.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-[#6b4dff]" />
                  <div>
                    <div className="font-semibold text-lg">{feature.title}</div>
                    <div className="text-sm text-white/60">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.25)]">
              Browse AI Agents <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Illustration */}
          <div className="relative py-12">
            <div className="relative rounded-[3rem] bg-[#050505] border border-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.55)] overflow-visible">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />

              <div className="relative mx-auto max-w-sm rounded-[2.5rem] bg-gradient-to-br from-[#ffd4c2] via-[#ffc4e8] to-[#e9d4ff] px-8 pt-12 pb-16 shadow-[0_35px_90px_rgba(255,212,194,0.5)]">
                <div className="flex justify-center">
                  <div className="relative h-36 w-36 rounded-[1.5rem] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/30">
                    <Image
                      src="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                      alt="AI agent preview"
                      fill
                      className="object-cover"
                      sizes="128px"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4">
                  {["Voice", "Visual"].map((label) => (
                    <div
                      key={label}
                      className="rounded-full border border-white/40 px-8 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-white/85 bg-white/10 backdrop-blur-md"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-8 right-8 bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl border border-white/[0.08] rounded-[1.5rem] px-6 py-4 shadow-[0_25px_55px_rgba(0,0,0,0.8)] min-w-fit whitespace-nowrap">
                <p className="text-[0.5rem] uppercase tracking-[0.5em] text-emerald-400/80 mb-1.5 font-medium">
                  AI Processing
                </p>
                <p className="text-4xl font-bold text-emerald-400 leading-none">99.9%</p>
              </div>

              <div className="absolute -bottom-10 left-8 bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl border border-white/[0.08] rounded-[1.5rem] px-6 py-4 shadow-[0_25px_55px_rgba(0,0,0,0.8)] min-w-fit whitespace-nowrap">
                <p className="text-[0.5rem] uppercase tracking-[0.5em] text-cyan-400/80 mb-1.5 font-medium">
                  Active Agents
                </p>
                <p className="text-4xl font-bold text-cyan-400 leading-none">15K+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

