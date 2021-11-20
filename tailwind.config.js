module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      greeny: "#5CBDB9",
      lightGreeny: "#9DCCCA",
      rosey: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
