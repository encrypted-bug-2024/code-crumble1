module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#5f5fff',
        highlight: '#ff5fcb',
        dark: '#18192a',
        light: '#f8f8ff',
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg,#18192a 0%,#23234d 100%)',
      },
      boxShadow: {
        glass: '0 4px 24px 0 rgba(95,95,255,0.18)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
