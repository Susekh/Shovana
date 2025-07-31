import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Highlights from "@/components/Highlights";
import MissionStatement from "@/components/MissionStatement";
import StoriesSection from "@/components/StorySection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionStatement />
      <Highlights />
      <StoriesSection />
      <FocusSection />
      <AboutSection />
      <ContactUs />
      <Footer />
    </>
  )
}