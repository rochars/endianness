/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/endianness
 *
 */

let endianness = require('../index.js');

if (process.argv[3] == '--dist') {
    require('browser-env')();let assert = require('assert');
    require('../dist/endianness-min.js');
    endianness = window.endianness;
}

module.exports = endianness;
