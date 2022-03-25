module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Palette: ["Palette Mosaic", "cursive"],
        SerifPro: ["Source Serif Pro", "serif"],
        Teko: ["Secular One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
