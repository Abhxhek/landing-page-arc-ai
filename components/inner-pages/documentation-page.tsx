"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Book, Code, Video, Settings, Users, Zap } from "lucide-react";

const docsCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics and create your first AI-powered ad",
    links: [
      "Quick Start Guide",
      "Account Setup",
      "Creating Your First Ad",
      "Understanding the Dashboard",
    ],
  },
  {
    icon: Video,
    title: "Video Creation",
    description: "Master video ad creation with our comprehensive guides",
    links: [
      "Video Editor Basics",
      "AI Avatar Selection",
      "Adding Voiceovers",
      "Export Settings",
    ],
  },
  {
    icon: Code,
    title: "API Documentation",
    description: "Integrate ZYKA AI into your applications",
    links: [
      "API Overview",
      "Authentication",
      "Endpoints Reference",
      "SDKs & Libraries",
    ],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize your workspace and preferences",
    links: [
      "Account Settings",
      "Team Management",
      "Billing & Plans",
      "Integrations",
    ],
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work together with your team effectively",
    links: [
      "Team Workspaces",
      "Sharing & Permissions",
      "Comments & Feedback",
      "Version Control",
    ],
  },
  {
    icon: Zap,
    title: "Best Practices",
    description: "Tips and tricks to maximize your results",
    links: [
      "Optimizing Ad Performance",
      "A/B Testing Guide",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
];

export default function DocumentationPage() {
  return (
    <InnerPageLayout
      title="Documentation"
      description="Comprehensive guides and resources to help you get the most out of ZYKA AI."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {docsCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <category.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{category.description}</p>
            <ul className="space-y-2">
              {category.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </InnerPageLayout>
  );
}

