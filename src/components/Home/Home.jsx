import React from "react";
import Banner from "./Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skill";


const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
    </div>
  );
};

export default Home;
