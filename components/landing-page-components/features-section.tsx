"use client"
import { useEffect, useRef } from "react";
import TrustedBySection from "./features-section/trusted-by-section";
import AIActorsHero from "./features-section/ai-actors-hero";
import StudioSections from "./features-section/studio-sections";

interface FeaturesSectionProps {
  isInView: boolean;
  isLocked: boolean;
}

export default function FeaturesSection({ isInView, isLocked }: FeaturesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isLocked) return;

      // Only handle vertical scrolling when locked
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isAtTop = scrollTop <= 5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

        // If at top and scrolling up, prevent and let parent handle
        if (isAtTop && e.deltaY < 0) {
          e.preventDefault();
          e.stopPropagation();
          // Dispatch custom event to parent to unlock
          window.dispatchEvent(new CustomEvent('unlock-features-section', { detail: { direction: 'up' } }));
          return;
        }

        // If at bottom and scrolling down, prevent and let parent handle
        if (isAtBottom && e.deltaY > 0) {
          e.preventDefault();
          e.stopPropagation();
          // Dispatch custom event to parent to unlock
          window.dispatchEvent(new CustomEvent('unlock-features-section', { detail: { direction: 'down' } }));
          return;
        }

        // Otherwise, allow normal scrolling within the section
      }
    };

    if (isLocked) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isLocked]);

  return (
    <div
      ref={scrollContainerRef}
      className={`h-[98vh] w-[99vw] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scrollbar-hide rounded-lg border ${
        isLocked ? 'scroll-locked' : ''
      }`}
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {/* Trusted By Section */}
      <div className="min-h-screen snap-start">
        <TrustedBySection />
      </div>

      {/* AI Actors Hero Section */}
      <div className="min-h-screen snap-start">
        <AIActorsHero />
      </div>

      {/* Studio Sections */}
      <div className="min-h-screen snap-start">
        <StudioSections />
      </div>
    </div>
  );
}

