import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dantas from "pages/Dantas";
import DantasOne from "pages/DantasOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dantas",
      element: <Dantas />,
    },
    {
      path: "dantasone",
      element: <DantasOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
