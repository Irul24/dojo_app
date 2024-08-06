// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/MapUtils ../../../../../../../core/screenUtils ../../../../../../../core/libs/gl-matrix-2/math/mat2d ../../../../../../../core/libs/gl-matrix-2/factories/mat2df32 ../../../../../../../core/libs/gl-matrix-2/math/vec2 ../../../../../../../core/libs/gl-matrix-2/factories/vec2f32 ../../../../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../../../../layers/graphics/featureConversionUtils ../../../../../../../layers/graphics/OptimizedGeometry ../../../alignmentUtils ../../../DisplayId ../../../collisions/BoundingBox ../../../collisions/LabelMetric ../../../mesh/templates/segmentUtils ../fill/meshWriterUtils ../text/TextMeshWriter".split(" "),
function(I,N,C,D,E,r,J,w,F,G,K,z,O,A,x,L,B){function M(a,c,b){const {coords:f,lengths:e}=c;c=w.create();const d=w.create(),g=w.create(),k=w.create(),h=w.create(),m=w.create();let n=0;for(let u=0;u<e.length;u++){const t=e[u];for(let p=0;p<t;p++){var l=2*(p+n-1);const q=2*(p+n),y=2*(p+n+1);0<p?r.set(c,f[l],f[l+1]):r.set(c,0,0);r.set(d,f[q],f[q+1]);p<t-1?r.set(g,f[y],f[y+1]):r.set(g,0,0);0===p?r.set(k,0,0):(r.sub(k,d,c),r.normalize(k,k),r.set(k,k[1],-k[0]));p===t-1?r.set(h,0,0):(r.sub(h,g,d),r.normalize(h,
h),r.set(h,h[1],-h[0]));r.add(m,k,h);r.normalize(m,m);l=m[0]*h[0]+m[1]*h[1];0!==l&&r.scale(m,m,l);r.scale(m,m,b);a.coords.push(d[0]+m[0],d[1]+m[1])}a.lengths.push(t);n+=t}return a}const P=N.memoize(a=>{let c=0;if(0===a)return Infinity;for(;!(a%2);)c++,a/=2;return c});class Q extends B.TextMeshWriter{constructor(){super(...arguments);this._zoomLevel=0}_write(a,c,b,f){this._zoomLevel=f||0;if(null!=b)throw Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(c.geometryType){case "esriGeometryPoint":return b=
c.readXForDisplay(),f=c.readYForDisplay(),this._writePoint(a,b,f,c);case "esriGeometryEnvelope":case "esriGeometryPolygon":case "esriGeometryMultipoint":b=c.readCentroidForDisplay();if(!b)break;const [e,d]=b.coords;return this._writePoint(a,e,d,c);case "esriGeometryPolyline":this._writeLines(a,c)}}_writePoint(a,c,b,f){const e=this._getShaping();if(e){var d=this._getPointReferenceBounds();d||={offsetX:0,offsetY:0,size:0};var g=e.boundsT,k=K.getXAnchorDirection(this.evaluatedMeshParams.horizontalAlignment),
h=K.getYAnchorDirection(this.evaluatedMeshParams.verticalAlignment),m=this.evaluatedMeshParams.scaleInfo?.maxScale??0,n=this.evaluatedMeshParams.scaleInfo?.minScale??0,l=z.getDisplayIdTexel(f.getDisplayId());a.metricStart(new A.LabelMetric(l,c,b,k,h,m,n,d));a.metricBoxWrite(g);this._writeGlyphs(a,f.getDisplayId(),c,b,e,0,d);a.metricEnd()}}_getPointReferenceBounds(){if(!this._references)return null;for(const a of this._references){const c=a.getBoundsInfo();if(c)return c}return null}_writeLines(a,c){const {scaleInfo:b,
verticalAlignment:f}=this.evaluatedMeshParams;var e=this.evaluatedMeshParams.repeatLabelDistance||128;const d=this._getShaping("middle");if(d){var g=(k,h,m,n)=>this._placeSubdivGlyphs(k,h,m,n);e=(d.bounds.width+e)/2;this._current={out:a,id:c.getDisplayId(),shaping:d,zoomRange:L.getMinMaxZoom(b,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null};(this._verticalPlacement="bottom"===f?"above":"top"===f?"below":null)?this._writeAboveAndBelowAlong(c,
g,e):this._writeCenterAlong(c,g,e)}}_writeAboveAndBelowAlong(a,c,b){const {repeatLabel:f,fontSize:e}=this.evaluatedMeshParams;var {shaping:d}=this._current,g=C.pt2px(e);if(a=a.readGeometryForDisplay()){var k=new G;F.generalizeOptimizedGeometry(k,a,!1,!1,"esriGeometryPolyline",1);a=M(new G,k,g);g=M(new G,k,-g);g=F.convertToGeometry(g,"esriGeometryPolyline",!1,!1);a=F.convertToGeometry(a,"esriGeometryPolyline",!1,!1);a=x.smoothPaths(a.paths,d.bounds.width);d=x.smoothPaths(g.paths,d.bounds.width);this._current.offsetDirection=
"above";for(const h of a)x.pathDivide(h,b,c,!!f);this._current.offsetDirection="below";for(const h of d)x.pathDivide(h,b,c,!!f)}}_writeCenterAlong(a,c,b){const {repeatLabel:f}=this.evaluatedMeshParams,{shaping:e}=this._current;a=x.smoothPaths(a.readLegacyGeometryForDisplay().paths,e.bounds.width);for(const d of a)x.pathDivide(d,b,c,!!f)}_placeSubdivGlyphs(a,c,b,f){const {allowOverrun:e,labelPosition:d,repeatLabelDistance:g}=this.evaluatedMeshParams,k=this._current.zoomRange[0];var h=P(c),m=this._current.shaping.bounds.width/
2,n=Math.sqrt(g||128)/2;b=Math.min(b,f-b);m=this._current.shaping.isMultiline?B.maxLabelZoom:Math.log2(b/(n+m/2));h=Math.max(k,this._zoomLevel+1-(0===c?m:Math.min(h,m)));m=this._zoomLevel-h;n=this._current.shaping.bounds.width/2*2**m;this._current.shaping.isMultiline?0===c&&this._placeStraight(a,h):e&&0>m?this._placeStraightAlong(a,k):"parallel"===d?this._placeStraightAlong(a,h):"curved"===d&&this._placeCurved(a,h,n)}_placeStraight(a,c){const {out:b,id:f,shaping:e,referenceBounds:d}=this._current,
{x:g,y:k}=a;var h=z.getDisplayIdTexel(f);b.metricStart(new A.LabelMetric(h,a.x,a.y,0,0,this.evaluatedMeshParams.scaleInfo?.maxScale??0,this.evaluatedMeshParams.scaleInfo?.minScale??0,null));b.metricBoxWrite(e.boundsT);h=(180/Math.PI*a.angle+180)%360;this._writeGlyphs(b,f,g,k,e,0,d,{clipAngle:180/Math.PI*a.angle%360,mapAligned:!0,isLineLabel:!0,minZoom:c});this._writeGlyphs(b,f,g,k,e,0,d,{clipAngle:h,mapAligned:!0,isLineLabel:!0,minZoom:c});b.metricEnd()}_placeCurved(a,c,b){const {out:f,id:e}=this._current,
d=a.clone(),g=180/Math.PI*a.angle%360,k=(180/Math.PI*a.angle+180)%360,h=z.getDisplayIdTexel(e);f.metricStart(new A.LabelMetric(h,a.x,a.y,0,0,this.evaluatedMeshParams.scaleInfo?.maxScale??0,this.evaluatedMeshParams.scaleInfo?.minScale??0,null));this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(d,c,1,g),this._placeBack(a,d,c,b,1,g),this._placeForward(a,d,c,b,1,g));this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(d,
c,0,k),this._placeBack(a,d,c,b,0,k),this._placeForward(a,d,c,b,0,k));f.metricEnd()}_placeStraightAlong(a,c){const {out:b,id:f,shaping:e,zoomRange:d,referenceBounds:g}=this._current,{boxBorderLineColor:k,boxBackgroundColor:h}=this.evaluatedMeshParams,m=a.clone(),n=180/Math.PI*a.angle%360,l=(180/Math.PI*a.angle+180)%360;if(0<e.glyphs.length&&(k||h)){var u=Math.max(c,d[0],0),t=Math.min(B.maxLabelZoom,d[1]),p=D.fromRotation(E.create(),-a.angle);u={minZoom:u,maxZoom:t,clipAngle:n,mapAligned:!0,isLineLabel:!0};
t=C.pt2px(this.evaluatedMeshParams.offsetX);const y=C.pt2px(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){var q=J.fromValues(t,-1*y);const [v,H]=e.shapeBackground(D.translate(E.create(),p,q));b.recordStart(this.instanceId,this.attributeLayout,e.glyphs[0].textureBinding);q=2*Math.max(v.width,v.height);b.recordBounds(a.x+v.x,a.y+v.y,q,q);this._writeTextBox(b,f,a.x,a.y,H,g,u);b.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==
this._current.offsetDirection){t=J.fromValues(t,y);const [v,H]=e.shapeBackground(D.translate(E.create(),p,t));u.clipAngle=l;b.recordStart(this.instanceId,this.attributeLayout,e.glyphs[0].textureBinding);p=2*Math.max(v.width,v.height);b.recordBounds(a.x+v.x,a.y+v.y,p,p);this._writeTextBox(b,f,a.x,a.y,H,g,u);b.recordEnd()}}p=z.getDisplayIdTexel(f);b.metricStart(new A.LabelMetric(p,a.x,a.y,0,0,this.evaluatedMeshParams.scaleInfo?.maxScale??0,this.evaluatedMeshParams.scaleInfo?.minScale??0,null));this._verticalPlacement&&
this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(m,c,1,n,!0);this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(m,c,0,l,!0);b.metricEnd()}_placeBack(a,c,b,f,e,d){const g=a.clone();for(a=a.backwardLength+0;g.prev()&&!(a>=f);)this._placeOnSegment(g,c,a,b,-1,e,d),a+=g.length+0}_placeForward(a,c,b,f,e,d){const g=a.clone();for(a=a.remainingLength+0;g.next()&&!(a>=f);)this._placeOnSegment(g,c,a,b,1,e,d),a+=g.length+0}_placeFirst(a,
c,b,f,e=!1){const {out:d,id:g,shaping:k,zoomRange:h,referenceBounds:m}=this._current;var n=k.glyphs;for(const l of n)n=l.x>k.bounds.x?b:1-b,n=Math.max(0,this._zoomLevel+Math.log2(Math.abs(l.x+l.width/2-k.bounds.x)/(n*a.remainingLength+(1-n)*a.backwardLength))),n=Math.max(c,e?0:n),l.maxZoom=Math.min(h[1],B.maxLabelZoom),l.angle=a.angle+(1-b)*Math.PI,l.minZoom=Math.max(h[0],n),this._writeLineGlyph(d,g,a.x,a.y,k.bounds,l,f,m,!0),b&&this._isVisible(l.minZoom,l.maxZoom)&&d.metricBoxWrite(l.bounds)}_placeOnSegment(a,
c,b,f,e,d,g){const {out:k,id:h,shaping:m,referenceBounds:n}=this._current;var l=m.glyphs,u=a.x+a.dx/a.length*-e*b,t=a.y+a.dy/a.length*-e*b;for(const q of l)if((l=q.x>m.bounds.x?d:1-d)&&1===e||!l&&-1===e){var p=Math.abs(q.x+q.width/2-m.bounds.x);l=Math.max(0,this._zoomLevel+Math.log2(p/b)-.1);p=Math.max(f,this._zoomLevel+Math.log2(p/(b+a.length+0)));0!==l&&(q.angle=a.angle+(1-d)*Math.PI,q.minZoom=p,q.maxZoom=l,this._writeLineGlyph(k,h,u,t,m.bounds,q,g,n,!0),d&&this._isVisible(q.minZoom,q.maxZoom)&&
(l=q.bounds,l=new O(l.center[0]+(a.x-c.x),l.center[1]+(a.y-c.y),l.width,l.height),k.metricBoxWrite(l)))}}_writeLineGlyph(a,c,b,f,e,d,g,k,h){const m=b+e.x,n=f+e.y;e=2*Math.max(e.width,e.height)*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1);a.recordStart(this.instanceId,this.attributeLayout,d.textureBinding);a.recordBounds(m,n,e,e);const {texcoords:l,offsets:u}=d;this._writeQuad(a,c,b,f,{texcoords:l,offsets:u,fontSize:this._textMeshTransformProps.fontSize,
color:L.processColorInput(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:k,minZoom:Math.max(this._current.zoomRange[0],d.minZoom),maxZoom:Math.min(this._current.zoomRange[1],d.maxZoom),clipAngle:g,mapAligned:h,isLineLabel:!0});a.recordEnd()}_isVisible(a,c){const b=this._zoomLevel;return a<=b&&b<=c}}I.LabelMeshWriter=Q;Object.defineProperty(I,Symbol.toStringTag,{value:"Module"})});