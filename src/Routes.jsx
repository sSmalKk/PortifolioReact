import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dantas from "pages/Dantas";
import DantasOne from "pages/DantasOne";
import Page from "pages/Page"; // Corrigido o nome do arquivo aqui

const PrivacyPolicy = () => {
  const title = "Privacy Policy";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
    // Adicione mais textos conforme necessário
  ];

  return <Page title={title} texts={texts} />;
};

const Copyright = () => {
  const title = "Copyright";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
    // Adicione mais textos conforme necessário
  ];

  return <Page title={title} texts={texts} />;
};

const TermsConditions = () => {
  const title = "Terms & Conditions";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
    // Adicione mais textos conforme necessário
  ];

  return <Page title={title} texts={texts} />;
};

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Dantas /> },
    { path: "*", element: <NotFound /> },
    { path: "dantasone", element: <DantasOne /> },
    { path: "privacypolicy", element: <PrivacyPolicy /> },
    { path: "copyright", element: <Copyright /> },
    { path: "termsconditions", element: <TermsConditions /> },
  ]);
  return element;
};

export default ProjectRoutes;
