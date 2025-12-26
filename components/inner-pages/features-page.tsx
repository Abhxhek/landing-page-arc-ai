"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, BarChart, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Creation",
    description: "Generate compelling ad content with advanced AI that understands your brand voice and target audience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Production",
    description: "Create professional ads in minutes, not weeks. Speed up your marketing workflow dramatically.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data and content are protected with bank-level security and compliance standards.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Reach global audiences with automatic translation and localization features.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Track performance metrics and optimize your campaigns with real-time insights.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with shared workspaces and real-time collaboration.",
  },
];

export default function FeaturesPage() {
  return (
    <InnerPageLayout
      title="Features"
      description="Discover the powerful features that make ZYKA AI the leading platform for AI-powered ad creation."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </InnerPageLayout>
  );
}

