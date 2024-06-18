import React from "react";
// import logo from '../assets/KevinRushLogo.png';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center ">
          <img className="w-10 mr-5" src={logo} alt='logo'/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
      </nav>
    // <div>hello</div>
  );
};

export default Navbar;
