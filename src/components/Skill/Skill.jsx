import React, { useEffect, useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div id="skill" className="p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-4 rounded-2xl bg-white bg-opacity-10 shadow-lg backdrop-blur-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              <img
                src={skill.image}
                alt={skill.technologyName}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-white text-lg font-semibold">{skill.technologyName}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading skills...</p>
        )}
      </div>
    </div>
  );
};

export default Skill;

