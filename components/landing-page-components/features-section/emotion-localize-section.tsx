"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmotionLocalizeSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gray-900">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Emotion Control */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Emotion Control
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            You have full emotion control. Just select from our presets.
          </p>

          {/* Example Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/img2.jpg"
                alt="Calm emotion"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white font-semibold">CALM</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/img3.jpg"
                alt="Excited emotion"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white font-semibold">EXCITED</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Localize in every language */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Localize in every language
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Automatic translation into 50+ languages. Reach the world.
          </p>

          {/* Example Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/img4.jpg"
              alt="Localized content"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-4 right-4">
              <p className="text-3xl font-bold text-white mb-2">50+ Languages</p>
              <p className="text-sm text-white/90 uppercase tracking-wider">INSTANTLY LOCALIZED</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

