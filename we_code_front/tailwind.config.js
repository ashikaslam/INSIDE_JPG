





/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Progrmar': '#03fcba',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}