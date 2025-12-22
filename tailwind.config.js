/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        // Adding some UAE-inspired earth tones for JuteBay
        stone: {
          850: '#1c1917',
        }
      },
    },
  },
  plugins: [],
}