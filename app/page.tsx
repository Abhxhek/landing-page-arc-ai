"use client"
import { useRef, useEffect, useState } from "react";
import HeroSection from "@/components/landing-page-components/hero-section";
import StatsSection from "@/components/landing-page-components/stats-section";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const [isStatsInView, setIsStatsInView] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Check if it's a vertical scroll (deltaY is significant)
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Prevent default vertical scrolling
        e.preventDefault();
        
        // Only scroll if not already scrolling (debounce)
        if (isScrolling.current) return;
        isScrolling.current = true;

        // Get current scroll position and section width
        const currentScroll = container.scrollLeft;
        const sectionWidth = window.innerWidth;
        const currentSection = Math.round(currentScroll / sectionWidth);
        
        // Calculate target section based on scroll direction
        let targetSectionIndex = currentSection;
        
        if (e.deltaY > 0) {
          // Scrolling down - move to next section
          targetSectionIndex = Math.min(currentSection + 1, 1); // Max 1 (stats section)
        } else {
          // Scrolling up - move to previous section
          targetSectionIndex = Math.max(currentSection - 1, 0); // Min 0 (hero section)
        }

        // Calculate exact snap position
        const targetScroll = targetSectionIndex * sectionWidth;
        
        // Scroll to target position - CSS snap will handle the snapping
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
      // If it's a horizontal scroll, let it work normally
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Intersection Observer for stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsInView(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="w-full h-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
    >
      <div className="flex h-full w-[200vw]">
        {/* Hero Section */}
        <div className="h-full w-screen shrink-0 flex flex-col justify-center items-center snap-center">
          <HeroSection />
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsSectionRef}
          className="h-full w-screen shrink-0 flex flex-col justify-center items-center snap-center"
        >
          <StatsSection isInView={isStatsInView} />
        </div>

      </div>
    </div>
  );
}
