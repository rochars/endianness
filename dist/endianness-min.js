/*
 endianness
 Swap endianness in byte arrays.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/endianness

*/
(function(e){function b(a){if(d[a])return d[a].a;var c=d[a]={m:a,f:!1,a:{}};e[a].call(c.a,c,c.a,b);c.f=!0;return c.a}var d={};b.l=e;b.h=d;b.b=function(a,c){b.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:c})};b.i=function(a){var c=a&&a.g?function(){return a["default"]}:function(){return a};b.b(c,c);return c};b.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};b.j="";return b(b.o=0)})([function(){window.endianness=function(e,b){for(var d=e.length,a=0;a<d;){for(var c,
f=e,g=a,h=0,k=b-1,l=parseInt(b/2,10);h<l;)c=f[g+h],f[g+h]=f[g+k],f[g+k]=c,h++,k--;a+=b}}}]);
