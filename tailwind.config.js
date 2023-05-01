/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#97504A",
        primaryHover: "#995451",
        secondary: "#EC6D62",
        secondary2: "#DF4E46",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
