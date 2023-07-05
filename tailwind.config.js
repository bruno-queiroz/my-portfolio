/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00abf0",
      },
      screens: {
        smm: "560px",
      },
    },
  },
  plugins: [],
};
