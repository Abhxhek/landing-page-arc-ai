"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Join our AI team to build cutting-edge models for content generation and video production.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Design intuitive and beautiful user experiences for our AI-powered ad creation platform.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead our marketing efforts and help grow our community of creators and businesses.",
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers succeed by providing exceptional support and guidance.",
  },
];

export default function CareersPage() {
  return (
    <InnerPageLayout
      title="Careers"
      description="Join our team and help shape the future of AI-powered content creation."
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Why Work at ZYKA AI?</h2>
          <p className="text-gray-300 leading-relaxed">
            We're building the future of content creation. Join a team of passionate innovators who are
            revolutionizing how businesses create video ads. We offer competitive compensation, flexible
            work arrangements, and the opportunity to work on cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="space-y-4">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <AnimatedButton
                  className="rounded-lg bg-blue-500 text-white hover:bg-blue-600 px-6 py-2"
                >
                  Apply Now
                </AnimatedButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}

