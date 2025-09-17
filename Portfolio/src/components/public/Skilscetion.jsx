import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framermotion/variants";
import AllSkills from "./Skills/AllSkills";
import AllSkillsSM from "./Skills/AllSkillsSM";

const Skilscetion = () => {
  return (
    <div id="skills" className="py-16 relative bg-transparent mt-[-40px]">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden">
        {/* Animated Gradient Grid and Stars Background */}
        <motion.div
          className="absolute inset-0 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-pink-500/20"
            animate={{
              background: [
                "linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(236, 72, 153, 0.2))",
                "linear-gradient(to right, rgba(245, 158, 11, 0.3), rgba(236, 72, 153, 0.3))",
                "linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(236, 72, 153, 0.2))",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
          {/* Sparkling Stars */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `linear-gradient(45deg, #F59E0B, #EC4899)`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  x: Math.random() * 20 - 10,
                  y: Math.random() * 20 - 10,
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex flex-col items-center mt-[50px] relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-8 pb-3">
              My Skills
            </h2>
            <p className="text-lg text-center text-foreground max-w-2xl ">
              I specialize in these technologies, leveraging best practices to craft high-quality, scalable solutions for my portfolio projects.
            </p>
          </div>
        </motion.div>
        <div className="absolute bottom-[-50px] left-[50%] -translate-x-[50%] sm:hidden lg:block sm:relative z-10">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden relative z-10">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default Skilscetion;