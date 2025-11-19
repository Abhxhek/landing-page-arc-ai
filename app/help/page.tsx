import { PageLayout } from "@/components/shared/page-layout";
import { Search, Book, MessageCircle, Video, FileText, HelpCircle } from "lucide-react";

export default function HelpPage() {
  const categories = [
    {
      name: "Getting Started",
      icon: Book,
      articles: [
        "How to create your first ad",
        "Setting up your account",
        "Understanding AI avatars",
        "Choosing the right template",
      ],
    },
    {
      name: "Account & Billing",
      icon: FileText,
      articles: [
        "Managing your subscription",
        "Upgrading your plan",
        "Payment methods",
        "Canceling your account",
      ],
    },
    {
      name: "Creating Ads",
      icon: Video,
      articles: [
        "Writing effective ad scripts",
        "Customizing avatars",
        "Using templates",
        "Exporting your ads",
      ],
    },
    {
      name: "Troubleshooting",
      icon: HelpCircle,
      articles: [
        "Video generation issues",
        "Account access problems",
        "Payment errors",
        "Quality concerns",
      ],
    },
  ];

  const popularArticles = [
    {
      title: "How do I create my first AI ad?",
      category: "Getting Started",
      views: "12.5K",
    },
    {
      title: "What video formats are supported?",
      category: "Creating Ads",
      views: "8.3K",
    },
    {
      title: "How to cancel my subscription",
      category: "Account & Billing",
      views: "6.1K",
    },
    {
      title: "Why is my video taking so long to generate?",
      category: "Troubleshooting",
      views: "5.7K",
    },
    {
      title: "Can I use my own voice?",
      category: "Creating Ads",
      views: "4.9K",
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions and learn how to get the most out of Zyka.ai
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-black text-lg"
                />
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">{article.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <button className="text-black font-semibold hover:underline">
                      Read →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-black transition-colors text-sm"
                          >
                            {article}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-white text-center">
            <MessageCircle className="mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

