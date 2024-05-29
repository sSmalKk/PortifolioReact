import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dantas from "pages/Dantas";
import Post from "pages/Post";
import Page from "pages/Page"; // Corrigido o nome do arquivo aqui
import { Blog } from "./components/content";

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
  const routes = [
    { path: "/", element: <Dantas /> },
    { path: "*", element: <NotFound /> },
    { path: "privacypolicy", element: <PrivacyPolicy /> },
    { path: "copyright", element: <Copyright /> },
    { path: "termsconditions", element: <TermsConditions /> },
  ];

  // Adicionar rotas para os posts do blog
  Blog.forEach(post => {
    routes.push({
      path: `post/${post.id}`, // inclui o ID do post na rota
      element: <Post id={post.id} />, // passa o ID do post como prop
    });
  });

  const element = useRoutes(routes);
  return element;
};

export default ProjectRoutes;
