import React from 'react';
import { safetyFeatures } from "@/src/common/constants";

const SafetySection = () => {
    return (
      <section className="w-full py-16 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Safety You Can <span className="italic text-orange-500">See and Trust!</span>
        </h2>
  
        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 md:px-16">
          {safetyFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-6 text-left">
              {/* Image Placeholder */}
              <div
                className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-xl flex justify-center items-center"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
  
              {/* Text Content */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SafetySection;
  