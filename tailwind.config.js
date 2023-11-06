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
        cardShadow: "0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)"
      }
    },
  },
  plugins: [],
}

