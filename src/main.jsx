import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/ManiLayout/MainLayout";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectDetails from "./components/Project/ProjectDetails";
import Project from "./components/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/project/:id",  
    element: <ProjectDetails />,
    loader: () => fetch("/project.json").then(res => res.json()),
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#34353A]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
