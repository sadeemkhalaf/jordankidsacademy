import React from "react";

interface SectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bgColor: string;
  cornerShape: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  bgColor,
  cornerShape,
}) => {
  return (
    <div
      className={`relative flex flex-col w-full md:w-72 h-52 md:h-96 p-6 rounded-[30px] text-black`}
      style={{backgroundColor: bgColor}}
    >
      {/* Corner Shape */}
      <div className="absolute top-0 right-0 -z-100">
        <img src={cornerShape} alt="Corner Shape" className="w-20 h-20" />
      </div>

      {/* Star Shape Behind Icon */}
      <div className="relative mb-4">
        <div className="flex justify-center items-center">
          <img
            src="/icons/star-shape.png" // Replace with the star shape image
            alt="Star Shape"
            className="w-14 h-14 relative mix-blend-soft-light"
          />
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-7 h-7 absolute"
          />
        </div>
      </div>

      {/* Title and Subtitle */}
      <h3 className="text-xl font-bold mb-1">
        {title} <span className="italic text-lg font-medium">{subtitle}</span>
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionCard;
