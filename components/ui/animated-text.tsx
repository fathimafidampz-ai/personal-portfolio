"use client";

import React, { useState, useEffect } from "react";

/**
 * Animated Text Component
 * Cycles through different text options with typing effect
 * 
 * Props:
 * - texts: Array of strings to cycle through
 * - typingSpeed: Speed of typing (default: 100ms)
 * - deletingSpeed: Speed of deleting (default: 50ms)
 * - delayBetweenTexts: Pause between texts (default: 2000ms)
 */

interface AnimatedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export default function AnimatedText({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenTexts = 2000 
}: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    if (isPaused) {
      // Pause before starting to delete
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting) {
      // Typing
      if (currentText.length < fullText.length) {
        const typingTimeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typingTimeout);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deletingTimeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      {/* Blinking cursor */}
      <span className="inline-block w-1 h-8 ml-1 bg-accent-500 animate-pulse" />
    </span>
  );
}