// Ensure this is at the very top of your file
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="text-blue-500 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <span className="text-4xl md:text-6xl font-black text-blue-500">My Portfolio</span>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden ml-auto" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {menuOpen ? <HiX className="text-4xl text-blue-500 cursor-pointer" /> : <HiMenu className="text-4xl text-blue-500 cursor-pointer" />}
          </div>

          {/* Navigation Links */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto w-full md:ml-auto text-blue-500 text-xl md:text-3xl`}>
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Link key={index} href={`/${item === "Home" ? "" : "#" + item}`} passHref>
                <span onClick={toggleMenu} className="block md:inline-block mr-5 hover:text-gray-200 cursor-pointer">{item}</span>
              </Link>
            ))}
          </nav>

          {/* Download CV Button */}
          <a href="/images/cv.pdf" download className="mt-4 md:mt-0">
            <button className="flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
