/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

let endianness;

// Browser dist
if (process.argv[3] == '--browser') {
    require('browser-env')();
    require('../dist/endianness.min.js');
    endianness = window.endianness;

// UMD
} else {
	endianness = require('../dist/endianness.umd.js').endianness;
}

module.exports = endianness;
