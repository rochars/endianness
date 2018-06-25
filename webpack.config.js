/*
 * https://github.com/rochars/endianness
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview webpack configuration file.
 */

const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = [  
  // Browser dist with dependencies, compiled.
  // Will be the one delivered by CDNs.
  {
    entry: './index.js',
    output: {
      filename: './dist/endianness.min.js',
      library: "endianness",
      libraryTarget: "window"
    },
    plugins: [
      new ClosureCompiler({
        options: {
          languageIn: 'ECMASCRIPT6',
          languageOut: 'ECMASCRIPT5',
          compilationLevel: 'ADVANCED',
          warningLevel: 'VERBOSE',
          exportLocalPropertyDefinitions: true,
          generateExports: true,
          outputWrapper: '%output%window.endianness=window.endianness.default;'
        }
      })
    ]
  }
];
