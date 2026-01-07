"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "../ui/theme-toggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header with smooth transitions */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 dark:bg-primary-900/90 backdrop-blur-xl shadow-lg shadow-gray-200/50 dark:shadow-black/20" 
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with gradient animation */}
            <a 
              href="#home" 
              onClick={(e) => smoothScroll(e, "home")}
              className="text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300"
            >
              FM
            </a>

            {/* Desktop Navigation with animated underlines */}
            <div className="hidden md:flex items-center space-x-1">
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, "home")}
                className="group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 relative"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
              
              <a 
                href="#about" 
                onClick={(e) => smoothScroll(e, "about")}
                className="group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 relative"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
              
              <a 
                href="#skills" 
                onClick={(e) => smoothScroll(e, "skills")}
                className="group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 relative"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
              
              <a 
                href="#projects" 
                onClick={(e) => smoothScroll(e, "projects")}
                className="group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 relative"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, "contact")}
                className="group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 relative"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </div>

            {/* Right side: Theme Toggle + Mobile Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle - Now visible! */}
              <ThemeToggle />

              {/* Mobile menu button with animation */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-800 transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu with smooth animation */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop with blur */}
        <div 
          onClick={() => setMenuOpen(false)} 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        {/* Menu Panel with slide animation */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-primary-900 shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Close button */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold gradient-text">Menu</span>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-primary-800 transition-all hover:rotate-90 duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links with stagger animation */}
            <nav className="space-y-2">
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, "home")}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-primary-800 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: "0.1s" }}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => smoothScroll(e, "about")}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-primary-800 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: "0.2s" }}
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => smoothScroll(e, "skills")}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-primary-800 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: "0.3s" }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={(e) => smoothScroll(e, "projects")}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-primary-800 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: "0.4s" }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, "contact")}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-primary-800 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: "0.5s" }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}