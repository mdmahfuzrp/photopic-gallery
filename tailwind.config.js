/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ageo: ["Ageo Personal Use", "sans-serif"],
        dm: ["DM Sans", "sans-serif"]
      },
      colors: {
        primary: "#FF6600",
        secondary: "#0B1B35",
        darkPrimary: "#FF5400",
      },
      boxShadow: {
        primaryShadow: "0px 2px 8px 0px #FF5C0080",
      }
    },
  },
  plugins: [],
}

