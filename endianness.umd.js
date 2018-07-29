/*!
 * https://github.com/rochars/endianness
 * Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.
 */
function endianness(d,c,a,b){b=void 0===b?d.length:b;if(b%c)throw Error("Bad buffer length.");for(a=void 0===a?0:a;a<b;a+=c)swap(d,c,a)}function swap(d,c,a){c--;for(var b=0;b<c;b++){var e=d[a+b];d[a+b]=d[a+c];d[a+c]=e;c--}};typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = endianness :typeof define === 'function' && define.amd ? define(['exports'], endianness) :typeof global !== 'undefined' ? global.endianness = endianness : null;
