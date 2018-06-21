/**
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

let endianness;

// Browser
if (process.argv[3] == '--min') {
    console.log('Browser tests');
    require('browser-env')();
    require('../dist/endianness.min.js');
    endianness = window.endianness;

// UMD
} else if (process.argv[3] == '--umd') {
	console.log('UMD tests');
	endianness = require('../dist/endianness.umd.js').endianness;

// CommonJS
} else if (process.argv[3] == '--cjs') {
	console.log('CommonJS tests');
	endianness = require('../dist/endianness.cjs.js').endianness;

// ESM
} else {
	console.log('Source tests');
	endianness = require('../index.js').endianness;
}

module.exports = endianness;
