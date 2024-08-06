// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/unitUtils ../../../core/libs/gl-matrix-2/math/vec2 ../../../support/elevationInfoUtils ../sketch/normalizedPoint ./Settings ./snappingUtils ../support/viewUtils".split(" "),function(f,k,l,g,d,e,m,h){class n{constructor(b,a){this.view=b;this.options=a;this.squaredShortLineThreshold=e.defaults.shortLineThreshold*e.defaults.shortLineThreshold}snap(b,a){return null!=a.vertexHandle?"vertex"!==a.vertexHandle.type?[]:this.snapExistingVertex(b,a):this.snapNewVertex(b,a)}edgeExceedsShortLineThreshold(b,
a){return this.exceedsShortLineThreshold(d.fromAnyMapPoint(b.leftVertex.pos,this.view,a),d.fromAnyMapPoint(b.rightVertex.pos,this.view,a),a)}exceedsShortLineThreshold(b,a,{spatialReference:c}){return 0===this.squaredShortLineThreshold||m.squaredScreenDistance(h.vectorToScreenPoint(a,c,g.absoluteHeightElevationInfo,this.view),h.vectorToScreenPoint(b,c,g.absoluteHeightElevationInfo,this.view))>this.squaredShortLineThreshold}isVertical(b,a,{spatialReference:c}){c=k.getMetersPerUnitForSR(c);return l.distance(d.asVec2(b),
d.asVec2(a))*c<e.defaults.verticalLineThresholdMeters}squaredProximityThreshold(b){return"touch"===b?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const {distance:b,touchSensitivityMultiplier:a}=this.options,c=b*a;return c*c}}f.SnappingAlgorithm=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});