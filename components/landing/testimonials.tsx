import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      company: "ZEO",
      image: "https://zeorouteplanner.com/wp-content/uploads/2022/11/zeo.png",
      quote: "Zyka is our unfair advantage. We launch ready-to-ship creative in hours, not weeks.",
    },
    {
      id: 2,
      company: "Docscrib",
      image: "/logo.png",
      quote: "It feels like hiring an entire creative studio that never sleeps.",
    },
    {
      id: 3,
      company: "Konnector",
      image: "https://konnector.ai/wp-content/uploads/2023/11/logo-1.png",
      quote: "The most realistic AI actors we’ve seen. Clients can’t tell the difference.",
    },
    {
      id: 4,
      company: "Trendoop",
      image: "/logo-4.png",
      quote: "We test 20 creative angles a day. Zyka makes it financially possible.",
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-white via-[#fefcfb] to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black tracking-tight leading-tight">
            Trusted by leading <span className="italic font-serif font-normal">brands worldwide</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            See how top companies use Zyka AI to scale creative production and outperform their competitors.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-4xl border border-gray-200 bg-white px-8 py-10 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.3)] hover:shadow-[0_25px_90px_-25px_rgba(15,23,42,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-5 mb-6">
                
                {/* Avatar */}
                {/* <div className="w-16 h-16 rounded-full overflow-hidden relative ring-2 ring-black/5 flex-shrink-0"> */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    // fill
                    width={50}
                    height={100}
                    className="object-cover"
                    unoptimized
                  />
                {/* </div> */}

                {/* Company Name */}
                <div className="flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2 font-medium">
                    Company
                  </p>
                  <p className="text-xs font-medium text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Quote */}
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
