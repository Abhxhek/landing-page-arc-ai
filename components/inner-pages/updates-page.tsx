"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

const updates = [
  {
    date: "2024-01-15",
    title: "New AI Avatar Library",
    description: "We've added 200+ new AI avatars to our library, including diverse characters and professional models.",
    category: "Feature",
  },
  {
    date: "2024-01-10",
    title: "Enhanced Video Export Quality",
    description: "Now export your ads in 4K resolution with improved rendering speed and quality.",
    category: "Improvement",
  },
  {
    date: "2024-01-05",
    title: "Multi-Language Support",
    description: "Added support for 15+ languages with automatic translation and voice-over generation.",
    category: "Feature",
  },
  {
    date: "2023-12-28",
    title: "Team Collaboration Tools",
    description: "New collaboration features including shared workspaces, comments, and real-time editing.",
    category: "Feature",
  },
  {
    date: "2023-12-20",
    title: "Performance Improvements",
    description: "Optimized rendering engine for 3x faster ad generation and reduced processing time.",
    category: "Improvement",
  },
];

export default function UpdatesPage() {
  return (
    <InnerPageLayout
      title="Updates & Changelog"
      description="Stay up to date with the latest features, improvements, and announcements."
    >
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2 sm:px-0">
        {updates.map((update, index) => (
          <motion.div
            key={update.date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                    {update.category}
                  </span>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{new Date(update.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{update.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{update.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </InnerPageLayout>
  );
}

