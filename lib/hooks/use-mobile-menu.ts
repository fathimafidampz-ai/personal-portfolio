"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to manage mobile menu state
 * Handles opening, closing, and body scroll lock
 * 
 * @returns isOpen state and toggle/close functions
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}