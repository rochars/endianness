(function (global, factory) {typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :typeof define === 'function' && define.amd ? define(factory) :(global.endianness = factory());}(this, (function () { 'use strict';var endianness=function(){/**
 @param {(!Array<(number|string)>|!Uint8Array)} bytes
 @param {number} offset
 @param {number=} index
 @param {number=} end
 @throws {Error}
 */
function endianness(bytes,offset,index,end){index=index===undefined?0:index;end=end===undefined?bytes.length:end;if(end%offset)throw new Error("Bad buffer length.");for(;index<end;index+=offset)swap(bytes,offset,index)}/**
 @private
 @param {(!Array<(number|string)>|!Uint8Array)} bytes
 @param {number} offset
 @param {number} index
 */
function swap(bytes,offset,index){offset--;for(var x=0;x<offset;x++){/** @type {(number|string)} */ var theByte=bytes[index+x];bytes[index+x]=bytes[index+offset];bytes[index+offset]=theByte;offset--}}return endianness}();return endianness; })));
