/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blur: "#2148C0",
      },
      container: {
        center: true,
        padding: "0px",
        screens: {
          lg: "1440px",
        }
      }
    },
  },
  plugins: [],
}