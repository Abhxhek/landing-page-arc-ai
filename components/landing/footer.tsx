export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "AI Avatars", href: "#avatars" },
      { name: "Templates", href: "#templates" },
      { name: "API", href: "#api" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "Documentation", href: "#docs" },
      { name: "Community", href: "#community" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Webinars", href: "#webinars" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "Instagram", icon: "📷" },
    { name: "YouTube", icon: "▶" },
  ];

  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-black">zyka.ai</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Create winning ads with AI. The most realistic and personalized UGC ads
              for your marketing campaigns.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-700"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-12">
          {/* <div className="text-center mb-8">
            <span className="text-[8rem] md:text-[10rem] font-bold text-gray-100 select-none">
              zyka.ai
            </span>
          </div> */}
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              Copyright 2024 Zyka. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

