
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      greeny: "#5CBDB9",
      lightGreeny: "#9DCCCA",
      rosey: "#e3342f",
    }),
    extend: {
      colors: {
        greeny: "#5CBDB9",
        darkGreeny: "#388885",
        darkestGreeny: "#205550",
        lightGreeny: "#9DCCCA",
        rosey: "#e3342f",
        lighterGreen: "#EDFEFC",
        midGreen: "#9BDBD8",
      },
      backgroundImage: {
        "scale-background": "url('/images/background.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],

};
