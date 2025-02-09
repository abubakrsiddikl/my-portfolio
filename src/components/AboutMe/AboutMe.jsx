import React from "react";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="mt-7 pb-7">
        <h1 className="text-3xl text-white text-center font-bold">About Me</h1>

        <p className="text-white text-lg text-left">
          Hi, I’m
          <span className="text-[#F0C268] font-bold text-2xl">
            Abu Bakr Siddik
          </span>
          , a passionate
          <span className="text-[#F0C268] font-bold">Junior Web Developer</span>
          with a strong enthusiasm for building dynamic and user-friendly web
          applications. My programming journey has been filled with challenges,
          but my determination to overcome them has shaped me into a resilient
          and skilled developer. I specialize in
          <span className="text-[#F0C268] font-bold">
            HTML, Tailwind CSS, JavaScript, React, Node.js, Express.js, and
            MongoDB
          </span>
          . I love bringing creative ideas to life by blending design with
          seamless functionality. The type of work I enjoy the most is
          problem-solving through code, optimizing user experience, and building
          scalable applications.{" "}
          <span className="text-[#F0C268] font-bold">Beyond coding</span>, I
          like to read books that expand my knowledge and perspective. I also
          enjoy playing sports, as it helps me stay active and improves my
          focus. My passion for continuous learning and self-improvement drives
          me to explore new technologies and contribute to impactful projects.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
