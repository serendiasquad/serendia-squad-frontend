/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modules/**/*.{ts,vue}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#10b981"
      }
    },
  },
  plugins: [],
}
