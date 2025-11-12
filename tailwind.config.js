/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "#F9F5F3",
        roseGold: "#D8A48F",
        warmBrown: "#A07156",
        choco: "#3E2F2F",
        softBlue: "#7E9AAF",
        lightGray: "#E8E6E3",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #D8A48F 0%, #7E9AAF 100%)",
        "gradient-light": "linear-gradient(135deg, #F9F5F3 0%, #E8E6E3 100%)",
        "gradient-dark": "linear-gradient(135deg, #3E2F2F 0%, #7E9AAF 100%)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
