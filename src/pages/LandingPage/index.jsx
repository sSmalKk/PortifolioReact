import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoubleColumn from "../../components/Doublecollum";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa"; // Official icons

const portfolio = [
  {
    title: "ExcelJS Spreadsheet Automation",
    description:
      "Dynamic spreadsheet export with adjustable columns and advanced styling.",
    image: "/images/exceljs.jpg",
    link: "#",
  },
  {
    title: "Modular WhatsApp Bot",
    description:
      "Automated WhatsApp bot system using Node.js and MongoDB.",
    image: "/images/whatsapp-bot.jpg",
    link: "#",
  },
  {
    title: "Invoice Download System",
    description:
      "Automation for weekly invoice downloads, reducing manual work.",
    image: "/images/download-bot.jpg",
    link: "#",
  },
  {
    title: "Dashboard Redesign - Didder",
    description:
      "UI/UX improvements and GraphQL integration for the admin panel.",
    image: "/images/dashboard.jpg",
    link: "#",
  },
  {
    title: "WhatsApp Bot Typing System",
    description:
      "Backend refactoring to TypeScript, ensuring a more secure and structured system.",
    image: "/images/typescript.jpg",
    link: "#",
  },
];

export default function LandingPage() {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Check out my projects and work." />
      </Helmet>

      <Header />

      <main className="flex flex-col items-center w-full bg-gray-100 text-black">
        {/* Hero Section */}
        <section
          id="top"
          className="w-full h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/section.png')" }}
        >
          <h1 className="text-6xl font-bold text-white">My Portfolio</h1>
        </section>

        {/* About Section */}
        <section id="about" className="spacing-section w-full py-16 bg-white text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800">About</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Developer specialized in automation, backend, and UI/UX. Lead designer for the Didder live app and responsible for enhancing interactive dashboards.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:dantaswebdesign77@gmail.com"
              className="text-gray-600 hover:text-black text-2xl"
              aria-label="Email"
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

        {/* Double Column */}
        <DoubleColumn />

        {/* Portfolio Section */}
        <section id="projects" className="spacing-section w-full py-16 bg-gray-200 text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <a key={index} href={item.link} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
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
