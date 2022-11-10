/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        sm: "1.5px",
        md: "2px",
        lg: "3px",
      },
    },
  },
  plugins: [],
};
