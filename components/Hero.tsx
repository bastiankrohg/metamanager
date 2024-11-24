"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-blue-500 py-20 flex flex-col lg:flex-row items-center lg:items-stretch">
      {/* Hero Text */}
      <div className="lg:w-1/2 px-6 lg:pl-16 text-white flex items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            SEO Testing Made Easy
          </h1>
          <p className="text-lg lg:text-xl mb-8">
          Execute on-page SEO changes directly to website for instant performance feedback.
          </p>
          <button className="bg-white text-black py-3 px-6 rounded-full hover:bg-gray-100 transition-all">
            Start Free Trial Now
          </button>
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end items-center">
        <Image
          src="/images/bg.svg" // Replace with your image file path
          alt="Illustration"
          width={600} // Adjust as needed
          height={600} // Adjust as needed
          className="w-auto max-h-[80vh] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;