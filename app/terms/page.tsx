import { PageLayout } from "@/components/shared/page-layout";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: `By accessing and using Zyka.ai, you accept and agree to be bound by the terms and provision of this agreement.
      
If you do not agree to these Terms of Service, please do not use our platform.`,
    },
    {
      title: "Use License",
      icon: FileText,
      content: `Permission is granted to temporarily access and use Zyka.ai for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose without our written consent
- Attempt to reverse engineer any software contained on the platform
- Remove any copyright or other proprietary notations from the materials`,
    },
    {
      title: "User Accounts",
      icon: AlertCircle,
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
- Maintaining the confidentiality of your account and password
- All activities that occur under your account
- Notifying us immediately of any unauthorized use
- Ensuring you are at least 18 years old`,
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: `The platform and its original content, features, and functionality are owned by Zyka.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You retain ownership of content you create using our platform, but grant us a license to use, store, and process your content as necessary to provide our services.`,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of Zyka.ai's website and services
              (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              If you disagree with any part of these terms, you may not access the Service.
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
              <h2 className="text-2xl font-bold text-black mb-4">Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is offered with various subscription plans. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Automatic renewal unless cancelled before the billing period</li>
                <li>No refunds for partial billing periods</li>
                <li>Price changes with 30 days notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To transmit viruses or malicious code</li>
                <li>To infringe upon intellectual property rights</li>
                <li>To harass, abuse, or harm other users</li>
                <li>To create misleading or fraudulent content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to ensure our Service is available 24/7, but we do not guarantee uninterrupted access.
                We may perform maintenance, updates, or experience technical issues that temporarily affect
                availability. We are not liable for any downtime or service interruptions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Zyka.ai, its directors, employees, or partners be liable for any indirect,
                incidental, special, consequential, or punitive damages, including without limitation, loss of
                profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice,
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                You may also terminate your account at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes
                by posting the new Terms on this page and updating the "Last updated" date. Your continued use of
                the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions. Any disputes arising from these Terms or your use
                of the Service shall be resolved in the courts of San Francisco, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: legal@zyka.ai</p>
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

