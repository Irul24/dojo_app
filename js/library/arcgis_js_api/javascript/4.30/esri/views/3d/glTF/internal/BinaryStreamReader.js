// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this._data=a;this._offset4=0;this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const a=this._offset4;this._offset4+=1;return this._dataUint32[a]}readUint8Array(a){const d=4*this._offset4;this._offset4+=a/4;return new Uint8Array(this._data,d,a)}remainingBytes(){return this._data.byteLength-4*this._offset4}}b.BinaryStreamReader=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});