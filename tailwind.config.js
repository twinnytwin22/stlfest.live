/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  fontFamily: {
    'professor': ['professor', 'sans-serif'],
    'owners-wide': ['owners-wide', 'sans-serif'],
    'owners-xwide': ['owners-xwide', 'sans-serif'],
    'owners-xxwide': ['owners-xxwide', 'sans-serif'],
    'groupie-gloss': ['groupie-gloss', 'san-serif'],
    'groupie-regular': ['groupie-regular', 'san-serif'],
    'bubblegum-pop-highlight': ['bubblegum-pop-highlight', 'san-serif'],
    'bubblegum-pop-shadow': ['bubblegum-pop-shadow', 'san-serif'],
    'bubblegum-pop-vanilla': ['bubblegum-pop-vanilla', 'san-serif']

  },
  theme: {
    extend: {},
  },
  plugins: [],
}

