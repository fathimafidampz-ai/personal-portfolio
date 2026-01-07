"use client";

import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/animated-text";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({ 
        top: element.offsetTop - 80, 
        behavior: "smooth" 
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({ 
        top: element.offsetTop - 80, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="animate-fade-in">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                👋 Welcome to my portfolio
              </p>
            </div>

            <div className="animate-slide-up space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I am
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
                Fathima Fida M
              </h1>
            </div>

            <div className="animate-slide-up h-12 md:h-16 flex items-center justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                <AnimatedText texts={roles} typingSpeed={100} deletingSpeed={50} delayBetweenTexts={2000} />
              </h2>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Passionate about creating elegant solutions to complex problems. 
                Specializing in modern web technologies and user-centric design.
              </p>
            </div>

            <div className="animate-scale-in flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" style={{ animationDelay: "0.6s" }}>
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 rounded-full font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:from-amber-600 group-hover:to-amber-700" />
                <span className="relative text-white flex items-center justify-center space-x-2">
                  <span>View Projects</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 rounded-full font-semibold text-base md:text-lg border-2 border-gray-700 dark:border-amber-500 text-gray-700 dark:text-amber-500 hover:bg-gray-700 hover:text-white dark:hover:bg-amber-500 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Contact Me</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>

            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative group">

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />

              {/* Decorative rings */}
              <div className="absolute -inset-8 border-2 border-amber-200/30 dark:border-amber-700/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -inset-12 border-2 border-gray-200/20 dark:border-gray-700/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

              {/* Photo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
                
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 dark:from-amber-600 dark:via-amber-700 dark:to-amber-800 rounded-full p-1 shadow-2xl shadow-amber-500/30 group-hover:scale-105 transition-transform duration-500">
                  
                  <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                    
                    {/* Your Photo */}
                    <Image
                      src="/images/myprofile.jpeg"
                      alt="My Photo"
                      fill
                      className="object-cover rounded-full"
                    />

                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-100 dark:bg-gray-900/50 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-2xl">✨</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
