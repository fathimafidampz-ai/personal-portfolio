"use client";

import React, { useEffect, useState, useRef } from "react";
import SkillCard from "../ui/skill-card";

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

    if (frontendRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFrontendVisible(entry.isIntersecting);
        },
        observerOptions
      );
      observer.observe(frontendRef.current);
      observers.push(observer);
    }

    if (backendRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setBackendVisible(entry.isIntersecting);
        },
        observerOptions
      );
      observer.observe(backendRef.current);
      observers.push(observer);
    }

    if (toolsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setToolsVisible(entry.isIntersecting);
        },
        observerOptions
      );
      observer.observe(toolsRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const frontendSkills = [
    { name: "HTML5", icon: "🌐", proficiency: 95, category: "frontend" },
    { name: "CSS3", icon: "🎨", proficiency: 90, category: "frontend" },
    { name: "JavaScript", icon: "⚡", proficiency: 90, category: "frontend" },
    { name: "React", icon: "⚛️", proficiency: 85, category: "frontend" },
    { name: "Next.js", icon: "▲", proficiency: 85, category: "frontend" },
    { name: "Tailwind CSS", icon: "🎭", proficiency: 90, category: "frontend" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", proficiency: 85, category: "backend" },
    { name: "Express.js", icon: "🚂", proficiency: 85, category: "backend" },
    { name: "MongoDB", icon: "🍃", proficiency: 80, category: "backend" },
    { name: "SQL", icon: "🗄️", proficiency: 80, category: "backend" },
    { name: "REST APIs", icon: "🔌", proficiency: 85, category: "backend" },
  ];

  const toolsSkills = [
    { name: "Git", icon: "🔀", proficiency: 90, category: "tools" },
    { name: "GitHub", icon: "🐙", proficiency: 90, category: "tools" },
    { name: "Docker", icon: "🐳", proficiency: 75, category: "tools" },
    { name: "VS Code", icon: "💻", proficiency: 95, category: "tools" },
    { name: "Postman", icon: "📮", proficiency: 85, category: "tools" },
  ];

  return (
    <section id="skills" className="relative section-container bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="relative z-10">
        
        <div ref={headerRef} className={headerVisible ? "text-center mb-16 animate-fade-in" : "text-center mb-16 opacity-0"}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div ref={frontendRef} className={frontendVisible ? "mb-16 animate-slide-left" : "mb-16 opacity-0"}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">💻</span>
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
                category={skill.category}
              />
            ))}
          </div>
        </div>

        <div ref={backendRef} className={backendVisible ? "mb-16 animate-slide-right" : "mb-16 opacity-0"}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">⚙️</span>
            Backend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
                category={skill.category}
              />
            ))}
          </div>
        </div>

        <div ref={toolsRef} className={toolsVisible ? "animate-slide-left" : "opacity-0"}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">🛠️</span>
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
                category={skill.category}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-rose-100 dark:from-orange-900/20 dark:to-rose-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold text-orange-600 dark:text-orange-400">Always learning and growing!</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently exploring: TypeScript, GraphQL, AWS, and more...
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}