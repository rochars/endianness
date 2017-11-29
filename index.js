/*!
 * endianness
 * Swap endianness in byte arrays.
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

/**
 * Swap the endianness of units of information in a array of bytes.
 * The original array is modified in-place.
 * @param {!Array<number>|Uint8Array} bytes An array of bytes.
 * @param {number} offset The number of bytes according to the bit depth.
 *  - 2 for 16-bit
 *  - 3 for 24-bit
 *  - 4 for 32-bit
 *  - 5 for 40-bit
 *  - 6 for 48-bit
 *  - 7 for 56-bit
 *  - 8 for 64-bit
 */
function endianness(bytes, offset) {
    let len = bytes.length;
    let i = 0;
    while (i < len) {
        byteSwap(bytes, offset, i);
        i += offset;
    }
}

/**
 * Swap the endianness of a unit of information in a array of bytes.
 * The original array is modified in-place.
 * @param {!Array<number>|Uint8Array} bytes An array of bytes.
 * @param {number} offset The number of bytes according to the bit depth.
 * @param {number} index The start index of the unit of information.
 */
function byteSwap(bytes, offset, index) {
    let x = 0;
    let y = offset - 1;
    let limit = parseInt(offset / 2, 10);
    let swap;
    while(x < limit) {
        swap = bytes[index + x];
        bytes[index + x] = bytes[index + y];
        bytes[index + y] = swap;
        x++;
        y--;
    }
}

module.exports.endianness = endianness;
