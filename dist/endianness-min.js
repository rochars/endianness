/*
 endianness
 Swap endianness in byte arrays.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/endianness

*/
(function(e){function c(a){if(d[a])return d[a].a;var b=d[a]={m:a,f:!1,a:{}};e[a].call(b.a,b,b.a,c);b.f=!0;return b.a}var d={};c.l=e;c.h=d;c.b=function(a,b){c.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};c.i=function(a){var b=a&&a.g?function(){return a["default"]}:function(){return a};c.b(b,b);return b};c.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};c.j="";return c(c.o=0)})([function(){window.endianness=function(e,c){for(var d=e.length,a=0;a<d;){for(var b=
e,f=a,g=0,h=c-1,k=parseInt(c/2,10);g<k;){var l=b[f+g];b[f+g]=b[f+h];b[f+h]=l;g++;h--}a+=c}}}]);
