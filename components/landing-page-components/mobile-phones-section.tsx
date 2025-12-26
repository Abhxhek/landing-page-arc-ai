"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MobilePhonesSectionProps {
    isInView: boolean;
}

// Function to generate fixed collage of videos with predefined layout
export function RandomImageCollage({ videos }: { videos: string[] }) {
    // Fixed collage layout - responsive sizes
    const collageLayout = [
        {
            // Large image - top left
            left: 4,
            top: 4,
            width: 'w-24 sm:w-36 md:w-48',
            height: 'h-32 sm:h-48 md:h-64',
            rotation: -12,
            zIndex: 5,
        },
        {
            // Medium image - top right
            left: 80,
            top: 5,
            width: 'w-20 sm:w-30 md:w-40',
            height: 'h-26 sm:h-39 md:h-52',
            rotation: 18,
            zIndex: 4,
        },
        {
            // Large image - center left
            left: 0,
            top: 56,
            width: 'w-26 sm:w-39 md:w-52',
            height: 'h-36 sm:h-54 md:h-72',
            rotation: 8,
            zIndex: 6,
        },
        {
            // Small image - center
            left: 45,
            top: 15,
            width: 'w-18 sm:w-27 md:w-36',
            height: 'h-22 sm:h-33 md:h-44',
            rotation: -20,
            zIndex: 3,
        },
        {
            // Medium image - bottom left
            left: 42,
            top: 72,
            width: 'w-22 sm:w-33 md:w-44',
            height: 'h-28 sm:h-42 md:h-56',
            rotation: 15,
            zIndex: 2,
        },
        {
            // Large image - bottom right
            left: 84,
            top: 50,
            width: 'w-23 sm:w-35 md:w-46',
            height: 'h-30 sm:h-45 md:h-60',
            rotation: -15,
            zIndex: 7,
        },
    ];

    // Map videos to the fixed layout
    const collageItems = videos.slice(0, Math.min(collageLayout.length, videos.length)).map((video, index) => {
        const layout = collageLayout[index];
        return {
            src: video,
            left: layout.left,
            top: layout.top,
            width: layout.width,
            height: layout.height,
            rotation: layout.rotation,
            zIndex: layout.zIndex,
            index,
        };
    });

    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center">
            <div className="relative w-full max-w-5xl h-full">
                {collageItems.map((item) => (
                    <motion.div
                    key={`${item.src}-${item.index}`}
                    className={`absolute ${item.width} ${item.height} rounded-xl overflow-hidden shadow-2xl border-2 border-white/20`}
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        zIndex: item.zIndex,
                    }}
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: item.rotation,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: item.index * 0.1,
                        ease: "easeOut",
                    }}
                    whileHover={{ 
                        scale: 1.05, 
                        zIndex: 20, 
                        transition: { duration: 0.2 } 
                    }}
                >
                    <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        // preload="auto"
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Custom iPhone-like component
function MobilePhone({ imageSrc, index }: { imageSrc: string; index: number }) {
    return (
        <div className="relative flex flex-col items-center">
            {/* Phone Frame */}
            <div className="relative w-[110px] h-[190px] sm:w-[165px] sm:h-[285px] md:w-[220px] md:h-[380px] bg-linear-to-b from-gray-900 to-gray-800 rounded-[1.25rem] sm:rounded-4xl md:rounded-[2.5rem] p-1 sm:p-1.5 md:p-2 shadow-2xl border-2 border-gray-800">
                {/* Notch */}
                <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-24 h-3 sm:h-4 md:h-6 bg-black rounded-b-lg sm:rounded-b-xl md:rounded-b-xl z-10"></div>

                {/* Screen */}
                <div className="w-full h-full rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden bg-gray-900 relative">
                    <Image
                        src={imageSrc}
                        alt={`Phone screen ${index}`}
                        width={140}
                        height={280}
                        className="w-full h-full object-cover"
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                    />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-11 sm:w-16 md:w-22 h-0.5 sm:h-0.5 md:h-1 bg-white/30 rounded-full"></div>
            </div>
        </div>
    );
}

