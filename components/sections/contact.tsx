"use client";

import React, { useEffect, useState, useRef } from "react";
import ContactForm from "../ui/contact-form";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    if (headerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setHeaderVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(headerRef.current);
      observers.push(observer);
    }

    if (formRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFormVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(formRef.current);
      observers.push(observer);
    }

    if (infoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInfoVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(infoRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="contact" className="relative section-container bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="relative z-10">
        <div ref={headerRef} className={headerVisible ? "text-center mb-16 animate-fade-in" : "text-center mb-16 opacity-0"}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I would love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={formRef} className={formVisible ? "animate-slide-left" : "opacity-0"}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
              <ContactForm />
            </div>
          </div>

          <div ref={infoRef} className={infoVisible ? "space-y-8 animate-slide-right" : "space-y-8 opacity-0"}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:fathimaahofficial@gmail.com" className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg group">
                  <FaEnvelope className="text-3xl mr-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">fathimaahofficial@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919048935240" className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg group">
                  <FaPhoneAlt className="text-3xl mr-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 9048935240</p>
                  </div>
                </a>

                <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <FaMapMarkerAlt className="text-3xl mr-4 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Malappuram, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/fathimafidampz-ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <FaGithub className="text-3xl mr-3 text-gray-900 dark:text-white" />
                  <span className="font-semibold text-gray-900 dark:text-white">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/fathima-fida-m-a145b0379/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <FaLinkedin className="text-3xl mr-3 text-blue-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">LinkedIn</span>
                </a>

                <a href="#home" className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <FaGlobe className="text-3xl mr-3 text-orange-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">Portfolio</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">Available for opportunities</p>
                  <p className="text-sm text-green-600 dark:text-green-500">Open to freelance projects and full-time positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}