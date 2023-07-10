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
        mainBg: '#2E2E38',
        lightGrey: '#EDEDED',
        primaryPurple: '#724BC3',
        secondaryPurple: '#4F4767',
        yellow: '#FFE600',
        secondary: '#ffd60a',
        dark: '#1A1A24',
        blueLighter: '#003566',
        grey: '#C4C4CC',
      },
    },
  },
  plugins: [],
};
