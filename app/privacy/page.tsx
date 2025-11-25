import { PageLayout } from "@/components/shared/page-layout";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: `We collect information that you provide directly to us, including:
- Account information (name, email, password)
- Payment information (processed securely through third-party providers)
- Content you create (ad scripts, videos, templates)
- Usage data (how you interact with our platform)
- Device information (browser type, IP address)`,
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: `We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send technical notices and support messages
- Respond to your comments and questions
- Monitor and analyze trends and usage
- Detect, prevent, and address technical issues`,
    },
    {
      title: "Data Security",
      icon: Lock,
      content: `We implement appropriate technical and organizational measures to protect your personal information:
- Encryption of data in transit and at rest
- Regular security assessments and updates
- Access controls and authentication
- Secure data storage and backup procedures
- Employee training on data protection`,
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: `You have the right to:
- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Object to processing of your data
- Data portability
- Withdraw consent at any time`,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Zyka.ai ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our AI-powered
              marketing platform. Please read this policy carefully to understand our practices regarding your data.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12 mb-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our platform and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect
                personal information from children. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: privacy@zyka.ai</p>
                <p>Address: 123 Market St, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Copyright and Ownership */}
          <div className="mt-12 pt-8 border-t border-gray-200">
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

