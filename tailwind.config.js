/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React components for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      color: {
        primaryColor: ['#E1523E'],
      },
      screens: {
        'custom': '1110px', // Add your custom breakpoint
      },
    },
  },
  plugins: [],
};
