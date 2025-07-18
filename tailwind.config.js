/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // optional, for safety
  ],
  theme: {
    extend: {
      colors: {
        night: '#0d0d0d',
        neonPink: '#ff6ec7',
        neonBlue: '#0ff0fc',
        neonPurple: '#9d4edd',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
