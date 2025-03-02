/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#F7F7F7",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        navSize: ["24px", { lineHeight: "1.2" }],
        heroSize: ["74px", { lineHeight: "1.2" }],
        pSize: ["18px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};
