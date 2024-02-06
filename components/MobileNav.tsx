import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from 'react-scroll';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav,closeNav}:Props) => {
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div className={`fixed ${navAnimation} flex items-center justify-center transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>

      <div className="w-[100vh] h-[100vh] flex flex-col items-center justify-center" >
      <ScrollLink to="hero" className="nav-link-mobile" onClick={closeNav}> HOME</ScrollLink>
        <ScrollLink to="about" smooth={true} onClick={closeNav} className="nav-link-mobile">ABOUT</ScrollLink>
        <ScrollLink to="services" smooth={true} onClick={closeNav} className="nav-link-mobile">SERVICES</ScrollLink>
        <ScrollLink to="projects" smooth={true} onClick={closeNav} className="nav-link-mobile">PROJECTS</ScrollLink>
        <ScrollLink to="contact" smooth={true} onClick={closeNav} className="nav-link-mobile">CONTACT</ScrollLink>
      </div>
      <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] z-[100000000] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
        <XMarkIcon />
        
      </div>
    </div>
  );
};

export default MobileNav;
