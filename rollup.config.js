/*
 * https://github.com/rochars/byte-data
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 */

export default [
  // cjs
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.cjs.js',
        name: 'endianness',
        format: 'cjs'
      }
    ]
  },
  // umd
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.umd.js',
        name: 'endianness',
        format: 'umd'
      }
    ]
  },
  // esm
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.js',
        format: 'es',
      }
    ]
  }
];
