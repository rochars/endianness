'use strict';export function endianness(bytes,offset){let len=bytes.length;if(len%offset)throw new Error("Not enough bytes.");let i=0;while(i<len){swap(bytes,offset,i);i+=offset}}function swap(bytes,offset,index){let x=0;let y=offset-1;let limit=parseInt(offset/2,10);while(x<limit){let theByte=bytes[index+x];bytes[index+x]=bytes[index+y];bytes[index+y]=theByte;x++;y--}};
