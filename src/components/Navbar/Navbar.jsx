
import React, { useState } from "react";
import { RiDownloadLine, RiMenuFill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const links = (
    <ul className="flex flex-col md:flex-row gap-4 text-white text-lg">
      <li>
        <Link smooth to="/#home" className="hover:underline" onClick={closeDropdown}>
          Home
        </Link>
      </li>
      <li>
        <Link smooth to="/#about" className="hover:underline" onClick={closeDropdown}>
          About Me
        </Link>
      </li>
      <li>
        <Link smooth to="/#skill" className="hover:underline" onClick={closeDropdown}>
          Skills
        </Link>
      </li>
      <li>
        <Link smooth to="/#project" className="hover:underline" onClick={closeDropdown}>
          My Projects
        </Link>
      </li>
      <li>
        <Link smooth to="/#contact" className="hover:underline" onClick={closeDropdown}>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-[#2E2F33] px-5">
      {/* Left Side (Logo & Mobile Menu) */}
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Button */}
        <button onClick={toggleDropdown} className="lg:hidden text-white text-2xl p-2">
          <RiMenuFill />
        </button>

        {/* Logo */}
        <a href="/">
          <img src={logo} className="w-10 h-10 ml-4" alt="Logo" />
        </a>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side (CV Button) */}
      <div className="navbar-end">
        <a className="btn bg-[#F0C268] my-4">Download CV</a>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdown && (
        <div className="absolute top-20 left-0 w-full bg-[#2E2F33] shadow-lg p-4 lg:hidden">
          {links}
        </div>
      )}
    </div>
  );
};

export default Navbar;
