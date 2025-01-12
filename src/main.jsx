import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/ManiLayout/MainLayout";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#34353A]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
