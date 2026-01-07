import { NavLink } from "@/types";

/**
 * Navigation links for the website
 * 📝 CUSTOMIZATION: Add or remove navigation items here
 * 
 * Each link has:
 * - name: Display text
 * - href: URL/anchor link
 */
export const navigationLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

/**
 * Social media links
 * 📝 CUSTOMIZATION: Add your actual social media URLs here
 */
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: "email",
  },
];