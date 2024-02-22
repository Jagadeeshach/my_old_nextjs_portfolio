import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] ">
      <h1 className="heading">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up" data-aos-delay="640">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="https://youtu.be/8X-vPL1g2Ho?si=aOgap39ggompRnV9">
              <Image
                src="/images/pintpro1.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1140">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="https://my-nextjs-threejs-portfolio-jcu.vercel.app">
              <Image
                src="/images/react-three-fiber.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="zoom-out-right" data-aos-delay="1240">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="https://youtu.be/D264ECQWrYE?si=1EtZarXqE2S5A8Bl">
              <Image
                src="/images/jnews.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="https://youtu.be/XXg9eEVdN7c?si=tIy1bFNBeelvOMNd">
              <Image
                src="/images/instapro2.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="#">
              <Image
                src="/images/jmovies.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div data-aos="fade-upzoom-out-left" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a href="#">
              <Image
                src="/images/nextjs.jpg"
                alt="user"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
