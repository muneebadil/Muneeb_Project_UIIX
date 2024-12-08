import React from 'react';

const Hero1 = () => {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="flex items-center justify-between px-5 py-20 bg-cover bg-center min-h-[70vh] md:h-screen relative"
        style={{
          backgroundImage: "url('/shop-hero-1-product-slide-1.jpg')", // Ensure the image is in the public folder
        }}
        role="img"
        aria-label="Showcasing Summer 2020 new collection"
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Text Section */}
        <div className="text-white max-w-full md:max-w-[60%] lg:max-w-[50%] z-10">
          <h5 className="text-base md:text-lg font-bold mb-2">SUMMER 2020</h5>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-sm md:text-lg mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-medium hover:bg-green-700 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
