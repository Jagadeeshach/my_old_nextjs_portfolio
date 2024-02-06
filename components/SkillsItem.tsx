import React from "react";

interface Props {
  title: string
}

const SkillsItem = ({ title }: Props) => {
  return (
    <div className="mb-[1rem] md:mb-[2rem]">
      <h1 className="uppercase font-bold text-[20px] sm:text-[25px] md:text-[30px] text-white text-center ">
        {title}
      </h1>
    </div>
  );
};

export default SkillsItem;
