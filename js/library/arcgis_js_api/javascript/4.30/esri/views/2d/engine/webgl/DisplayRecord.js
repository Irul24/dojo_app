// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(function(){class h{constructor(a,b,c,d,e,f,g){this.instanceId=a;this.textureKey=b;this.indexStart=c;this.indexCount=d;this.vertexStart=e;this.vertexCount=f;this.overlaps=g}updateBaseOffsets(a){this.vertexStart+=a.vertexFrom;this.indexStart+=a.indexFrom}clone(){return new h(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(a,b,c,d,e,f,g,k){a.push(b);a.push(c);a.push(d);a.push(e);a.push(f);a.push(g);a.push(k)}serialize(a){a.push(this.instanceId);
a.push(this.textureKey);a.push(this.indexStart);a.push(this.indexCount);a.push(this.vertexStart);a.push(this.vertexCount);a.push(this.overlaps);return a}static deserialize(a){const b=a.readInt32(),c=a.readInt32(),d=a.readInt32(),e=a.readInt32(),f=a.readInt32(),g=a.readInt32();a=a.readInt32();return new h(b,c,d,e,f,g,a)}}h.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;return h});