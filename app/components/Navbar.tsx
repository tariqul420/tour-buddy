'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className='w-full p-4 bg-white text-black shadow-md'>
      <div className="flex items-center justify-between w-11/12 mx-auto">
      {/* Logo and Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">TB</div>
        <span className="text-xl font-semibold">Tour Buddy</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {['home', 'profile', 'payment'].map((link) => (
          <Link
            key={link}
            href={`${link === 'home' ? '/' : `/${link}`}`}
            onClick={() => setActive(link)}
            className={`capitalize ${active === link ? 'text-black/80 font-semibold' : 'text-gray-600'} hover:text-black transition`}
          >
            {link}
          </Link>
        ))}

        {/* Login Button */}
        <Link href="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
          Login
        </Link>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
