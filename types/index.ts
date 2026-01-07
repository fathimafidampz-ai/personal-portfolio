/**
 * Common TypeScript type definitions for the portfolio website
 * Add your custom types here as the project grows
 */

/**
 * Project type - used for portfolio projects showcase
 * 📝 CUSTOMIZATION: Add your actual project data later
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

/**
 * Skill type - used for skills section
 * 📝 CUSTOMIZATION: Add your actual skills later
 */
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: number; // 1-100
  icon?: string;
}

/**
 * Social media link type
 * 📝 CUSTOMIZATION: Add your social media links later
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/**
 * Navigation link type
 */
export interface NavLink {
  name: string;
  href: string;
}
