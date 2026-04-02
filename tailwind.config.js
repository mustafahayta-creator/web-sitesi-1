module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: '#1a1a1a',
        accent: '#B8860B',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }
    },
  },
  plugins: [],
}
