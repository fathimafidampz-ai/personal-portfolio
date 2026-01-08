import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">FM</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-orange-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              {/* Email - Clickable */}
              <li>
                <a
                  href="mailto:fathimaahofficial@gmail.com"
                  className="flex items-center gap-3 hover:text-orange-400 transition-colors duration-200 group"
                >
                  <FaEnvelope className="text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                  <span>fathimaahofficial@gmail.com</span>
                </a>
              </li>

              {/* Phone - Clickable */}
              <li>
                <a
                
                  href="tel:+919048935240"
                  className="flex items-center gap-3 hover:text-orange-400 transition-colors duration-200 group"
                >
                  <FaPhone className="text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                  <span>+91 9048935240</span>
                </a>
              </li>

              {/* Location - Not clickable */}
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-400" />
                <span> Malappuram,India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/fathimafidampz-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/fathima-fida-m-a145b0379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fathima Fida M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}