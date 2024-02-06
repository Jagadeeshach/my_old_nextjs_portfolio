import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[0.5rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I have graduated with Bachelor of Business Administration (BBA) degree in December 2021 from Govt First Grade College Carstreet, Mangalore, Karnataka. <br /> 
              &nbsp; 
              <br />
              As I had Computer Application Management subject in second year of my graduation where I had to study topics like DBMS, Management Information System (MIS), NoSQL databases, TCP/IP etc. I found interest in the same. &nbsp;
              And now I am a dynamic professional with expertise in development
              technologies like React JS, Node JS, Express, MongoDB, Bootstrap,
              Tailwind, jQuery, Next JS, and Git. I&apos;m not only adept at building
              applications but also expanding my horizons by learning modern
              frameworks like Three.js and cloud services on AWS. <br /> <br />
              &nbsp; With a comprehensive skill set in Meta marketing and
              Off-page SEO, I bring a unique blend of development and marketing
              cleverness to drive innovative solutions and business success. I
              am eager to contribute my skills and experience to your team,
              delivering seamless digital experiences and results.
            </p>
          </div>
          <a href="https://github.com/Jagadeeshach">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p className="text-[15px]">Visit Github</p>
              <FontAwesomeIcon
                icon={faGithub}
                className="fas fa-check w-[1.6rem] h-[1.7rem] text-black text-2xl"
                style={{ color: "black" }}
              ></FontAwesomeIcon>
            </button>
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[435px] mx-auto md:mx-0 mt-[2rem] lg: mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/rounduniverse.jpeg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[90%] z-[10] bg-[#55e6a5] top-[-0.8rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
