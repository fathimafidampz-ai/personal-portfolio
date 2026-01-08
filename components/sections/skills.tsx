"use client";

import React, { useEffect, useState, useRef } from "react";
import SkillCard from "../ui/skill-card";

// Frontend icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Backend icons
import {
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

// Tools icons
import {
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Bot, Orbit } from "lucide-react";


export default function Skills() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [frontendVisible, setFrontendVisible] = useState(false);
  const [backendVisible, setBackendVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerOptions = { threshold: 0.1 };

    const observe = (ref: any, setter: any) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(([entry]) => {
        setter(entry.isIntersecting);
      }, observerOptions);
      observer.observe(ref.current);
      observers.push(observer);
    };

    observe(headerRef, setHeaderVisible);
    observe(frontendRef, setFrontendVisible);
    observe(backendRef, setBackendVisible);
    observe(toolsRef, setToolsVisible);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ---------------- SKILLS ---------------- */

  const frontendSkills = [
  { name: "HTML5", icon: FaHtml5, proficiency: 95, category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, proficiency: 90, category: "frontend" },
  { name: "JavaScript", icon: FaJs, proficiency: 90, category: "frontend" },
  { name: "React", icon: FaReact, proficiency: 85, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 85, category: "frontend" },
];


  const backendSkills = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    proficiency: 85,
    category: "backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    proficiency: 85,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    proficiency: 80,
    category: "backend",
  },
  {
    name: "SQL",
    icon: SiMysql,
    proficiency: 80,
    category: "backend",
  },
  {
    name: "REST APIs",
    icon: FaDatabase,
    proficiency: 85,
    category: "backend",
  },
];

  const toolsSkills = [
  {
    name: "Git",
    icon: FaGitAlt,
    proficiency: 90,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    proficiency: 90,
    category: "tools",
  },
  {
    name: "Docker",
    icon: FaDocker,
    proficiency: 75,
    category: "tools",
  },
  {
    name: "VS Code",
    icon: VscCode,
    proficiency: 95,
    category: "tools",
  },
  {
    name: "Postman",
    icon: SiPostman,
    proficiency: 85,
    category: "tools",
  },

  // AI tools (no logos uploaded)
  {
    name: "Claude AI",
    icon: Bot,          // 👈 AI bot symbol
    proficiency: 80,
    category: "tools",
  },
  {
    name: "Anti-Gravity",
    icon: Orbit,        // 👈 physics / motion symbol
    proficiency: 75,
    category: "tools",
  },
];


  return (
    <section
      id="skills"
      className="relative section-container bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* FRONTEND */}
        <div
          ref={frontendRef}
          className={`mb-16 ${
            frontendVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <FaReact className="text-blue-500" />
            Frontend Development
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div
          ref={backendRef}
          className={`mb-16 ${
            backendVisible ? "animate-slide-right" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <FaNodeJs className="text-green-500" />
            Backend Development
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div
          ref={toolsRef}
          className={`${toolsVisible ? "animate-slide-left" : "opacity-0"}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGitAlt className="text-orange-500" />
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
