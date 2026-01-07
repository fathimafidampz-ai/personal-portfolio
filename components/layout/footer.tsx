"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-accent-50/30 dark:from-primary-900 dark:via-primary-900 dark:to-primary-800 border-t border-gray-200 dark:border-primary-700">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section with gradient */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Fathima Fida M
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-1 text-sm inline-block">
                Home
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-1 text-sm inline-block">
                About
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-1 text-sm inline-block">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-1 text-sm inline-block">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 hover:translate-x-1 text-sm inline-block">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links with hover animations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Connect
            </h4>
            <div className="flex space-x-4">
              
              <a 
                href="https://github.com/fathimafidampz-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-primary-800 dark:to-primary-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:from-accent-500 hover:to-accent-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg"
              >
                <span className="text-sm font-bold">GH</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/fathima-fida-m-a145b0379/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-primary-800 dark:to-primary-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:from-accent-500 hover:to-accent-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg"
              >
                <span className="text-sm font-bold">LI</span>
              </a>

              

              <a 
                href="fathimaahofficial@gmail.com"
                className="group w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-primary-800 dark:to-primary-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:from-accent-500 hover:to-accent-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg"
              >
                <span className="text-sm font-bold">@</span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar with gradient line */}
        <div className="pt-8 border-t border-gradient-to-r from-transparent via-gray-300 dark:via-primary-700 to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Fathima Fida M. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with <span className="text-accent-500 font-semibold">Next.js</span> & <span className="text-accent-500 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}