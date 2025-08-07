import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-16 px-4 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Omkar Kumar</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
            Software Developer & AI Enthusiast
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Passionate about crafting innovative software solutions and exploring
            the cutting-edge of artificial intelligence. Dedicated to building
            efficient, scalable, and user-centric applications.
          </p>
          
        </div>

        {/* Image Section */}
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/IMG-20241015-WA0001.jpg"
            alt="Omkar Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
