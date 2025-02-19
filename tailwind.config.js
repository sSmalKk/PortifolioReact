module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { DEFAULT: "#000000", 900: "#0e0e0e" },
        white: { DEFAULT: "#ffffff" },
        blue: { 500: "#007BFF" }, // Azul principal
        red: { 500: "#FF3B30" }, // Para ações negativas
        green: { 500: "#44a750" }, // Para ações positivas
        gray: { 900: "#1a1a1a", 300: "#d6e3e7" },
      },
      boxShadow: { sm: "0px 2px 8px 0px #14142b14" },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
