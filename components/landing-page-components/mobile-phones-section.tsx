"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface MobilePhonesSectionProps {
    isInView: boolean;
}

// Function to generate fixed collage of videos with predefined layout
export function RandomImageCollage({ videos }: { videos: string[] }) {
    // Fixed collage layout - each image has fixed position, size, and rotation
    // Positions adjusted to keep images within bounds when rotated
    const collageLayout = [
        {
            // Large image - top left
            left: 4,
            top: 4,
            width: 'w-48',
            height: 'h-64',
            rotation: -12,
            zIndex: 5,
        },
        {
            // Medium image - top right
            left: 80,
            top: 5,
            width: 'w-40',
            height: 'h-52',
            rotation: 18,
            zIndex: 4,
        },
        {
            // Large image - center left
            left: 0,
            top: 56,
            width: 'w-52',
            height: 'h-72',
            rotation: 8,
            zIndex: 6,
        },
        {
            // Small image - center
            left: 45,
            top: 15,
            width: 'w-36',
            height: 'h-44',
            rotation: -20,
            zIndex: 3,
        },
        {
            // Medium image - bottom left
            left: 42,
            top: 72,
            width: 'w-44',
            height: 'h-56',
            rotation: 15,
            zIndex: 2,
        },
        {
            // Large image - bottom right
            left: 84,
            top: 50,
            width: 'w-46',
            height: 'h-60',
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
            <div className="relative w-[220px] h-[380px] bg-linear-to-b from-gray-900 to-gray-800 rounded-[2.5rem] p-2 shadow-2xl border-2 border-gray-800">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10"></div>

                {/* Screen */}
                <div className="w-full h-full rounded-4xl overflow-hidden bg-gray-900 relative">
                    <Image
                        src={imageSrc}
                        alt={`Phone screen ${index}`}
                        width={140}
                        height={280}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-22 h-1 bg-white/30 rounded-full"></div>
            </div>
        </div>
    );
}

export default function MobilePhonesSection({ isInView }: MobilePhonesSectionProps) {
    // AI Images for mobile phone screens
    const images = [
        "/Ai Img/02d6202a-e61b-49f4-9337-20bffbc82a29.png",
        "/Ai Img/0f3d1fbb-a1fa-4a30-9bc1-a7cee23bc154.png",
        "/Ai Img/158c94f4-1543-44b7-bcb5-d0ee7edc62f2.png",
        "/Ai Img/3201c4c4-e63c-4b68-9530-5942cb1224174.png",
        "/Ai Img/404c33fb-8761-4c1e-8e06-211cff213917.png",
        "/Ai Img/5c7f5fa6-2486-48d6-a22e-0af06cfb4ab35.png",
        "/Ai Img/75d09814-cef9-4538-8c5c-e05658854af3.png",
        "/Ai Img/7cb45eda-2a66-4d13-87bb-6a34af54ce6f.png",
        "/Ai Img/813ea4b5-2575-40bd-95d3-803b9d31f6bf.png",
        "/Ai Img/8d03322b-a068-48b7-bb9e-896aeb2ff752.png",
    ];

    // Videos for collage
    const videos = [
        "/General videos/Coffee Mug.mp4",
        "/General videos/Fit Check.mp4",
        "/General videos/Gaming Streamer Reaction.mp4",
        "/General videos/Healthy Drink.mp4",
        "/General videos/Influencer Style Recommendation.mp4",
        "/General videos/Perfume.mp4",
    ];

    // Create 4 columns, each with 5 phones
    const columns = 4;
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

    // Different animation durations for each column (in seconds)
    const columnDurations = [15, 18, 20, 22];

    return (
        <section className="relative h-[98%] w-[99%] rounded-2xl border border-gray-10 flex flex-col justify-center items-center overflow-hidden backdrop-blur-xl z-0 bg-black">
            {/* Title */}
            <div className="absolute top-0 left-0 right-0 backdrop-blur-sm h-full w-full bg-transparent z-20 flex flex-col justify-center items-center">
                <motion.div
                    className="z-10 text-center mb-8 pt-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        See Your Ads <span className="font-dancing">Come to Life</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
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
            <div className="relative bottom-0 left-0 right-0 w-full max-w-7xl mx-auto px-4 h-full overflow-hidden z-10">
                <div className="flex justify-center items-start gap-8 md:gap-12 h-full">
                    {Array.from({ length: columns }).map((_, columnIndex) => {
                        const columnData = generateColumnData(columnIndex);
                        const duration = columnDurations[columnIndex];
                        // Calculate the distance to move (height of one set of phones + gaps)
                        // Phone height: 280px, gap: 24px (gap-6 = 1.5rem = 24px)
                        const phoneHeight = 280;
                        const gap = 24;
                        const totalHeight = (phoneHeight + gap) * phonesPerColumn;

                        return (
                            <div
                                key={columnIndex}
                                className="flex flex-col items-center gap-6 h-full relative"
                            >
                                {/* Animated column container */}
                                <motion.div
                                    className="flex flex-col items-center gap-6"
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

