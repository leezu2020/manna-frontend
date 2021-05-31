module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  /*theme: {
    extend: {
      backgroundImage: theme => ({
        'kakao-login': "url('~assets/kakao/kakao_login.png')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'kakao-yellow': '#FEE500',
      }),
    },
  },*/
  variants: {
    extend: {},
  },
  plugins: [],
}
