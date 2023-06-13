/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#000814',
        primary: '#ffc300',
        secondary: '#ffd60a',
        blueDarker: '#001d3d',
        blueLighter: '#003566',
      },
    },
  },
  plugins: [],
};
