"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [photoVisible, setPhotoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    if (photoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setPhotoVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(photoRef.current);
      observers.push(observer);
    }

    if (textRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setTextVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(textRef.current);
      observers.push(observer);
    }

    if (statsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setStatsVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(statsRef.current);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const stats = [
    { label: "Months Experience", value: "8", icon: "💼" },
    { label: "Projects Completed", value: "5+", icon: "🚀" },
    { label: "Technologies", value: "12+", icon: "⚡" },
    { label: "Certifications", value: "1", icon: "🏆" },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const offset = 80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know more about my journey and expertise
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Photo */}
          <div
            ref={photoRef}
            className={photoVisible ? "animate-slide-left" : "opacity-0"}
          >
            <div className="relative group max-w-md mx-auto">

              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-gray-400 dark:from-amber-600 dark:to-gray-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-gray-500 dark:from-amber-600 dark:via-amber-700 dark:to-gray-700 rounded-2xl p-1 shadow-2xl">

                  <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                    {/* 🔥 YOUR PHOTO HERE */}
                    <Image
                      src="/images/aboutme.jpeg"
                      alt="Fathima Fida"
                      fill
                      priority
                      className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-amber-400 dark:border-amber-600 rounded-tl-3xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-gray-400 dark:border-gray-600 rounded-br-3xl opacity-50" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={textVisible ? "animate-slide-right" : "opacity-0"}
          >
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">

              <p>
                I am a passionate{" "}
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  Full Stack Developer
                </span>{" "}
                certified through the IBM Full Stack Developer Professional
                Certificate, with hands-on experience in building modern,
                responsive web applications.
              </p>

              <p>
                My technical skills include{" "}
                <span className="font-semibold">
                  HTML, CSS, JavaScript (ES6+), React, Next.js, Node.js,
                  Express.js
                </span>
                , along with{" "}
                <span className="font-semibold">
                  MongoDB and SQL
                </span>
                .
              </p>

              <p>
                I have experience working with{" "}
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  RESTful APIs
                </span>
                , CRUD operations, authentication, and version control using{" "}
                <span className="font-semibold">
                  Git & GitHub
                </span>
                . I’m also familiar with Docker basics, cloud fundamentals, and
                deployment workflows.
              </p>

              <p>
                As a{" "}
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  fast learner with strong adaptability
                </span>
                , I enjoy building real-world projects and continuously
                improving my skills.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Let&apos;s Work Together</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={
            statsVisible
              ? "animate-slide-up grid grid-cols-2 md:grid-cols-4 gap-6"
              : "opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6"
          }
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
