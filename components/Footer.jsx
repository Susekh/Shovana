"use client";
import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0077FF] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Donate Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            DONATE{" "}
            <span className="inline-block align-middle">
              <HeartHandshake className="h-16 w-16 mb-4" />
            </span>{" "}
            TODAY
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Your support helps us serve vulnerable communities and empower lives
            through education, healthcare, and compassion.
          </p>
          <a
            href="#donate"
            className="inline-block mt-6 bg-white text-black font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-100 transition"
          >
            Donate
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 border-t border-white/30 pt-12">
          {/* Visual/Promo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              height={200}
              width={200}
              src="/shovana-charity-promo.png"
              alt="Support Shovana Foundation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="md:space-y-3 space-y-1 text-white/90">
              <li>
                <a href="#programs" className="hover:underline">
                  Programs
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:underline">
                  Stories
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:underline">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="md:space-y-3 space-y-1 text-white/90">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="md:space-y-3 space-y-1 text-white/90">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/30 pt-8 text-sm text-white/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>
              Shovana Charity Foundation is a registered nonprofit organization
              dedicated to uplifting underserved communities across India.
            </p>
            <p className="mt-2">
              © 2025 Shovana Charity Foundation. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-white text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
