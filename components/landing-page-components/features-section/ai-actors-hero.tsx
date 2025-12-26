"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LightPillar from "@/components/ui/LightPillar";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function AIActorsHero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-black relative overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          interactive={false}
          pillarRotation={45}
        />
      </div>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-white z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Name */}
          <p className="text-sm uppercase tracking-wider mb-6 text-white bg-white/10 inline px-4 py-2 rounded-full backdrop-blur-sm shadow-2xl">
            ZYKA AI STUDIO
          </p>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            The most lifelike and <span className="font-dancing">engaging AI Actors</span> available
          </h1>

          {/* Body Text */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Over 1,000 AI talents for every vertical — with localized voices, expressions, gestures, and pacing finely tuned to your brand.
          </p>

          {/* CTA Button */}
          <AnimatedButton
            icon={ArrowRight}
            iconPosition="right"
            align="center"
            className="px-8 py-8 text-lg rounded-2xl hover:bg-white bg-white text-black"
            onClick={() => window.open("https://create.zyka.ai/", "_blank", "noopener,noreferrer")}
          >
            Browse AI Actors
          </AnimatedButton>

        </motion.div>

        {/* Right Side - Phone Mockups */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md flex items-center justify-center min-h-[420px]">
            {/* Middle Phone (make as main central phone) */}
            <motion.div
              className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-[220px] h-[380px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/13.png"
                    alt="AI Actor"
                    width={220}
                    height={380}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-22 h-1 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>

            {/* Leftmost (rear), slightly left behind */}
            <motion.div
              className="absolute z-20 left-1/2 top-1/2 -translate-x-[85%] -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative w-[200px] h-[350px] bg-gray-900 rounded-[2.5rem] p-2 shadow-xl border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/14.png"
                    alt="AI Actor"
                    width={200}
                    height={350}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>

            {/* Rightmost (rear), slightly right behind */}
            <motion.div
              className="absolute z-10 left-1/2 top-1/2 -translate-x-[15%] -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative w-[180px] h-80 bg-gray-900 rounded-[2.5rem] p-2 shadow-lg border-2 border-gray-800">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-5 bg-black rounded-b-xl z-10"></div>
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                  <Image
                    src="https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/15.png"
                    alt="AI Actor"
                    width={180}
                    height={320}
                    className="w-full h-full object-cover"
                    loading="lazy"
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

