/**
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

let endianness;

// Browser bundle
if (process.argv[3] == '--min') {
    require('browser-env')();
    require('../dist/endianness.min.js');
    endianness = window.endianness.endianness;

// UMD bundle
} else if (process.argv[3] == '--umd') {
	endianness = require('../dist/endianness.umd.js').endianness;

// CommonJS dist
} else if (process.argv[3] == '--cjs') {
	endianness = require('../dist/endianness.cjs.js').endianness;

// ESM
} else {
	endianness = require('../index.js').endianness;

}

module.exports = endianness;
