
var assert = require('assert');

describe('little endiand and big endian', function() {
    
    const byteData = require('../index.js');

    // 16-bit
    it('should swap 2 16-bit unsigned ints (0s)',
        function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0], 2),
            [0, 0, 0, 0]);
    });
    it('should swap 2 16-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 1, 0, 1], 2),
            [1, 0, 1, 0]);
    });
    it('should swap 2 16-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 1, 0, 1], 2),
            [1, 0, 1, 0]);
    });

    // 24-bit
    it('should swap 2 24-bit unsigned ints (0s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 0, 0], 3),
            [0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 24-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [1, 0, 0, 1, 0, 0], 3),
            [0, 0, 1, 0, 0, 1]);
    });
    it('should swap 2 24-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 1, 0, 0, 1], 3),
            [1, 0, 0, 1, 0, 0]);
    });
    it('should swap 3 24-bit unsigned ints', function() {
        assert.deepEqual(byteData.endianness(
            ["00","00","80" , "01","00","00", "ff", "ff", "7f"], 3),
            ["80","00","00" , "00","00","01", "7f", "ff", "ff"]);
    });

    // 32-bit
    it('should swap 2 32-bit unsigned ints (0s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 0, 0, 0, 0], 4),
            [0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 32-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 1, 0, 0, 0, 1], 4),
            [1, 0, 0, 0, 1, 0, 0, 0]);
    });
    it('should swap 2 32-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [1, 0, 0, 0, 1, 0, 0, 0], 4),
            [0, 0, 0, 1, 0,0, 0, 1]);
    });
    
    // 40-bit
    it('should swap 2 40-bit unsigned ints (0s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5),
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 40-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 5),
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    });
    it('should swap 2 40-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], 5),
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    });
    
    // 48-bit
    it('should swap 2 48-bit unsigned ints (0s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 6),
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 48-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 6),
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    });
    it('should swap 2 48-bit unsigned ints (1s)', function() {
        assert.deepEqual(byteData.endianness(
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 6),
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    });
    it('should swap a 48-bit unsigned int (120637438355317)', function() {
        assert.deepEqual(byteData.endianness(
            ["75", "e7", "a8", "17", "b8", "6d"], 6),
            ["6d", "b8", "17", "a8", "e7", "75"]);
    });
    
    // 64-bit
    it('should turn a 64-bit float LE to BE', function() {
        assert.deepEqual(byteData.endianness(
            [24, 45, 68, 84, 251, 33, 9, 64], 8),
            [64, 9, 33, 251, 84, 68, 45, 24]);
    });
});
