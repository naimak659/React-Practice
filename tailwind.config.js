/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cascadiaBold: "cascadiaCode-bold",
        cascadiaLight: "cascadiaCode-light",
        cascadiaRegular: "cascadiaCode-regular",
        cascadiaSemiBold: "cascadiaCode-semiBold",
      },
    },
  },
  plugins: [],
};
