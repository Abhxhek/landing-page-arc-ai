import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Cooper",
      role: "Founder @ Adcrate",
      company: "Adcrate",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      quote: "Zyka is our unfair advantage. We launch ready-to-ship creative in hours, not weeks.",
    },
    {
      id: 2,
      name: "Greg Isenberg",
      role: "CEO @ Late Checkout",
      company: "Late Checkout",
      image: "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      quote: "It feels like hiring an entire creative studio that never sleeps.",
    },
    {
      id: 3,
      name: "Sam Piliero",
      role: "CEO @ The Moonlighters",
      company: "The Moonlighters",
      image: "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      quote: "The most realistic AI actors we’ve seen. Clients can’t tell the difference.",
    },
    {
      id: 4,
      name: "Devon Lane",
      role: "CMO @ Gumption",
      company: "Gumption",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      quote: "We test 20 creative angles a day. Zyka makes it financially possible.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black tracking-tight">
            Recommended by <span className="italic">thought leaders</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Hear what industry experts and top marketers say about Zyka AI.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-4 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-1 items-center gap-4 rounded-2xl border border-gray-200 bg-white/90 px-5 py-4 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)]"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-black/5">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                  unoptimized
                />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">Thought leader</p>
                <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                <p className="text-xs text-gray-500">{testimonial.role} · {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

