// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./RasterFunctionTemplate".split(" "),function(f,w,k,h,q,A,x,r,y,z,t){var n;const l=new Set(["raster","raster2","dem","fillraster"]),m=new Set(["rasters"]),u=a=>a?.rasterFunction?
d.fromJSON(a):a,p=a=>a&&a instanceof d?a.toJSON():a,v=a=>a?.functionName&&!a.declaredClass?new d(a):a;q={types:{key:"type",base:null,typeMap:{RasterFunctionTemplate:t}},json:{write:!0,name:"rasterFunctionDefinition"}};let d=n=class extends w.JSONSupport{constructor(a){super(a);this.functionName=null;this.outputPixelType="unknown";this.functionDefinition=this.variableName=null}set functionArguments(a){if(a){const c=Object.keys(a);if(c.some(b=>{var e;if(e=l.has(b.toLowerCase()))b=a[b],e=b?.functionName&&
!b.declaredClass;return e})||c.some(b=>m.has(b.toLowerCase())&&Array.isArray(a[b])&&a[b].some(e=>e?.functionName&&!e.declaredClass))){a=k.clone(a);for(const b of c)l.has(b.toLowerCase())?a[b]=v(a[b]):m.has(b.toLowerCase())&&Array.isArray(a[b])&&(a[b]=a[b].map(e=>v(e)))}}this._set("functionArguments",a)}readFunctionArguments(a){if(null==a)var c=null;else{a=k.clone(a);var b={};for(c of Object.keys(a))l.has(c.toLowerCase())?b[c]=u(a[c]):m.has(c.toLowerCase())&&Array.isArray(a[c])?b[c]=a[c].map(u):b[c]=
a[c];c=b}return c}writeFunctionArguments(a,c,b){const e={};for(const g of Object.keys(a))l.has(g.toLowerCase())?e[g]=p(a[g]):m.has(g.toLowerCase())&&Array.isArray(a[g])?e[g]=a[g].map(p):e[g]=p(a[g]);c[b]=e}readFunctionName(a,c){a=c.rasterFunctionInfos;const b=c.name;return b?b:a?.length&&"None"!==a[0].name?a[0].name:c.rasterFunctionDefinition?c.rasterFunctionDefinition.name:c.rasterFunction}get rasterFunctionDefinition(){return this.functionDefinition?.toJSON()}set rasterFunctionDefinition(a){this.functionDefinition=
a?t.fromJSON(a):null}get hasClipFunction(){return this.rasterFunctionDefinition?JSON.stringify(this.rasterFunctionDefinition).includes('"type":"ClipFunction"'):JSON.stringify(this).includes('"rasterFunction":"Clip"')}clone(){return new n({functionName:this.functionName,functionArguments:k.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,rasterFunctionDefinition:k.clone(this.rasterFunctionDefinition)})}};f.__decorate([h.property({json:{type:Object,name:"rasterFunctionArguments"}})],
d.prototype,"functionArguments",null);f.__decorate([r.reader("functionArguments")],d.prototype,"readFunctionArguments",null);f.__decorate([z.writer("functionArguments")],d.prototype,"writeFunctionArguments",null);f.__decorate([h.property({json:{type:String,write:{target:"rasterFunction"}}})],d.prototype,"functionName",void 0);f.__decorate([r.reader("functionName",["rasterFunction","rasterFunctionInfos","rasterFunctionDefinition"])],d.prototype,"readFunctionName",null);f.__decorate([x.enumeration({C128:"c128",
C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),h.property({json:{default:"unknown"}})],d.prototype,"outputPixelType",void 0);f.__decorate([h.property({type:String,json:{read:!0,write:!0}})],d.prototype,"variableName",void 0);f.__decorate([h.property()],d.prototype,"rasterFunctionDefinition",null);f.__decorate([h.property(q)],d.prototype,"functionDefinition",void 0);f.__decorate([h.property()],d.prototype,
"hasClipFunction",null);return d=n=f.__decorate([y.subclass("esri.layers.support.RasterFunction")],d)});