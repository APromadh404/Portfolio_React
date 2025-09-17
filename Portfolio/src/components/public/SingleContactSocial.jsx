import React from "react";
import { motion } from "framer-motion";

const SingleContactSocial = ({ Icon, link, className }) => {
  return (
    <motion.div
      className={`h-10 w-10 sm:h-12 sm:w-12  rounded-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-pink-500 border border-orange/30 hover:from-amber-500/50 hover:to-pink-500/50 hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer flex items-center justify-center w-full h-full"
      >
        <Icon className="text-xl sm:text-2xl text-white group-hover:text-cyan transition-colors duration-300" />
      </a>
    </motion.div>
  );
};

export default SingleContactSocial;