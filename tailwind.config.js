/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A4ECA',
        'secondary': '#61677D',
        'iconBG': '#D6DFFF',
        'boxBG': '#F5F9FE',
        'link': '#61677D',
        'button': '#3461FD',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

