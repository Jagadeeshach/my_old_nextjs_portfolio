import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
      Skil<span className="text-yellow-400">ls</span>
      </h1>
      <div className="w-[80%] mx-auto md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] flex items-center">
        <div>
          <SkillsItem title="FRONTEND"/>
          <SkillsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JAVASCRIPT"
            skill4="REACT JS"
            skill5="TAILWIND CSS"
            skill6="BOOTSTRAP"
            skill7="JQUERY"
            skill8="TYPESCRIPT"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[80%]"
            level5="w-[80%]"
            level6="w-[80%]"
            level7="w-[80%]"
          />
        </div>
        <div>    
        <SkillsItem title="BACKEND" />
          <SkillsLanguage
            skill1="NODE JS"
            skill2="EXPRESS"
            skill3="MONGODB"
            skill4="NEXT JS"
            skill5="TYPESCRIPT"
            skill6="REST API"
            skill7="DSA"
            skill8="Docker"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
            level4="w-[80%]"
            level5="w-[80%]"
            level6="w-[80%]"
            level7="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
