import { PageLayout } from "@/components/shared/page-layout";
import { Shield, Lock, Download, Eye, Trash2, FileText } from "lucide-react";

export default function GDPRPage() {
  const rights = [
    {
      title: "Right to Access",
      icon: Eye,
      description: "You have the right to request copies of your personal data that we hold.",
    },
    {
      title: "Right to Rectification",
      icon: FileText,
      description: "You have the right to request correction of inaccurate or incomplete data.",
    },
    {
      title: "Right to Erasure",
      icon: Trash2,
      description: "You have the right to request deletion of your personal data under certain circumstances.",
    },
    {
      title: "Right to Data Portability",
      icon: Download,
      description: "You have the right to receive your data in a structured, commonly used format.",
    },
    {
      title: "Right to Object",
      icon: Shield,
      description: "You have the right to object to processing of your personal data for certain purposes.",
    },
    {
      title: "Right to Restrict Processing",
      icon: Lock,
      description: "You have the right to request restriction of processing your personal data.",
    },
  ];

  return (
    <PageLayout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              GDPR Compliance
            </h1>
            <p className="text-lg text-gray-600">
              Your data protection rights under the General Data Protection Regulation
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Zyka.ai is committed to compliance with the General Data Protection Regulation (GDPR) and respects your
              privacy rights. This page explains your rights under GDPR and how we protect and process your personal data.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">Your Rights Under GDPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, index) => {
                const IconComponent = right.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{right.title}</h3>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Consent:</strong> When you have given clear consent for us to process your data</li>
              <li><strong>Contract:</strong> When processing is necessary for a contract with you</li>
              <li><strong>Legal Obligation:</strong> When we need to comply with a legal obligation</li>
              <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests</li>
            </ul>
          </div>

          {/* Data Processing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">How We Process Your Data</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Data Collection</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect personal data that you provide directly (name, email, payment information) and data
                  generated through your use of our services (usage patterns, preferences, content created).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Data Storage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data is stored securely on servers located within the European Economic Area (EEA) or in
                  countries that provide adequate data protection safeguards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Data Retention</h3>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in our
                  Privacy Policy, unless a longer retention period is required by law.
                </p>
              </div>
            </div>
          </div>

          {/* Exercising Your Rights */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of your GDPR rights, please contact us using one of the following methods:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
              <li>Email us at: <strong>privacy@zyka.ai</strong></li>
              <li>Submit a request through your account settings</li>
              <li>Write to us at: 123 Market St, San Francisco, CA 94105</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We will respond to your request within 30 days. If your request is complex, we may extend this period
              by an additional 60 days, and we will inform you of this extension.
            </p>
          </div>

          {/* Data Protection Officer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Data Protection Officer</h2>
            <p className="text-gray-700 leading-relaxed">
              We have appointed a Data Protection Officer (DPO) to oversee compliance with GDPR. You can contact our
              DPO directly at:
            </p>
            <div className="mt-4 text-gray-700">
              <p>Email: dpo@zyka.ai</p>
              <p>Address: 123 Market St, San Francisco, CA 94105</p>
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Right to Lodge a Complaint</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe that we have not addressed your concerns or have violated your data protection rights,
              you have the right to lodge a complaint with your local data protection authority. For EU residents, you
              can find your local authority at the European Data Protection Board website.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this GDPR information page from time to time to reflect changes in our practices or
              applicable laws. We will notify you of any material changes by posting the updated information on this page.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-gradient-to-r from-black to-gray-900 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About GDPR?</h2>
            <p className="text-gray-300 mb-6">
              Our privacy team is here to help answer any questions about your data protection rights.
            </p>
            <a
              href="mailto:privacy@zyka.ai"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Privacy Team
            </a>
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

