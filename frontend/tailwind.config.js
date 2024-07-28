/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-r': 'linear-gradient(to right, #6a11cb, #2575fc)',
      })
    },
  },
  plugins: [],
}

