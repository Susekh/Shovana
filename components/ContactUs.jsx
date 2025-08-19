"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 text-gray-600">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-600">
                  Address: F-2, Chandaka Industrial Estate In front of Infocity,
                  Infocity Chandrasekharpur, Bhubaneshwar Odisha - 751024
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+91 9439173220</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">contact@shovana.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full resize-none border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
