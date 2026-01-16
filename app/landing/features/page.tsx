"use client";

import { PageLayout } from "@/components/shared/page-layout";
import { Sparkles, Zap, Users, BarChart3, Shield, Globe } from "lucide-react";
import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Ad Creation",
      description: "Generate professional UGC ads in seconds using advanced AI technology. No design skills required.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      icon: Zap,
      title: "Lightning Fast Generation",
      description: "Create multiple ad variations in minutes, not days. Speed up your marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      icon: Users,
      title: "240+ AI Avatars",
      description: "Choose from our diverse library of AI avatars representing different demographics and personas.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your ad performance with detailed analytics and insights to optimize your campaigns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance. Your data and campaigns are always protected.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create ads in 50+ languages with native accents and cultural nuances.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Powerful Features for AI Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your AI-powered marketing campaigns
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of marketers creating winning ads with AI
            </p>
            <a href="https://zyka.ai/auth/login">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

