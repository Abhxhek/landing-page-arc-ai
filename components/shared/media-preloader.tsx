"use client"

import { useEffect } from "react";

interface MediaPreloaderProps {
  images?: string[];
  videos?: string[];
}

export function MediaPreloader({ images = [], videos = [] }: MediaPreloaderProps) {
  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Preload videos
    videos.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = src;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach((link) => {
        if (images.includes(link.getAttribute("href") || "") || 
            videos.includes(link.getAttribute("href") || "")) {
          link.remove();
        }
      });
    };
  }, [images, videos]);

  return null;
}

