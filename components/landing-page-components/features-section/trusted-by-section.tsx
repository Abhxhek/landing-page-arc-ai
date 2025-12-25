"use client"
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

// ============================================================================
// Types & Interfaces
// ============================================================================

interface SocialMediaPost {
  id: string;
  platform: "twitter" | "instagram" | "facebook" | "linkedin";
  name: string;
  handle: string;
  content: string;
  verified?: boolean;
  profileImage?: string;
  link?: string;
  hashtags?: string[];
}

// ============================================================================
// Constants & Configuration
// ============================================================================

const SOCIAL_MEDIA_POSTS: SocialMediaPost[] = [
  {
    id: "1",
    platform: "twitter",
    name: "Greg Bergé",
    handle: "@gregberge_",
    content: "✨ Zyka AI is a complete collection of stunning AI actors ready to use for your ads. It's like having an entire creative studio that never sleeps. Can't believe it's free!",
    verified: false,
    link: "zyka.ai",
  },
  {
    id: "2",
    platform: "twitter",
    name: "Sean Brydon",
    handle: "@SeanBrydon13",
    content: "Wow all for free! Setup a tip jar or buy me a coffee! I'd pay for this",
    verified: true,
  },
  {
    id: "3",
    platform: "twitter",
    name: "Nahuel Candia",
    handle: "@dncandia",
    content: "This is absolutely mind blowing. AI actors are the big leap forward on modern advertising. Already thinking on how to build our campaigns using these💡",
    verified: true,
  },
  {
    id: "4",
    platform: "twitter",
    name: "Enis",
    handle: "@enisdev",
    content: "Bro this is too beautiful, why is this even free??",
    verified: false,
  },
  {
    id: "5",
    platform: "twitter",
    name: "Mark Vassilevskiy",
    handle: "@MarkKnd",
    content: "You can't imagine how much time I spent to find realistic AI actors. Super useful!",
    verified: true,
  },
  {
    id: "6",
    platform: "twitter",
    name: "Adrian | JavaScript Mastery ✔",
    handle: "@jsmasterypro",
    content: "Have you heard of Zyka AI? It's packed with various AI actors that are ready to use! Mind-blowing stuff...🤯",
    verified: true,
    link: "Click here ➡️ zyka.ai",
    hashtags: ["#ai", "#nextjs", "#tailwindcss", "#techinnovation"],
  },
  {
    id: "7",
    platform: "instagram",
    name: "Sarah Chen",
    handle: "@sarahchen.design",
    content: "These AI actors look so realistic! Just created my first ad campaign in minutes. Game changer! 🚀",
    verified: false,
  },
  {
    id: "8",
    platform: "instagram",
    name: "Mike Johnson",
    handle: "@mikej.creative",
    content: "Zyka AI saved us weeks of production time. The quality is insane! 🔥",
    verified: true,
  },
  {
    id: "9",
    platform: "facebook",
    name: "Emma Williams",
    handle: "Emma Williams",
    content: "Amazing platform! We've been using Zyka AI for all our social media ads. The results speak for themselves.",
    verified: false,
  },
  {
    id: "10",
    platform: "linkedin",
    name: "David Rodriguez",
    handle: "David Rodriguez",
    content: "As a marketing director, I can confidently say Zyka AI has transformed how we approach creative production. Highly recommend!",
    verified: true,
  },
  {
    id: "11",
    platform: "twitter",
    name: "YOLO ツ",
    handle: "@torytang025",
    content: "Amazing, why are you so productive? This is incredible!",
    verified: false,
  },
  {
    id: "12",
    platform: "instagram",
    name: "Creative Agency",
    handle: "@creativeagency",
    content: "We test 20 creative angles a day. Zyka makes it financially possible. Best investment we've made!",
    verified: true,
  },
  {
    id: "13",
    platform: "facebook",
    name: "John Smith",
    handle: "John Smith",
    content: "The most realistic AI actors we've seen. Clients can't tell the difference. Absolutely mind-blowing!",
    verified: false,
  },
  {
    id: "14",
    platform: "linkedin",
    name: "Lisa Anderson",
    handle: "Lisa Anderson",
    content: "Zyka AI is our unfair advantage. We launch ready-to-ship creative in hours, not weeks. Incredible ROI!",
    verified: true,
  },
  {
    id: "15",
    platform: "twitter",
    name: "Alex Turner",
    handle: "@alexturner",
    content: "It feels like hiring an entire creative studio that never sleeps. And it's free? Unbelievable!",
    verified: false,
  },
];

const ANIMATION_CONFIG = {
  COLUMN_DURATIONS: [20, 25, 15] as const,
  COLUMN_COUNT: 3,
  POST_HEIGHT: 200,
  GAP: 16,
  STAGGER_DELAY: 0.3,
  CONTAINER_HEIGHT: 600,
} as const;

