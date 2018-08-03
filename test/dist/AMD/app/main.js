define(function (require) {
    var endianness = require('../../../../endianness.umd.js');
    buffer = [1,2,3,4];
    endianness(buffer, 2);
    console.log(buffer);
});
