"use client"
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ContactRound, Contact } from "lucide-react";
import { AnimatedButton } from "../ui/animated-button";
import { AnimatedText } from "../ui/animated-text";
import DarkVeil from "../ui/darkveil";
import { useRef } from "react";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Updates", href: "#" },
        { name: "Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <section className="relative h-[98vh] w-[99vw] flex flex-col bg-linear-to-b from-gray-800 via-gray-400 to-gray-100 overflow-hidden rounded-lg border z-0 ">
      <div className="absolute w-full h-full z-10 rounded-t-2xl">
        <DarkVeil />
      </div>
      {/* Main Content - 3D Text and Contact Button */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 py-8 min-h-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 3D Text Effect */}
          <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
            <AnimatedText
              text="CONTACT US"
              size="2xl"
              className="mb-2"
            />
            <p className="mb-4 text-white text-sm">
              We're here to help you with any questions or feedback you may have.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl px-4 text-lg drop-shadow-2xl shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedButton
            align="center"
            className="rounded-2xl text-[16px] mt-4 h-12 px-4 text-lg drop-shadow-2xl shadow bg-white text-black hover:bg-gray-100"
          >
            Contact Us
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 rounded-t-2xl shrink-0 backdrop-blur-sm bg-gray-900/30 border border-white/10">

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 relative z-20">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.h3
                className="text-xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ZYKA AI
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-4 max-w-md text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Create winning ads with AI. Use our library of 1,000+ captivating AI actors, or create your own AI avatar.
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-2">
                <motion.div
                  className="flex items-center gap-3 text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Mail size={16} />
                  <span>contact@zykaai.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </motion.div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-3 text-sm">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm relative
                                   after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                   hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} ZYKA AI. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </section>
  );
}

