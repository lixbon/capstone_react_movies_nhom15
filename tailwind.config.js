/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#06283D",
        color2: "#256D85",
        color3: "#47B5FF",
        color4: "#DFF6FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
