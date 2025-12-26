"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Target, Users, Rocket, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize professional video ad creation by making it accessible, fast, and affordable for businesses of all sizes.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of AI technology to deliver cutting-edge solutions that transform how businesses create content.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your success is our success. We're committed to providing exceptional support and continuously improving based on your feedback.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service, ensuring you get the best experience possible.",
  },
];

export default function AboutPage() {
  return (
    <InnerPageLayout
      title="About Us"
      description="Learn more about ZYKA AI and our mission to revolutionize video ad creation."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            ZYKA AI was founded with a simple yet powerful vision: to make professional video ad creation
            accessible to everyone. We recognized that creating high-quality video ads was time-consuming,
            expensive, and required specialized skills that many businesses didn't have.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            By leveraging cutting-edge AI technology, we've built a platform that enables businesses to
            create stunning video ads in minutes, not weeks. Our AI-powered tools handle everything from
            script generation to avatar selection, voice-over creation, and video production.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Today, thousands of businesses trust ZYKA AI to create their video ads, saving time and money
            while achieving professional results. We're proud to be at the forefront of the AI content
            creation revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}

