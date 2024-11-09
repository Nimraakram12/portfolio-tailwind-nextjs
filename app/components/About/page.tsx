import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font bg-fixed bg-cover custom-image">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="About Image"
              src="/images/my2.png"
              height={720}
              width={600}
            />
          </div>
          
          {/* About Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center md:text-left">
            <h1 className="title-font sm:text-4xl font-black text-3xl md:text-4xl mb-4 text-blue-400">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-white text-base md:text-lg font-medium">
              I am a passionate web developer and graphic designer with a knack for blending creativity and technical skill to build captivating digital experiences. With a solid foundation in front-end development and design, I specialize in crafting responsive, user-focused websites that are visually appealing and functionally robust. My journey has been driven by a love for solving problems and turning ideas into reality, whether it is through clean, efficient code or through striking visuals. I am always excited to learn, adapt, and create work that not only meets client needs but leaves a lasting impact.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/images/cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
