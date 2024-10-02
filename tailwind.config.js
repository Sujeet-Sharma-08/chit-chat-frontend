/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        thumb: {
          bg: '#888',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}
