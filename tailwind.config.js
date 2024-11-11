/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#00ACC1',
        'custom-purple':'#673AB7',
        'custom-orange': '#FF5722',
        'Warm-Yellow': '#FFD54F',
        'custom-peach': '#FFAB91',
        'custom-indigo': '#1A73E8',
        'pastel-blue':'#c3ecf6',
        'pastel-red':'#f8d8d8',
        'pastel-yellow':'#ffe7a5',
        'H-blue':'#57caff',
        'H-green':'#5cdb6d',
      },
    },
  },
  plugins: [],
}
