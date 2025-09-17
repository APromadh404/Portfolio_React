import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framermotion/variants";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const Aboutme = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-[600px] flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[-20px] justify-between items-center bg-transparent"
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #F59E0B, #EC4899)`,
                boxShadow:
                  "0 0 8px rgba(245, 158, 11, 0.5), 0 0 12px rgba(236, 72, 153, 0.3)",
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
                x: Math.random() * 50 - 25,
                y: Math.random() * 50 - 25,
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 group"
      >
        <div className="h-[480px] w-[300px] relative">
          <div className="h-[480px] w-[300px] rounded-[100px] absolute overflow-hidden border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-amber-500 group-hover:to-pink-500 group-hover:shadow-lg group-hover:shadow-amber-500/40 transition-all duration-500">
            <img
              src="../../public/images/about-me.png"
              alt="About Me Image"
              className="h-full w-auto object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
            />
          </div>
          <div className="h-[480px] w-[250px] bg-gradient-to-r from-amber-500/20 to-pink-500/20 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 group-hover:shadow-xl group-hover:shadow-amber-500/30 group-hover:-translate-y-2 transition-all duration-500"></div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 group"
      >
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-8 group-hover:scale-105 group-hover:text-cyan transition-all duration-300">
            About Me
          </h2>
          <p className="text-lg text-foreground hover:text-gray-500 transition-colors duration-300 max-w-2xl">
            I'm Avishka Fernando, a passionate aspiring web developer pursuing a
            Higher National Diploma in Information Technology at the Advanced
            Technical Institute, Dehiwala. I specialize in crafting responsive,
            user-friendly web applications using React, JavaScript, and
            TailwindCSS. My journey involves hands-on projects that enhance my
            skills in creating modern, visually appealing interfaces. I'm eager
            to join innovative teams, contribute to impactful projects, and grow
            as a developer while delivering high-quality solutions in the tech
            industry.
          </p>
          <button className="border border-orange rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-500 cursor-pointer md:self-start sm:self-center group/button">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to="projects"
              className="cursor-pointer text-foreground group-hover/button:text-white transition-all duration-500"
            >
              My Projects
            </Link>
            <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-transform duration-500" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
