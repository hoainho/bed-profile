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
      boxShadow: {
        bg: "10px 10px 50px 0px #111111",
      },
      colors: {
        bed_facebook: "#3B599A",
        bed_instagram: "#F79C3B",
        bed_google: "#DF4C40",
        bed_skype: "#00AEEE",
      },
      backgroundColor: {
        facebook: "#3B599A",
        instagram: "#F79C3B",
        google: "#DF4C40",
        skype: "#00AEEE",
      },
      translate: {
        "50-": "-50%",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "12rem",
      },
    },
  },
  plugins: [],
};
