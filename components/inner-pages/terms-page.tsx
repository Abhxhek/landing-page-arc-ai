"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using ZYKA AI, you accept and agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, you may not use our services.",
    ],
  },
  {
    title: "Use of Service",
    content: [
      "You must be at least 18 years old to use our services.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree to use our services only for lawful purposes and in accordance with these Terms.",
      "You may not use our services to create content that is illegal, harmful, or violates any rights.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content and materials available on ZYKA AI are protected by copyright, trademark, and other intellectual property laws.",
      "You retain ownership of content you create using our services, but grant us a license to use it for service provision.",
      "You may not copy, modify, or distribute our proprietary content without permission.",
    ],
  },
  {
    title: "Payment and Billing",
    content: [
      "Subscription fees are billed in advance on a monthly or annual basis.",
      "All fees are non-refundable except as required by law.",
      "We reserve the right to change our pricing with 30 days notice.",
      "You are responsible for any taxes applicable to your use of our services.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "ZYKA AI is provided 'as is' without warranties of any kind.",
      "We are not liable for any indirect, incidental, or consequential damages.",
      "Our total liability is limited to the amount you paid us in the 12 months preceding the claim.",
    ],
  },
  {
    title: "Termination",
    content: [
      "We may terminate or suspend your account at any time for violation of these Terms.",
      "You may cancel your subscription at any time through your account settings.",
      "Upon termination, your right to use the service will immediately cease.",
    ],
  },
];

export default function TermsPage() {
  return (
    <InnerPageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using ZYKA AI services."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            Last updated: January 2024
          </p>
          <p className="text-gray-300 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of ZYKA AI's services. By using
            our services, you agree to be bound by these Terms.
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
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

