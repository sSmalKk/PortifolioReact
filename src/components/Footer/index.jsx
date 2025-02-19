import React from "react";
import { Link } from "react-router-dom";
const handleSmoothScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <h2 className="text-xl font-bold">DANTAS</h2>
        <nav className="flex items-center gap-6">
          <button
            onClick={() => handleSmoothScroll("top")}
            className=" hover:text-blue-500"
          >
            top
          </button>
          <button
            onClick={() => handleSmoothScroll("about")}
            className=" hover:text-blue-500"
          >
            about
          </button>
          <button
            onClick={() => handleSmoothScroll("projects")}
            className=" hover:text-blue-500"
          >
            projects
          </button>
        </nav>
      </div>

      <div className="mt-4 border-t border-gray-700 pt-4 text-sm">
        <ul className="flex justify-center gap-6">
          <li>
            <Link to="/privacypolicy" className="hover:underline">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link to="/copyright" className="hover:underline">
              Copyright
            </Link>
          </li>
          <li>
            <Link to="/termsconditions" className="hover:underline">
              Termos e Condições
            </Link>
          </li>
        </ul>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Dantas. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
