(function (global, factory) {typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :typeof define === 'function' && define.amd ? define(factory) :(global.endianness = factory());}(this, (function () { 'use strict'
var endianness = (function () {
  'use strict';

  /*
   * Copyright (c) 2017-2018 Rafael da Silva Rocha.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   */

  /**
   * @fileoverview A function to swap endianness in byte buffers.
   * @see https://github.com/rochars/endianness
   */

  /** @module endianness */

  /**
   * Swap the byte ordering in a buffer. The buffer is modified in place.
   * @param {!Array|!Uint8Array} bytes The bytes.
   * @param {number} offset The byte offset.
   * @param {number=} start The start index. Assumes 0.
   * @param {number=} end The end index. Assumes the buffer length.
   * @throws {Error} If the buffer length is not valid.
   */
  function endianness(bytes, offset) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : bytes.length;

    if (end % offset) {
      throw new Error("Bad buffer length.");
    }
    for (var index = start; index < end; index += offset) {
      swap(bytes, offset, index);
    }
  }

  /**
   * Swap the byte order of a value in a buffer. The buffer is modified in place.
   * @param {!Array|!Uint8Array} bytes The bytes.
   * @param {number} offset The byte offset.
   * @param {number} index The start index.
   * @private
   */
  function swap(bytes, offset, index) {
    offset--;
    for (var x = 0; x < offset; x++) {
      /** @type {*} */
      var theByte = bytes[index + x];
      bytes[index + x] = bytes[index + offset];
      bytes[index + offset] = theByte;
      offset--;
    }
  }

  return endianness;

}());
var module = module || {}; module.exports = endianness; module.exports['default'] = endianness;  return endianness;})));
