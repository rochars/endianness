/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

let endianness;

if (process.argv[3] == '--dist') {
    require('browser-env')();
    require('../dist/endianness.min.js');
    endianness = window.endianness;
} else {
	endianness = require('../index.js');
}

module.exports = endianness;
