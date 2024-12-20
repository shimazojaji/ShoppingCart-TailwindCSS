/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Vazirmatn"],
      },
      colors: {
        'header-color': '#3F4264',
        'title-color':'#2A2D53',
        'subtitle-color':'#555775', 
        'price-color':'#4A6DFF',
        'trash-color':'#FF0000CC',
        'button-color':' #4A6DFF',
        'primary-gray':'#BFC0CB',
        'primary-purple':'#6A6C87',
        'primary-yellow':'#FF9900',




      },
      boxShadow: {
        'card': '1px 1px 2px 1px rgba(107, 114, 128, 0.3),-1px -1px 2px 1px rgba(107, 114, 128, 0.3)',
      }
    },
  },
  plugins: [],
}

