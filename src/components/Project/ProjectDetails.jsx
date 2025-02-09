import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project data from loader
  const projects = useLoaderData();
  const project = projects.find((proj) => proj.id === Number(id));
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-10 bg-[#34353A] text-white min-h-screen">
        <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
        {/* Image map */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {project.images?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[280px] lg:h-[500px] object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3 className="text-2xl font-semibold mt-4">Technologies Used</h3>
        <ul className="flex gap-3 mt-2 flex-wrap">
          {project.techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-[#F0C268] text-black px-3 py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg">{project?.overview}</p>
        <h3 className="text-2xl font-semibold mt-6">Challenges Faced</h3>
        <p className="text-gray-300">{project.challenges}</p>
        <h3 className="text-2xl font-semibold mt-6">Future Improvements</h3>
        <p className="text-gray-300">{project.futurePlans}</p>
        <div className="mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            className="bg-[#F0C268] text-black px-4 py-2 rounded-md mr-4"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="bg-gray-700 px-4 py-2 rounded-md "
          >
            GitHub Repo
          </a>
        </div>
        <Link to="/" className="block mt-8 text-[#F0C268] underline">
          Back to Projects
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
