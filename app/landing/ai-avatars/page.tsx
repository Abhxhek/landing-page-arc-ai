"use client";

import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";

export default function AIAvatarsPage() {
  const avatarCategories = [
    {
      name: "Business Professionals",
      count: 45,
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Lifestyle & Fashion",
      count: 38,
      avatars: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Tech & Gaming",
      count: 32,
      avatars: [
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Healthcare & Wellness",
      count: 28,
      avatars: [
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580489944761-15a19d654d0b?w=400&h=400&fit=crop",
      ],
    },
  ];

  const stats = [
    { label: "Total Avatars", value: "240+" },
    { label: "Languages", value: "50+" },
    { label: "Age Ranges", value: "18-65+" },
    { label: "Ethnicities", value: "Diverse" },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              AI Avatars Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our diverse collection of 240+ AI avatars representing different demographics,
              professions, and personas. Perfect for creating authentic UGC ads.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar Categories */}
          <div className="space-y-16 mb-20">
            {avatarCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-black">{category.name}</h2>
                  <span className="text-gray-600">{category.count} avatars</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.avatars.map((avatar, avatarIndex) => (
                    <div
                      key={avatarIndex}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Image
                        src={avatar}
                        alt={`${category.name} avatar ${avatarIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-semibold">Preview</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-black text-center mb-12">
              Why Choose Our AI Avatars?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Realistic & Natural",
                  description: "Our AI avatars look and sound completely natural, creating authentic connections with your audience.",
                },
                {
                  title: "Customizable",
                  description: "Adjust voice, accent, language, and appearance to match your brand and target audience.",
                },
                {
                  title: "Always Available",
                  description: "No scheduling conflicts or availability issues. Your avatars are ready 24/7.",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Explore Our Avatars?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating authentic ads with our AI avatar library
            </p>
            <a href="https://zyka.ai/login">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Browse All Avatars
              </button>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

