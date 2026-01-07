"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal hook that triggers every time
 * Element enters and exits viewport
 */
export function useScrollReveal(direction: "left" | "right" | "up" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when entering viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when leaving viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -100px 0px", // Start animation earlier
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible, direction };
}