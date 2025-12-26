"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Key, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our infrastructure is hosted on enterprise-grade cloud platforms with 99.9% uptime SLA and regular security audits.",
  },
  {
    icon: Key,
    title: "Access Controls",
    description: "Multi-factor authentication and role-based access controls ensure only authorized users can access your data.",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "We follow privacy-by-design principles and only collect data necessary to provide our services.",
  },
  {
    icon: Shield,
    title: "Regular Security Audits",
    description: "We conduct regular security audits, penetration testing, and vulnerability assessments to maintain the highest security standards.",
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "We comply with GDPR, CCPA, and other major data protection regulations to ensure your data is handled responsibly.",
  },
];

export default function SecurityPage() {
  return (
    <InnerPageLayout
      title="Security"
      description="Learn about the security measures we implement to protect your data and content."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            At ZYKA AI, security is not an afterthought—it's built into every aspect of our platform.
            We understand that your content and data are valuable, and we're committed to protecting them
            with industry-leading security measures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Reporting Security Issues</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you discover a security vulnerability, please report it to us at security@zykaai.com.
            We take security issues seriously and will respond promptly to all reports.
          </p>
          <p className="text-gray-400 text-sm">
            We appreciate responsible disclosure and will work with security researchers to address
            any issues found.
          </p>
        </motion.div>
      </div>
    </InnerPageLayout>
  );
}

