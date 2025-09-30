import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framermotion/variants";
import ContactForm from "./ContactForm";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SingleInfo from "./SingleInfo";
import SingleContactSocial from "./SingleContactSocial";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-[100px] relative bg-transparent min-h-[600px]"
      style={{ position: "relative" }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:50px_50px] opacity-25"
          animate={{
            rotateX: [-3, 3, -3],
            rotateY: [-3, 3, -3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-500/10"
          animate={{
            background: [
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.15))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 2,
                height: Math.random() * 3 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #F59E0B, #EC4899)`,
                boxShadow:
                  "0 0 6px rgba(245, 158, 11, 0.4), 0 0 10px rgba(236, 72, 153, 0.2)",
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.6, 1.1, 0.6],
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 text-center"
         style={{userSelect:'none',WebkitUserSelect:'none',MozUserSelect:'none',msUserSelect:'none'}}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-6 hover:scale-105 hover:text-cyan transition-all duration-300">
          Contact Me
        </h2>
        <p className="text-base sm:text-lg text-foreground max-w-xl md:max-w-2xl mx-auto mb-8 hover:text-gray-400 transition-colors duration-300">
          Let's connect! Whether you want to collaborate or just say hi, I'm
          just a few clicks away.
        </p>
      </motion.div>

      {/* Main Contact Section - Card Style */}
      <motion.div
        className="relative z-10 max-w-[1000px] mx-auto bg-gradient-to-r from-amber-30 to-pink-30 p-6 sm:p-8 rounded-2xl border-none border-orange/30 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
        }}
        draggable="false"
      >
        {/* Card Overlay for Visual Depth */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-30 to-pink-30 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.8 }}
        ></motion.div>

        {/* Left Side: Get In Touch + Contact Form */}
        <div className="relative flex flex-col gap-6 w-full lg:w-1/2 z-10">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
             style={{userSelect:'none',WebkitUserSelect:'none',MozUserSelect:'none',msUserSelect:'none'}}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-4 hover:text-cyan transition-all duration-300">
              Get In Touch
            </h3>
            <p className="text-base sm:text-lg text-foreground hover:text-gray-300 transition-colors duration-300">
              Feel free to reach out for collaborations, inquiries, or just to
              connect!
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="bg-transparent p-4 sm:p-6 rounded-lg border-none border-orange/20 hover:border-amber-500/30 transition-all duration-300"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Right Side: Contact Info + Social Links */}
        <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 w-full lg:w-1/2 z-10">
          <motion.img
            src="../../public/images/email-image.png"
            alt="email illustration"
            className="max-w-[200px] sm:max-w-[250px] rounded-xl border-none border-orange/20 hover:border-none hover:shadow-lg  transition-all duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            draggable="false"
          />
          <motion.div
            className="flex flex-col gap-4 w-full max-w-[300px]"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleInfo
              text="avipromadhfernando@gmail.com"
              Image={HiOutlineMail}
              className="group cursor-text hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:shadow-md hover:shadow-amber-500/30 transition-all duration-300 rounded-lg p-2"
            />
            <SingleInfo
              text="+94 713463572"
              Image={FiPhone}
              className="group cursor-text hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:shadow-md hover:shadow-amber-500/30 transition-all duration-300 rounded-lg p-2"
            />
            <SingleInfo
              text="Western Province,Sri Lanka"
              Image={IoLocationOutline}
              className="group cursor-text hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:shadow-md hover:shadow-amber-500/30 transition-all duration-300 rounded-lg p-2"
            />
          </motion.div>
          <motion.div
            className="flex gap-4 sm:gap-6"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleContactSocial
              link="#"
              Icon={FaLinkedinIn}
              className="text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:shadow-lg hover:shadow-amber-500/50 p-2 rounded-full transition-all duration-300"
            />
            <SingleContactSocial
              link="#"
              Icon={FiGithub}
              className="text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:shadow-lg hover:shadow-amber-500/50 p-2 rounded-full transition-all duration-300"
            />
            <SingleContactSocial
              link="#"
              Icon={FaInstagram}
              className="text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:shadow-lg hover:shadow-amber-500/50 p-2 rounded-full transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
