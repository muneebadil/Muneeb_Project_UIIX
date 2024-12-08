import React from 'react';
import Image from 'next/image';

const EditorPick = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        EDITOR'S PICK
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Men Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
          <Image
            src="/men.png"
            alt="Explore Men's Clothing"
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline absolute bottom-6 left-1/2 transform -translate-x-1/2">
            MEN
          </button>
        </div>

        {/* Women Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
          <Image
            src="/women.png"
            alt="Explore Women's Clothing"
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline absolute bottom-6 left-1/2 transform -translate-x-1/2">
            WOMEN
          </button>
        </div>

        {/* Accessories Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
          <Image
            src="/accessories.png"
            alt="Shop Accessories"
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline absolute bottom-6 left-1/2 transform -translate-x-1/2">
            ACCESSORIES
          </button>
        </div>

        {/* Kids Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
          <Image
            src="/kids.png"
            alt="Discover Kids' Clothing"
            width={500}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline absolute bottom-6 left-1/2 transform -translate-x-1/2">
            KIDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
