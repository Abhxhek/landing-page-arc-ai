"use client"

import InnerPageLayout from "@/components/layouts/inner-page-layout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useBookingModal } from "@/components/shared/booking-modal-provider";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for individuals and small teams",
    features: [
      "10 AI avatars",
      "50 ad generations per month",
      "Basic templates",
      "Email support",
      "HD video export",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited AI avatars",
      "500 ad generations per month",
      "Premium templates",
      "Priority support",
      "4K video export",
      "Advanced analytics",
      "Team collaboration (up to 5 users)",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited ad generations",
      "Custom AI avatar creation",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Unlimited team members",
      "White-label options",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const { openModal } = useBookingModal();

  return (
    <InnerPageLayout
      title="Pricing"
      description="Choose the perfect plan for your needs. All plans include a 14-day free trial."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
              plan.popular
                ? "border-blue-500 shadow-lg shadow-blue-500/20 scale-105"
                : "border-gray-700/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <AnimatedButton
              className={`w-full rounded-lg py-3 font-semibold ${
                plan.popular
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
              onClick={openModal}
            >
              Get Started
            </AnimatedButton>
          </motion.div>
        ))}
      </div>
    </InnerPageLayout>
  );
}

