import React from "react";
import SectionCard from "./SectionCard.component";
import { cardData } from "@/src/common/constants";
import { motion } from "framer-motion";

const CardList = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid gap-y-8 gap-x-4 grid-cols-1 md:flex md:justify-around">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 60 }} // Starts off-screen (below)
          whileInView={{ opacity: 1, y: 0 }} // Moves into place when in view
          transition={{
            duration: 0.6,
            delay: card.id * 0.35, // Delay increases for each card (100ms, 200ms, etc.)
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the card is in view
        >
          <SectionCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            icon={card.icon}
            bgColor={card.bgColor}
            cornerShape={card.cornerShape}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;
