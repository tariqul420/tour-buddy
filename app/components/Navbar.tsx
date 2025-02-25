'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='w-full p-4 bg-white text-black shadow-md'>
      <div className="flex items-center justify-between w-11/12 mx-auto">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">TB</div>
          <span className="text-xl font-semibold">Tour Buddy</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 p-4">
          {['home', 'profile', 'payment'].map((link) => (
            <Link
              key={link}
              href={`${link === 'home' ? '/' : `/${link}`}`}
              onClick={() => {
                setActive(link);
                setIsMenuOpen(false);
              }}
              className={`block capitalize ${active === link ? 'text-black/80 font-semibold' : 'text-gray-600'} hover:text-black transition py-2`}
            >
              {link}
            </Link>
          ))}

          {/* Login Button */}
          <Link
            href="/login"
            className="block bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition mt-4"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
