"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.",
      "We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and usage patterns.",
      "We may collect information from third-party services that you connect to your account.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our services",
      "To process transactions and send related information",
      "To send you technical notices and support messages",
      "To respond to your comments and questions",
      "To monitor and analyze trends and usage",
      "To personalize and improve your experience",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties.",
      "We may share your information with service providers who perform services on our behalf.",
      "We may disclose your information if required by law or to protect our rights and safety.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information.",
      "However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information.",
      "You can opt out of certain communications from us.",
      "You can request a copy of your data or request data deletion at any time.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, please contact us at privacy@zykaai.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <InnerPageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. Learn how we collect, use, and protect your information."
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
            Last updated: January 2024
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            At ZYKA AI, we are committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our services.
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{section.title}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm sm:text-base text-gray-300 leading-relaxed flex items-start gap-2 sm:gap-3">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </InnerPageLayout>
  );
}

