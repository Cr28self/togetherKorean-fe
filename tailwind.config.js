module.exports = {
  content: [
    'node_modules/daisyui/**/*.{js,ts,jsx,tsx}',
    './index.jsx.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    themes: ['light'],
  },
};
