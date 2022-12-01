const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./modules/**/*.{ts,vue}",
    "./index.html"
  ],
  safelist: [
    'w-72',
    'w-32',
    'w-40',
    'w-56',
    'w-64',
    'w-16',
    'w-44',
    'w-28',
    'bg-neutral-500',
    'bg-neutral-600',
    'bg-neutral-700'
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "primary": "#10b981"
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

module.exports = config;
