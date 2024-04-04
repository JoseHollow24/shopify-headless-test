/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'm2xl': {'max': '1535px'},
      'mxl': {'max': '1279px'},
      'mlg': {'max': '1023px'},
      'mmd': {'max': '767px'},
      'msm': {'max': '639px'},
    }
  },
  plugins: [],
}

