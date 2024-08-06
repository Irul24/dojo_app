// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32"],function(f,k){class g{constructor(a,b,c=0,d,e){this.TypedArrayConstructor=a;this.elementCount=3;a=this.TypedArrayConstructor;void 0===d&&(d=3*a.BYTES_PER_ELEMENT);const h=0===b.byteLength?0:c;this.typedBuffer=null==e?new a(b,h):new a(b,h,(e-c)/a.BYTES_PER_ELEMENT);this.typedBufferStride=d/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(a,
b,c=this.count-b){b=this.typedBuffer.byteOffset+b*this.stride;return new a(this.buffer,b,this.stride,b+c*this.stride)}getVec(a,b){a*=this.typedBufferStride;return k.set(b,this.typedBuffer[a],this.typedBuffer[a+1],this.typedBuffer[a+2])}setVec(a,b){a*=this.typedBufferStride;this.typedBuffer[a++]=b[0];this.typedBuffer[a++]=b[1];this.typedBuffer[a]=b[2]}get(a,b){return this.typedBuffer[a*this.typedBufferStride+b]}set(a,b,c){this.typedBuffer[a*this.typedBufferStride+b]=c}setValues(a,b,c,d){a*=this.typedBufferStride;
this.typedBuffer[a++]=b;this.typedBuffer[a++]=c;this.typedBuffer[a]=d}copyFrom(a,b,c){const d=this.typedBuffer,e=b.typedBuffer;a*=this.typedBufferStride;b=c*b.typedBufferStride;d[a++]=e[b++];d[a++]=e[b++];d[a]=e[b]}get buffer(){return this.typedBuffer.buffer}}g.ElementCount=3;f.BufferViewVec3Impl=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});