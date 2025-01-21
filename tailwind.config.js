/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#D87D4A", // Main orange color
          light: "#FABF85", // Lighter variant
        },
        black: "#121212", // Black variant
        white: {
          DEFAULT: "#FFFFFF", // Standard white
          light: "#F1F1F1", // Light grayish white
          lighter: "#FAFAFA", // Lighter grayish white
        },
      },
    },
  },
  plugins: [],
};
