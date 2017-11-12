# endianness
Swap byte endianness in a array of bytes.  
Copyright (c) 2017 Rafael da Silva Rocha.  
https://github.com/rochars/endianness

[![Build Status](https://travis-ci.org/rochars/endianness.svg?branch=master)](https://travis-ci.org/rochars/endianness) [![Build status](https://ci.appveyor.com/api/projects/status/e5r0tc303hueqq8e?svg=true)](https://ci.appveyor.com/project/rochars/endianness) [![codecov](https://codecov.io/gh/rochars/endianness/branch/master/graph/badge.svg)](https://codecov.io/gh/rochars/endianness) [![NPM version](https://img.shields.io/npm/v/endianness.svg?style=flat)](https://www.npmjs.com/package/endianness) [![NPM downloads](https://img.shields.io/npm/dm/endianness.svg?style=flat)](https://www.npmjs.com/package/endianness)

Swap byte endianness in a array of bytes. Works with any byte offset.

Arguments can be **Array** and **Uint8Array**.

For Node.js and the browser.

## Install
```
npm install endianness
```

## Use

Swaping a 64-bit number (8 bytes):
```javascript
const endianness = require("endianness");
endianness.endianness([64, 9, 33, 251, 84, 68, 45, 24], 8);
//[24, 45, 68, 84, 251, 33, 9, 64]
```

## Browser
```html
<script src="endianness-min.js"></script>
<script>
    endianness([64, 9, 33, 251, 84, 68, 45, 24]);
    //[24, 45, 68, 84, 251, 33, 9, 64]
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
