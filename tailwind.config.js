/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'procc-primary': '#0051A5',
        'procc-secondary': '#003D7A',
        'procc-accent': '#60A5FA',
        'procc-light': '#E0F2FE',
      },
    },
  },
  plugins: [],
}
