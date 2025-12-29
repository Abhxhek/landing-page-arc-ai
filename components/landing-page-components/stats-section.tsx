"use client"
import { motion } from "framer-motion";
import { SiShopify, SiAmazon, SiMeta, SiGoogle, SiTiktok, SiSnapchat, SiSpotify } from "react-icons/si";
import { AnimatedButton } from "../ui/animated-button";
import { Users, Bot, Building2 } from "lucide-react";

interface StatsSectionProps {
    isInView: boolean;
}

export default function StatsSection({ isInView }: StatsSectionProps) {
    const statusItems = [
        { label: "Creators", value: "412 online", icon: Users },
        { label: "AI Actors", value: "1,024 available", icon: Bot },
        { label: "AI Studios", value: "98 global", icon: Building2 },
    ];

    const companyLogos = [
        { name: "Shopify", icon: SiShopify, color: "#95BF47" },
        { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
        { name: "Meta", icon: SiMeta, color: "#1877F2" },
        { name: "Google", icon: SiGoogle, color: "#EA4335" },
        { name: "TikTok", icon: SiTiktok, color: "#fff" },
        { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
        { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    ];

    const metrics = [
        { value: "10M+", label: "ADS CREATED" },
        { value: "500K+", label: "MARKETERS ONBOARDED" },
        { value: "98%", label: "SUCCESS RATE" },
    ];

    return (
        <section className="relative h-[98%] w-[99%] rounded-2xl border border-gray-10 flex flex-col justify-center items-center overflow-hidden backdrop-blur-xl z-0 bg-black">          
            <div className="w-full space-y-3 sm:space-y-6 md:space-y-8 px-3 sm:px-4 py-4 sm:py-8 md:py-16 z-20">
                {/* Header Section */}
                <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-3 px-2">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatedButton className="cursor-none text-[10px] sm:text-xs md:text-sm uppercase tracking-wider shadow-2xl rounded-full inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 shadow-white">
                            ZYKA AI
                        </AnimatedButton>
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white px-2 leading-tight"
                    >
                        Chosen by millions of the world's{" "}
                        <span className="font-dancing">best marketers</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base text-gray-500 px-2"
                    >
                        Driving top-performing creative for leading agencies, DTC brands, B2B SaaS, and enterprise teams across the globe.
                    </motion.p>
                </div>

                {/* Status Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full max-w-3xl mx-auto text-primary-foreground p-2"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-around gap-3 sm:gap-5">
                        {statusItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <AnimatedButton 
                                    key={index} 
                                    icon={Icon}
                                    iconPosition="left"
                                    className="uppercase px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm text-white"
                                >
                                    {item.value}{" "}{item.label}
                                </AnimatedButton>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Company Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-5xl mx-auto px-2"
                >
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                        {companyLogos.map((company, index) => {
                            const Icon = company.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    className="flex flex-col items-center gap-1 sm:gap-2"
                                >
                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center backdrop-blur-sm"
                                        style={{ backgroundColor: `${company.color}15` }}
                                    >
                                        <Icon
                                            className="text-base sm:text-lg md:text-xl lg:text-2xl"
                                            style={{ color: company.color }}
                                        />
                                    </div>
                                    <span className="text-white text-[10px] sm:text-xs font-medium">{company.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Metrics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-2"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            className="bg-primary rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm border border-gray-700/50 text-center"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                                {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

