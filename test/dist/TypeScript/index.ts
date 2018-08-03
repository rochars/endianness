/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/endianness
 */

import endianness from '../../../endianness.js'

// with arrays
let buff = [1,2,3,4];
endianness(buff, 2);

console.log(buff);
buff = [1,2,3,4];

endianness(buff, 2, 0, 2);
console.log(buff);

// with Uint8Array
let buffTyped = new Uint8Array([1,2,3,4]);
endianness(buffTyped, 2);

console.log(buffTyped);
buffTyped = new Uint8Array([1,2,3,4]);

endianness(buffTyped, 2, 0, 2);
console.log(buffTyped);
