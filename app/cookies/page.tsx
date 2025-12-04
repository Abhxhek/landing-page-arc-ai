import { PageLayout } from "@/components/shared/page-layout";
import { Cookie, Settings, Shield, Info } from "lucide-react";

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      icon: Shield,
      description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: [
        "Authentication cookies",
        "Session management cookies",
        "Security cookies",
      ],
      canDisable: false,
    },
    {
      name: "Analytics Cookies",
      icon: Info,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Page view tracking",
        "User behavior analysis",
        "Performance metrics",
      ],
      canDisable: true,
    },
    {
      name: "Functional Cookies",
      icon: Settings,
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: [
        "Language preferences",
        "Theme settings",
        "User preferences",
      ],
      canDisable: true,
    },
    {
      name: "Marketing Cookies",
      icon: Cookie,
      description: "These cookies are used to deliver relevant advertisements and track campaign effectiveness.",
      examples: [
        "Ad targeting",
        "Campaign tracking",
        "Conversion tracking",
      ],
      canDisable: true,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              This Cookie Policy explains what cookies are, how we use cookies on Zyka.ai, and your choices regarding
              cookies. By using our website, you consent to the use of cookies in accordance with this policy.
            </p>
          </div>

          {/* What are Cookies */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
              Cookies allow a website to recognize your device and store some information about your preferences or past actions.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-black">{type.name}</h3>
                          {!type.canDisable && (
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 mb-4">{type.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-black mb-2">Examples:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            {type.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you
              can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you
              from taking full advantage of our website.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold text-black">Browser Settings:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
              </ul>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics
              of the Service and deliver advertisements. These third parties may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for transaction processing</li>
              <li>Advertising networks for ad delivery</li>
              <li>Social media platforms for social sharing features</li>
            </ul>
          </div>

          {/* Cookie Preferences */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-6">
              You can customize your cookie preferences at any time using our cookie settings tool.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Cookie Settings
            </button>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
              new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 text-gray-700">
              <p>Email: privacy@zyka.ai</p>
              <p>Address: 123 Market St, San Francisco, CA 94105</p>
            </div>
          </div>

          {/* Copyright and Ownership */}
          <div className="mt-12 pt-8 border-t border-gray-200 ">
            <p className="text-gray-700 font-medium mb-2">
              All rights reserved by Richa Yashvant Singh
            </p>
            <p className="text-gray-700 font-medium">
              Zyka.ai is owned and managed by Richa Yashvant Singh
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

