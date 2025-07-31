"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Programs", href: "#programs" },
    { label: "Stories", href: "#stories" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Support Us", href: "#support" },
  ];

  return (
    <header className="bg-white border-b px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl text-gray-500 font-semibold">Shovana Charity Foundation</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block ml-auto mr-4 space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {label}
            </Link>
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
              className="block text-gray-700 hover:text-blue-600 font-medium"
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
