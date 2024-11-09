import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-500">
        <span className="ml-3 text-xl">My Portfolio</span>
      </a>
      <p className="text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 PORTFOLIO —
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="https://www.linkedin.com/in/nimra-akram-6ab0522b5?l text-2xlipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6sKIJbhuT5GkTp1%2BcEXOIw%3D%3D" passHref
           rel="noopener noreferrer" className="text-gray-200 text-2xl hover:text-blue-500">
            <FaLinkedin/>
        
        </Link>
      </span>
      <span className=" sm:mt-0 mt-4 justify-center sm:justify-start ml-2">
        <Link href="https://github.com/Nimraakram12" passHref
           rel="noopener noreferrer" className="text-gray-200 text-2xl hover:text-blue-500 ">
            <FaGithub />
        
        </Link>
      </span>
      <span className=" sm:mt-0 mt-4 justify-center sm:justify-start ml-2">
        <Link href="https://www.behance.net/nimraakram11" passHref
           rel="noopener noreferrer" className="text-gray-200 text-2xl hover:text-blue-500 ">
            <FaBehance />
        
        </Link>
      </span>
    </div>
  </footer>
);

export default Footer;

