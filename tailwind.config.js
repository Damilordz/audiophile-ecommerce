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
        black: "#141414", // Black variant
        white: {
          DEFAULT: "#FFFFFF", // Standard white
          light: "#F1F1F1", // Light grayish white
          lighter: "#FAFAFA", // Lighter grayish white
        },
      },
      backgroundImage: {
        "hero-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "hero-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "hero-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "speaker-2-desktop":
          "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "speaker-2-tablet": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "speaker-2-mobile": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
