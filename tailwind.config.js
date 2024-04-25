module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0e0e0e", "900_dd": "#000000dd", "900_60": "#00000060", "900_01": "#000000" },
        white: { A700: "#ffffff" },
        green: { 400: "#59b163", 500: "#44a750", 700: "#2f9d3c" },
        blue_gray: { 50: "#eff0f6", 500: "#627481", "900_19": "#2b2b2b19" },
        gray: { 50: "#f5fafc", 300: "#d6e3e7", 900: "#1a1a1a" },
        deep_purple: { 900: "#0000c0" },
        indigo: { A200: "#617fff", A700: "#0039f0" },
      },
      boxShadow: { xs: "0px 0px 3px 0px #0000002b", sm: "0px 2px 8px 0px #14142b14" },
      fontFamily: { lato: "Lato", roboto: "Roboto", inter: "Inter", robotomono: "Roboto Mono" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
