/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: { roboto: "Roboto", inter: "Inter" },
    colors: {
      white: "#fff",
      indigo: { "100": "#5a4ae3", "200": "#4f3fd8" },
      violet: { "100": "#a35ffa", "200": "#a25ef9" },
      gray: { "100": "#fafafa", "200": "#222" },
      black: "#000",
    },
    fontSize: {
      sm: "14px",
      base: "15px",
      lg: "16px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "50px",
    },
  },
},

  plugins: [],
}