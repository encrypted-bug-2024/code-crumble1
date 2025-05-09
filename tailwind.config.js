module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9900', // orange accent
        accent: '#FF9900', // alias for clarity
        greenAccent: '#22C55E',
        purpleAccent: '#A259FF',
        black: '#111111',
        dark: '#18181b', // dark gray for backgrounds
        gray: '#23272a', // card gray
        lightGray: '#b0b3b8', // subtle text
        white: '#fff',
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      backgroundImage: {},
      boxShadow: {}, // Remove glass shadow
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
