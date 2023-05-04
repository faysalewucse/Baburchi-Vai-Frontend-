/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#995451",
        primaryHover: "#97504A",
        secondary: "#EC6D62",
        secondary2: "#DF4E46",
      },
    },
  },
  plugins: [],
};
