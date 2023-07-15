/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bgPrimary: 'rgb(var(--bg-primary) / <alpha-value>)',
        bgSecondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
        bgAccent: 'rgb(var(--bg-accent) / <alpha-value>)',

        textPrimary: 'rgb(var(--text-primary) / <alpha-value>)',
        textSecondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        textTertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
        textAccent: 'rgb(var(--text-accent) / <alpha-value>)',

        lightest: 'rgb(var(--lightest) / <alpha-value>)',
        light: 'rgb(var(--light) / <alpha-value>)',
        lightAccent: 'rgb(var(--light-accent) / <alpha-value>)',

        darkest: 'rgb(var(--darkest) / <alpha-value>)',
        dark: 'rgb(var(--dark) / <alpha-value>)',
        darkAccent: 'rgb(var(--dark-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
