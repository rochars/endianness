/*
 endianness: Swap byte endianness in arrays.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/endianness

*/
(function(d){function b(a){if(e[a])return e[a].a;var c=e[a]={m:a,f:!1,a:{}};d[a].call(c.a,c,c.a,b);c.f=!0;return c.a}var e={};b.l=d;b.h=e;b.b=function(a,c){b.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:c})};b.i=function(a){var c=a&&a.g?function(){return a["default"]}:function(){return a};b.b(c,c);return c};b.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};b.j="";return b(b.o=0)})([function(){window.endianness=function(d,b){for(var e=d.length,a=0;a<e;){for(var c,
f=d,g=a,h=0,k=b-1,l=parseInt(b/2,10);h<l;)c=f[g+h],f[g+h]=f[g+k],f[g+k]=c,h++,k--;a+=b}return d}}]);
