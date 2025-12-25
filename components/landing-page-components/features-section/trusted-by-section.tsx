"use client"
import { motion } from "framer-motion";

interface Testimonial {
  company: string;
  quote: string;
  logo?: string;
}

const testimonials: Testimonial[] = [
  {
    company: "ZEO",
    quote: "Zyka is our unfair advantage. We launch ready-to-ship creative in hours, not weeks.",
  },
  {
    company: "Docscrib",
    quote: "It feels like hiring an entire creative studio that never sleeps.",
  },
  {
    company: "Konnector",
    quote: "The most realistic AI actors we've seen. Clients can't tell the difference.",
  },
  {
    company: "Trendoop",
    quote: "We test 20 creative angles a day. Zyka makes it financially possible.",
  },
];

export default function TrustedBySection() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="font-sans">Trusted by leading</span>{" "}
            <span className="font-serif">brands worldwide</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how top companies use Zyka AI to scale creative production and outperform their competitors.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200 text-6xl font-serif leading-none">
                "
              </div>

              {/* Company Label */}
              <p className="text-xs uppercase text-gray-400 mb-2 tracking-wider">
                COMPANY
              </p>

              {/* Company Name */}
              <h3 className="text-2xl font-bold mb-4 text-black">
                {testimonial.company}
              </h3>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

