"use client";
import { useState } from "react";
import {
  Target,
  Gem,
  Users,
  ActivitySquare,
} from "lucide-react";

const aboutContent = {
  "Our Mission": {
    title: "Our Mission",
    subtitle: "Pioneering the Future with AI-first Innovations",
    description:
      "We aim to enhance human potential and safety by developing intelligent, reliable, and scalable AI solutions tailored for industries like mining, manufacturing, and logistics.",
    icon: <Target className="w-10 h-10 text-blue-600" />,
  },
  "Core Values": {
    title: "Core Values",
    subtitle: "The Principles That Drive Us",
    description:
      "Integrity, innovation, inclusivity, and impact are at the heart of everything we do. We prioritize ethical development, sustainability, and collaboration.",
    icon: <Gem className="w-10 h-10 text-blue-600" />,
  },
  Leadership: {
    title: "Leadership",
    subtitle: "Visionaries Behind the Mission",
    description:
      "Our leadership team combines deep technical expertise with industry insight to steer the company toward meaningful, transformative solutions.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
  },
  "Impact & Initiatives": {
    title: "Impact & Initiatives",
    subtitle: "Driving Real-World Change",
    description:
      "We’re not just building tools — we’re shaping safer, smarter environments through our AI-powered products, public partnerships, and community-driven programs.",
    icon: <ActivitySquare className="w-10 h-10 text-blue-600" />,
  },
};

const AboutUsSection = () => {
  const [selected, setSelected] = useState("Our Mission");

  return (
    <section className="min-h-screen py-20 px-6 bg-blue-50 text-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Intro Card */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl flex flex-col justify-between shadow-md">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              About Us
            </h4>
            <h2 className="text-3xl font-extrabold mt-2 leading-snug">
              Driving innovation and trust with AI-first solutions.
            </h2>
            <p className="mt-4 text-sm text-blue-100">
              We're building a future where intelligence, safety, and experience
              come together seamlessly.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4 border-r border-blue-200 pr-6">
            {Object.keys(aboutContent).map((item) => (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className={`text-left text-lg cursor-pointer font-medium border-b pb-2 transition ${
                  selected === item
                    ? "text-blue-800 font-bold"
                    : "text-blue-600"
                } hover:text-blue-800`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dynamic Info */}
          <div className="flex flex-col gap-4">
            {aboutContent[selected].icon}
            <p className="text-xs uppercase text-blue-500 font-semibold">
              {aboutContent[selected].title}
            </p>
            <h3 className="text-2xl font-bold">
              {aboutContent[selected].subtitle}
            </h3>
            <p className="text-base text-blue-800 leading-relaxed">
              {aboutContent[selected].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
