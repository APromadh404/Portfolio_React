import React from "react";
import NavBarMain from "../components/Common/navbar";
import Herosection from "../components/Common/Herosection";
import Skilscetion from "../components/Common/Skilscetion";
import Aboutme from "../components/Common/Aboutme";
import ExperienceSection from "../components/Common/ExperienceSection";
import ProjectSection from "../components/Common/ProjectSection";
import ContactSection from "../components/Common/ContactSection";
import FooterSection from "../components/Common/FooterSection";
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
