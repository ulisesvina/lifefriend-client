/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: "#161616",
        red: "#d61c4e",
        main: "#e8ded2",
        light: "#a3d2ca",
        accent: "#5eaaa8",
        secondary: "#0b9ab0",
      },
    },
  },
  plugins: [],
};
