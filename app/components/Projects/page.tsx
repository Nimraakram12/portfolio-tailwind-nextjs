
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="Projects">
      <section className="text-gray-600 body-font bg-black py-16">
        <div className="container px-5 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl sm:text-4xl font-black title-font mb-4 text-blue-500">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Watch & Appreciate My Efforts...!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap -m-4">
            {[
              {
                imgSrc: '/images/r1.png',
                title: 'Resume Builder',
                description: 'Using HTML, CSS & TypeScript',
                details: 'This is a resume builder created for everyone who needs to make a resume.',
                link: 'https://vercel.com/nimra-akrams-projects/milestone5-task2/uspLMn8j2sirUSuBgR3r3vdVXEue',
              },
              {
                imgSrc: '/images/quiz-app.png',
                title: 'Quiz App',
                description: 'Using HTML, CSS & JavaScript',
                details: 'This is a quiz app - try it and test your mind!',
                link: 'https://vercel.com/nimra-akrams-projects/quiz-app/5Q23tHfWrAQ5KzrpfNMPvKekviU5',
              },
              {
                imgSrc: '/images/countdown.jpg',
                title: 'Countdown',
                description: 'Using HTML, CSS & JavaScript',
                details: 'Check this countdown and give your feedback!',
                link: 'https://vercel.com/nimra-akrams-projects/countdown/EGnSF2VffSWj5rnRKmivsVAwwPBM',
              },
              {
                imgSrc: '/images/ch.png',
                title: 'Website',
                description: 'Using Next.js',
                details: 'A helpful website...',
                link: 'https://vercel.com/nimra-akrams-projects/assignment-3-next-js/9iU7xJuUtQjWRuWYB6bxTwySJxiF',
              },
              {
                imgSrc: '/images/p.png',
                title: 'Personal Portfolio',
                description: 'Using HTML, CSS & JavaScript',
                details: 'Watch this portfolio and take advantage.',
                link: 'https://vercel.com/nimra-akrams-projects/myportfolio-html-css-js/5RoMR3KutjVXrgCpXMHWz7xnspa5',
              },
              {
                imgSrc: '/images/ATM.png',
                title: 'ATM App',
                description: 'Using Node.js',
                details: 'A helpful app for ATM functionalities.',
                link: 'https://github.com/Nimraakram12/atm',
              },
            ].map((project, index) => (
              <div key={index} className="p-4 sm:w-1/2 md:w-1/3">
                <div className="flex relative h-80">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                    src={project.imgSrc}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-blue-800 mb-3">
                      {project.description}
                    </h1>
                    <p className="leading-relaxed">{project.details}</p>
                    <Link href={project.link}>
                      <p className="mt-3 text-blue-500 hover:underline cursor-pointer">
                        View Project...
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
