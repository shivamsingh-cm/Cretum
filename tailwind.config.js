/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors : {
        backgroundPrimary: "#1B122C",
        backgroundPrimaryDark : "#10091B",
        buttonBackground : "#A164FF",
        buttonBackgroundHover: "#8B3EFF",
        backgroundSecondary : '#221736'
      },
      fontFamily: {
        roobert: ['"Roobert TRIAL"'],
      },

    },
  },
  plugins: [],
}

