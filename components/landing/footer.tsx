import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "AI Avatars", href: "/ai-avatars" },
      { name: "Templates", href: "/templates" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Help Center", href: "/help" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Webinars", href: "/webinars" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter },
    { name: "LinkedIn", icon: Linkedin },
    { name: "Instagram", icon: Instagram },
    { name: "YouTube", icon: Youtube },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#fefcfb] pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="text-3xl font-bold text-black">zyka.ai</span>
            </div>
            <p className="text-gray-600 text-base mb-8 leading-relaxed max-w-sm">
              Create high-performing ads with AI — featuring ultra-realistic, personalized UGC tailored to your marketing campaigns.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="w-11 h-11 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 text-gray-700 hover:scale-110 shadow-sm hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-6 text-black">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors text-base font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-sm font-medium">
              © {currentYear} Zyka. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-black transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-black transition-colors font-medium">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

