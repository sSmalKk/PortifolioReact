import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <h2 className="text-xl font-bold">DANTAS</h2>
        <ul className="flex gap-6">
          <li>
            <Link to="/#about" className="hover:underline">Sobre</Link>
          </li>
          <li>
            <Link to="/#projects" className="hover:underline">Projetos</Link>
          </li>
          <li>
            <Link to="/#blog" className="hover:underline">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="mt-4 border-t border-gray-700 pt-4 text-sm">
        <ul className="flex justify-center gap-6">
          <li>
            <Link to="/privacypolicy" className="hover:underline">Política de Privacidade</Link>
          </li>
          <li>
            <Link to="/copyright" className="hover:underline">Copyright</Link>
          </li>
          <li>
            <Link to="/termsconditions" className="hover:underline">Termos e Condições</Link>
          </li>
        </ul>
        <p className="mt-2">&copy; {new Date().getFullYear()} Dantas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
