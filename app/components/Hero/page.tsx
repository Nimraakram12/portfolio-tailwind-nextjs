"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <section className="text-blue-700 body-font bg-fixed bg-cover h-screen custom-image">
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col md:flex-row items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hi! I am
              <span className="lg:inline-block text-blue-700"></span>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Graphic Designer', 'Front-End Developer', 'Teacher'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-500 mb-6"></div>
            <p className="mb-8 leading-relaxed text-blue-500 text-lg md:text-2xl">
              I am a passionate web developer and graphic designer who loves crafting visually striking, user-centered digital experiences. With a unique blend of technical expertise and creative flair, I specialize in building responsive websites, branding, and visual assets that resonate with audiences and elevate brands.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="https://github.com/Nimraakram12">
                <button className="font-semibold text-blue-700 bg-white border-0 py-2 px-6 hover:bg-gray-400 rounded text-lg">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <Image
              className="object-cover object-center rounded mx-auto w-[12rem] sm:w-[16rem] lg:w-[18rem]"
              alt="hero"
              src="/images/my2.png"
              height={500}
              width={500}
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
