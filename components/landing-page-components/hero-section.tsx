"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Globe, Sparkle } from "lucide-react";

export default function Hero() {
    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.jpg",
        "/img5.jpg",
        "/img6.jpg",
    ];

    const [step, setStep] = useState("shuffle-center"); // shuffle-center → text-in → scatter

    // FIXED SCATTER POSITIONS (no blinking, no random movement)
    const fixedScatter = [
        { x: 0, y: -300, rotate: 0 },
        { x: 550, y: -150, rotate: 5 },
        { x: -550, y: -150, rotate: -5 },
        { x: 450, y: 240, rotate: -3 },
        { x: 0, y: 300, rotate: 0 },
        { x: -450, y: 240, rotate: 3 },
    ];

    useEffect(() => {
        // Step timeline
        setTimeout(() => setStep("text-in"), 2500); // first only shuffle images
        setTimeout(() => setStep("scatter"), 2500); // then text in + scatter
    }, []);

    return (
        <section className="relative h-[98%] w-[99%] rounded-2xl border border-gray-10 flex flex-col justify-center items-center overflow-hidden backdrop-blur-xl z-0">
            {/* TEXT — Hidden initially */}
            <motion.div
                className="relative w-full max-w-5xl text-center z-20"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                    step === "text-in"
                        ? { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        : step === "scatter"
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0 }
                }
            >
                <p className="mb-2 text-[16px] drop-shadow-2xl bg-gray-200 shadow px-4 py-2 rounded-full inline-flex items-center gap-2">
                    <Globe size={16} className="text-blue-600 animate-pulse"/>
                    Trusted by 500K+ growth teams worldwide</p>
                <h1 className="text-5xl font-semibold">
                    Create winning ads <span className="font-arimo">with AI</span>
                </h1>
                <p className="text-gray-600 mt-2 text-lg">Use our library of 1,000+ Captivating AI Actors, or create your own AI Avatar</p>
                <Button className="group relative overflow-hidden rounded-2xl text-[16px] mt-4 h-12 px-4 text-lg drop-shadow-2xl shadow">
                    {/* 1. Invisible copy: Keeps the button width correct */}
                    <p className="flex items-center gap-2">
                        <span className="invisible">Create Your AI Ad </span><Sparkle className="" />
                    </p>

                    {/* 2. Default Text: Absolute positioned, slides up completely */}
                    <span className="px-4 absolute inset-0 flex items-center justify-start transition-transform duration-300 group-hover:-translate-y-full">
                        Create Your AI Ad
                    </span>

                    {/* 3. Hover Text: Absolute positioned, slides in from bottom */}
                    <span className="px-4 absolute inset-0 flex items-center justify-start translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        Create Your AI Ad
                    </span>
                </Button>
            </motion.div>

            {/* IMAGES */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {images.map((src, i) => (
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
                                            ...fixedScatter[i],
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 1, ease: "easeOut" },
                                        }
                                        : {}
                        }
                        className="absolute will-change-transform"
                        style={{ zIndex: i }}
                    >
                        <Image src={src} alt="actor" width={160} height={260} className="rounded-xl shadow-2xl" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}