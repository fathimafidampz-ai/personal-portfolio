"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
        ([entry]) => setHeaderVisible(entry.isIntersecting),
        observerOptions
      );
      observer.observe(headerRef.current);
      observers.push(observer);
    }

    if (projectsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setProjectsVisible(entry.isIntersecting),
        observerOptions
      );
      observer.observe(projectsRef.current);
      observers.push(observer);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const projects = [
    {
      title: "Intelligent Tutoring System Admin Dashboard",
      description:
        "Comprehensive admin dashboard for managing an AI-powered tutoring platform. Features include analytics, student progress tracking, and real-time monitoring.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
      image: "🎓",
      githubLink: "#",
    },
    {
      title: "Car Dealership App",
      description:
        "Full-stack car dealership management system with inventory, appointments, and financing tools.",
      technologies: ["Next.js", "TypeScript", "SQL", "Tailwind CSS"],
      image: "🚗",
      githubLink: "#",
    },
    {
      title: "Nursery Plant Website",
      description:
        "E-commerce platform for plant nursery with cart, search, filters, and order management.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      image: "🌱",
      githubLink: "#",
    },
    {
      title: "Quiz App",
      description:
        "Interactive quiz app with timer, score tracking, difficulty levels, and analytics.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      image: "📝",
      githubLink: "#",
    },
    {
      title: "Personal Portfolio",
      description: "Modern portfolio built with animations and responsive UI.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "💼",
      githubLink: "#",
    },
  ];

  return (
    /* 🔥 PAGE TRANSITION */
    <motion.section
      id="projects"
      className="relative section-container bg-white dark:bg-gray-900 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative z-10">

        {/* HEADER */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${
            headerVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* PROJECTS GRID */}
        <motion.div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>

        {/* GITHUB CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/fathimafidampz-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:scale-105 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}
