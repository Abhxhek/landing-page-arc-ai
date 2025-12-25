"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudioSections() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-black">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - STUDIO • CAPTURE */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">
            STUDIO • CAPTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Create your own AI Actor
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Generate realistic AI faces and video from your photos, videos and even your voice.
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
                src="/img4.jpg"
                alt="AI Actor 1"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white font-semibold">AI ACTOR 1</p>
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
                src="/img5.jpg"
                alt="AI Actor 2"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white font-semibold">AI ACTOR 2</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - STUDIO • EDIT */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">
            STUDIO • EDIT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Video Editing
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Add AI-FX, music, gestures and voiceovers to your videos.
          </p>

          {/* Example Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/img6.jpg"
                alt="AI FX & Gestures"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white font-semibold">AI FX & GESTURES</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src="/img1.jpg"
                alt="AI Video Editing"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white font-semibold">AI VIDEO EDITING</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

