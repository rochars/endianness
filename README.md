# endianness
Swap endianness in byte arrays.  
Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
https://github.com/rochars/endianness

[![Build Status](https://travis-ci.org/rochars/endianness.svg?branch=master)](https://travis-ci.org/rochars/endianness) [![Build status](https://ci.appveyor.com/api/projects/status/e5r0tc303hueqq8e?svg=true)](https://ci.appveyor.com/project/rochars/endianness) [![codecov](https://codecov.io/gh/rochars/endianness/branch/master/graph/badge.svg)](https://codecov.io/gh/rochars/endianness) [![NPM version](https://img.shields.io/npm/v/endianness.svg?style=flat)](https://www.npmjs.com/package/endianness) [![NPM downloads](https://img.shields.io/npm/dm/endianness.svg?style=flat)](https://www.npmjs.com/package/endianness)

Swap endianness in byte arrays. Works in Node.js and in the browser.

Arguments can be **Array** and **Uint8Array**.

The byte array is modified in-place.

## Install
```
npm install endianness
```

## Example
```javascript
const endianness = require("endianness");

// Swap endianness of one 64-bit value:
endianness.endianness([64, 9, 33, 251, 84, 68, 45, 24], 8);
//[24, 45, 68, 84, 251, 33, 9, 64]

// Swap endianness of two 24-bit values:
endianness.endianness(
    ["00", "00", "80", "ff", "ff", "7f"], 3),
//  ["80", "00", "00", "7f", "ff", "ff"]);
```

## Use
```javascript
/**
 * Swap the endianness of units of information in a array of bytes.
 * The original array is modified in-place.
 * @param {!Array<number>|Uint8Array} bytes An array of bytes.
 * @param {number} offset The byte offset according to the bit depth.
 *  - 2 for 16-bit
 *  - 3 for 24-bit
 *  - 4 for 32-bit
 *  - 5 for 40-bit
 *  - 6 for 48-bit
 *  - 7 for 56-bit
 *  - 8 for 64-bit
 */
function endianness(bytes, offset) {}
```

## Browser
```html
<script src="endianness-min.js"></script>
<script>
    endianness([64, 9, 33, 251, 84, 68, 45, 24], 8);
    // returns [24, 45, 68, 84, 251, 33, 9, 64]
</script>
```

## LICENSE
Copyright (c) 2017 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
