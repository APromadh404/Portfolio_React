import React from "react";
import NavBarMain from "../components/public/navbar";
import Herosection from "../components/public/Herosection";
import Skilscetion from "../components/public/Skilscetion";
import Aboutme from "../components/public/Aboutme";
import ExperienceSection from "../components/public/ExperienceSection";
import ProjectSection from "../components/public/ProjectSection";
import ContactSection from "../components/public/ContactSection";
import FooterSection from "../components/public/FooterSection";
const HomePage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200 bg-background text-foreground">
      <header className="p-4">
        <NavBarMain />
      </header>
      <main className="p-8">
        <Herosection />
        <Aboutme />
        <Skilscetion />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default HomePage;
