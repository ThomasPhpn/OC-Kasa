/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#ff6060",
        "custom-grey": "#f6f6f6",
        "custom-star": "#e3e3e3",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
