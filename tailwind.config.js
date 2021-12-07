module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '42.5': '42.5rem',
        '30': '30rem',
      },
      spacing:{
        '6.25': '6.25rem',
        '1.875': '1.875rem',
        '0.625': '0.625rem',
        '1.563': '1.563rem',
        '4.125': '4.125rem',
        '0.938': '0.938rem',
        '1.25': '1.25rem',
      },
      colors:{
        'blue': '#4066A5',
        'dark': '#131821',
        'grey': '#6A707B',
        'cream': '#E3E3E4',
        'glass': '#F2F5FA',
        'fb-blue': '#4267B2',
      },
      backgroundImage: {
        'pineapple': "url('@img/background-image.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
