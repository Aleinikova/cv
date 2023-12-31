import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['var(--font-merriweather)'],
        secondary: ['var(--font-orbitron)'],
      },
      colors: {
        'text-primary': '#1E1E1E',
        primary: '#FF4D62',
        secondary: '#3185FC',
        'brand-pink': '#F679F1',
        'brand-red': '#FF4D62',
        'brand-green': '#097313',
        'brand-yellow': '#FDD91F',
        'brand-blue': '#3185FC',
      },
      spacing: {
        8: '80px',
      },
      opacity: {
        '35': '.35',
      },
      maxWidth: {
        'max-w-8xl': '1360px',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        'inner-md': 'inset -20px -26px 0px 0px rgba(26, 26, 26, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
