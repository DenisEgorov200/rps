/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-color": "rgba(var(--color-base), <alpha-value>)",
        yellow: "rgba(var(--color-yellow), <alpha-value>)",
        gray: "rgba(var(--color-gray), <alpha-value>)",
        blue: {
          100: "rgba(var(--color-blue0), <alpha-value>)",
          200: "rgba(var(--color-blue1), <alpha-value>)",
          300: "rgba(var(--color-blue2), <alpha-value>)",
          400: "rgba(var(--color-blue3), <alpha-value>)"
        },
      },
      borderWidth: {
        '3px': '0.19rem'
      },
      borderRadius: {
        '1px': '0.0625rem',
      },
      boxShadow: {
        chest: '0px 4px 0.3px 0px rgb(10, 23, 40),inset 0px 5px 1.7px 0px rgba(255, 255, 255, 0.4),inset 5px 0px 1.7px 0px rgba(255, 255, 255, 0.25),inset 0px -4px 1.7px 0px rgba(255, 255, 255, 0.4),inset -4px 0px 1.7px 0px rgba(255, 255, 255, 0.4)'
      }
    }
  },
  plugins: [],
}