// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../core/arrayUtils ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./FeatureSet ./NAMessage ./RouteResult".split(" "),function(b,e,h,a,d,q,r,f,k,l,m,n){function g(c){return c?l.fromJSON(c).features.filter(h.isSome):[]}a=class extends a.JSONSupport{constructor(c){super(c);this.routeResults=this.polygonBarriers=
this.polylineBarriers=this.pointBarriers=this.messages=null}readPointBarriers(c,p){return g(p.barriers)}readPolylineBarriers(c){return g(c)}readPolygonBarriers(c){return g(c)}};b.__decorate([d.property({type:[m]})],a.prototype,"messages",void 0);b.__decorate([d.property({type:[e]})],a.prototype,"pointBarriers",void 0);b.__decorate([f.reader("pointBarriers",["barriers"])],a.prototype,"readPointBarriers",null);b.__decorate([d.property({type:[e]})],a.prototype,"polylineBarriers",void 0);b.__decorate([f.reader("polylineBarriers")],
a.prototype,"readPolylineBarriers",null);b.__decorate([d.property({type:[e]})],a.prototype,"polygonBarriers",void 0);b.__decorate([f.reader("polygonBarriers")],a.prototype,"readPolygonBarriers",null);b.__decorate([d.property({type:[n]})],a.prototype,"routeResults",void 0);return a=b.__decorate([k.subclass("esri.rest.support.RouteSolveResult")],a)});