import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";
import { Calendar, Clock, Users, Video, Play } from "lucide-react";

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: "AI Marketing Masterclass: Advanced Strategies",
      date: "March 25, 2024",
      time: "2:00 PM PST",
      duration: "60 min",
      speaker: "Sarah Chen, CEO",
      attendees: 234,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      description: "Learn advanced AI marketing strategies used by top brands to drive conversions.",
    },
    {
      title: "Building Your First AI Ad Campaign",
      date: "April 2, 2024",
      time: "11:00 AM PST",
      duration: "45 min",
      speaker: "Marcus Johnson, CTO",
      attendees: 189,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "A beginner-friendly session on creating your first successful AI ad campaign.",
    },
    {
      title: "ROI Optimization with AI Ads",
      date: "April 10, 2024",
      time: "3:00 PM PST",
      duration: "60 min",
      speaker: "Emily Rodriguez, Head of Product",
      attendees: 156,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Discover how to maximize ROI and optimize your ad spend with AI-powered insights.",
    },
  ];

  const pastWebinars = [
    {
      title: "The Future of UGC Marketing",
      date: "March 15, 2024",
      views: "1.2K",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      duration: "55 min",
    },
    {
      title: "Scaling Your Marketing with AI",
      date: "March 1, 2024",
      views: "890",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      duration: "48 min",
    },
    {
      title: "Case Study: 300% Conversion Increase",
      date: "February 20, 2024",
      views: "1.5K",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&h=600&fit=crop",
      duration: "42 min",
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Webinars
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join live sessions with industry experts and learn from real-world case studies
            </p>
          </div>

          {/* Upcoming Webinars */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Live Soon
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{webinar.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} />
                        <span>{webinar.attendees} registered</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Speaker:</span> {webinar.speaker}
                      </div>
                    </div>
                    <button className="w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">Past Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="relative h-48">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="text-black ml-1" size={24} fill="black" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Clock size={12} />
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{webinar.date}</span>
                      <span className="flex items-center gap-1">
                        <Video size={16} />
                        {webinar.views} views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Never Miss a Webinar</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about upcoming webinars and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-black"
              />
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

