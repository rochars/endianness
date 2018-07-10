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

let UMDBanner = "(function (global, factory) {" +
  "typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :" +
  "typeof define === 'function' && define.amd ? define(factory) :" +
  "(global.endianness = factory());" +
  "}(this, (function () { 'use strict';"

let UMDFooter = 'return endianness; })));';

export default [
  // cjs, es
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.cjs.js',
        name: 'endianness',
        format: 'cjs',
        footer: 'module.exports.default = endianness;',
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
  // umd
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/endianness.umd.js',
        name: 'endianness',
        format: 'iife'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'WHITESPACE_ONLY',
        warningLevel: 'VERBOSE',
        preserveTypeAnnotations: true,
        createSourceMap: false,
        outputWrapper: UMDBanner + '%output%' + UMDFooter
      })
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
