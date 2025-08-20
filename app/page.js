"use client";

import { motion } from "motion/react"

import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Highlights from "@/components/Highlights";
import MissionStatement from "@/components/MissionStatement";
import StoriesSection from "@/components/StorySection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Header />

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <MissionStatement />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <Highlights />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <StoriesSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <FocusSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <AboutSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <ContactUs />
      </motion.div>

      <Footer />
    </>
  );
}
