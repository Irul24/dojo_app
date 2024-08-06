/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{L as i}from"../../chunks/Logger.js";import{f as r}from"../../chunks/timeUtils.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{c as o,F as a,D as p,i as l}from"../../chunks/vec3.js";import{f as u,d as c}from"../../chunks/vec3f64.js";import d from"../../geometry/Point.js";import m from"../../geometry/SpatialReference.js";import{f as g}from"../../chunks/unitUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/common.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";function h(e){const s=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(null==s)return{didParse:!1};const[,i,r,t,n,o,a,p,l,u,c,d,m]=s;let g="seconds";const h=i.charAt(0).toLowerCase();"d"===h?g="days":"h"===h?g="hours":"m"===h&&(g="minutes");const y=parseInt(r,10);if(Number.isNaN(y))return{didParse:!1};const f=parseInt(t,10);if(Number.isNaN(f)||f<1||f>12)return{didParse:!1};const S=parseInt(n,10);if(Number.isNaN(S)||S<1||S>31)return{didParse:!1};if(2===f){const e=y%4==0&&(y%100!=0||y%400==0);if(e&&S>29||!e&&S>28)return{didParse:!1}}else if((4===f||6===f||9===f||11===f)&&S>30)return{didParse:!1};const j=parseInt(o,10);if(Number.isNaN(j)||j<0||j>23)return{didParse:!1};const v=parseInt(a,10);if(Number.isNaN(v)||v<0||v>59)return{didParse:!1};const x=parseInt(p,10);if(Number.isNaN(x)||x<0||x>59)return{didParse:!1};let z=1,N=0,b=0;if(c&&(z="-"===c?-1:1),d){if(N=parseInt(d,10),Number.isNaN(N)||N<0)return{didParse:!1};if(0!==N){const e=z*N;if(e<-12||e>14)return{didParse:!1}}}if(m&&(b=parseInt(m,10),Number.isNaN(b)||b<0||b>59))return{didParse:!1};const R=`${y}`.padStart(4,"0"),k=`${f}`.padStart(2,"0"),w=`${S}`.padStart(2,"0"),I=`${j}`.padStart(2,"0"),P=`${v}`.padStart(2,"0"),V=`${x}`.padStart(2,"0");let L="Z";return 0===N&&0===b||(L=z>0?"+":"-",L+=`${N}`.padStart(2,"0"),L+=":",L+=`${b}`.padStart(2,"0")),{didParse:!0,unit:g,reference:new Date(`${R}-${k}-${w}T${I}:${P}:${V}.000${L}`)}}let y=class extends s{constructor(){super(...arguments),this.values=null}};e([t({type:[Number],json:{write:!0}})],y.prototype,"values",void 0),y=e([n("esri.layers.voxel.VoxelIrregularSpacing")],y);const f=y;let S=class extends s{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([t({type:Number,json:{write:!0}})],S.prototype,"scale",void 0),e([t({type:Number,json:{write:!0}})],S.prototype,"offset",void 0),S=e([n("esri.layers.voxel.VoxelRegularSpacing")],S);const j=S;let v=class extends s{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([t({type:f,json:{write:!0}})],v.prototype,"irregularSpacing",void 0),e([t({type:Boolean,json:{write:!0}})],v.prototype,"isPositiveUp",void 0),e([t({type:Boolean,json:{write:!0}})],v.prototype,"isWrappedDateLine",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"label",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"name",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"quantity",void 0),e([t({type:j,json:{write:!0}})],v.prototype,"regularSpacing",void 0),e([t({type:Number,json:{write:!0}})],v.prototype,"size",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"unit",void 0),e([t({type:Boolean,json:{read:!1}})],v.prototype,"isRegular",null),v=e([n("esri.layers.voxel.VoxelDimension")],v);const x=v;let z=class extends s{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=m.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!(!this.dimensions||!Array.isArray(this.dimensions)||4!==this.dimensions.length||this.dimensions[0].size<1||this.dimensions[1].size<1||-1===this.zDimension||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),s=this.dimensions[1].getRange(),i=this.dimensions[2],r=i.isRegular?i.getRange():[0,i.size];return[e[0],s[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),s=this.dimensions[1].getRange(),i=this.dimensions[2],r=i.isRegular?i.getRange():[0,i.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let e=0;e<3;++e)t[e]<2?t[e]=1:t[e]-=1;return i.isRegular&&!i.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(s[1]-s[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let s=this.dimensions[3].size>0;if(s){const e=this.dimensions[3];s="time"===e.quantity,s&&null!==e.unit&&(s=h(e.unit).didParse)}if(!e&&s)return"xyt";if(e&&s)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if("xyzt"!==this.volumeType)return[];const e=this.dimensions[3],s=[],i=h(e.unit);if(i.didParse)if(e.isRegular){const t=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let o=0;o<e.size;++o){const e=t+n*o;s.push(r(i.reference,e,i.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let t=0;t<e.irregularSpacing.values.length;++t){const n=e.irregularSpacing.values[t];s.push(r(i.reference,n,i.unit))}return s}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return i.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!g(this.spatialReference,e.spatialReference))return i.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const s=u(e.x,e.y,e.z??0);o(s,s,this.originInLayerSpace3D),a(s,s,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(r.irregularSpacing?.values)&&r.irregularSpacing.values.length>1){const i=e.z??0,t=r.irregularSpacing.values,n=r.isPositiveUp?1:-1,o=t.reduce(((e,s)=>Math.abs(n*s-i)<Math.abs(n*e-i)?s:e));for(let e=0;e<t.length;++e)if(t[e]===o){s[2]=e;break}}return[s[0],s[1],s[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new d({x:0,y:0,spatialReference:this.spatialReference});const s=c(e);if(p(s,s,this.voxelSizeInLayerSpaceSigned),l(s,s,this.originInLayerSpace3D),"xyt"===this.volumeType)return new d({x:s[0],y:s[1],spatialReference:this.spatialReference});const i=this.dimensions[this.zDimension];return i.isRegular||Array.isArray(i.irregularSpacing?.values)&&(e[2]<0?s[2]=i.irregularSpacing.values[0]:e[2]<i.irregularSpacing.values.length?s[2]=i.irregularSpacing.values[e[2]]:s[2]=i.irregularSpacing.values[i.irregularSpacing.values.length-1],i.isPositiveUp||(s[2]*=-1)),new d({x:s[0],y:s[1],z:s[2],spatialReference:this.spatialReference})}};e([t({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"id",void 0),e([t({type:[x],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"dimensions",void 0),e([t({type:m,json:{read:{enabled:!1}}})],z.prototype,"spatialReference",void 0),e([t({type:Number,json:{read:!1}})],z.prototype,"zDimension",null),e([t({type:[Boolean],json:{read:!1}})],z.prototype,"isValid",null),e([t({type:[Number],json:{read:!1}})],z.prototype,"originInLayerSpace3D",null),e([t({type:[Number],json:{read:!1}})],z.prototype,"voxelSizeInLayerSpaceSigned",null),e([t({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],z.prototype,"volumeType",null),e([t({type:[Number],json:{read:!1}})],z.prototype,"sizeInVoxels",null),e([t({type:[Date],json:{read:!1,write:!1}})],z.prototype,"timeStops",null),z=e([n("esri.layers.voxel.VoxelVolume")],z);const N=z;export{N as default};
