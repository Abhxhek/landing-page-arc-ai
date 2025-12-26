"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useEffect, useState } from "react";
import { Globe, Sparkle, ArrowRight } from "lucide-react";


export default function Hero() {
    const mediaItems = [
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/1_general_video.mp4" },
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/2_general_video.mp4" },
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/3_general_video.mp4" },
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/4_general_video.mp4" },
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/5_general_video.mp4" },
        { type: "video", src: "https://d22ofvg8yrf77k.cloudfront.net/General+videos/6_general_video.mp4" },
    ];

    const [step, setStep] = useState("shuffle-center"); // shuffle-center → text-in → scatter
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // FIXED SCATTER POSITIONS (no blinking, no random movement) - responsive
    const fixedScatter = [
        { x: 0, y: -300, rotate: 0, mobileX: 0, mobileY: -150 },
        { x: 550, y: -150, rotate: 5, mobileX: 200, mobileY: -100 },
        { x: -550, y: -150, rotate: -5, mobileX: -200, mobileY: -100 },
        { x: 450, y: 240, rotate: -3, mobileX: 150, mobileY: 120 },
        { x: 0, y: 300, rotate: 0, mobileX: 0, mobileY: 150 },
        { x: -450, y: 240, rotate: 3, mobileX: -150, mobileY: 120 },
    ];

    useEffect(() => {
        // Step timeline
        setTimeout(() => setStep("text-in"), 2500); // first only shuffle images
        setTimeout(() => setStep("scatter"), 2500); // then text in + scatter
    }, []);

    return (
        <section className="relative h-[98%] w-[99%] rounded-2xl border border-gray-10 flex flex-col justify-center items-center overflow-hidden backdrop-blur-xl z-0 px-2 sm:px-4">
            {/* TEXT — Hidden initially */}
            
            
            <motion.div
                className="relative w-full max-w-5xl text-center z-20 px-2 sm:px-4"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                    step === "text-in"
                        ? { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        : step === "scatter"
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0 }
                }
            >
                <p className="mb-2 text-xs sm:text-sm md:text-base drop-shadow-2xl bg-gray-200 shadow px-2 sm:px-4 py-1 sm:py-2 rounded-full inline-flex items-center gap-1 sm:gap-2">
                    <Globe size={12} className="sm:w-4 sm:h-4 text-blue-600 animate-pulse"/>
                    <span className="hidden sm:inline">Trusted by 500K+ growth teams worldwide</span>
                    <span className="sm:hidden">500K+ teams worldwide</span>
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-2">
                    Create winning ads <span className="font-dancing">with AI</span>
                </h1>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:text-lg px-2">Use our library of 1,000+ Captivating AI Actors, or create your own AI Avatar</p>
                <AnimatedButton 
                    icon={Sparkle} 
                    iconPosition="right"
                    align="center"
                    className="rounded-2xl text-xs sm:text-sm md:text-[16px] mt-4 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base md:text-lg drop-shadow-2xl shadow"
                    onClick={() => window.open("https://create.zyka.ai/", "_blank", "noopener,noreferrer")}
                >
                    Create Your AI Ad
                </AnimatedButton>
            </motion.div>

            {/* MEDIA (IMAGES & VIDEOS) */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {mediaItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.7 }}
                        animate={
                            step === "shuffle-center"
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: Math.sin(i) * 10,
                                    y: Math.cos(i) * 10,
                                    rotate: Math.sin(i) * 5,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    },
                                }
                                : step === "text-in"
                                    ? {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        rotate: 0,
                                        transition: { duration: 0.5 },
                                    }
                                    : step === "scatter"
                                        ? {
                                            x: isMobile ? fixedScatter[i].mobileX : fixedScatter[i].x,
                                            y: isMobile ? fixedScatter[i].mobileY : fixedScatter[i].y,
                                            rotate: fixedScatter[i].rotate,
                                            opacity: 1,
                                            scale: isMobile ? 0.6 : 1,
                                            transition: { duration: 1, ease: "easeOut" },
                                        }
                                        : {}
                        }
                        className="absolute will-change-transform"
                        style={{ zIndex: i }}
                    >
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                // preload="auto"
                                className="rounded-xl shadow-2xl w-[80px] h-[130px] sm:w-[120px] sm:h-[195px] md:w-[160px] md:h-[260px] object-cover"
                            />
                        ) : (
                            <Image 
                                src={item.src} 
                                alt="actor" 
                                width={160} 
                                height={260} 
                                className="rounded-xl shadow-2xl w-[80px] h-[130px] sm:w-[120px] sm:h-[195px] md:w-[160px] md:h-[260px] object-cover"
                                priority={i < 2}
                                loading={i < 2 ? "eager" : "lazy"}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Scroll to explore */}
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center text-gray-600 z-30">
                <span className="text-[10px] sm:text-xs font-arimo font-semibold text-gray-600 uppercase hidden sm:inline">SCROLL TO EXPLORE</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={14}
                    className="sm:w-[22px] sm:h-[16px] animate-bounce"
                    fill="none"
                    viewBox="0 0 28 24"
                >
                    <rect
                        x="6"
                        y="3"
                        width="16"
                        height="18"
                        rx="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                    />
                    <circle
                        cx="14"
                        cy="8"
                        r="1.3"
                        fill="currentColor"
                        className="opacity-60"
                    />
                </svg>
            </div>
        </section>
    );
}