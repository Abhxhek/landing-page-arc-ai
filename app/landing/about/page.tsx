"use client";

import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";
import { Target, Users, Zap, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize professional ad creation by making AI-powered marketing accessible to businesses of all sizes.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of AI technology to deliver cutting-edge marketing solutions.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every feature we build starts with understanding our customers' needs and challenges.",
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We measure success by the growth and success of the businesses that use our platform.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  const stats = [
    { value: "500K+", label: "Active Users" },
    { value: "10M+", label: "Ads Created" },
    { value: "50+", label: "Countries" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About Zyka.ai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses create marketing content using
              the power of artificial intelligence.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 2022, Zyka.ai was born from a simple observation: creating effective
                    marketing ads shouldn't require expensive agencies, complex software, or weeks of
                    production time.
                  </p>
                  <p>
                    Our team of AI researchers, marketers, and engineers came together to build a
                    platform that makes professional ad creation accessible to everyone. Using
                    cutting-edge AI technology, we've enabled businesses to create authentic,
                    personalized UGC ads in minutes instead of months.
                  </p>
                  <p>
                    Today, we're proud to serve over 500,000 businesses worldwide, helping them
                    create millions of ads that drive real results.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-black text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-black text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the future of AI-powered marketing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/auth/login">
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

