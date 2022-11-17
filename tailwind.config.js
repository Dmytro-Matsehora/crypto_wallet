'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grey: '#A6AEBF',
        dark: '#0D1C47',
        mainColor: '#0C223C',
        textWallet: '#24A0F5',
        gradientStart: '#14273C',
        gradientMiddle: '#213B57',
        gradientEnd: '#2D4D70',
        settingsButton: '#2AF3F3',
        totalBalance: '#24A0F5',
      },
      width: {
        '18': '18px',
        '26': '26px',
        '640': '640px',
        '600': '600px',
        '186': '186px',
        '130': '130px',
        '84': '84px',
      },
      height: {
        '18': '18px',
        '26': '26px',
        '30': '30px',
        '50': '50px',
        '60': '60px',
        '80': '80px',
      },
      dropShadow: {
        'shadowWallet': '0px 0px 10px #102032',
      },
      boxShadow: {
        'shadowCurrency': '0 0 10px 0 rgba(42, 243, 243, 0.55);',
        'shadowDeposit': '0 0 10px 0 rgba(0, 133, 255, 0.55);',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'ellipse': 'url("./images/ellipse.svg")',
      },
    },
  },
  plugins: [],
};
