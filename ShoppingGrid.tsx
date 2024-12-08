import React from 'react';

const ShoppingGrid = () => {
  const cards = [
    { id: 1, image: '/product-cover-5.png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 2, image: '/product-cover-5 (1).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 3, image: '/product-cover-5 (2).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 4, image: '/product-cover-5 (3).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 5, image: '/product-cover-5 (4).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 6, image: '/product-cover-5 (5).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 7, image: '/product-cover-5 (6).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 8, image: '/product-cover-5 (8).png', title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-8 space-y-8">
      {Array.from({ length: 2 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-between gap-4">
          {cards.slice(rowIndex * 4, rowIndex * 4 + 4).map((card) => (
            <div key={card.id} className="w-[238px] h-[615px] bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[427px] rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-black text-xl font-semibold">{card.title}</h3>
                <p className="text-[#737373] text-sm">{card.department}</p>
                <div className="flex justify-between items-center my-2">
                  <p className="text-[#737373] text-sm line-through">{card.oldPrice}</p>
                  <p className="text-[#23856D] text-lg font-semibold">{card.newPrice}</p>
                </div>
                <div className="flex space-x-2 mt-3">
                  <div className="w-[16px] h-[16px] bg-blue-500 rounded-full"></div>
                  <div className="w-[16px] h-[16px] bg-green-500 rounded-full"></div>
                  <div className="w-[16px] h-[16px] bg-orange-500 rounded-full"></div>
                  <div className="w-[16px] h-[16px] bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShoppingGrid;
