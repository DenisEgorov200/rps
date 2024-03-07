/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        button: '#fbfdce'
      },
      boxShadow: {
        button: 'inset -3px -24px 4px 0px rgba(250, 147, 0, 0.78),inset 0px 14px 10.8px 0px rgb(254, 232, 120),inset 0px -12px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px 0px rgba(0, 0, 0, 0.6)'
      },
      dropShadow: {
        'button-text': '2px 1.2px 0px rgb(88,54,0)'
      }
    },
  },
  plugins: [],
}