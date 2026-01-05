"use client"
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ContactRound, Contact } from "lucide-react";
import { AnimatedButton } from "../ui/animated-button";
import { AnimatedText } from "../ui/animated-text";
import DarkVeil from "../ui/darkveil";
import { useRef } from "react";
import { useBookingModal } from "../shared/booking-modal-provider";
import Link from "next/link";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const { openModal } = useBookingModal();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Updates", href: "/updates" },
        { name: "Documentation", href: "/documentation" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "#", isModal: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Security", href: "/security" },
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
    <section className="relative h-[98vh] w-[99vw] flex flex-col bg-linear-to-b from-gray-800 via-gray-400 to-gray-100 overflow-hidden rounded-lg border z-0">
      <div className="absolute w-full h-full z-10 rounded-t-2xl">
        <DarkVeil />
      </div>
      {/* Main Content - 3D Text and Contact Button */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-2 sm:px-4 py-2 sm:py-4 md:py-8 min-h-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 3D Text Effect */}
          <div className="flex flex-col items-center justify-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 px-2">
            <AnimatedText
              text="CONTACT US"
              size="2xl"
              className="mb-1 sm:mb-2"
            />
            <p className="mb-2 sm:mb-4 text-white text-xs sm:text-sm md:text-base px-2">
              We're here to help you with any questions or feedback you may have.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl px-2 sm:px-4 text-sm sm:text-lg drop-shadow-2xl shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedButton
            align="center"
            className="rounded-2xl md:text-[16px] mt-2 sm:mt-4 h-9 sm:h-10 md:h-12 px-3 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg drop-shadow-2xl shadow bg-white text-black hover:bg-gray-100 group"
            onClick={openModal}
          >
            <span className="block group-hover:hidden">Contact Us</span>
            <span className="hidden group-hover:block">Book a Demo</span>
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 rounded-t-2xl shrink-0 backdrop-blur-sm bg-gray-900/30 border border-white/10">

        <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 relative z-20">
          {/* Footer Content */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
            {/* Left Column - Mobile: Brand + Product, Desktop: Brand only (spans 2 columns) */}
            <div className="col-span-1 lg:col-span-2 flex flex-col">
              {/* Brand Section */}
              <div>
                <motion.h3
                  className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  ZYKA AI
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-2 sm:mb-3 md:mb-4 max-w-md text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Create winning ads with AI. Use our library of 1,000+ captivating AI actors, or create your own AI avatar.
                </motion.p>

                {/* Contact Info */}
                <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400 text-[10px] sm:text-xs md:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Mail size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                    <span className="break-all text-[10px] sm:text-xs md:text-sm">contact@zykaai.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400 text-[10px] sm:text-xs md:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Phone size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm">support@zyka.ai</span>
                  </motion.div>
                  {/* <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400 text-[10px] sm:text-xs md:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <MapPin size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm">San Francisco, CA</span>
                  </motion.div> */}
                </div>
              </div>

              {/* Product Links - Only visible on mobile in left column */}
              <motion.div
                className="mt-4 lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">{footerLinks[0].title}</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Mobile: Company + Legal stacked, Desktop: Company only (individual column) */}
            <div className="col-span-1 lg:col-span-1 flex flex-col">
              {/* Company Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">{footerLinks[1].title}</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks[1].links.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal Links - Only visible on mobile in right column */}
              <motion.div
                className="mt-4 lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">{footerLinks[2].title}</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks[2].links.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                     after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                     hover:after:w-full"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Product Links - Only visible on desktop (lg and above) */}
            <motion.div
              className="hidden lg:block lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">{footerLinks[0].title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks[0].links.map((link) => (
                  <li key={link.name}>
                    {link.isModal ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                   after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                   hover:after:w-full cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                   after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                   hover:after:w-full"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links - Only visible on desktop (lg and above) */}
            <motion.div
              className="hidden lg:block lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">{footerLinks[2].title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks[2].links.map((link) => (
                  <li key={link.name}>
                    {link.isModal ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                   after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                   hover:after:w-full cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm relative
                                   after:content-[''] after:block after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                                   hover:after:w-full"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
            <motion.p
              className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} ZYKA AI. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-2 sm:gap-3 md:gap-4"
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
                  <social.icon size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </section>
  );
}

