import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Home from "../Home/Home";
import Projects from "../Project/Project";

const MainLayout = () => {
  return (
    <div className=" ">
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-6">
        <Home></Home>
        <AboutMe></AboutMe>
        <Skill></Skill>
        <Projects></Projects>
        
      </div>
    </div>
  );
};

export default MainLayout;
