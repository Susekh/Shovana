"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "Programs", href: "#programs" },
    { label: "Stories", href: "#stories" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  // Scrollspy effect
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset so it triggers earlier
      let current = "";
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navItems[index].href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white border-b px-6 md:px-12 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl text-gray-500 font-semibold">
            Shovana Charity Foundation
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block ml-auto mr-4 space-x-8">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-medium transition-colors ${
                activeSection === href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#donate"
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`block font-medium ${
                activeSection === href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#donate"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
