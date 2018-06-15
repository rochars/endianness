# endianness
Swap endianness in byte arrays.  
Copyright (c) 2017 Rafael da Silva Rocha.  
https://github.com/rochars/endianness  

[![NPM version](https://img.shields.io/npm/v/endianness.svg?style=for-the-badge)](https://www.npmjs.com/package/endianness) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/endianness/index.html)

Swap endianness in byte arrays. The input array is modified in-place.

- Works in Node.js and in the browser
- Works with any byte offset

## Install
```
npm install endianness
```

## Browser
Use the compiled file in the */dist* folder:
```html
<script src="endianness.min.js"></script>
<script>
    endianness([64, 9, 33, 251, 84, 68, 45, 24], 8);
    // returns [24, 45, 68, 84, 251, 33, 9, 64]
</script>
```

Or get it from the [jsDelivr](https://www.jsdelivr.com) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/endianness@5"></script>
```

## Example
```javascript
const endianness = require("endianness");

// Swap endianness of one 64-bit value:
endianness([64, 9, 33, 251, 84, 68, 45, 24], 8);
// returns [24, 45, 68, 84, 251, 33, 9, 64]

// Swap endianness of two 24-bit values:
endianness(["00", "00", "80", "ff", "ff", "7f"], 3),
// returns ["80", "00", "00", "7f", "ff", "ff"];
```

## API
```javascript
/**
 * Swap the endianness of units of information in a byte array.
 * The original array is modified in-place.
 * @param {!Array<number>|!Array<string>|Uint8Array} bytes The bytes.
 * @param {number} offset The number of bytes of each unit of information.
 */
function endianness(bytes, offset) {}
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
