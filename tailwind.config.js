/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Project2/**/*.{html,js}'
  ],
  theme: {
    extend: {
      keyframes: {
      wiggle: {
        '0%' : {opacity: '0', transform : 'translateX(600px)'},
        '50%' : {transform: 'translateX(-150px)'},
        '90%' : {transform: 'translateX(10px)'},
        '100%' : {opacity:'1',transform: 'translateX(0)'},
         }
       },
       animation: {
        wiggle: 'wiggle 2s ease-in-out',
       }
     }
    },
  plugins: [],
}
