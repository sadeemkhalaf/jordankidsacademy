'use client';

import { useState } from "react";
import Link from "next/link";
import { CustomButton } from "src/components/atoms";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-10 bg-white font-[Quicksand]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}

        <Link href="/" className="text-2xl font-bold text-gray-800">
          <img src="/logo.png" alt="Jordan Kids Academy" className="h-16 md:h-[92px]" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links (Desktop View) */}
        <div className="hidden md:visible md:flex md:items-center">
        <div className=" space-x-6 items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-800 nav-button">
            Home
          </Link>
          <Link href="/program" className="text-gray-600 hover:text-gray-800 nav-button">
            Program
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800 nav-button">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 nav-button">
            Contact
          </Link>
        </div>
        <div className="mx-3" />
        <CustomButton
          variant="outlined"
          onClick={() => console.log("Outlined Clicked!")}
        >
          Pre-registration
        </CustomButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-white shadow-md items-center pb-4 p-2 justify-center">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/program"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Program
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Contact
          </Link>
          <CustomButton
            variant="outlined"
            onClick={() => console.log("Outlined Clicked!")}
          >
            Pre-registration
          </CustomButton>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
