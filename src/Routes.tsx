import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import SandboxSurvival from "pages/SandboxSurvival";
import Login from "pages/Login";
import Register from "pages/Register";
import PubChemSubstances from "pages/PubChemSubstances";

// Aqui definimos o array de rotas
// Adicione um "name" para cada rota, que será mostrado no Menu
export const routesConfig = [
  {
    path: "/",
    element: <Login />,
    name: "Login", // <--- nome a ser exibido no menu
  },
  {
    path: "/sandboxsurvival",
    element: <SandboxSurvival />,
    name: "Sandbox Survival",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },
  {
    path: "/pubchemsubstances",
    element: <PubChemSubstances />,
    name: "PubChem",
  },
  {
    path: "/*",
    element: <NotFound />,
    name: "NotFound", // Rota de fallback
  },
];

// Esse componente continua praticamente o mesmo
const ProjectRoutes = () => {
  let element = useRoutes(routesConfig);
  return element;
};

export default ProjectRoutes;
