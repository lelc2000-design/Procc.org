/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'procc-primary': '#6B46C1',      // Púrpura principal (del sitio original)
        'procc-secondary': '#8B5CF6',   // Púrpura secundario
        'procc-accent': '#A78BFA',      // Púrpura acento
        'procc-dark': '#4C1D95',        // Púrpura oscuro
        'procc-light': '#EDE9FE',       // Púrpura claro
        'procc-green': '#10B981',       // Verde claro del logo
        'procc-green-light': '#D1FAE5', // Verde muy claro
        'procc-text': '#1F2937',       // Texto principal
        'procc-text-light': '#6B7280',  // Texto secundario
      },
    },
  },
  plugins: [],
}
