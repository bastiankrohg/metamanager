"use client";

import Image from "next/image";

const ComparativeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Before and After
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Before */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Before</h3>
            <div className="border border-gray-300 shadow-md rounded-lg p-4">
              <Image
                src="/images/before.png" // Replace with the path to your "before" image
                alt="Before"
                width={400}
                height={300}
                className="object-contain w-full"
              />
            </div>
          </div>


          {/* After */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">After</h3>
            <div className="border border-gray-300 shadow-md rounded-lg p-4 bg-white w-full">
              <Image
                src="/images/after.png" // Path to your "after.png" image
                alt="After"
                width={400}
                height={300}
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparativeSection;