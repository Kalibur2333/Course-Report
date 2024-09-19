/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8BC34A',  // Add mindatlas green color
      },
    },
  },
  plugins: [],
};
