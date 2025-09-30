import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BiWorld, BiArrowToTop } from "react-icons/bi";

const footerLinks = [
  {
    name: "About Me",
    section: "about",
  },
  {
    name: "Skills",
    section: "skills",
  },
  {
    name: "Experience",
    section: "experience",
  },
  {
    name: "Projects",
    section: "projects",
  },
];

const FooterSection = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Auto-update year
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.footer
      className="px-4 sm:px-6 bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg shadow-amber-500/20 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated Divider with Sparkles */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-12 mb-4">
        <motion.div
          className="w-full h-[2px] bg-gradient-to-r from-amber-500 via-pink-500 to-amber-500"
          animate={{ backgroundPosition: "200% 0" }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 100%" }}
        ></motion.div>
        {/* Sparkle Effects */}
        <div className="absolute top-[-4px] left-1/4 w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
        <div className="absolute top-[-4px] right-1/4 w-2 h-2 bg-white/80 rounded-full animate-pulse delay-200"></div>
        <motion.div
          className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 bg-white/95 rounded-full p-2 shadow-lg shadow-amber-500/40"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, boxShadow: "0 0 12px rgba(245, 158, 11, 0.6)" }}
        >
          <BiWorld className="text-2xl sm:text-3xl text-amber-500" />
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto py-4 sm:py-6 md:flex justify-between items-center">
        {/* Name with Animation */}
        <motion.p
          className="text-xl sm:text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
           style={{userSelect:'none',WebkitUserSelect:'none',MozUserSelect:'none',msUserSelect:'none'}}
        >
          Avishka Fernando
        </motion.p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-3 sm:gap-5 text-base sm:text-lg mt-3 md:mt-0">
          {footerLinks.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            >
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="relative cursor-pointer text-white/90 hover:text-pink-200 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-amber-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      

      {/* Copyright with Auto-Updating Year */}
      <motion.p
        className="max-w-[1200px] mx-auto text-right text-xs sm:text-sm text-white/70 mb-0 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        © {currentYear} AvishkaFernando | All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default FooterSection;