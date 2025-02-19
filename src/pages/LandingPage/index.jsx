import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoubleColumn from "../../components/Doublecollum";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa"; // Ícones oficiais

const portfolio = [
  {
    title: "Automação de Planilhas com ExcelJS",
    description:
      "Exportação de planilhas dinâmicas com colunas ajustáveis e estilização avançada.",
    image: "/images/exceljs.jpg",
    link: "#",
  },
  {
    title: "Bot de WhatsApp Modular",
    description:
      "Sistema de bot automatizado para WhatsApp utilizando Node.js e MongoDB.",
    image: "/images/whatsapp-bot.jpg",
    link: "#",
  },
  {
    title: "Sistema de Download de Faturas",
    description:
      "Automação para download semanal de faturas, reduzindo trabalho manual.",
    image: "/images/download-bot.jpg",
    link: "#",
  },
  {
    title: "Reajuste de Dashboard - Didder",
    description:
      "Correção de UI/UX e conexão com GraphQL no painel administrativo.",
    image: "/images/dashboard.jpg",
    link: "#",
  },
  {
    title: "Sistema de Tipagem do Bot de WhatsApp",
    description:
      "Refatoração do backend para TypeScript, garantindo uma estrutura mais segura e organizada.",
    image: "/images/typescript.jpg",
    link: "#",
  },
];

export default function LandingPage() {
  useEffect(() => {
    document.title = "Meu Portfólio";
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Veja meus trabalhos e projetos." />
      </Helmet>

      <Header />

      <main className="flex flex-col items-center w-full bg-gray-100 text-black">
        {/* Hero Section */}
        <section
          id="top"
          className="w-full h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/section.png')" }}
        >
          <h1 className="text-6xl font-bold text-white">Meu Portfólio</h1>
        </section>

        {/* Sobre Section */}
        <section
          id="about"
          className="spacing-section w-full py-16 bg-white text-center px-6"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Sobre</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvedor especializado em automação, backend e UI/UX. Principal
            responsável pelo design de aplicativos de live Didder e
            aprimoramento de dashboards interativos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:dantaswebdesign77@gmail.com"
              className="text-gray-600 hover:text-black text-2xl"
              aria-label="E-mail"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/5561981594849"
              className="text-gray-600 hover:text-black text-2xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/sSmalKk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </section>

        {/* Dupla Coluna */}
        <DoubleColumn />

        {/* Portfólio Section */}
        <section
          id="projects"
          className="spacing-section w-full py-16 bg-gray-200 text-center px-6"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Projetos</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </a>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
