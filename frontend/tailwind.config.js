/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-orange": "#FFA500",
        "normal-orange": "#FFA500",
        "light-orange": "#FFD700",
        "coral-orange": "#FF7F50",
        "pastel-orange": "#FFB6C1",
      },
    },
  },
  plugins: [],
};
