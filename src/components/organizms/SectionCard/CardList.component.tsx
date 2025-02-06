import React from "react";
import SectionCard from "./SectionCard.component";
import { cardData } from "@/src/common/constants";

const CardList = () => {
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
