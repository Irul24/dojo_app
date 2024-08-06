/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{k as o,j as r,g as i,c as l,f as n}from"../../chunks/unitUtils.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import{I as a}from"../../chunks/ensureType.js";import"../../core/lang.js";import{r as c}from"../../chunks/reader.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as h}from"../../chunks/writer.js";import m from"../../geometry/Point.js";import f from"../../geometry/SpatialReference.js";import{c as d}from"../../chunks/aaBoundingRect.js";import{project as g}from"../../geometry/support/webMercatorUtils.js";import j from"./LOD.js";import{T as y}from"../../chunks/TileKey.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Extent.js";var v;const w=new t({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let x=v=class extends s{static create(e={}){const{resolutionFactor:t=1,scales:s,size:n=256,spatialReference:p=f.WebMercator,numLODs:a=24}=e;if(!o(p)){const e=[];if(s)for(let t=0;t<s.length;t++){const o=s[t];e.push(new j({level:t,scale:o,resolution:o}))}else{let t=5e-4;for(let s=a-1;s>=0;s--)e.unshift(new j({level:s,scale:t,resolution:t})),t*=2}return new v({dpi:96,lods:e,origin:new m(0,0,p),size:[n,n],spatialReference:p})}const c=r(p),u=e.origin?new m({x:e.origin.x,y:e.origin.y,spatialReference:p}):new m(c?{x:c.origin[0],y:c.origin[1],spatialReference:p}:{x:0,y:0,spatialReference:p}),h=1/(39.37*i(p)*96),d=[];if(s)for(let e=0;e<s.length;e++){const t=s[e],o=t*h;d.push(new j({level:e,scale:t,resolution:o}))}else{let e=l(p)?512/n*591657527.5917094:256/n*591657527.591555;const s=Math.ceil(a/t);d.push(new j({level:0,scale:e,resolution:e*h}));for(let o=1;o<s;o++){const s=e/2**t,r=s*h;d.push(new j({level:o,scale:s,resolution:r})),e=s}}return new v({dpi:96,lods:d,origin:u,size:[n,n],spatialReference:p})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=r(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return m.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const o=[],r=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach((e=>{o.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,r[e.level]=e}))),this._set("scales",o),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),o=s+1;return t[s]/(t[s]/t[o])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let o=0;for(;o<s;o++){const s=t[o],r=t[o+1];if(s<=e)return o;if(r===e)return o+1;if(s>e&&r<e)return o+Math.log(s/e)/Math.log(s/r)}return o}tileAt(e,t,s,o){const r=this.lodAt(e);if(!r)return null;let i,l;if("number"==typeof t)i=t,l=s;else if(n(t.spatialReference,this.spatialReference))i=t.x,l=t.y,o=s;else{const e=g(t,this.spatialReference);if(null==e)return null;i=e.x,l=e.y,o=s}const p=r.resolution*this.size[0],a=r.resolution*this.size[1];return o||(o=new y(null,0,0,0,d())),o.level=e,o.row=Math.floor((this.origin.y-l)/a+.001),o.col=Math.floor((i-this.origin.x)/p+.001),this.updateTileInfo(o),o}updateTileInfo(e,t=v.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===v.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const o=e.level-s.level,r=s.resolution*this.size[0]/2**o,i=s.resolution*this.size[1]/2**o;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=d()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const s=this.lodAt(t.level);if(null==s)return null;const{resolution:o}=s,r=o*this.size[0],i=o*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return v.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const s=[],o=this.lods.length-t;for(let e=0;e<o;e++){const o=e+t,{scale:r,resolution:i}=o>=0?this.lods[o]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};s.push(new j({level:e,scale:r,resolution:i}))}return new v({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const o=e[s];this._upsampleLevels[o.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/o.resolution:0},t=o}}};e([p({type:Number,json:{write:!0}})],x.prototype,"compressionQuality",void 0),e([p({type:Number,json:{write:!0}})],x.prototype,"dpi",void 0),e([p({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],x.prototype,"format",void 0),e([p({readOnly:!0})],x.prototype,"isWrappable",null),e([p({type:m,json:{write:!0}})],x.prototype,"origin",void 0),e([c("origin")],x.prototype,"readOrigin",null),e([p({type:[j],value:null,json:{write:!0}})],x.prototype,"lods",null),e([p({readOnly:!0})],x.prototype,"scales",void 0),e([p({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],x.prototype,"size",void 0),e([c("size",["rows","cols"])],x.prototype,"readSize",null),e([h("size",{cols:{type:a},rows:{type:a}})],x.prototype,"writeSize",null),e([p({type:f,json:{write:!0}})],x.prototype,"spatialReference",void 0),x=v=e([u("esri.layers.support.TileInfo")],x),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(x||(x={}));const O=x;export{O as default};
