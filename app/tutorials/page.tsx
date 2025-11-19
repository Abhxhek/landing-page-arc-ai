import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";
import { Play, Clock, Users, BookOpen } from "lucide-react";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started: Your First AI Ad in 5 Minutes",
      description: "Learn the basics of creating your first AI-generated ad from scratch.",
      duration: "5 min",
      level: "Beginner",
      views: "12.5K",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      category: "Getting Started",
    },
    {
      title: "Writing Compelling Ad Scripts",
      description: "Master the art of writing scripts that convert and engage your audience.",
      duration: "12 min",
      level: "Intermediate",
      views: "8.3K",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "Content Creation",
    },
    {
      title: "Choosing the Right AI Avatar",
      description: "Select the perfect avatar that resonates with your target audience.",
      duration: "8 min",
      level: "Beginner",
      views: "6.7K",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      category: "Best Practices",
    },
    {
      title: "Advanced Customization Techniques",
      description: "Take your ads to the next level with advanced customization options.",
      duration: "15 min",
      level: "Advanced",
      views: "4.2K",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Advanced",
    },
    {
      title: "A/B Testing Your Ads",
      description: "Learn how to test and optimize your ads for maximum performance.",
      duration: "10 min",
      level: "Intermediate",
      views: "5.1K",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Optimization",
    },
    {
      title: "Integrating with Your Marketing Stack",
      description: "Connect Zyka.ai with your existing tools and workflows.",
      duration: "18 min",
      level: "Intermediate",
      views: "3.8K",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Integrations",
    },
  ];

  const categories = [
    { name: "All", count: 24 },
    { name: "Getting Started", count: 6 },
    { name: "Content Creation", count: 5 },
    { name: "Best Practices", count: 4 },
    { name: "Advanced", count: 3 },
    { name: "Optimization", count: 3 },
    { name: "Integrations", count: 3 },
  ];

  const learningPaths = [
    {
      title: "Beginner Path",
      description: "Start your journey with AI marketing",
      courses: 6,
      duration: "45 min",
      icon: BookOpen,
    },
    {
      title: "Intermediate Path",
      description: "Level up your marketing skills",
      courses: 8,
      duration: "2 hours",
      icon: Users,
    },
    {
      title: "Advanced Path",
      description: "Master advanced techniques",
      courses: 5,
      duration: "3 hours",
      icon: Play,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Video Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to create winning ads with step-by-step video tutorials
            </p>
          </div>

          {/* Learning Paths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {learningPaths.map((path, index) => {
              const IconComponent = path.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-300 mb-4">{path.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span>{path.courses} courses</span>
                    <span>•</span>
                    <span>{path.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="text-black ml-1" size={24} fill="black" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tutorial.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tutorial.level === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : tutorial.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{tutorial.views} views</span>
                    <button className="text-black font-semibold hover:underline">
                      Watch →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Learn?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start watching tutorials and master AI-powered ad creation
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Browse All Tutorials
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

