/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#00FFFF',
        'neon-bright': '#7FFFD4',
        ink: '#0A0A0A',
        screen: '#151515',
      },
      fontFamily: {
        display: [
          'Anton',
          'Oswald',
          'League Spartan',
          'system-ui',
          'sans-serif',
        ],
        body: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        panel: '20px',
        'panel-sm': '12px',
      },
      maxWidth: {
        site: '1200px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
