import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          JCode
          <span className="text-yellow-300">Universe</span>
        </h1>
        <ScrollLink to="hero" className="nav-link"> HOME</ScrollLink>
        <ScrollLink to="about" smooth={true} className="nav-link">ABOUT</ScrollLink>
        <ScrollLink to="services" smooth={true} className="nav-link">SERVICES</ScrollLink>
        <ScrollLink to="projects" smooth={true} className="nav-link">PROJECTS</ScrollLink>
        <ScrollLink to="contact" smooth={true} className="nav-link">CONTACT</ScrollLink>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] h-[2rem] md:hidden cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
