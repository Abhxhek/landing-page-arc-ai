"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Tips for Creating High-Converting Video Ads",
    excerpt: "Learn the proven strategies that top marketers use to create video ads that drive results and boost conversions.",
    author: "Sarah Johnson",
    date: "2024-01-20",
    category: "Marketing",
    readTime: "5 min read",
  },
  {
    title: "The Future of AI in Content Creation",
    excerpt: "Explore how AI is transforming the content creation landscape and what it means for marketers and creators.",
    author: "Michael Chen",
    date: "2024-01-18",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "How to Choose the Right AI Avatar for Your Brand",
    excerpt: "A comprehensive guide to selecting AI avatars that align with your brand identity and resonate with your audience.",
    author: "Emily Rodriguez",
    date: "2024-01-15",
    category: "Design",
    readTime: "4 min read",
  },
  {
    title: "Video Ad Performance: Metrics That Matter",
    excerpt: "Understand which metrics to track and how to optimize your video ads for maximum performance and ROI.",
    author: "David Kim",
    date: "2024-01-12",
    category: "Analytics",
    readTime: "6 min read",
  },
  {
    title: "Scaling Your Ad Production with AI",
    excerpt: "Discover how businesses are using AI to scale their ad production without compromising on quality or creativity.",
    author: "Lisa Anderson",
    date: "2024-01-10",
    category: "Business",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <InnerPageLayout
      title="Blog"
      description="Insights, tips, and stories about AI-powered content creation and digital marketing."
    >
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2 sm:px-0">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold mb-2 sm:mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
            </div>
          </motion.article>
        ))}
      </div>
    </InnerPageLayout>
  );
}

