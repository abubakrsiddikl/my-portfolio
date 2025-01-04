import React from "react";
import { RiDownloadLine, RiMenuFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <p className="text-2xl font-bold">
              <RiMenuFill></RiMenuFill>
            </p>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        <a className="btn">
          <span className="text-lg">
            <RiDownloadLine></RiDownloadLine>{" "}
          </span>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
