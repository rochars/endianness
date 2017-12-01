/*
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/endianness.js'
  },
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