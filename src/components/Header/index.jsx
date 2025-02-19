import React, { useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa"; // Ícones oficiais

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-gray-100"
      }`}
    >
      {/* Logo */}
      <a href="#top" className="text-2xl font-bold text-gray-900">
        DANTAS
      </a>

      {/* Navegação */}
      <nav className="flex items-center gap-6">
        <button
          onClick={() => handleSmoothScroll("top")}
          className="text-gray-800 hover:text-blue-500"
        >
          top
        </button>
        <button
          onClick={() => handleSmoothScroll("about")}
          className="text-gray-800 hover:text-blue-500"
        >
          about
        </button>
        <button
          onClick={() => handleSmoothScroll("projects")}
          className="text-gray-800 hover:text-blue-500"
        >
          projects
        </button>
      </nav>

      {/* Contatos com Ícones */}
      <div className="flex gap-4">
        <a
          href="mailto:dantaswebdesign77@gmail.com"
          className="text-gray-600 hover:text-black text-xl"
          aria-label="E-mail"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/5561981594849"
          className="text-gray-600 hover:text-black text-xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/sSmalKk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
}
