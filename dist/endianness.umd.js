(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else{var a=factory();for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(typeof self!=="undefined"?self:this,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=
installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:
function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_exports__["endianness"]=endianness;/**
 @param {(!Array<(number|string)>|!Uint8Array)} bytes
 @param {number} offset
 @throws {Error}
 */
function endianness(bytes,offset){var len=bytes.length;if(len%offset)throw new Error("Not enough bytes.");var i=0;while(i<len){swap(bytes,offset,i);i+=offset}}/**
 @private
 @param {(!Array<(number|string)>|!Uint8Array)} bytes
 @param {number} offset
 @param {number} index
 */
function swap(bytes,offset,index){var x=0;var y=offset-1;var limit=parseInt(offset/2,10);while(x<limit){var theByte=bytes[index+x];bytes[index+x]=bytes[index+y];bytes[index+y]=theByte;x++;y--}}}])});