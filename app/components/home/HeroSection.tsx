import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src="https://images.pexels.com/photos/3996362/pexels-photo-3996362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="banner"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-4xl font-bold">We Find The Best Tours For You</h1>
        <p className="text-white text-lg mt-2">Travel with us!</p>
      </div>
    </section>
  );
};

export default HeroSection;
