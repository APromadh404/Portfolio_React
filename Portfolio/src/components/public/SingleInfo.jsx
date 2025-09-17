import React from "react";
import { motion } from "framer-motion";

const SingleInfo = ({ text, Image, className }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 sm:gap-4 p-3 border-0 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500  border-orange/30 group hover:from-amber-500/40 hover:to-pink-500/40 hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, x: 8 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image className="text-2xl sm:text-3xl text-white group-hover:text-cyan transition-colors duration-300" />
      <p className="text-sm sm:text-base text-white font-medium group-hover:text-cyan transition-colors duration-300">
        {text}
      </p>
    </motion.div>
  );
};

export default SingleInfo;