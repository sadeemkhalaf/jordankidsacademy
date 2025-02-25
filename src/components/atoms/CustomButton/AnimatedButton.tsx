"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedButton = ({
  initialText = "Hover Me",
  hoverText = "Clicked!",
  className = "",
}: {
  initialText: string;
  hoverText: string;
  className?: string;
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden px-6 py-3 text-white bg-blue-600 rounded-lg font-semibold ${className}`}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      {/* Original Text */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -20, opacity: 0, transition: { duration: 0.3 } },
          pressed: { y: -20, opacity: 0, transition: { duration: 0.3 } },
        }}
      >
        {initialText}
      </motion.span>

      {/* Hover Text */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          rest: { y: 20, opacity: 0 },
          hover: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
          pressed: { y: 0, opacity: 1, transition: { duration: 0.3 } },
        }}
      >
        {hoverText}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
