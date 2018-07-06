(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.endianness = factory());
}(this, (function () { 'use strict';

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

    /**
     * @module endianness
     */

    /**
     * Swap the byte ordering in a buffer. The buffer is modified in place.
     * @param {!Array<number|string>|!Uint8Array} bytes The bytes.
     * @param {number} offset The byte offset.
     * @param {number=} index The start index. Assumes 0.
     * @param {?number=} end The end index. Assumes the buffer length.
     * @throws {Error} If the buffer length is not valid.
     */
    function endianness(bytes, offset, index=0, end=null) {
        let len = end || bytes.length;
        let limit = parseInt(offset / 2, 10);
        if (len % offset) {
            throw new Error("Bad buffer length.");
        }
        while (index < len) {
            swap(bytes, offset, index, limit);
            index += offset;
        }
    }

    /**
     * Swap the byte order of a value in a buffer. The buffer is modified in place.
     * @param {!Array<number|string>|!Uint8Array} bytes The bytes.
     * @param {number} offset The byte offset.
     * @param {number} index The start index.
     * @private
     */
    function swap(bytes, offset, index, limit) {
        let x = 0;
        let y = offset - 1;
        while(x < limit) {
            let theByte = bytes[index + x];
            bytes[index + x] = bytes[index + y];
            bytes[index + y] = theByte;
            x++;
            y--;
        }
    }

    return endianness;

})));
