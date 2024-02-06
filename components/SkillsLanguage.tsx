import React from "react";
interface Props {
  skill1: String;
  skill2: String;
  skill3: String;
  skill4: String;
  skill5: String;
  skill6: String;
  skill7: String;
  skill8: String;
  level1: String;
  level2: String;
  level3: String;
  level4: String;
  level5: String;
  level6: String;
  level7: String;
}

const SkillsLanguage = ({
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
}: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill1}
        </h1>
        <span
          className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill2}
        </h1>
        <span
          className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill3}
        </h1>
        <span
          className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill4}
        </h1>
        <span
          className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill5}
        </h1>
        <span
          className={`${level5} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill6}
        </h1>
        <span
          className={`${level6} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill7}
        </h1>
        <span
          className={`${level7} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
