/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      night: "#111111",
      white: "#FFFFFF",
      crayola: "#157AFE",
      columbiaBlue: "#C9E0FF",
      danger: "#EF5350",
      dangerLight: "#EF535040",
      success: "#4CAF50",
      successLight: "#4CAF5040",
      idle: "#C9E0FF",
      gray: "#D9D9D94D",
      grayDark: "#D9D9D9",
      lightBlue: "#C9E0FF40"
    }
  },

  plugins: []
};
