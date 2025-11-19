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
    <section className="py-28 md:py-36 bg-gradient-to-b from-white via-[#fefcfb] to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black tracking-tight leading-tight">
            Recommended by <span className="italic font-serif font-normal">thought leaders</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Hear what industry experts and top marketers say about Zyka AI.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-[2rem] border border-gray-200 bg-white px-8 py-10 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.3)] hover:shadow-[0_25px_90px_-25px_rgba(15,23,42,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative ring-2 ring-black/5 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2 font-medium">Thought leader</p>
                  <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              {/* Quote decoration */}
              <div className="absolute top-6 right-8 text-7xl text-gray-100 font-serif leading-none select-none">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

