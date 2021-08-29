// Copy of https://github.com/bahmutov/cypress-angular-unit-test/blob/master/cypress/plugins/cy-ts-preprocessor.js
const wp = require('@cypress/webpack-preprocessor')

module.exports = wp({
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      }]
    }
  }
})
