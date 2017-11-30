/*
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

var assert = require('assert');

describe('little endiand and big endian swap', function() {
    
    const endianness = require('../index.js');

    // 16-bit
    it('should swap 2 16-bit unsigned ints (0s)', function() {
        values = [0, 0, 0, 0];
        endianness(values, 2);
        assert.deepEqual(values,
            [0, 0, 0, 0]);
    });
    it('should swap 2 16-bit unsigned ints LE (1s)', function() {
        values = [0, 1, 0, 1];
        endianness(values, 2);
        assert.deepEqual(values,
            [1, 0, 1, 0]);
    });
    it('should swap 2 16-bit unsigned ints BE (1s)', function() {
        values = [1, 0, 1, 0];
        endianness(values, 2);
        assert.deepEqual(values,
            [0, 1, 0, 1]);
    });

    // 24-bit
    it('should swap 2 24-bit unsigned ints (0s)', function() {
        values = [0, 0, 0, 0, 0, 0];
        endianness(values, 3);
        assert.deepEqual(values,
            [0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 24-bit unsigned ints LE (1s)', function() {
        values = [1, 0, 0, 1, 0, 0];
        endianness(values, 3);
        assert.deepEqual(values,
            [0, 0, 1, 0, 0, 1]);
    });
    it('should swap 2 24-bit unsigned ints BE (1s)', function() {
        values = [0, 0, 1, 0, 0, 1];
        endianness(values, 3);
        assert.deepEqual(values,
            [1, 0, 0, 1, 0, 0]);
    });
    it('should swap 3 24-bit unsigned ints LE', function() {
        values = ["00","00","80", "01","00","00", "ff","ff", "7f"];
        endianness(values, 3);
        assert.deepEqual(values,
            ["80","00","00", "00","00","01", "7f","ff", "ff"]);
    });

    // 32-bit
    it('should swap 2 32-bit unsigned ints (0s)', function() {
        values = [0, 0, 0, 0, 0, 0, 0, 0];
        endianness(values, 4);
        assert.deepEqual(values,
            [0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 32-bit unsigned ints LE (1s)', function() {
        values = [1, 0, 0, 0, 1, 0, 0, 0];
        endianness(values, 4);
        assert.deepEqual(values,
            [0, 0, 0, 1, 0, 0, 0, 1]);
    });
    it('should swap 2 32-bit unsigned ints BE (1s)', function() {
        values = [0, 0, 0, 1, 0, 0, 0, 1];
        endianness(values, 4);
        assert.deepEqual(values,
            [1, 0, 0, 0, 1, 0, 0, 0]);
    });

    // 40-bit
    it('should swap 2 40-bit unsigned ints (0s)', function() {
        values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        endianness(values, 5);
        assert.deepEqual(values,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 40-bit unsigned ints LE (1s)', function() {
        values = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
        endianness(values, 5);
        assert.deepEqual(values,
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    });
    it('should swap 2 40-bit unsigned ints BE (1s)', function() {
        values = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        endianness(values, 5);
        assert.deepEqual(values,
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    });    
    
    // 48-bit
    it('should swap 2 48-bit unsigned ints (0s)', function() {
        values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        endianness(values, 6);
        assert.deepEqual(values,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 48-bit unsigned ints LE (1s)', function() {
        values = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
        endianness(values, 6);
        assert.deepEqual(values,
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    });
    it('should swap 2 48-bit unsigned ints BE (1s)', function() {
        values = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        endianness(values, 6);
        assert.deepEqual(values,
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    });
    it('should swap a 48-bit unsigned int (120637438355317)', function() {
        values = ["75", "e7", "a8", "17", "b8", "6d"];
        endianness(values, 6);
        assert.deepEqual(values,
            ["6d", "b8", "17", "a8", "e7", "75"]);
    });
    
    // 56-bit
    it('should swap a 56-bit value LE', function() {
        values = new Uint8Array([24, 45, 68, 84, 251, 33, 9]);
        endianness(values, 7);
        assert.deepEqual(values,
            [9, 33, 251, 84, 68, 45, 24]);
    });

    // 64-bit
    it('should swap a 64-bit float LE', function() {
        values = [24, 45, 68, 84, 251, 33, 9, 64];
        endianness(values, 8);
        assert.deepEqual(values,
            [64, 9, 33, 251, 84, 68, 45, 24]);
    });
    it('should swap 3 64-bit values LE', function() {
        values = [24, 45, 68, 84, 251, 33, 9, 64,
             68, 24, 45, 84, 251, 33, 9, 64,
             24, 45, 68, 84, 33, 9, 251, 64]
        endianness(values, 8);
        assert.deepEqual(values,
            [64, 9, 33, 251, 84, 68, 45, 24,
             64, 9, 33, 251, 84, 45, 24, 68,
             64, 251, 9, 33, 84, 68, 45, 24]);
    });
});
