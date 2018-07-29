/*
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Rollup configuration file.
 * @see https://github.com/rochars/endianness
 */

import closure from 'rollup-plugin-closure-compiler-js';
import {unexport} from 'rollup-plugin-bundleutils';

const license = '/*!\n' +
' * https://github.com/rochars/endianness\n' +
' * Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.\n' +
' */\n';

// GCC UMD footer, compatible with old browsers, Node and AMD loaders
const footer = 
"typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = endianness :" +
"typeof define === 'function' && define.amd ? define(['exports'], endianness) :" +
"typeof global !== 'undefined' ? global.endianness = endianness : null;";

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
        outputWrapper: license + '%output%' + footer
      })
    ]
  }
];
