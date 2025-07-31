"use client";
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
            <span className="inline-block mx-4">
              <img
                src="/flower-icon.png"
                alt="Donate icon"
                className="inline w-16 h-16"
              />
            </span>{" "}
            TODAY
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Your support helps us serve vulnerable communities and empower lives
            through education, healthcare, and compassion.
          </p>
          <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-100 transition">
            Donate
          </button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/30 pt-10">
          {/* Visual/Promo */}
          <div>
            <img
              src="/shovana-charity-promo.png"
              alt="Support Shovana Foundation"
              className="w-full h-auto rounded shadow"
            />
            <a
              href="#"
              className="block mt-2 text-white underline hover:text-gray-100"
            >
              Shovana Foundation Store ↗
            </a>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold text-white mb-3">About</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Mission & Values</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-white mb-3">Get Involved</h4>
            <ul className="space-y-2 text-white/90">
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><a href="#">Newsletter Signup</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/30 pt-8 text-sm text-white/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>
              Shovana Charity Foundation is a registered nonprofit organization dedicated to uplifting underserved communities across India.
              <a href="#" className="underline"> Learn more</a> about our mission and values.
            </p>
            <p className="mt-2">© 2025 Shovana Charity Foundation. All rights reserved.</p>
          </div>
          <div className="flex gap-4 text-white text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>

        {/* Terms & Privacy */}
        <div className="mt-6 flex justify-center md:justify-end gap-6 text-white/70 text-sm">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
