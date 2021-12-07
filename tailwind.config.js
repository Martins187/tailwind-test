module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '42.5': '42.5rem',
        '30': '30rem',
        '227px': '14.188rem',
        '663px': '41.438rem',
        '26px': '1.625rem',
        '18.5': '18.5rem',
      },
      spacing: {
        '0.625': '0.625rem',
        '0.938': '0.938rem',
        '6.25': '6.25rem',
        '1.875': '1.875rem',
        '1.563': '1.563rem',
        '4.125': '4.125rem',
        '3.125': '3.125rem',
        '1.25': '1.25rem',
        '14.625': '14.625rem',
        '3.375': '3.375rem',
      },
      maxWidth: {
        '25': '25rem',
        '18.5': '18.5rem',
        '25': '25rem',
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '3px': '3px',
      },
      height: {
        '1px': '0.063rem',
        '15': '3.75rem',
        '26px': '1.625rem',
      },
      colors: {
        'blue': '#4066A5',
        'dark': '#131821',
        'grey': '#6A707B',
        'cream': '#E3E3E4',
        'glass': '#F2F5FA',
        'fb-blue': '#4267B2',
        'dark-blue': '#233759',
      },
      fontFamily: {
        arial: ['Arial'],
        georgia: ['Georgia'],
      },
      fontSize:{
        2:['2rem', '2.75rem'],
        1:['1rem', '1.75rem'],
      },
      backgroundImage: {
        'pineapple': "url('@img/background-image.png')",
        'grey-arrow': "url('@img/arrow.svg')",
        'blue-arrow': "url('@img/blue-arrow.svg')",
        'check-mark': "url(@img/checkmark.svg)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
