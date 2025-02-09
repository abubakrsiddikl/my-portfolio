import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Home from "../Home/Home";
import Projects from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className=" ">
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-6">
        <Home></Home>
        <AboutMe></AboutMe>
        <Skill></Skill>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
