# endianness
Copyright (c) 2017-2018 Rafael da Silva Rocha.  
https://github.com/rochars/endianness  

[![NPM version](https://img.shields.io/npm/v/endianness.svg?style=for-the-badge)](https://www.npmjs.com/package/endianness) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/endianness/index.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/endianness.svg?style=flat-square)](https://codecov.io/gh/rochars/endianness) [![Unix Build](https://img.shields.io/travis/rochars/endianness.svg?style=flat-square)](https://travis-ci.org/rochars/endianness) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/endianness.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/endianness) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/endianness.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/endianness/)

Swap endianness in byte arrays. The input buffer is modified in-place.

- Works everywhere, server and browser
- Works with any byte offset
- Can swap only a part of the buffer

## Install
```
npm install endianness
```

## Use

### ES6
```import``` endianness from the **endianness.js** module:
```javascript
import endianness from 'endianness.js';

// Swap endianness of one 64-bit value:
let bytes = [64, 9, 33, 251, 84, 68, 45, 24];
endianness(bytes, 8);
```

### Node
```require()``` the **endianness** module:
```javascript
const endianness = require("endianness");

// Swap endianness of two 24-bit values:
let bytes = ["00", "00", "80", "ff", "ff", "7f"];
endianness(bytes, 3),
```

### Browser
Use the compiled file **endianness.min.js** in the **dist/** folder:
```html
<script src="endianness.min.js"></script>
<script>
    var bytes = [64, 9, 33, 251, 84, 68, 45, 24]; 
    endianness(bytes, 8);
    console.log(bytes);
</script>
```

Or get it from the [jsDelivr](https://www.jsdelivr.com) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/endianness@7"></script>
```

Or get it from [unpkg](https://www.unpkg.com):
```html
<script src="https://unpkg.com/endianness@7"></script>
```

Or as a ES6 module for modern browsers from [jspm](https://jspm.io):
```html
<script type="module">
	import endianness from 'https://dev.jspm.io/endianness';
	// your code
</script>
```

## API
```javascript
/**
 * Swap the byte ordering in a buffer. The buffer is modified in place.
 * @param {!Array<number|string>|!Uint8Array} bytes The bytes.
 * @param {number} offset The byte offset.
 * @param {number=} start The start index. Assumes 0.
 * @param {?number=} end The end index. Assumes the buffer length.
 * @throws {Error} If the buffer length is not valid.
 */
function endianness(bytes, offset, start=0, end=null) {}
```

## Distribution
This library is a ES6 module also distributed as a CommonJS module, UMD module and a compiled script for browsers.

- The **CommonJS** is the one used by Node. It is served in the "main" field of package.json
- The **UMD** module is compatible with Node, AMD and browsers. It is served in the "browser" field.
- The **compiled dist** is browser-only and should be the one served by CDNs.
- The **ES6** dist is **endianness.js**

You may load both **endianness.umd.js** and **endianness.min.js** in the browser with ```<script>``` tags.

## LICENSE
Copyright (c) 2017-2018 Rafael da Silva Rocha.

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
