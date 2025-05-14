/** @type {import('tailwindcss').Config} */
export const content = [
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
];

export const theme = {
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  extend: {
    colors: {
      primary: '#131424',
      secondary: '#e5e5e5',
      accent: '#FF4A70',
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
    },
    fontFamily: {
      poppins: [`var(--font-poppins)`, 'sans-serif'],
      sora: [`var(--font-sora)`, 'sans-serif'],
    },
  },
};
