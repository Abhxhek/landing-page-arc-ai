"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudioSections() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-black">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - STUDIO • CAPTURE */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-fit text-sm uppercase text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm shadow-2xl">
            STUDIO • CAPTURE
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Create your own AI Actor
          </h2>
          <p className="text-gray-300 text-sm">
            Generate realistic AI faces and video from your photos, videos and even your voice.
          </p>

          {/* Example Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://zyka-ai.s3.ap-south-1.amazonaws.com/Ai+Img/11.png"
                alt="AI Actor 1"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white">AI ACTOR 1</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="https://zyka-ai.s3.ap-south-1.amazonaws.com/Ai+Img/12.png"
                alt="AI Actor 2"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white">AI ACTOR 2</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - STUDIO • EDIT */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-fit text-sm uppercase text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm shadow-2xl">
            STUDIO • EMOTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            AI Emotions videos
          </h2>
          <p className="text-gray-300 text-sm">
            Infuse your videos with lifelike AI-driven emotions for captivating performances.
          </p>

          {/* Example Videos */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white/10  w-[274px] h-[424px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <video
                src="https://zyka-ai.s3.ap-south-1.amazonaws.com/Expression+videos/Laughing.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white">Laughing</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white/10  w-[274px] h-[424px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <video
                src="https://zyka-ai.s3.ap-south-1.amazonaws.com/Expression+videos/Crying.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white">Crying</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