const HEADER_CONFIG = {
  title: {
    main: "Trusted by leading",
    accent: "brands worldwide",
  },
  description: "Here's what some of our users have to say about Zyka AI.",
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

const getPlatformIcon = (platform: string) => {
  const iconProps = "w-5 h-5";
  switch (platform) {
    case "twitter":
      return <Twitter className={`${iconProps} text-[#1DA1F2]`} />;
    case "instagram":
      return <Instagram className={`${iconProps} text-[#E4405F]`} />;
    case "facebook":
      return <Facebook className={`${iconProps} text-[#1877F2]`} />;
    case "linkedin":
      return <Linkedin className={`${iconProps} text-[#0A66C2]`} />;
    default:
      return null;
  }
};

const getPlatformColor = (platform: string): string => {
  const colors = {
    twitter: "text-[#1DA1F2]",
    instagram: "text-[#E4405F]",
    facebook: "text-[#1877F2]",
    linkedin: "text-[#0A66C2]",
  };
  return colors[platform as keyof typeof colors] || "text-gray-400";
};

const distributePosts = (posts: SocialMediaPost[], columnCount: number): SocialMediaPost[][] => {
  const columns: SocialMediaPost[][] = Array.from({ length: columnCount }, () => []);
  posts.forEach((post, index) => {
    columns[index % columnCount].push(post);
  });
  return columns;
};

const calculateTotalHeight = (postsCount: number, postHeight: number, gap: number): number => {
  return (postHeight + gap) * postsCount;
};

// ============================================================================
// Sub-Components
// ============================================================================

interface SectionHeaderProps {
  title: { main: string; accent: string };
  description: string;
}

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16 z-10 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        <span>{title.main}</span>{" "}
        <span className="font-dancing">{title.accent}</span>
      </h2>
      <p className="text-lg tracking-wider text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}

interface VerifiedBadgeProps {
  className?: string;
}

function VerifiedBadge({ className = "w-4 h-4 text-blue-500 shrink-0" }: VerifiedBadgeProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface ProfileAvatarProps {
  name: string;
}

function ProfileAvatar({ name }: ProfileAvatarProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
      {name.charAt(0)}
    </div>
  );
}

interface PostHeaderProps {
  post: SocialMediaPost;
}

function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <ProfileAvatar name={post.name} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <p className="text-white font-semibold text-sm truncate">
              {post.name}
            </p>
            {post.verified && <VerifiedBadge />}
          </div>
          <p className="text-gray-500 text-xs truncate">{post.handle}</p>
        </div>
      </div>
      <div className={getPlatformColor(post.platform)}>
        {getPlatformIcon(post.platform)}
      </div>
    </div>
  );
}

interface PostContentProps {
  content: string;
  link?: string;
  hashtags?: string[];
}

function PostContent({ content, link, hashtags }: PostContentProps) {
  return (
    <>
      <p className="text-gray-300 text-sm leading-relaxed mb-2">{content}</p>
      {link && (
        <p className="text-blue-400 text-sm mb-2 hover:underline cursor-pointer">
          {link}
        </p>
      )}
      {hashtags && hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {hashtags.map((tag, idx) => (
            <span
              key={idx}
              className="text-blue-400 text-xs hover:underline cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

interface PostCardProps {
  post: SocialMediaPost;
  index: number;
}

function PostCard({ post, index }: PostCardProps) {
  return (
    <div
      key={`${post.id}-${index}`}
      className="bg-gray-900 rounded-xl p-4 w-full transition-colors"
    >
      <PostHeader post={post} />
      <PostContent
        content={post.content}
        link={post.link}
        hashtags={post.hashtags}
      />
    </div>
  );
}

interface GradientOverlayProps {
  position: "top" | "bottom";
}

function GradientOverlay({ position }: GradientOverlayProps) {
  const gradientClass =
    position === "top"
      ? "bg-linear-to-b from-black via-black/80 to-transparent"
      : "bg-linear-to-t from-black via-black/80 to-transparent";

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 h-32 ${gradientClass} pointer-events-none z-20`}
    />
  );
}

interface PostColumnProps {
  posts: SocialMediaPost[];
  columnIndex: number;
  duration: number;
  isInView: boolean;
}

function PostColumn({ posts, columnIndex, duration, isInView }: PostColumnProps) {
  const totalHeight = calculateTotalHeight(
    posts.length,
    ANIMATION_CONFIG.POST_HEIGHT,
    ANIMATION_CONFIG.GAP
  );
  const duplicatedPosts = [...posts, ...posts, ...posts];

  return (
    <div className="flex flex-col items-center gap-4 h-full relative w-full max-w-sm">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ y: 0 }}
        animate={isInView ? { y: -totalHeight } : { y: 0 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: columnIndex * ANIMATION_CONFIG.STAGGER_DELAY,
        }}
      >
        {duplicatedPosts.map((post, postIndex) => (
          <PostCard key={`${post.id}-${postIndex}`} post={post} index={postIndex} />
        ))}
      </motion.div>
    </div>
  );
}

interface PostsGridProps {
  columnPosts: SocialMediaPost[][];
  isInView: boolean;
}

function PostsGrid({ columnPosts, isInView }: PostsGridProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <GradientOverlay position="top" />
      <div
        className="flex justify-center items-start gap-4 md:gap-6 lg:gap-8 overflow-hidden"
        style={{ height: `${ANIMATION_CONFIG.CONTAINER_HEIGHT}px` }}
      >
        {columnPosts.map((posts, columnIndex) => (
          <PostColumn
            key={columnIndex}
            posts={posts}
            columnIndex={columnIndex}
            duration={ANIMATION_CONFIG.COLUMN_DURATIONS[columnIndex]}
            isInView={isInView}
          />
        ))}
      </div>
      <GradientOverlay position="bottom" />
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function TrustedBySection() {
  const [isInView, setIsInView] = useState(false);
  const columnPosts = distributePosts(SOCIAL_MEDIA_POSTS, ANIMATION_CONFIG.COLUMN_COUNT);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <SectionHeader title={HEADER_CONFIG.title} description={HEADER_CONFIG.description} />
        <PostsGrid columnPosts={columnPosts} isInView={isInView} />
      </div>
    </section>
  );
}

