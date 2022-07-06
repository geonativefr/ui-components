const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
    "./examples/**/*.{vue,js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
  ],
}
