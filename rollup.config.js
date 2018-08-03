/*
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Rollup configuration file.
 * @see https://github.com/rochars/endianness
 */

import closure from 'rollup-plugin-closure-compiler-js';
import {unexport} from 'rollup-plugin-bundleutils';

// GCC UMD footer, compatible with old browsers, Node and AMD loaders
const footer = 
"var exports = exports || {}; exports = endianness; exports.endianness = endianness; " +
"exports['default'] = endianness;" +
"typeof module !== 'undefined' ? module.exports = endianness :" +
"typeof define === 'function' && define.amd ? define(['exports'], endianness) :" +
"typeof global !== 'undefined' ? global.endianness = endianness : null; " +
"return endianness;})();";

export default [
  {
    input: 'endianness.js',
    output: [
      {
        file: 'endianness.umd.js',
        format: 'esm',
      }
    ],
    plugins: [
      unexport(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT3',
        compilationLevel: 'SIMPLE',
        warningLevel: 'VERBOSE',
        outputWrapper: ';var endianness=(function(exports){' + '%output%' + footer
      })
    ]
  }
];
