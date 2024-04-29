import { createBrowserRouter } from "react-router-dom";

// import routing components
import Home from "../pages/Home.js";
import MainLayout from "../components/layout/MainLayout";
import Projects from "../pages/Projects.js";
import Update from "../pages/Update.js";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default MainRoutes;
