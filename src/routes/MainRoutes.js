import { createBrowserRouter } from "react-router-dom";

// import routing components
import Home from "../pages/Home.js";
import MainLayout from "../components/layout/MainLayout";
import Projects from "../pages/Projects.js";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default MainRoutes;
