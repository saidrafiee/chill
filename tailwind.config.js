/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        chill: {
          bg: "#181A1C",
          surface: "#22282A",
          input: "#22282A",
          border: "#3D4142",
          "border-subtle": "#E7E3FC",
          "btn-dark": "#3D4142",
          "btn-dark-hover": "#4E5355",
          accent: "#3254FF",
          "accent-hover": "#243FDB",
          "accent-dark": "#09147A",
          badge: "#3254FF",
          red: "#E50914",
          muted: "#C1C2C4",
          subtext: "#9D9EA1",
        },
      },
      fontFamily: {
        sans: ["Lato", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
