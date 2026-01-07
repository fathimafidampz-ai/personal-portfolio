import React from "react";
import PageLayout from "@/components/layout/page-layout";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

/**
 * Home Page
 * Main landing page with all sections
 */
export default function Home() {
  return (
    <PageLayout>
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      <Projects />

      {/* Contact Section - NEW! */}
      <Contact />

      
    </PageLayout>
  );
}