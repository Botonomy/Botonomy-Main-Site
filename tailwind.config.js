/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        accent: {
          start: '#FF4D4D',
          end: '#FF8A00',
        },
        background: '#F7F5F0',
        dark: '#1E1E24',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
