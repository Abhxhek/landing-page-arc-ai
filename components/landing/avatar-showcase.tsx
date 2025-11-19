export function AvatarShowcase() {
  const avatars = [
    { id: 1, emoji: "👨‍💼", name: "Business Pro", color: "from-blue-400 to-blue-600" },
    { id: 2, emoji: "👩‍🎨", name: "Creative Artist", color: "from-purple-400 to-pink-600" },
    { id: 3, emoji: "👨‍🔬", name: "Tech Expert", color: "from-green-400 to-emerald-600" },
    { id: 4, emoji: "👩‍🏫", name: "Educator", color: "from-orange-400 to-red-600" },
    { id: 5, emoji: "👨‍🍳", name: "Chef", color: "from-yellow-400 to-orange-600" },
    { id: 6, emoji: "👩‍⚕️", name: "Healthcare", color: "from-cyan-400 to-blue-600" },
    { id: 7, emoji: "👨‍💻", name: "Developer", color: "from-indigo-400 to-purple-600" },
    { id: 8, emoji: "👩‍🎤", name: "Performer", color: "from-pink-400 to-rose-600" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            With <span className="italic font-serif">240+ content avatars</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our diverse library of AI avatars or create your own custom avatar
            that represents your brand perfectly
          </p>
        </div>

        {/* Avatar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto mb-12">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`bg-linear-to-br ${avatar.color} rounded-3xl aspect-square flex items-center justify-center text-6xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 transform`}>
                {avatar.emoji}
              </div>
              <div className="text-center mt-3">
                <div className="text-sm font-semibold text-gray-900">{avatar.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Grid Row for More Avatars */}
        <div className="flex justify-center gap-4 mb-12">
          {[9, 10, 11, 12].map((id) => (
            <div
              key={id}
              className="w-20 h-20 rounded-full bg-linear-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-lg"
            >
              <span className="text-3xl">+</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-black mb-2">240+</div>
            <div className="text-gray-600">Unique Avatars</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Languages</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">∞</div>
            <div className="text-gray-600">Customization</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Explore all avatars
          </button>
        </div>
      </div>
    </section>
  );
}

