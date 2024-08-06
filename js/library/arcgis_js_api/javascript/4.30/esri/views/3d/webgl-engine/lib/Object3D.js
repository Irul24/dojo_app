// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/sphere ../../support/mathUtils ./basicInterfaces ./ContentObject ./ContentObjectType ./Object3DStateID ./Util ./VertexAttribute ../materials/renderers/utils".split(" "),function(w,J,q,r,g,p,v,C,x,D,E,y,F,G,t){class H extends D.ContentObject{get geometries(){return this._geometries}get transformation(){return this._transformation??
r.IDENTITY}set transformation(a){this._transformation=q.copy(this._transformation??r.create(),a);this._invalidateBoundingVolume();this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(a){this._shaderTransformation=a?q.copy(this._shaderTransformation??r.create(),a):null;this._invalidateBoundingVolume();this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(a=
{}){super();this.type=E.ContentObjectType.Object;this._parentLayer=this._shaderTransformation=null;this._visible=!0;this.castShadow=a.castShadow??!0;this.usesVerticalDistanceToGround=a.usesVerticalDistanceToGround??!1;this.graphicUid=a.graphicUid;this.layerUid=a.layerUid;a.isElevationSource&&(this.lastValidElevationBB=new z);this._geometries=a.geometries?Array.from(a.geometries):[]}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(a){F.assert(null==this._parentLayer||
null==a,"Object3D can only be added to a single Layer");this._parentLayer=a}addGeometry(a){a.visible=this._visible;this._geometries.push(a);this._emit("geometryAdded",{object:this,geometry:a});this._invalidateBoundingVolume()}removeGeometry(a){if(a=this._geometries.splice(a,1)[0])this._emit("geometryRemoved",{object:this,geometry:a}),this._invalidateBoundingVolume()}removeAllGeometries(){for(;0<this._geometries.length;)this.removeGeometry(0)}geometryVertexAttributeUpdated(a,c,m=!1){this._emit("attributesChanged",
{object:this,geometry:a,attribute:c,sync:m});G.affectsGeometry(c)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(a){if(this._visible!==a){this._visible=a;for(const c of this._geometries)c.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const a=new y.Object3DStateID(x.Object3DState.MaskOccludee);for(const c of this._geometries)c.occludees=t.addObject3DStateID(c.occludees,a);this._emit("occlusionChanged",this);return a}removeOcclude(a){for(const c of this._geometries)c.occludees=
t.removeObject3DStateID(c.occludees,a);this._emit("occlusionChanged",this)}highlight(){const a=new y.Object3DStateID(x.Object3DState.Highlight);for(const c of this._geometries)c.highlights=t.addObject3DStateID(c.highlights,a);this._emit("highlightChanged",this);return a}removeHighlight(a){for(const c of this._geometries)c.highlights=t.removeObject3DStateID(c.highlights,a);this._emit("highlightChanged",this)}getCombinedStaticTransformation(a,c){return q.multiply(c,this.transformation,a.transformation)}getCombinedShaderTransformation(a,
c=r.create()){return q.multiply(c,this.effectiveTransformation,a.transformation)}get boundingVolumeWorldSpace(){this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new A,this._validateBoundingVolume(this._bvWorldSpace,u.WorldSpace));return this._bvWorldSpace}get boundingVolumeObjectSpace(){this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new A,this._validateBoundingVolume(this._bvObjectSpace,u.ObjectSpace));return this._bvObjectSpace}_validateBoundingVolume(a,c){c=c===u.ObjectSpace;
for(var m of this._geometries){var n=m.boundingInfo;if(n){var d=a,k=c?m.transformation:this.getCombinedShaderTransformation(m),b=n.bbMin;n=n.bbMax;if(q.hasIdentityRotation(k))for(k=g.set(I,k[12],k[13],k[14]),g.add(h,b,k),g.add(l,n,k),b=0;3>b;++b)d.min[b]=Math.min(d.min[b],h[b]),d.max[b]=Math.max(d.max[b],l[b]);else if(g.transformMat4(h,b,k),g.exactEquals(b,n))for(b=0;3>b;++b)d.min[b]=Math.min(d.min[b],h[b]),d.max[b]=Math.max(d.max[b],h[b]);else{g.transformMat4(l,n,k);for(var e=0;3>e;++e)d.min[e]=
Math.min(d.min[e],h[e],l[e]),d.max[e]=Math.max(d.max[e],h[e],l[e]);for(e=0;3>e;++e){g.copy(h,b);g.copy(l,n);h[e]=n[e];l[e]=b[e];g.transformMat4(h,h,k);g.transformMat4(l,l,k);for(let f=0;3>f;++f)d.min[f]=Math.min(d.min[f],h[f],l[f]),d.max[f]=Math.max(d.max[f],h[f],l[f])}}}}g.lerp(v.getCenter(a.bounds),a.min,a.max,.5);for(const f of this._geometries)m=f.boundingInfo,null!=m&&(b=c?f.transformation:this.getCombinedShaderTransformation(f),d=C.maxScale(b),g.transformMat4(B,m.center,b),b=g.distance(B,v.getCenter(a.bounds)),
a.bounds[3]=Math.max(a.bounds[3],b+m.radius*d))}_invalidateBoundingVolume(){const a=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0;this._parentLayer&&a&&this._parentLayer.notifyObjectBBChanged(this,a)}_emit(a,c){this._parentLayer&&this._parentLayer.events.emit(a,c)}get test(){}}class z{constructor(){this.min=p.fromValues(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);this.max=p.fromValues(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<
this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class A extends z{constructor(){super(...arguments);this.bounds=v.create()}}const I=p.create(),h=p.create(),l=p.create(),B=p.create();var u;(function(a){a[a.WorldSpace=0]="WorldSpace";a[a.ObjectSpace=1]="ObjectSpace"})(u||={});w.Object3D=H;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});