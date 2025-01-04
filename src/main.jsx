import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/ManiLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#34353A]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);