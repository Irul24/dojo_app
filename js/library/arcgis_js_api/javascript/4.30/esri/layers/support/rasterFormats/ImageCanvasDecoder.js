// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../core/Error","../../../core/promiseUtils","../../../chunks/Zlib"],function(t,u,z){class v{constructor(b){this._ctx=this._canvas=null;b&&(this._canvas=b.canvas,this._ctx=b.ctx||b.canvas&&b.canvas.getContext("2d"))}decode(b,g,m){if(!b||10>b.byteLength)throw new t("imagecanvasdecoder: decode","required a valid encoded data as input.");let {width:c=0,height:d=0,format:k}=g;const {applyJpegMask:w}=g;if(w&&(!c||!d))throw new t("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");
return new Promise((x,y)=>{let h=null;"jpg"===k&&w&&(h=v._getMask(b,{width:c,height:d}));const A=new Blob([new Uint8Array(b)],{type:"jpg"==="image/"+k?"jpeg":k}),n=URL.createObjectURL(A),l=new Image;let e;l.src=n;l.onload=()=>{URL.revokeObjectURL(n);if(u.isAborted(m))y(u.createAbortError());else{c=l.width;d=l.height;if(this._canvas&&this._ctx){if(this._canvas.width!==c||this._canvas.height!==d)this._canvas.width=c,this._canvas.height=d;this._ctx.clearRect(0,0,c,d)}else this._canvas=document.createElement("canvas"),
this._canvas.width=c,this._canvas.height=d,this._ctx=this._canvas.getContext("2d");this._ctx.drawImage(l,0,0);var f=this._ctx.getImageData(0,0,c,d);e=f.data;var a;if(g.renderOnCanvas){if(h)for(a=0;a<h.length;a++)e[4*a+3]=h[a]?255:0;this._ctx.putImageData(f,0,0);x(null)}else{f=c*d;var p=new Uint8Array(f),q=new Uint8Array(f),r=new Uint8Array(f);if(h)for(a=0;a<f;a++)p[a]=e[4*a],q[a]=e[4*a+1],r[a]=e[4*a+2];else for(h=new Uint8Array(f),a=0;a<f;a++)p[a]=e[4*a],q[a]=e[4*a+1],r[a]=e[4*a+2],h[a]=e[4*a+3];
x({width:c,height:d,pixels:[p,q,r],mask:h,pixelType:"u8"})}}};l.onerror=()=>{URL.revokeObjectURL(n);y("cannot load image")}})}static _getMask(b,g){let m=null;try{var c=new Uint8Array(b);b=0;var d=c.length-2;for(b=Math.ceil(c.length/2);b<d&&(255!==c[b]||217!==c[b+1]);b++);b+=2;if(b<c.length-1){const k=(new z.Zlib(c.subarray(b))).getBytes();m=new Uint8Array(g.width*g.height);g=0;for(c=0;c<k.length;c++)for(d=7;0<=d;d--)m[g++]=k[c]>>d&1}}catch(k){}return m}}return v});