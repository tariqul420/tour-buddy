import Image from 'next/image';
import React from 'react';

const divisionName = ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna', 'Rajshahi', 'Barishal', 'Rangpur', 'Mymensingh'];

const PopularSection = () => {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Explore Popular Cities</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Bangladesh is a beautiful country in South Asia outside the tourism radar. Within it is primeval swamps full of man-eating tigers, the unseen relics of long-forgotten Buddhist kingdoms, lush
        and lurid tea plantations, tribal groups with Burmese faces, glorious beaches that stretch for eternity, freshwater dolphins and deep-water whales, and some of the most open-hearted people
        you&apos;ll ever meet.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {divisionName?.map((division, index) => (
          <button key={index} className={`border-2 border-[#7BBCB0] px-6 py-2 rounded-full transition-all duration-300 text-black ${division === 'Sylhet' ? 'bg-[#7BBCB0]' : 'hover:bg-[#7BBCB0]'}`}>
            {division}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[400px] mt-8">
        <Image src="https://images.pexels.com/photos/2582819/pexels-photo-2582819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner" fill={true} className="object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-4xl font-bold">Discover the Beauty of Bangladesh</h1>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
