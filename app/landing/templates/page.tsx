"use client";

import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

export default function TemplatesPage() {
  const templateCategories = [
    {
      name: "Product Launches",
      count: 24,
      templates: [
        {
          title: "Tech Product Reveal",
          image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
          duration: "30s",
        },
        {
          title: "Fashion Collection",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
          duration: "45s",
        },
        {
          title: "App Introduction",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
          duration: "30s",
        },
        {
          title: "Beauty Product Demo",
          image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
          duration: "45s",
        },
      ],
    },
    {
      name: "Testimonials",
      count: 18,
      templates: [
        {
          title: "Customer Success Story",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
          duration: "60s",
        },
        {
          title: "Before & After",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          duration: "45s",
        },
        {
          title: "Expert Review",
          image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=600&h=400&fit=crop",
          duration: "60s",
        },
        {
          title: "User Experience",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
          duration: "45s",
        },
      ],
    },
    {
      name: "Educational Content",
      count: 22,
      templates: [
        {
          title: "How-To Tutorial",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
          duration: "90s",
        },
        {
          title: "Tips & Tricks",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
          duration: "60s",
        },
        {
          title: "Quick Guide",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
          duration: "45s",
        },
        {
          title: "Expert Advice",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
          duration: "60s",
        },
      ],
    },
    {
      name: "Promotional",
      count: 20,
      templates: [
               {
          title: "Flash Sale Announcement",
          image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop",
          duration: "30s",
        },
        {
          title: "Limited Time Offer",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          duration: "30s",
        },
        {
          title: "New Feature Launch",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
          duration: "45s",
        },
        {
          title: "Brand Story",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          duration: "60s",
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Ad Templates Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from hundreds of professionally designed templates. Customize them with your brand
              and start creating winning ads in minutes.
            </p>
          </div>

          {/* Template Categories */}
          <div className="space-y-16 mb-20">
            {templateCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-black">{category.name}</h2>
                  <span className="text-gray-600">{category.count} templates</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.templates.map((template, templateIndex) => (
                    <div
                      key={templateIndex}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={template.image}
                          alt={template.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="text-black ml-1" size={24} fill="black" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {template.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-black mb-1">{template.title}</h3>
                        <p className="text-sm text-gray-600">Click to customize</p>
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
              Why Use Our Templates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Save Time",
                  description: "Start with proven templates instead of building from scratch. Get to market faster.",
                },
                {
                  title: "Professional Quality",
                  description: "Every template is designed by marketing experts and optimized for conversions.",
                },
                {
                  title: "Fully Customizable",
                  description: "Easily customize colors, fonts, avatars, and scripts to match your brand.",
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
            <h2 className="text-4xl font-bold mb-4">Start Creating Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Browse our template library and create your first ad in minutes
            </p>
            <Link href="/auth/login">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Explore Templates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

