"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "SEO Testing",
    description: "Perform A/B split test or time-based SEO testing to remove guesswork.",
    image: "/images/seo-testing.png",
  },
  {
    title: "Meta Tag Optimization",
    description: "Directly implement on-page SEO changes to meta tags, used with SEO testing.",
    image: "/images/meta-tag-optimisation.png",
  },
  {
    title: "Schema Markup Automation",
    description: "Add any structure data type, and automate implementation across the website.",
    image: "/images/schema-automation.png",
  },
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[1]); // Start with middle button selected

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Features
        </h2>

        {/* Feature Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className={`flex items-center justify-center text-center py-2 px-6 rounded-full font-medium transition-all 
                whitespace-normal w-full sm:w-60 h-16 text-sm sm:text-lg ${
                  selectedFeature.title === feature.title
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-300"
                }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Selected Feature */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {selectedFeature.title}
          </h3>
          <p className="text-gray-600 mb-6">{selectedFeature.description}</p>
          <div className="w-full max-w-[1200px] mx-auto">
            <Image
              src={selectedFeature.image}
              alt={selectedFeature.title}
              width={1200}
              height={600}
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;