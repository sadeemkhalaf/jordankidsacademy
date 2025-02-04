import React from "react";
import Image from "next/image";
import { CustomButton } from "../../atoms";

const GrowthSection = () => {
  return (
    <div
      className="relative w-full px-6 md:px-16 md:py-24 flex flex-col md:flex-row items-center justify-end py-12"
      style={{ backgroundColor: "#64AC3E" }}
    >
      {/* Right Side - Text Content */}
      <div className="flex flex-col md:w-1/2 text-center md:pr-16 md:text-right justify-end">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          We aim to help children <br />
          <span className="text-[#FFD25D] italic">
            Grow into well-rounded individuals
          </span>
        </h2>
        <p className="mt-6 text-white leading-relaxed text-sm text-left md:text-right">
          As a state-of-the-art nursery, we believe in providing a learning
          environment that respects every child’s unique personality,
          creativity, and intelligence. Our program is rooted in fostering their
          growth while ensuring a foundation of fun and safety for every family.
        </p>

        <div className="w-full flex justify-end mt-8">
          <CustomButton
            variant="outlined-filled"
            className="text-purple-500 border-purple-500"
          >
            Learn more
          </CustomButton>
        </div>
      </div>
      {/* Left Side - Image */}

      <div className="absolute left-0 w-full md:w-1/2 h-full flex justify-center md:justify-start bottom-0">
        <Image
          src="/baby.png" // Replace with actual image
          alt="Child dressed as pilot"
          width={500}
          height={500}
          className="w-full md:w-full object-contain overflow-visible bottom-0"
        />
      </div>
    </div>
  );
};

export default GrowthSection;
