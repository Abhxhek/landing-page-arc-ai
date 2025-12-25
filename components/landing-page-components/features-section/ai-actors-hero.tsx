"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AIActorsHero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-r from-black via-black to-purple-900/20 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-white z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Name */}
          <p className="text-sm uppercase tracking-wider mb-6 text-gray-400">
            ZYKA AI STUDIO
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The most lifelike
            <br />
            and <span className="italic">engaging</span> AI
            <br />
            actors available
          </h1>

          {/* Body Text */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Over 1,000 AI talents for every vertical — with localized voices, expressions, gestures, and pacing finely tuned to your brand.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Browse AI Actors
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Side - Phone Mockups */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Frontmost Phone */}
            <motion.div
              className="absolute z-30"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-[220px] h-[380px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="/img1.jpg"
                    alt="AI Actor"
                    width={220}
                    height={380}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-22 h-1 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>

            {/* Middle Phone */}
            <motion.div
              className="absolute z-20 translate-x-8 translate-y-8"
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative w-[200px] h-[350px] bg-gray-900 rounded-[2.5rem] p-2 shadow-xl border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="/img2.jpg"
                    alt="AI Actor"
                    width={200}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>

            {/* Rearmost Phone */}
            <motion.div
              className="absolute z-10 translate-x-16 translate-y-16"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative w-[180px] h-[320px] bg-gray-900 rounded-[2.5rem] p-2 shadow-lg border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-5 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="/img3.jpg"
                    alt="AI Actor"
                    width={180}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-18 h-1 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

