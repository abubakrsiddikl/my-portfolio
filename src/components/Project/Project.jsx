import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div id="project" className="p-10 bg-[#34353A] text-white ">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md"
          >
            <img
              src={project.images?.[0]}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <Link
              to={`/project/${project.id}`}
              className="block mt-4 bg-[#F0C268] text-black py-2 px-4 rounded-md text-center font-semibold"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
