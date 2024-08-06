// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybeUpdating ../../../../core/reactiveUtils ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/sql/WhereClause ../../../../geometry/ellipsoidUtils ../../../../geometry/projection ../../../../geometry/projection/projectBoundingSphere ../../../../geometry/projection/projectVectorToVector ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/DoubleArray ../../../../geometry/support/Ellipsoid ../../../../geometry/support/spatialReferenceUtils ../../../../chunks/sphere ../../../../geometry/support/webMercatorUtils ../../../../layers/support/FeatureFilter ./I3SUtil ../../../../geometry/SpatialReference".split(" "),
function(ba,q,t,ua,ca,P,z,da,w,ea,fa,u,va,ha,v,C,ia,ja,G,H,D,ka,I,la,ma,Q,na,R,oa,S,T){function E(a,b,c){if(null==b)return null;if("disjoint"===c&&"polygon"===b.type){c=b.rings.length;const f=b.spatialReference,g=Array(c);for(let d=0;d<c;++d){const l=I.fromValues(Infinity,Infinity,-Infinity,-Infinity);I.expandWithNestedArray(l,b.rings[d]);g[d]={type:"polygon",rings:[b.rings[d]],spatialReference:f,cache:{},aabr:l}}g.sort((d,l)=>d.aabr[0]-l.aabr[0]);const e=new Set,n=new P.PositionHint;for(b=0;b<g.length;++b){const d=
g[b],l=d.aabr[0];e.forEach(k=>{l>=k.aabr[2]?e.delete(k):d.aabr[1]>k.aabr[3]||d.aabr[3]<k.aabr[1]||!a.intersects(d,k)||(d.rings=d.rings.concat(k.rings),I.expand(d.aabr,k.aabr,d.aabr),d.cache={},e.delete(k),k=P.indexOf(g,k,g.length,n),g.splice(k,1))});e.add(d)}for(const d of g)d.aabr=void 0;return g}return[b]}function U(a,b,c,f,g){if(b[3]>=.5*(b[2]+ja.getReferenceEllipsoid(f).radius))return!0;const e=V(a,b,f);return c.every(n=>W(a,n,e,g)!==p.DISCARD)}function X(a,b,c,f,g,e,n,d){const l=n[0].spatialReference||
g.spatialReference;if(H.projectBoundingSphere(c.node.serviceMbsInIndexSR,e,A,l)){e=V(a,A,l);var k=pa(d,g,l,f,c.objectHandle);for(const h of n){if(0===b.length)break;switch(W(a,h,e,d)){case p.DISCARD:b.length=0;return;case p.KEEP:continue}S.filterInPlace(b,c.featureIds,m=>qa(a,h,m,k))}}else z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")}function pa(a,b,c,f,g){b=b.renderSpatialReference;
const e=new Map,n={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:c};n.rings[0][3]=n.rings[0][0];let d,l;switch(a){case "intersects":d=(k,h,m)=>k.intersects(h,m)?p.KEEP:p.TEST;l=J;break;case "contains":d=(k,h,m)=>k.contains(h,m)?p.TEST:p.DISCARD;l=J;break;default:d=(k,h,m)=>k.disjoint(h,m)?p.TEST:p.DISCARD,l=Y}return{collection:f,object:g,type:a,maskSR:c,renderSR:b,aabbCache:e,triangle:n,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:d,
geometryTest:l}}function V(a,b,c){const f={type:"point",x:b[0],y:b[1],hasZ:!1,hasM:!1,spatialReference:c};c=!Q.isWGS84(c)&&!Q.isWebMercator(c);b=Number.isNaN(b[3])?0:da.clamp(b[3],0,2*ma.earth.radius);a=c?a.buffer(f,b,1):a.geodesicBuffer(f,b,1);a.type="polygon";return a}function W(a,b,c,f){switch(f){case "intersects":case "contains":return J(a,b,c);case "disjoint":return Y(a,b,c)}}function J(a,b,c){return a.intersects(b,c)?a.contains(b,c)?p.KEEP:p.TEST:p.DISCARD}function Y(a,b,c){return a.intersects(b,
c)?a.contains(b,c)?p.DISCARD:p.TEST:p.KEEP}function qa(a,b,c,f){const {collection:g,object:e,renderSR:n,maskSR:d,geometryTest:l,aabbCache:k}=f;var h=k.get(c);if(!h){h=g.getObjectTransform(e);g.getComponentAabb(e,c,x);var m=[C.fromValues(x[0],x[1],0),C.fromValues(x[0],x[4],0),C.fromValues(x[3],x[4],0),C.fromValues(x[3],x[1],0)];for(var r=0;4>r;++r)v.transformMat3(m[r],m[r],h.rotationScale),v.add(m[r],m[r],h.position),D.projectVectorToVector(m[r],n,m[r],d);h={type:"polygon",rings:[m],spatialReference:d,
cache:{}};h.rings[0][4]=h.rings[0][0];k.set(c,h)}switch(l(a,b,h)){case p.DISCARD:return!1;case p.KEEP:return!0}const {triangle:F,triangleTest:ra,positions:Z}=f;h=F.rings[0][0];m=F.rings[0][1];r=F.rings[0][2];const B=g.getObjectTransform(e);g.getComponentPositions(e,c,Z);const {indices:K,data:y,stride:L,startIndex:sa,endIndex:ta}=Z;for(c=sa;c<ta;c+=3){const M=L*K[c],N=L*K[c+1],O=L*K[c+2];v.set(h,y[M],y[M+1],y[M+2]);v.set(m,y[N],y[N+1],y[N+2]);v.set(r,y[O],y[O+1],y[O+2]);v.transformMat3(h,h,B.rotationScale);
v.transformMat3(m,m,B.rotationScale);v.transformMat3(r,r,B.rotationScale);v.add(h,h,B.position);v.add(m,m,B.position);v.add(r,r,B.position);D.projectVectorToVector(h,n,h,d);D.projectVectorToVector(m,n,m,d);D.projectVectorToVector(r,n,r,d);switch(ra(a,b,F)){case p.DISCARD:return!1;case p.KEEP:return!0}}switch(f.type){case "intersects":return!1;default:return!0}}q.I3SMeshViewFilter=class extends ca{constructor(a){super(a);this._projectionEngineLoaded=!1}initialize(){ea.whenOnce(()=>this.viewFilter?.geometry||
null!=this.layerFilter).then(()=>this.loadAsyncModule((new Promise((a,b)=>ba(["../../../../geometry/geometryEngine"],a,b))).then(a=>{this.destroyed||(this._geometryEngine=a)})))}get sortedObjectIds(){if(null==this.viewFilter?.objectIds)return null;const a=la.doubleArrayFrom(this.viewFilter.objectIds);a.sort();return a}get parsedWhereClause(){const a=this.viewFilter?.where;if(null==a||!a)return null;try{return ia.WhereClause.create(a,this.layerFieldsIndex)}catch(b){z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").error(`Failed to parse filter where clause: ${b}`)}return null}addFilters(a,
b,c,f){const g=this.sortedObjectIds;null!=g&&a.push(l=>S.objectIdFilter(g,!0,l));this.addSqlFilter(a,this.parsedWhereClause);this.addTimeFilter(a,this.viewFilter?.timeExtent);const e=w.unwrapUpdating(this._layerMaskGeometries),n=this._geometryEngine;if(null!=e&&null!=this.layerFilter&&null!=n){const l=this.layerFilter.spatialRelationship;a.push((k,h)=>X(n,k,h,f,b,c,e,l))}const d=w.unwrapUpdating(this._viewMaskGeometries);if(null!=d&&null!=this.viewFilter&&null!=n){const l=this.viewFilter.spatialRelationship;
a.push((k,h)=>X(n,k,h,f,b,c,d,l))}}isMBSGeometryVisible(a,b,c){var f=w.unwrapUpdating(this._layerMaskGeometries);const g=this._geometryEngine;if(null!=f&&null!=this.layerFilter&&null!=g){var e=this.layerFilter.spatialRelationship;b=f[0].spatialReference||b;return H.projectBoundingSphere(a,c,A,b)?U(g,A,f,b,e):(z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}f=w.unwrapUpdating(this._viewMaskGeometries);
return null!=f&&null!=this.viewFilter&&null!=g?(e=this.viewFilter.spatialRelationship,b=f[0].spatialReference||b,H.projectBoundingSphere(a,c,A,b)?U(g,A,f,b,e):(z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)):!0}get parsedGeometry(){const a=w.unwrapUpdating(this._viewMaskGeometries),b=w.unwrapUpdating(this._layerMaskGeometries);return null==a||null==b?a||b:b.concat(a)}get _layerMaskGeometries(){const a=
this.layerFilter;return null==a?null:null==this._geometryEngine?w.updating:"disjoint"===a.spatialRelationship?a.geometries.map(b=>({type:"polygon",rings:b.rings,spatialReference:b.spatialReference,cache:{}})):[a.geometries.reduce((b,c)=>{b.rings=[...b.rings,...c.rings];return b},{type:"polygon",rings:[],spatialReference:a.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(null==this.viewFilter)return null;var {geometry:a}=this.viewFilter;if(null==a)return null;if(null==this.viewFilter||
null==this._geometryEngine)return w.updating;const {distance:b,units:c}=this.viewFilter,f=this.viewFilter.spatialRelationship;a="mesh"===a.type?a.extent:a;if(null==b||0===b)return E(this._geometryEngine,a,f);const g=c||fa.getUnitString(a.spatialReference);if(a.spatialReference.isWGS84)return a=this._geometryEngine.geodesicBuffer(a,b,g),E(this._geometryEngine,a,f);var e=R.project(a,T.WGS84);if(null!=e)return a=R.project(this._geometryEngine.geodesicBuffer(e,b,g),a.spatialReference),E(this._geometryEngine,
a,f);if(!this._projectionEngineLoaded&&(this.loadAsyncModule(G.load().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;e=null;try{e=G.project(a,T.WGS84)}catch(n){}if(e)try{e=G.project(this._geometryEngine.geodesicBuffer(e,b,g),a.spatialReference)}catch(n){e=null}e||z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${a.spatialReference.wkid}) to WGS84.`);return E(this._geometryEngine,
e,f)}get updating(){return w.isUpdating(this._layerMaskGeometries)||w.isUpdating(this._viewMaskGeometries)}static checkSupport(a){if(null==a)return!1;a=a.spatialRelationship;return null!=a&&aa.includes(a)?!0:(z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter").warn(`Filters with spatialRelationship other than ${aa.join(", ")} are not supported for mesh scene layers`),!1)}};t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"layerFilter",void 0);t.__decorate([u.property({type:oa})],q.I3SMeshViewFilter.prototype,
"viewFilter",void 0);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"layerFieldsIndex",void 0);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"loadAsyncModule",void 0);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"addSqlFilter",void 0);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"addTimeFilter",void 0);t.__decorate([u.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"sortedObjectIds",null);t.__decorate([u.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,
"parsedWhereClause",null);t.__decorate([u.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"parsedGeometry",null);t.__decorate([u.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"_layerMaskGeometries",null);t.__decorate([u.property({readOnly:!0})],q.I3SMeshViewFilter.prototype,"_viewMaskGeometries",null);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"updating",null);t.__decorate([u.property()],q.I3SMeshViewFilter.prototype,"_projectionEngineLoaded",void 0);t.__decorate([u.property()],
q.I3SMeshViewFilter.prototype,"_geometryEngine",void 0);q.I3SMeshViewFilter=t.__decorate([ha.subclass("esri.views.3d.layers.i3s.I3SMeshViewFilter")],q.I3SMeshViewFilter);const aa=["contains","intersects","disjoint"];var p;(function(a){a[a.KEEP=0]="KEEP";a[a.DISCARD=1]="DISCARD";a[a.TEST=2]="TEST"})(p||={});const A=na.fromValues(0,0,0,0),x=ka.create();Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});