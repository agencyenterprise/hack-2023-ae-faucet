/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sds-projects/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },

  plugins: [
    require("daisyui"),
    require("@headlessui/tailwindcss"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
  daisyui: {
    themes: [
      {
        extended: {
          primary: "#ffa500",
          secondary: "#765DBF",
          // ".btn"
        },
      },
    ],
  },
};
