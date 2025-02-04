import React from "react";
import { CustomButton } from "../../atoms";
import Image from "next/image";

const HighQualitySection = () => {
  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          High-Quality Learning Materials <br />
          for <span className="text-purple-600 italic">independence and Growth</span>
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-sm">
          Our materials are designed to engage young minds, making learning fun
          and exciting. With the perfect mix of educational tools and
          interactive activities, your child will develop independence and
          critical thinking skills.
        </p>
        <div className="mt-8">
          <CustomButton variant="filled" className="bg-red-600 hover:bg-red-500">
            Contact Us
          </CustomButton>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex items-center justify-center relative my-12 md:my-0">
          <Image
            src="/learning-toys.png" // Replace with your actual image path
            alt="Educational Materials"
            height={400}
            width={400}
            className="w-full h-full object-cover"
          />
      </div>
    </section>
  );
};

export default HighQualitySection;
