/*
 * https://github.com/rochars/endianness
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 */

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import closure from 'rollup-plugin-closure-compiler-js';

// License notes for bundles that include dependencies
const license = '/*!\n'+
  ' * endianness Copyright (c) 2017-2018 Rafael da Silva Rocha.\n'+
  ' */\n';

export default [
  // cjs
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.cjs.js',
        name: 'endianness',
        format: 'cjs',
        footer: 'module.exports.default = endianness;',
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // umd, es
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.umd.js',
        name: 'endianness',
        format: 'umd'
      },
      {
        file: 'dist/endianness.js',
        format: 'es'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // browser
  {
    input: 'index.js',
    output: [
      {
        name: 'endianness',
        format: 'iife',
        file: 'dist/endianness.min.js',
        banner: license,
        footer: 'window["endianness"]=endianness;'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE'
      })
    ]
  }
];
