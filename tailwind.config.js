/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }],
};
