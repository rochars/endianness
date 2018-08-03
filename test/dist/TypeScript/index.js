"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/endianness
 */
var endianness_umd_js_1 = require("../../../endianness.umd.js");
// with arrays
var buff = [1, 2, 3, 4];
endianness_umd_js_1["default"](buff, 2);
console.log(buff);
buff = [1, 2, 3, 4];
endianness_umd_js_1["default"](buff, 2, 0, 2);
console.log(buff);
// with Uint8Array
var buffTyped = new Uint8Array([1, 2, 3, 4]);
endianness_umd_js_1["default"](buffTyped, 2);
console.log(buffTyped);
buffTyped = new Uint8Array([1, 2, 3, 4]);
endianness_umd_js_1["default"](buffTyped, 2, 0, 2);
console.log(buffTyped);
