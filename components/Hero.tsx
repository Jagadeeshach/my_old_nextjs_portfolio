import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/imagebluebg.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I&apos;M <span className="text-yellow-400">JAGADEESH!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            I&apos;m a full-stack developer skilled in creating user-friendly
            interfaces with React and Bootstrap, and building robust server-side
            applications using Node.js, Express, and MongoDB. I excel at turning
            ideas into functional solutions, ensuring both the front and back
            ends work seamlessly. Let&apos;s collaborate to bring your digital
            projects to life with innovation and efficiency!
          </p>
          <div className="mt-[1rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="https://www.linkedin.com/in/jagadeesha-c-h-062500236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p className="text-[13px]">Visit LinkedIn</p>
              
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fas fa-check w-[1.6rem] h-[1.7rem] text-black text-2xl"
                style={{ color: "black" }}
              ></FontAwesomeIcon>
            </button>
            </a>
            
            <button className="flex items-center space-x-2">
              <a href="https://youtube.com/@JCodeUniverse?si=163XHTpKCGH6a9GI" >
              <FontAwesomeIcon icon={faYoutube} className="w-[4rem] h-[20rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] text-5xl" />
              
              </a>
              
              <a href="https://youtube.com/@JCodeUniverse?si=163XHTpKCGH6a9GI" className="text-[15px] font-semibold text-white">
                Click  to YouTube Channel
                
              </a>
            </button>
          </div>
        </div>
        <div
          
          className="w-[430px] h-[430px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full "
        >
          <Image
            src="/images/youtubeicon.jpeg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
