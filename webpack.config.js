/*
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */
const ClosureCompiler = require('google-closure-compiler-js').webpack;
module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/endianness-min.js'
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: "VERBOSE"
      }
    })
  ],
  module: {
    loaders: [
      {
        test:  /index\.js$/,
        loader: 'string-replace-loader',
        query: {
          multiple: [
            {
              search: 'module.exports = endianness',
              replace: "window['endianness'] = endianness",
            }
          ]
        }
      }
    ]
  }
};