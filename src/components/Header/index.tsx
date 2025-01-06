import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { routesConfig } from "../../Routes";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Portfolio</h1>

        {/* Menu desktop (agora com a formatação vertical do mobile) */}
        <nav
          className={`${menuOpen ? "hidden" : "block"
            }  bg-gray-800 absolute top-16 left-0 w-full`}
        >
          <ul className="hidden md:block flex flex-col gap-4 p-4">
            {routesConfig.map((route) => (
              <li key={route.path || route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 ${isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-300 hover:text-green-300"
                    }`
                  }
                >
                  {route.name || "Unnamed Route"}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu mobile (agora com a formatação horizontal do desktop) */}
        <nav className="md:hidden">
          <ul className="flex gap-4">
            {routesConfig.map((route) => (
              <li key={route.path || route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 ${isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-300 hover:text-green-300"
                    }`
                  }
                >
                  {route.name || "Unnamed Route"}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu hambúrguer para telas pequenas */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden md:block hiddenfocus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
