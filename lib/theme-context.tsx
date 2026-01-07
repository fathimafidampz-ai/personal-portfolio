"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Theme types - light or dark
 */
type Theme = "light" | "dark";

/**
 * Theme Context Interface
 * Provides theme state and toggle function
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

/**
 * Create Theme Context
 * This will be used by components to access theme state
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Provider Component
 * Wraps the app and provides theme functionality to all children
 * 
 * Features:
 * - Persists theme choice in localStorage
 * - Applies theme class to HTML element
 * - Provides toggle function to all components
 * - Prevents flash of unstyled content (FOUC)
 * 
 * @param children - React components to wrap
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to store current theme
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true);
    
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    // Check system preference if no saved theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    
    // Use saved theme or fall back to system preference
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    
    // Apply theme to HTML element
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  /**
   * Toggle between light and dark theme
   * Saves preference to localStorage
   */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
    
    // Apply to HTML element with smooth transition
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Return context provider with theme state
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use theme context
 * Use this in any component to access theme state and toggle function
 * 
 * Example usage:
 * const { theme, toggleTheme, mounted } = useTheme();
 * 
 * @returns Theme context with theme, toggleTheme function, and mounted state
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Better error message with instructions
  if (context === undefined) {
    throw new Error(
      "useTheme must be used within ThemeProvider. " +
      "Make sure your component is wrapped with <ThemeProvider>."
    );
  }
  
  return context;
}