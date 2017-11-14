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
            // to 
            {
              search: 'module.exports.endianness',
              replace: "window['endianness']",
            }
          ]
        }
      }
    ]
  }
};