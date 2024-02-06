import React from "react";
import Image from "next/image";



const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center">
            <Image src={"/images/Frontenddeveloper.jpeg"} alt={"img1"} />
            <div className="p-[2rem]">
              <h1 className="text-[20px] md:text-[30px] mb-[1.5rem]">
                FRONTEND DEVELOPMENT
              </h1>
              <p className="text-[15px] text-[#d3d2d2] ">
                Frontend Developer who loves making websites look cool and work
                smoothly. I use HTML, CSS, and JavaScript to create awesome
                designs and interactive features. With tools like React.js,
                Bootstrap, and Tailwind CSS, I bring your web projects to life.
                I also dive into Next.js for super-fast and efficient websites.
                Let&apos;s build something amazing together!
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-gray-700 hover:scale-110 transform transition-all duration-300 font-semibold text-center">
            <Image src={"/images/Backenddeveloper.jpeg"} alt={"img2"} />
            <div className="p-[2rem]">
              <h1 className="text-[20px] md:text-[30px] mb-[1.5rem]">
                BACKEND DEVELOPMENT
              </h1>
              <p className="text-[15px] text-[#d3d2d2] ">
                A Backend Developer passionate about building robust and
                efficient server-side solutions. I specialize in Node.js and
                Express for creating scalable applications, and MongoDB for
                seamless database integration. Crafting RESTful APIs is my
                forte. Let&apos;s power up your web projects with my skills. Excited
                to collaborate and create something extraordinary
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center">
            <Image src={"/images/Fullstackdeveloper.jpeg"} alt={"img3"} />
            <div className="p-[2rem]">
              <h1 className="text-[20px] md:text-[30px] mb-[1.5rem]">
                FULL STACK DEVELOPMENT
              </h1>
              <p className="text-[15px] text-[#d3d2d2]">
                A Full Stack Developer with a skills for crafting complete web
                solutions. On the frontend, I use HTML, CSS, and JavaScript to
                create engaging interfaces, along with React.js, Bootstrap,
                Tailwind CSS, and Next.js for dynamic and responsive designs. On
                the backend, I specialize in Node.js, Express, and MongoDB,
                seamlessly integrating RESTful APIs. Let&apos;s collaborate and build
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
