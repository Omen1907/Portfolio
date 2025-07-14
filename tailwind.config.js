/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#F6F1EB",
        textColor: "#000000",
        designColor: "#E07A5F",
        titleRoundBg:
          "linear-gradient(135deg, rgba(120,204,109,0.15) 0%, rgba(120,204,109,0.01) 100%)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      boxShadow: {
        greenShadow: "0 0 60px rgba(224, 122, 95, 0.5)",
        testShwdow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
