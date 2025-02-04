import React from "react";
import SectionCard from "./SectionCard.component";

const CardList = () => {
  const cardData = [
    {
      id: 1,
      title: "Interactive",
      subtitle: "Learning",
      description:
        "Our curriculum focuses on Arabic and English (language, math, and science) to spark curiosity and build foundational skills.",
      icon: "/icons/puzzle-icon.png", // Replace with actual icon path
      bgColor: "bg-[#03A6EB]",
      startColor: "bg-blue-100",
      cornerShape: "/icons/blue-corner-shape.png", // Replace with actual corner shape path
    },
    {
      id: 2,
      title: "Creative",
      subtitle: "Activities",
      description:
        "Dancing, music, and art nurture your child’s creativity and physical growth in a fun environment.",
      icon: "/icons/lightbulb-icon.png", // Replace with actual icon path
      bgColor: "bg-[#F47B28]",
      startColor: "bg-brown-100",
      cornerShape: "/icons/orange-corner-shape.png", // Replace with actual corner shape path
    },
    {
      id: 3,
      title: "Learning through",
      subtitle: "Play",
      description:
        "Through play, accompanied with Montessori methods, children develop essential life skills while fostering teamwork and independence.",
      icon: "/icons/montessori-icon.png", // Replace with actual icon path
      bgColor: "bg-[#64AC3E]",
      startColor: "bg-orange-100",
      cornerShape: "/icons/green-corner-shape.png", // Replace with actual corner shape path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid gap-y-8 gap-x-4 grid-cols-1 md:flex md:justify-around">
      {cardData.map((card) => (
        <SectionCard
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          icon={card.icon}
          bgColor={card.bgColor}
          cornerShape={card.cornerShape}
        />
      ))}
    </div>
  );
};

export default CardList;
