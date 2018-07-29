/*
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Load the endianness module from the UMD or ES6.
 * @see https://github.com/rochars/endianness
 */

let endianness;

// UMD
if (process.argv[3] == '--umd') {
	console.log('UMD tests');
	endianness = require('../../endianness.umd.js');

// source
} else {
	console.log('Source tests');
	endianness = require('../../endianness.js').default;
}

module.exports = endianness;
