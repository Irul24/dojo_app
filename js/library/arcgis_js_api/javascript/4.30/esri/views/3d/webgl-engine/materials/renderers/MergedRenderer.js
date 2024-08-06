// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/MapUtils ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/NestedMap ../../../../../core/PooledArray ../../../../../core/accessorSupport/decorators/property ../../../../../core/Logger ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../support/buffer/glUtil ../../core/shaderLibrary/ShaderOutput ../../effects/RenderPlugin ../../lib/GLMaterials ../../lib/ModelDirtyTypes ../../lib/RenderSlot ../../lib/Util ../DrawParameters ./BufferRange ./Instance ./PerBufferData ./PerOriginData ./VaoCache".split(" "),
function(y,J,D,fa,R,S,K,T,U,V,ha,W,E,F,X,v,Y,Z,z,L,A,aa,G,M,N,ba,ca){function da(a,b){let c;if(!a.some(e=>{if(e.numElements<b)return!1;c=e;return!0}))return null;const d=c.from;c.from+=b;c.from>=c.to&&a.removeUnordered(c);return d}function B(a){H.length<a&&(H=new Float32Array(a));return H}function O(a){a*=4;return 1024>=a?1024:262144>a?S.nextHighestPowerOfTwo(a):Math.max(Math.min(262144*Math.ceil(1.5*a/262144),16777216),a)}y.MergedRenderer=class extends Y.SyncPrepareRenderPlugin{constructor(a){super(a);
this._bufferWriter=this._glMaterials=this._vaoCache=null;this._dataByOrigin=new Map;this._hasOccludees=this._hasHighlights=!1;this._produces=new Map;this.drapedPriority=0}destroy(){this._glMaterials=K.disposeMaybe(this._glMaterials);this._dataByOrigin.forEach(a=>a.dispose());this._dataByOrigin.clear();this._vaoCache=K.disposeMaybe(this._vaoCache)}initialize(){this.material.produces.forEach((a,b)=>{this._produces.set(b,c=>0!==this._dataByOrigin.size&&(c!==v.ShaderOutput.Highlight&&c!==v.ShaderOutput.ShadowHighlight||
this._hasHighlights)?a(c):!1)})}get produces(){return this._produces}initializeRenderContext(a,b){const {rctx:c}=a.renderContext;this._glMaterials=new Z.GLMaterials(this.material,b??a.materials);this._bufferWriter=this.material.createBufferWriter();this._vaoCache=new ca.VaoCache(c,this.material.vertexAttributeLocations,X.glLayout(this._bufferWriter.vertexBufferLayout))}uninitializeRenderContext(){}get hasOccludees(){return this._hasOccludees}get isDecoration(){return this.material.parameters.isDecoration}queryRenderOccludedState(a){return this.material.queryRenderOccludedState(a)}get materialReference(){return this.material}get numGeometries(){let a=
0;this._dataByOrigin.forEach(b=>a+=b.buffers.reduce((c,d)=>c+=d.instances.size,0));return a}get usedMemory(){let a=0;this._dataByOrigin.forEach(b=>a+=b.buffers.reduce((c,d)=>c+d.vao.usedMemory,0));return a}forEachGeometry(a){this._dataByOrigin.forEach(b=>b.buffers.forEach(c=>c.instances.forEach(d=>a(d.geometry))))}modify(a){this._updateGeometries(a.updates);this._addAndRemoveGeometries(a.adds,a.removes);this._updateDrawCommands()}_updateGeometries(a){const b=this._bufferWriter;if(null!==b){var c=
b.vertexBufferLayout.stride/4;for(const e of a){a=e.renderGeometry;const f=this._dataByOrigin.get(a.localOrigin.id)?.findBuffer(a.id);if(null==f)break;const k=f.instances.get(a.id);if(e.updateType&(z.DirtyState.GEOMETRY|z.DirtyState.TRANSFORMATION)){var d=b.elementCount(k.geometry.geometry)*c;d=B(d);const h=b.vertexBufferLayout.createView(d.buffer);this._writeGeometry(a,h,0);f.vao.vertexBuffers.geometry.setSubData(d,k.from*c,0,k.numElements*c)}e.updateType&(z.DirtyState.HIGHLIGHT|z.DirtyState.OCCLUDEE|
z.DirtyState.VISIBILITY)&&(f.drawCommandsDirty=!0)}}}_computeDeltas(a,b){const c=new T.NestedMap;for(var d of a){a=d.localOrigin;if(null==a)continue;let e=c.get(a.id,null);null==e&&(e=new P(a.vec3),c.set(a.id,null,e));e.changes.push(d)}for(const e of b)b=e.localOrigin,null!=b&&(d=this._dataByOrigin.get(b.id)?.findBuffer(e.id),null!=d&&(a=c.get(b.id,d),null==a&&(a=new P(b.vec3),c.set(b.id,d,a)),a.changes.push(e)));return c}_addAndRemoveGeometries(a,b){if(null!==this._bufferWriter&&null!==this._vaoCache){var {_bufferWriter:c,
_dataByOrigin:d}=this,e=c.vertexBufferLayout.stride/4,f=this._computeDeltas(a,b);f.forEach((k,h)=>{const p=k.get(null),g=null!=p?p.changes:[];f.delete(h,null);let l=d.get(h);k.forEach((m,n)=>{f.delete(h,n);if(null==n)A.assert(!1,"No VAO for removed geometries");else if(n.instances.size===m.changes.length)this._vaoCache.deleteVao(n.vao),D.removeUnordered(l.buffers,n),0===l.buffers.length&&0===g.length&&d.delete(h);else{var r=n.numElements,t=n.vao.byteSize/4,q=g.reduce((x,I)=>x+c.elementCount(I.geometry),
0),w=m.changes.reduce((x,I)=>x+c.elementCount(I.geometry),0);r=Math.min((r+q-w)*e,4194304);q=r>t;65536<r&&r<t/2?(m.changes.forEach(({id:x})=>n.deleteInstance(x)),n.instances.forEach(({geometry:x})=>g.push(x)),this._vaoCache.deleteVao(n.vao),D.removeUnordered(l.buffers,n)):q?this._applyAndRebuild(n,g,m):this._applyRemoves(n,m)}});if(0<g.length)for(null==l&&(l=new ba.PerOriginData(p.origin),d.set(h,l)),l.buffers.forEach(m=>this._applyAdds(m,g));0<g.length;)l.buffers.push(this._applyAndRebuild(new N.PerBufferData,
g,null))})}}_updateDrawCommands(){this._hasOccludees=this._hasHighlights=!1;this._dataByOrigin.forEach(a=>{a.buffers.forEach(b=>{b.drawCommandsDirty&&(b.hasHiddenInstances=!1,b.hasHighlights=!1,b.hasOccludees=!1,R.someMap(b.instances,c=>{b.updateDrawState(c);return b.hasHiddenInstances&&b.hasHighlights&&b.hasOccludees}),b.updateDrawCommands(this._bufferWriter.vertexBufferLayout.stride));this._hasHighlights=this._hasHighlights||b.hasHighlights;this._hasOccludees=this._hasOccludees||b.hasOccludees})})}_applyAndRebuild(a,
b,c){if(null!=c)for(var d of c.changes)a.deleteInstance(d.id);const e=this._bufferWriter;c=e.vertexBufferLayout.stride;d=c/4;var f=Math.floor(4194304/d);let k=a.numElements;for(;0<b.length;){const l=b.pop();var h=e.elementCount(l.geometry);if(k+h>f&&0<k){b.push(l);break}k+=h;h=new M.Instance(l,0,0);A.assert(null==a.instances.get(l.id));a.addInstance(l.id,h)}b=k*d;f=B(b);const p=e.vertexBufferLayout.createView(f.buffer);let g=0;a.hasHiddenInstances=!1;a.hasHighlights=!1;a.hasOccludees=!1;a.instances.forEach((l,
m)=>{this._writeGeometry(l.geometry,p,g);const n=g;g+=e.elementCount(l.geometry.geometry);a.updateInstance(m,n,g);a.updateDrawState(l)});this._vaoCache.deleteVao(a.vao);a.vao=this._vaoCache.newVao(O(b));a.vao.vertexBuffers.geometry.setSubData(f,0,0,g*d);a.holes.clear();b=a.holes.pushNew();b.from=g;b.to=Math.floor(a.vao.byteSize/c);a.updateDrawCommands(c);return a}_applyRemoves(a,b){if(0!==b.changes.length&&null!==this._bufferWriter){for(var c of b.changes){var d=c.id;if(b=a.instances.get(d)){a.deleteInstance(d);
if(d=u.back()){if(d.to===b.from){d.to=b.to;continue}if(d.from===b.to){d.from=b.from;continue}}d=u.pushNew();d.from=b.from;d.to=b.to}}G.mergeAdjacentRanges(u);var e=this._bufferWriter.vertexBufferLayout.stride/4;c=u.reduce((h,p)=>Math.max(h,p.numElements),0)*e;var f=B(c);f.fill(0,0,c);var k=a.vao.vertexBuffers.geometry;u.forAll(h=>k.setSubData(f,h.from*e,0,h.numElements*e));a.holes.pushArray(u.data,u.length);u.forAll((h,p)=>u.data[p]=null);u.clear();a.drawCommandsDirty=!0}}_applyAdds(a,b){if(0!==b.length&&
null!==this._bufferWriter)if(N.hasVao(a)){var c=this._bufferWriter,d=c.vertexBufferLayout.stride/4,e=a.numElements,f=b.reduce((t,q)=>t+c.elementCount(q.geometry),0);e=Math.min((e+f)*d,4194304);f=4*e;if(a.vao.byteSize<O(4128768)&&f>a.vao.byteSize)this._applyAndRebuild(a,b,null);else{G.mergeAdjacentRanges(a.holes);var k=[];for(var h of b)f=c.elementCount(h.geometry),f=da(a.holes,f),k.push(f);var p=a.vao.vertexBuffers.geometry,g=0,l=0,m=0,n=B(e),r=c.vertexBufferLayout.createView(n.buffer);b.forEach((t,
q)=>{q=k[q];if(null!=q){if(m!==q){var w=m-l;0<w&&p.setSubData(n,l*d,0,w*d);l=q;g=0}w=c.elementCount(t.geometry);this._writeGeometry(t,r,g);g+=w;m=q+w;q=new M.Instance(t,q,q+w);A.assert(null==a.instances.get(t.id));a.addInstance(t.id,q);a.drawCommandsDirty=!0}});h=m-l;0<h&&p.setSubData(n,l*d,0,h*d);D.filterInPlace(b,(t,q)=>null==k[q])}}else this._applyAndRebuild(a,b,null)}_writeGeometry(a,b,c){if(null!==this._bufferWriter){var d=a.localOrigin.vec3;A.setMatrixTranslation3(Q,-d[0],-d[1],-d[2]);d=E.multiply(ea,
Q,a.transformation);E.invert(C,d);E.transpose(C,C);this._bufferWriter.write(d,C,a.geometry,b,c)}}updateAnimation(a){return this.material.update(a)}prepareTechnique(a){if(!this.material.shouldRender(a))return null;const {output:b,bindParameters:c}=a;if(!this.material.produces.get(c.slot)?.(b))return null;const d=b===v.ShaderOutput.Highlight||b===v.ShaderOutput.ShadowHighlight;if(d&&!this._hasHighlights)return null;const e=b===v.ShaderOutput.ShadowExcludeHighlight,f=!(d||e);for(const h of this._dataByOrigin.values())for(const p of h.buffers){if(d&&
!p.hasHighlights)continue;var k=(d?p.drawCommandsHighlight:e&&p.needsMultipleCommands()?p.drawCommandsShadowHighlightRest:p.drawCommandsDefault)||null;const g=f&&p.drawCommandsOccludees||null;if(k?.length||g?.length)if(k=this._glMaterials.load(a.rctx,c.slot,b),k=null!=k?k.beginSlot(c):null,null!=k)return k}return null}renderNode(a,b){const {output:c,bindParameters:d}=a,e=c===v.ShaderOutput.Highlight||c===v.ShaderOutput.ShadowHighlight,f=c===v.ShaderOutput.ShadowExcludeHighlight,k=!(e||f),h=d.slot===
L.RenderSlot.OCCLUDER_MATERIAL,p=d.slot===L.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL,g=a.rctx;g.runAppleAmdDriverHelper();g.bindTechnique(b,d,this.material.parameters);for(const l of this._dataByOrigin.values())for(const m of l.buffers){if(e&&!m.hasHighlights)continue;a=(e?m.drawCommandsHighlight:f&&m.needsMultipleCommands()?m.drawCommandsShadowHighlightRest:m.drawCommandsDefault)||null;const n=k&&m.drawCommandsOccludees||null;if(a?.length||n?.length)b.program.bindDraw(new aa.DrawParameters(l.origin),
d,this.material.parameters),b.ensureAttributeLocations(m.vao),g.bindVAO(m.vao),a?.length&&(g.setPipelineState(b.getPipeline(!1,h,p)),a.forAll(r=>g.drawArrays(b.primitiveType,r.first,r.count))),n?.length&&(g.setPipelineState(b.getPipeline(!0,h,p)),n.forAll(r=>g.drawArrays(b.primitiveType,r.first,r.count)))}}get test(){}};J.__decorate([V.property({constructOnly:!0})],y.MergedRenderer.prototype,"material",void 0);y.MergedRenderer=J.__decorate([W.subclass("esri.views.3d.webgl-engine.materials.renderers.MergedRenderer")],
y.MergedRenderer);class P{constructor(a){this.origin=a;this.changes=[]}}const Q=F.create(),ea=F.create(),C=F.create(),u=new U({allocator:a=>a||new G.BufferRange,deallocator:null});let H=new Float32Array(65536);Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});