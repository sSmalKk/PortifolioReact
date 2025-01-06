import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Routes from "./Routes";
import Header from "components/Header";


function App() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token') || process.env.JWT;


  return (
    <Router>
      <PageLayout userData={userData} />
    </Router>
  );
}

function PageLayout({ userData }) {
  const location = useLocation();

  const showHeaderRoutes = ['/', '/LandingPage', '/register', '/post']; // Rotas onde o Header deve ser exibido
  const showHeader = showHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && (
        <Header
        />
      )}
      <Routes />
    </>
  );
}

export default App;
