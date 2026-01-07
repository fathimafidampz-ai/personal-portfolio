"use client";

import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../ui/project-card";

export default function Projects() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    if (headerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setHeaderVisible(entry.isIntersecting);
        },
        observerOptions
      );
      observer.observe(headerRef.current);
      observers.push(observer);
    }

    if (projectsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setProjectsVisible(entry.isIntersecting);
        },
        observerOptions
      );
      observer.observe(projectsRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const projects = [
    {
      title: "Intelligent Tutoring System Admin Dashboard",
      description: "Comprehensive admin dashboard for managing an AI-powered tutoring platform. Features include student progress tracking, course management, analytics visualization, and real-time monitoring of tutoring sessions with detailed performance metrics.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
      image: "🎓",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Car Dealership App",
      description: "Full-stack car dealership management application with inventory management, customer relationship tools, and sales tracking. Includes advanced search filters, image galleries, financing calculators, and appointment scheduling system.",
      technologies: ["Next.js", "TypeScript", "SQL", "Tailwind CSS"],
      image: "🚗",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Nursery Plant Website",
      description: "E-commerce platform for a plant nursery featuring product catalog, shopping cart, order management, and plant care guides. Includes search functionality, category filters, and responsive design optimized for mobile shopping experience.",
      technologies: ["React", "Express.js", "MongoDB", "Stripe API"],
      image: "🌱",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application with multiple question types, timer functionality, score tracking, and result analytics. Features include question randomization, difficulty levels, performance history, and social sharing of achievements.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      image: "📝",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="relative section-container bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative z-10">
        
        <div ref={headerRef} className={headerVisible ? "text-center mb-16 animate-fade-in" : "text-center mb-16 opacity-0"}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating full-stack development skills
          </p>
        </div>

        <div ref={projectsRef} className={projectsVisible ? "grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" : "grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0"}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.image}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 dark:from-orange-400 dark:to-rose-400 hover:from-orange-600 hover:to-rose-600 dark:hover:from-orange-300 dark:hover:to-rose-300 text-white dark:text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}