import Navbar from "./components/Navbar";
import IntroductionSection from "./components/IntroductionSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] text-black">
      <Navbar />
      <div className="w-full mt-0">
        <IntroductionSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    <Footer />
    </main>
  );
};
