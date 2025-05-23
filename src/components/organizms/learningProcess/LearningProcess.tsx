import { motion } from "framer-motion";
import React from "react";

const LearningProcess = () => {
  const shapes = [
    {
      id: 1,
      label: "Science",
      color: "#FDF180",
      imgSrc: "/icons/gif/science.gif",
    },
    {
      id: 2,
      label: "Art & Culture",
      color: "#FDF220",
      imgSrc: "/icons/gif/art.gif",// Replace with actual Art & Culture image
    },
    {
      id: 3,
      label: "Reading",
      color: "#FDF260",
      imgSrc: "/icons/gif/reading.gif",// Replace with actual Art & Culture image
    },
    {
      id: 4,
      label: "Cooking",
      color: "#FDF380",
      imgSrc: "/icons/gif/cooking.gif",// Replace with actual Art & Culture image
    },
    {
      id: 5,
      label: "Montessori",
      color: "#FDF480",
      imgSrc: "/icons/gif/kids.gif",// Replace with actual Art & Culture image
    },
  ];

  return (
    <section className="w-full py-16 px-3 text-center">
      {/* Section Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-gray-900"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learning process support are <br />
        <span className="italic text-purple-500">comfortable</span> and{" "}
        <span className="italic text-purple-500">dedicated</span>
      </motion.h2>
      <p className="mt-2 text-gray-500 font-medium text-sm">
        Your Child’s Safety is <span className="font-bold">Our Priority</span>
      </p>

      {/* Floating Tags */}
      <div className="flex justify-center mt-10">
        <img
          src="/learningprocess.png"
          alt="Learning process graphic"
          className="w-[350px] md:w-[500px] opacity-90"
        />
      </div>

      {/* Shapes */}
      <div className="flex flex-col md:flex-col md:justify-around md:items-center justify-start md:mt-32">
        <motion.div
          className="font-[mansalva] text-7xl md:text-8xl md:text-start text-[#0a303a] md:px-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"What we offer".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <div className="grid grid-cols-2 md:flex md:flex-row gap-8 mt-12 px-4 md:px-16 md:flex-wrap">
          {shapes.map((shape) => (
            <motion.div
              key={shape.id}
              className="flex flex-col items-center relative"
              whileHover={{ y: -32 }}
            >
              {/* Shape Container with SVG */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex justify-center items-center">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 215 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                d="M215 107.5C215 166.871 124.871 214.5 65.5 214.5C6.12939 214.5 0 166.871 0 107.5C0 48.1294 48.1294 0 107.5 0C166.871 0 215 48.1294 215 107.5Z"
                fill={shape.color}
                />
              </svg>

              {/* Floating Image Inside Shape */}
              <img
                src={shape.imgSrc}
                alt={shape.label}
                className="absolute w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              </div>

              {/* Label */}
              <p className="mt-2 text-sm text-purple-500">{shape.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
