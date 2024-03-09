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
      borderRadius: {
        '1-px': '0.0625rem'
      }
    }
  },
  plugins: [],
}