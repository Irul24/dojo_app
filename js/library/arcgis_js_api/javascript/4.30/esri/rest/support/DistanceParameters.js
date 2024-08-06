// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Accessor ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(d,f,a,h,e,m,n,p,k,g){const l=new h.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});a=class extends a{constructor(b){super(b);this.geodesic=this.distanceUnit=
this.geometry2=this.geometry1=null}toJSON(){const b={};var c=this.geometry1;c&&(b.geometry1=JSON.stringify({geometryType:g.getJsonType(c),geometry:c}),b.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));if(c=this.geometry2)b.geometry2=JSON.stringify({geometryType:g.getJsonType(c),geometry:c});this.distanceUnit&&(b.distanceUnit=l.toJSON(this.distanceUnit));this.geodesic&&(b.geodesic=this.geodesic);return b}};d.__decorate([e.property({types:f.geometryTypes,json:{write:!0}})],a.prototype,
"geometry1",void 0);d.__decorate([e.property({types:f.geometryTypes,json:{write:!0}})],a.prototype,"geometry2",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"distanceUnit",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"geodesic",void 0);return a=d.__decorate([k.subclass("esri.rest.support.DistanceParameters")],a)});