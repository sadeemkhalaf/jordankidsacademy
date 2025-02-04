import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Design.", "Development.", "Branding."];

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredWordIndex, setHoveredWordIndex] = useState<number | null>(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hue colors for each word
  const backgroundColors = ["#FF6F6150", "#6A5ACD50", "#48D1CC50"];

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-none transition-colors duration-500"
      style={{
        backgroundColor:
          hoveredWordIndex !== null
            ? backgroundColors[hoveredWordIndex]
            : "white", // Default background color
      }}
    >
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed rounded-full bg-white z-50"
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
        animate={{
          width: hoveredWordIndex !== null ? 120 : 16,
          height: hoveredWordIndex !== null ? 120 : 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      ></motion.div>

      {/* Hero Section */}
      <div className="relative z-10 text-center text-black">
        {words.map((word, index) => (
          <span
            key={index}
            className="text-6xl font-bold mx-2"
            onMouseEnter={() => setHoveredWordIndex(index)}
            onMouseLeave={() => setHoveredWordIndex(null)}
            style={{
              mixBlendMode: "difference",
              display: "inline-block",
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
