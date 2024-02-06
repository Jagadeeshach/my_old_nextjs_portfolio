import React from "react";
import Image from "next/image";

const CurrentProjects = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        Current Pro<span className="text-yellow-400">ject Plans</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div data-aos="fade-right" data-aos-delay="300">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/youtubeclone.jpeg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              YouTube Clone app
            </div>
            {/* <p className="mt-[1rem] text-white text-[18px] font-semibold">
              For creating 3D web applications
            </p> */}
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/hotelbookingapp.jpeg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Hotel Booking app
            </div>
            {/* <p className="mt-[1rem] text-white text-[18px] font-semibold">
              To build, test and deploy web application on any environment
            </p> */}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/inventoryapp.jpeg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Inventory Management app
            </div>
            {/* <p className="mt-[1rem] text-white text-[18px] font-semibold">
              For making web application scalable
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
