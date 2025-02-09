import React from "react";
import { RiDownloadLine, RiMenuFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <ul className="md:flex gap-2 text-white text-lg">
        <li>
          <Link smooth to="/#home" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link smooth to="/#about">About Me</Link>
        </li>
        <li>
          <Link smooth to="/#skill">Skills</Link>
        </li>
        <li>
          <Link smooth to="/#project">My Projects</Link>
        </li>
        <li>
          <Link smooth to="/#contact">Contact</Link>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-[#2E2F33] px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <p className="text-2xl text-white font-bold">
              <RiMenuFill></RiMenuFill>
            </p>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2E2F33] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a>
          <img src={logo} className="w-10 h-10" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#F0C268] my-4">Download CV</a>
      </div>
    </div>
  );
};

export default Navbar;
