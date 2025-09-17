import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framermotion/variants";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Tech Startup",
    duration: "June 2023 - August 2023",
    description: "Developed responsive web applications using React and TailwindCSS, collaborating with a team to deliver user-friendly interfaces. Implemented animations with Framer Motion to enhance user experience.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "January 2023 - Present",
    description: "Built and maintained client websites using modern JavaScript frameworks. Focused on creating scalable, performant, and visually appealing solutions tailored to client needs.",
  },
];

const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="relative w-full min-h-[600px] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 bg-transparent mt-[-80px]"
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center mt-[100px]">
          <h2 className="text-4xl md:text-5xl font-bold pb-2  text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-8 hover:scale-105 transition-all duration-300">
            Experience
          </h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 border border-amber-500/20"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-amber-400">{exp.title}</h3>
            <p className="text-lg text-foreground">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
            <p className="text-base text-foreground">{exp.description}</p>
          </div>
        ))}
      </motion.div>

      <div className="w-full h-1 mt-8 bg-gradient-to-r from-amber-500/50 to-pink-500/50 relative z-10 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-500"></div>
    </div>
  );
};

export default ExperienceSection;