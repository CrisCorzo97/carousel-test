/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      CircularBook: `'Circularstd book', sans-serif`,
      Circular: `'Circularstd', sans-serif`,
    },
    extend: {
      colors: {
        primaryOrange: "#ff691e",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
