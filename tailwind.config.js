// tailwind.config.js
module.exports = {
  theme: {
   
    width: {
      'width45': '65px', // Define a custom width value
      'width158': '73%',
      'width100': '100px',
      'width60': '60%',
      'width40': '40%',
      'width80': '80%'
    },
    height: {
      'height45': '65px',
      'height20': '26px',
    },
    lineHeight: {
      '44': '64px', // Add a custom line height class
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      '7': '7px',
      '9': '9px',
      '10': '10px',

      '12': '12px',
      '14': '14px',
      '16': '16px',
      '30': '50px',
    },
  },
  extend: {
    colors: {
      primary: '#FF5722',
    },
    fontFamily: {
      custom: ['MyCustomFont', 'sans'],
    },
    width: {
      'width40': '10px', // Define a custom width value
    },
  },
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add any other files that contain your HTML/JSX templates.
  ],

};
