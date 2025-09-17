import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { fadeIn } from "../framermotion/variants";

const roles = ["Front-End Web Developer", "Backend Developer", "Mobile Developer"];

const Herosection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;

    if (isTyping) {
      if (displayedText.length < roles[currentRole].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        deletingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayedText, isTyping, currentRole]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* 3D Animated Gradient Grid, Glowing Spots, and Wave Patterns Background */}
      <motion.div
        className="absolute inset-0 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ perspective: "1000px" }}
      >
        {/* 3D Grid Pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:50px_50px] opacity-25"
          animate={{
            rotateX: [-10, 10, -10],
            rotateY: [-10, 10, -10],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-500/10"
          animate={{
            background: [
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.15))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        {/* 3D Glowing Spots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`spot-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 5 + 3,
                height: Math.random() * 5 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #F59E0B, #EC4899)`,
                boxShadow: "0 0 10px rgba(245, 158, 11, 0.6), 0 0 15px rgba(236, 72, 153, 0.4)",
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [0.5, 1.4, 0.5],
                z: [0, 20, 0],
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        {/* Animated Wave Patterns */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute w-full h-16"
              style={{
                bottom: `${i * 25}%`,
                background: `linear-gradient(to right, rgba(245, 158, 11, 0.08), rgba(236, 72, 153, 0.08))`,
                clipPath: `path('M0,40 C50,60 100,20 150,40 C200,60 250,20 300,40 C350,60 400,20 450,40 L${window.innerWidth},40 L${window.innerWidth},80 L0,80 Z')`,
              }}
              animate={{
                x: [-100, 100, -100],
                y: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </motion.div>
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-lg">
          <motion.h1
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground text-shadow-amber-50 uppercase hover:text-orange-400 text-shadow-2xl transition-all duration-300 ease-in-out"
          >
            <span className="text-3xl sm:text-4xl lg:text-4xl font-bold">Hello, It's Me</span> <br className="hidden lg:block" />
            Avishka Fernando
          </motion.h1>
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-xs sm:text-xl lg:text-2xl uppercase text-foreground font-semibold tracking-wide"
          >
            I am a <span className="text-orange-500">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-lg sm:text-lg lg:text-base text-foreground mt-4 text-wrap"
          >
            A passionate developer with expertise in crafting modern web and mobile applications. <br />
            Proficient in design tools like Figma and Adobe XD, with a passion for creating user-friendly, accessible, and visually appealing interfaces. Demonstrated ability to translate client needs into functional designs and collaborate within cross-functional teams. Eager to contribute to impactful digital experiences while learning and growing in a fast-paced design environment.
          </motion.p>
          {/* Social Media Section */}
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-6 flex justify-center lg:justify-start gap-4 sm:mb-14"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-orange-500 transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-orange-500 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-orange-500 transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-orange-500 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </motion.a>
          </motion.div>
        </div>
        {/* Image and Hexagon Section */}
        <div className="relative w-full max-w-lg flex items-center justify-center">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="h-full flex items-center justify-center"
          >
            <img
              src="../../public/images/HexaPic.png"
              alt="Avishka Fernando"
              className="max-h-[450px] w-auto mt-[-80px]"
            />
            <div className="absolute -z-10 flex justify-center items-center animate-pulse">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[610px] w-auto text-orange-700 blur-md animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center rotate-90">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[610px] w-auto text-amber-500 opacity-70 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center rotate-90">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[610px] w-auto text-amber-700 opacity-70 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[610px] w-auto text-pink-500 opacity-70 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[10px] w-auto text-pink-300 opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;