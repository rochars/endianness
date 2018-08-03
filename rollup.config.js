/*
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Rollup configuration file.
 * @see https://github.com/rochars/endianness
 */

import babel from 'rollup-plugin-babel';

const head = "(function (global, factory) {" +
  "typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :" +
  "typeof define === 'function' && define.amd ? define(factory) :" +
  "(global.endianness = factory());" +
"}(this, (function () { 'use strict'";
const foot =   "var module = module || {};"+
  " module.exports = endianness;" +
  " module.exports['default'] = endianness; "+
  " return endianness;})));"

export default [
  {
    input: 'endianness.js',
    output: [
      {
        file: 'endianness.umd.js',
        name: 'endianness',
        format: 'iife',
        banner: head,
        footer: foot
      }
    ],
    plugins: [
      babel()
    ]
  }
];
