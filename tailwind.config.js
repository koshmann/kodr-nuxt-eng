module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      red: {
        DEFAULT: '#FF3300',
      },
      gray: {
        light: '#F2F2F2',
        medium: '#E0E0E0',
        DEFAULT: '#828282',
        darker: '#4f4f4f',
        dark: '#333333',
      },
      black: '#333',
    },
    fontFamily: {
      title: ['TT Firs Neue', 'sans-serif'],
      body: ['TT Firs Neue', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
