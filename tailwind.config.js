module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'castoro': ['Castoro', 'serif'],
        'benne': ['Benne', 'serif']
      },
      colors: {
        'color-white-1': '#F3F7F9',
        'color-black-1': '#303030',
        'color-black-2': '#2b2b2b',
        'color-black-3': '#1f1f1f',
        'color-black-4': '#1b1c1e',
        'color-gold-1': '#d79922',
        'color-pink-1': '#efe1ba',
        'color-red-1': '#ed3b17',
        'color-blue-1': '#4056a1',
        'color-blue-2': '#c5cbe3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
