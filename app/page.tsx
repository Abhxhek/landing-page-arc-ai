"use client"
import { useRef, useEffect, useState } from "react";
import HeroSection from "@/components/landing-page-components/hero-section";
import StatsSection from "@/components/landing-page-components/stats-section";
import MobilePhonesSection from "@/components/landing-page-components/mobile-phones-section";
import FeaturesSection from "@/components/landing-page-components/features-section";
import ContactSection from "@/components/landing-page-components/contact-section";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const mobilePhonesSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const [isStatsInView, setIsStatsInView] = useState(false);
  const [isMobilePhonesInView, setIsMobilePhonesInView] = useState(false);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);
  const [isFeaturesLocked, setIsFeaturesLocked] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Check if it's a vertical scroll (deltaY is significant)
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // If features section is locked, don't handle horizontal scrolling
        if (isFeaturesLocked) {
          return; // Let the features section handle its own scrolling
        }

        // Prevent default vertical scrolling for horizontal sections
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
          targetSectionIndex = Math.min(currentSection + 1, 4); // Max 4 (contact section)
        } else {
          // Scrolling up - move to previous section
          targetSectionIndex = Math.max(currentSection - 1, 0); // Min 0 (hero section)
        }

        // If we're entering the features section (index 3), lock it
        if (targetSectionIndex === 3) {
          setIsFeaturesLocked(true);
        } else {
          setIsFeaturesLocked(false);
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
  }, [isFeaturesLocked]);

  // Listen for unlock events from features section
  useEffect(() => {
    const handleUnlock = (e: CustomEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      setIsFeaturesLocked(false);
      
      const currentScroll = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const currentSection = Math.round(currentScroll / sectionWidth);
      
      if (e.detail.direction === 'up') {
        // Go to previous section
        const targetSectionIndex = Math.max(currentSection - 1, 0);
        const targetScroll = targetSectionIndex * sectionWidth;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      } else if (e.detail.direction === 'down') {
        // Go to next section (contact section)
        const targetSectionIndex = Math.min(currentSection + 1, 4);
        const targetScroll = targetSectionIndex * sectionWidth;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('unlock-features-section', handleUnlock as EventListener);

    return () => {
      window.removeEventListener('unlock-features-section', handleUnlock as EventListener);
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

  // Intersection Observer for mobile phones section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMobilePhonesInView(true);
          } else {
            // Reset when leaving the section
            setIsMobilePhonesInView(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (mobilePhonesSectionRef.current) {
      observer.observe(mobilePhonesSectionRef.current);
    }

    return () => {
      if (mobilePhonesSectionRef.current) {
        observer.unobserve(mobilePhonesSectionRef.current);
      }
    };
  }, []);

  // Also check scroll position for mobile phones section
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const currentScroll = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const currentSection = Math.round(currentScroll / sectionWidth);
      
      // Section 2 is the mobile phones section (0 = hero, 1 = stats, 2 = mobile phones, 3 = features, 4 = contact)
      if (currentSection === 2) {
        setIsMobilePhonesInView(true);
      } else {
        setIsMobilePhonesInView(false);
      }

      // Check if we're in features section
      if (currentSection === 3) {
        setIsFeaturesInView(true);
        setIsFeaturesLocked(true);
      } else {
        setIsFeaturesInView(false);
        setIsFeaturesLocked(false);
      }
    };

    // Check initial position
    checkScrollPosition();

    // Listen to scroll events
    container.addEventListener('scroll', checkScrollPosition);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Intersection Observer for features section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFeaturesInView(true);
            setIsFeaturesLocked(true);
          } else {
            setIsFeaturesInView(false);
            setIsFeaturesLocked(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }

    return () => {
      if (featuresSectionRef.current) {
        observer.unobserve(featuresSectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="w-full h-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
    >
      <div className="flex h-full">
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

        {/* Mobile Phones Section */}
        <div 
          ref={mobilePhonesSectionRef}
          className="h-full w-screen shrink-0 flex flex-col justify-center items-center snap-center"
        >
          <MobilePhonesSection isInView={isMobilePhonesInView} />
        </div>

        {/* Features Section */}
        <div 
          ref={featuresSectionRef}
          className="h-full w-screen shrink-0 flex flex-col justify-center items-center snap-center"
        >
          <FeaturesSection isInView={isFeaturesInView} isLocked={isFeaturesLocked} />
        </div>

        {/* Contact Section */}
        <div className="h-full w-screen shrink-0 flex flex-col justify-center items-center snap-center">
          <ContactSection />
        </div>

      </div>
    </div>
  );
}