export default function MobilePhonesSection({ isInView }: MobilePhonesSectionProps) {
    // AI Images for mobile phone screens
    const images = [
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/1.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/2.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/3.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/4.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/5.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/6.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/7.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/8.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/9.png",
        "https://d22ofvg8yrf77k.cloudfront.net/Ai+Img/10.png",
    ];

    // Videos for collage
    const videos = [
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/7_general_video.mp4",
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/8_general_video.mp4",
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/9_general_video.mp4",
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/10_general_video.mp4",
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/11_general_video.mp4",
        "https://d22ofvg8yrf77k.cloudfront.net/General+videos/12_general_video.mp4",
    ];

    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const updateColumns = () => {
            setColumns(window.innerWidth < 768 ? 2 : 4);
        };
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    // Create responsive columns - 2 on mobile, 4 on desktop
    const phonesPerColumn = 5;

    // Generate phone data for each column
    const generateColumnData = (columnIndex: number) => {
        const phones = [];
        for (let i = 0; i < phonesPerColumn; i++) {
            // Cycle through images, offset by column index for variety
            const imageIndex = (i + columnIndex) % images.length;
            phones.push({
                id: `${columnIndex}-${i}`,
                imageSrc: images[imageIndex],
            });
        }
        return phones;
    };

    // Different animation durations for each column (in seconds) - responsive
    const getColumnDurations = () => columns === 2 ? [15, 18] : [15, 18, 20, 22];

    return (
        <section className="relative h-[98%] w-[99%] rounded-2xl border border-gray-10 flex flex-col justify-center items-center overflow-hidden backdrop-blur-xl z-0 bg-black">
            {/* Title */}
            <div className="absolute top-0 left-0 right-0 backdrop-blur-sm h-full w-full bg-transparent z-20 flex flex-col justify-center items-center px-2">
                <motion.div
                    className="z-10 text-center mb-4 sm:mb-8 pt-4 sm:pt-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 px-2">
                        See Your Ads <span className="font-dancing">Come to Life</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">
                        Experience your creations on mobile devices
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="z-10 h-full w-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0"
                >
                    <RandomImageCollage videos={videos} />
                </motion.div>
            </div>

            {/* Mobile Phones Grid */}
            <div className="relative bottom-0 left-0 right-0 w-full max-w-7xl mx-auto px-2 sm:px-4 h-full overflow-hidden z-10">
                <div className="flex justify-center items-start gap-2 sm:gap-4 md:gap-8 lg:gap-12 h-full">
                    {Array.from({ length: columns }).map((_, columnIndex) => {
                        const columnData = generateColumnData(columnIndex);
                        const columnDurations = getColumnDurations();
                        const duration = columnDurations[columnIndex];
                        // Calculate the distance to move (height of one set of phones + gaps)
                        // Responsive phone heights and gaps
                        const currentIsMobile = columns === 2;
                        const phoneHeight = currentIsMobile ? 190 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 285 : 380);
                        const gap = currentIsMobile ? 8 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 16 : 24);
                        const totalHeight = (phoneHeight + gap) * phonesPerColumn;

                        return (
                            <div
                                key={columnIndex}
                                className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 h-full relative"
                            >
                                {/* Animated column container */}
                                <motion.div
                                    className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6"
                                    initial={{ y: 0 }}
                                    animate={
                                        isInView
                                            ? {
                                                y: -totalHeight, // Move up by one set of phones
                                            }
                                            : { y: 0 }
                                    }
                                    transition={{
                                        duration: duration,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: columnIndex * 0.5, // Stagger start times
                                    }}
                                >
                                    {/* Render phones multiple times for seamless infinite loop */}
                                    {[...columnData, ...columnData, ...columnData].map((phone, phoneIndex) => (
                                        <MobilePhone
                                            key={`${phone.id}-${phoneIndex}`}
                                            imageSrc={phone.imageSrc}
                                            index={phoneIndex}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

