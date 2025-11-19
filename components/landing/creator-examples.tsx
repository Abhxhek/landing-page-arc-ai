export function CreatorExamples() {
  const creators = [
    { id: 1, name: "Sarah K.", role: "Fitness Coach", gradient: "from-pink-400 to-rose-400", initial: "SK" },
    { id: 2, name: "Alex M.", role: "Tech Reviewer", gradient: "from-blue-400 to-indigo-400", initial: "AM" },
    { id: 3, name: "Jessica L.", role: "Fashion Stylist", gradient: "from-purple-400 to-pink-400", initial: "JL" },
    { id: 4, name: "David R.", role: "Food Blogger", gradient: "from-orange-400 to-red-400", initial: "DR" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Real creators, <span className="italic font-serif">real results</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how content creators are leveraging AI to scale their ad production
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {creators.map((creator) => (
            <div key={creator.id} className="group">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl aspect-9/16 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
                
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {/* Top section - Creator info */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent z-10">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-linear-to-br ${creator.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                        {creator.initial}
                      </div>
                      <div className="ml-3">
                        <div className="text-white font-semibold text-sm">{creator.name}</div>
                        <div className="text-white/80 text-xs">{creator.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className={`w-full h-full bg-linear-to-br ${creator.gradient} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                        <div className="text-4xl">{creator.initial}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mx-6">
                        <div className="h-3 bg-white/60 rounded mb-2" />
                        <div className="h-3 bg-white/40 rounded w-3/4 mx-auto mb-2" />
                        <div className="h-3 bg-white/30 rounded w-1/2 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom section - Engagement */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent z-10">
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-4">
                        <span>❤️ 125K</span>
                        <span>💬 2.5K</span>
                        <span>📤 891</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creator Stats */}
              <div className="mt-4 text-center">
                <div className="font-semibold text-gray-900">{creator.name}</div>
                <div className="text-sm text-gray-600">{creator.role}</div>
                <div className="text-xs text-gray-500 mt-1">125K+ views generated</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join thousands of creators already using our platform
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Start creating for free
          </button>
        </div>
      </div>
    </section>
  );
}

