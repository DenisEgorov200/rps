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
      fontSize: {
        xss: ['0.625rem', '0.813rem']
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180.00deg, rgb(62, 79, 100),rgb(47, 61, 79) 100%)',
        'gradient-blue-active': 'linear-gradient(180.00deg, rgb(155, 196, 245),rgb(79, 127, 184) 100%)'
      },
      borderWidth: {
        '3px': '0.19rem'
      },
      borderRadius: {
        '1px': '0.0625rem',
      },
      boxShadow: {
        chest: '0px 4px 0.3px 0px rgb(10, 23, 40),inset 0px 5px 1.7px 0px rgba(255, 255, 255, 0.4),inset 5px 0px 1.7px 0px rgba(255, 255, 255, 0.25),inset 0px -4px 1.7px 0px rgba(255, 255, 255, 0.4),inset -4px 0px 1.7px 0px rgba(255, 255, 255, 0.4)',
        'nav-menu': 'inset 0px 5.22px 5.22px 0px rgb(59, 77, 97),inset 0px -5.22px 5.22px 0px rgb(41, 53, 67),inset 0px 3px 3.6px 0px rgba(99, 138, 172, 0.64)',
        'nav-menu-active': '0px 15.67px 31.33px 0px rgba(0, 110, 242, 0.58),inset 0px 5.22px 5.22px 0px rgb(36, 136, 255),inset 0px -5.22px 7.8px 2px rgb(41, 127, 255),inset 0px 3px 3.6px 0px rgba(179, 219, 255, 0.64)',
      }
    }
  },
  plugins: [],
}