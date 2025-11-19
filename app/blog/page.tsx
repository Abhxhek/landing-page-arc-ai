import { PageLayout } from "@/components/shared/page-layout";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Ways AI is Transforming Digital Marketing in 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses create and optimize their marketing campaigns.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "The Future of UGC Ads: Why AI-Generated Content is Winning",
      excerpt: "Learn why AI-generated user-generated content is outperforming traditional ad formats and how to leverage it.",
      author: "Marcus Johnson",
      date: "March 10, 2024",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "How to Create High-Converting Ads Without Breaking the Bank",
      excerpt: "Practical tips and strategies for creating effective ads on a budget using AI-powered tools.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Tips & Tricks",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "Case Study: How a Startup Increased Conversions by 300% with AI Ads",
      excerpt: "Real-world example of how a small business used AI-generated ads to dramatically improve their marketing ROI.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      readTime: "8 min read",
    },
    {
      title: "Understanding AI Avatars: A Complete Guide for Marketers",
      excerpt: "Everything you need to know about AI avatars, how they work, and how to use them effectively in your campaigns.",
      author: "Sarah Chen",
      date: "February 20, 2024",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      readTime: "10 min read",
    },
    {
      title: "5 Common Mistakes to Avoid When Creating AI Ads",
      excerpt: "Learn from others' mistakes and avoid these common pitfalls when creating AI-generated marketing content.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&h=600&fit=crop",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Marketing", "AI Technology", "Tips & Tricks", "Case Studies", "Tutorials", "Best Practices"];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights on AI-powered marketing
            </p>
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
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <User size={16} />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blogPosts[0].date}
                    </span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <button className="flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all w-fit">
                    Read Article <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest articles and insights delivered to your inbox
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

