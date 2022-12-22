/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('/images/landing.jpeg')",
        'signin': "url('/images/signin.jpeg')",
        'dashboard': "url('/images/dashboard.jpeg')"
      }
    },
  },
  plugins: [],
}
