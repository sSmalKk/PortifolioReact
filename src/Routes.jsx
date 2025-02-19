import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dantas from "pages/Dantas";
import MinhaPagina from "pages/MinhaPagina";
import Post from "pages/Post";
import Page from "pages/Page"; // Corrigido o nome do arquivo aqui
import { Blog } from "./components/content";

const PrivacyPolicy = () => {
  const title = "Privacy Policy";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
  ];

  return <Page title={title} texts={texts} />;
};

const Copyright = () => {
  const title = "Copyright";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
  ];

  return <Page title={title} texts={texts} />;
};

const TermsConditions = () => {
  const title = "Terms & Conditions";
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Phasellus vel diam et risus maximus posuere sed et nisl...",
  ];

  return <Page title={title} texts={texts} />;
};

// Componente de autenticação
const AuthenticatedPage = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const correctPassword = "minhaSenhaSecreta"; // Defina sua senha aqui
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Senha incorreta");
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div>
      <h2>Por favor, insira a senha para acessar esta página</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const ProjectRoutes = () => {
  const routes = [
    { path: "/", element: <Dantas /> },
    { 
      path: "/MinhaPagina", 
      element: (
        <AuthenticatedPage>
          <MinhaPagina />
        </AuthenticatedPage>
      ) 
    },
    { path: "*", element: <NotFound /> },
    { path: "privacypolicy", element: <PrivacyPolicy /> },
    { path: "copyright", element: <Copyright /> },
    { path: "termsconditions", element: <TermsConditions /> },
  ];

  // Adicionar rotas para os posts do blog
  Blog.forEach(post => {
    routes.push({
      path: `post/${post.id}`, // inclui o ID do post na rota
      element: <Post blog={Blog} id={post.id} />, // passa o ID do post como prop
    
    });
  });

  const element = useRoutes(routes);
  return element;
};

export default ProjectRoutes;
