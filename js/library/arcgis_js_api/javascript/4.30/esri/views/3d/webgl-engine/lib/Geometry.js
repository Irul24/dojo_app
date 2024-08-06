// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../geometry/support/Indices ./AttributeArray ./basicInterfaces ./BoundingInfo ./ContentObject ./ContentObjectType ./geometryDataUtils ./Object3DStateID ./Util ./VertexAttribute ../materials/renderers/utils".split(" "),function(l,h,r,m,t,u,v,w,f,g,x,y,e,n){class p extends w.ContentObject{constructor(a,b,c=null,d=f.ContentObjectType.Mesh,z=null,A=-1){super();this.material=a;this.mapPositions=c;this.type=
d;this.objectAndLayerIdColor=z;this.edgeIndicesLength=A;this.visible=!0;this._attributes=new Map;this._boundingInfo=null;for(const [k,q]of b)this._attributes.set(k,{...q,indices:m.compactIndices(q.indices)}),k===e.VertexAttribute.POSITION&&(this.edgeIndicesLength=0>this.edgeIndicesLength?this._attributes.get(k).indices.length:this.edgeIndicesLength)}instantiate(a={}){const b=new p(a.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);this._attributes.forEach((c,
d)=>{c.exclusive=!1;b._attributes.set(d,c)});b._boundingInfo=this._boundingInfo;b.transformation=a.transformation||this.transformation;return b}get attributes(){return this._attributes}getMutableAttribute(a){let b=this._attributes.get(a);b&&!b.exclusive&&(b={...b,exclusive:!0,data:t.cloneAttributeData(b.data)},this._attributes.set(a,b));return b}setAttributeData(a,b){const c=this._attributes.get(a);c&&this._attributes.set(a,{...c,exclusive:!0,data:b})}get indexCount(){return this._attributes.values().next().value.indices?.length??
0}get faceCount(){return this.indexCount/3}get boundingInfo(){null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo());return this._boundingInfo}computeAttachmentOrigin(a){return(this.type===f.ContentObjectType.Mesh?this._computeAttachmentOriginTriangles(a):this.type===f.ContentObjectType.Line?this._computeAttachmentOriginLines(a):this._computeAttachmentOriginPoints(a))?(null!=this._transformation&&r.transformMat4(a,a,this._transformation),!0):!1}_computeAttachmentOriginTriangles(a){const b=
this.attributes.get(e.VertexAttribute.POSITION);return g.computeAttachmentOriginTriangles(b,a)}_computeAttachmentOriginLines(a){const b=this.attributes.get(e.VertexAttribute.POSITION);var c=g.computeAttachmentOriginLines;var d=this.material.parameters;d="isClosed"in d&&d.isClosed?2<b.indices.length:!1;return c.call(g,b,d,a)}_computeAttachmentOriginPoints(a){const b=this.attributes.get(e.VertexAttribute.POSITION);return g.computeAttachmentOriginPoints(b,a)}invalidateBoundingInfo(){this._boundingInfo=
null}_calculateBoundingInfo(){const a=this.attributes.get(e.VertexAttribute.POSITION);if(!a||0===a.indices.length)return null;const b=this.type===f.ContentObjectType.Mesh?3:1;y.assert(0===a.indices.length%b,"Indexing error: "+a.indices.length+" not divisible by "+b);const c=m.getContinuousIndexArray(a.indices.length/b);return new v.BoundingInfo(c,b,a)}get transformation(){return this._transformation??h.IDENTITY}set transformation(a){this._transformation=a&&a!==h.IDENTITY?h.clone(a):null}addHighlight(){const a=
new x.Object3DStateID(u.Object3DState.Highlight);this.highlights=n.addObject3DStateID(this.highlights,a);return a}removeHighlight(a){this.highlights=n.removeObject3DStateID(this.highlights,a)}}l.Geometry=p;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});