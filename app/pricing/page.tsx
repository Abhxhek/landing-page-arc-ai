import { PageLayout } from "@/components/shared/page-layout";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "50 AI-generated ads per month",
        "10 AI avatars",
        "Basic templates library",
        "Email support",
        "HD video quality",
        "1 user account",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For growing marketing teams",
      features: [
        "500 AI-generated ads per month",
        "50 AI avatars",
        "Premium templates library",
        "Priority email support",
        "4K video quality",
        "5 user accounts",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Unlimited AI-generated ads",
        "240+ AI avatars",
        "Custom templates",
        "24/7 dedicated support",
        "4K video quality",
        "Unlimited user accounts",
        "Advanced analytics & reporting",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular
                    ? "border-black scale-105 relative"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-colors ${
                    plan.popular
                      ? "bg-black text-white hover:bg-gray-900"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "We offer a 14-day money-back guarantee for all new subscriptions.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 7-day free trial. No credit card required.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-black mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

