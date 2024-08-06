// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Logger ../../../../../core/has ../../../../../core/RandomLCG ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/math/mat3 ../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ./AllRenderPasses ./RenderPass ../shaderLibrary/ShaderOutput ../util/TwoVectorPosition ../../effects/RenderPlugin ../../lib/depthRange ../../lib/RenderSlot".split(" "),
function(k,t,A,B,C,D,u,m,v,w,l,x,h,d,c,y,z,q,e){k.RenderPassManager=class extends z.SyncPreparesRenderPlugin{constructor(){super({});this._passes=null;this.produces=new Map([[e.RenderSlot.OPAQUE_MATERIAL,a=>this._produces(a)],[e.RenderSlot.TRANSPARENT_MATERIAL,a=>this._passes&&0<this._passes.materialTransparent.count?this._produces(a):!1],[e.RenderSlot.INTEGRATED_MESH,a=>this._produces(a)]]);this._materialPassParameters=new h.MaterialPassParameters;this._shadowPassParameters=new h.ShadowMapPassParameters;
this._highlightPassParameters=new h.HighlightPassParameters;this._viewshedPassParameters=new h.ViewshedShadowMapPassParameters;this._systems=new Set}initializeRenderContext(a){this._context=a;const b=a.renderContext.rctx;a=a.techniques;this._passes={materialOpaque:new d.RenderPass(b,a),materialTransparent:new d.RenderPass(b,a,d.RenderPassSorting.BackToFront),materialIntegratedMesh:new d.RenderPass(b,a),shadowMap:new d.RenderPass(b,a),highlight:new d.RenderPass(b,a),highlightIntegratedMesh:new d.RenderPass(b,
a),highlightShadowMap:new d.RenderPass(b,a),viewshedShadowMap:new d.RenderPass(b,a),defaultShadowMap:new d.RenderPass(b,a)}}get rctx(){return this._context.renderContext.rctx}uninitializeRenderContext(){}dispose(){this._context=null;this._systems.clear()}register(a){this._systems.add(a)}_produces(a){return 0===this._systems.size||null===this._passes?!1:a===c.ShaderOutput.Highlight?0<this._passes.highlight.count||0<this._passes.highlightIntegratedMesh.count:a===c.ShaderOutput.ShadowHighlight?0<this._passes.highlight.count:
!0}prepareRender(a){if(0!==this._systems.size&&null!==this._passes){for(const b of Object.values(this._passes))b.prepareSubmit();this._systems.forEach(b=>b.submit(this._passes,a.bindParameters));for(const b of Object.values(this._passes))b.finishSubmit();this._context.techniques.frameUpdate()}}prepareTechniques(a){if(0===this._systems.size)return null;const b=a.bindParameters;this._updateParameters(b.camera,a.output===c.ShaderOutput.Shadow||a.output===c.ShaderOutput.ShadowHighlight||a.output===c.ShaderOutput.ShadowExcludeHighlight?
this._shadowPassParameters:a.output===c.ShaderOutput.ViewshedShadow?this._viewshedPassParameters:a.output===c.ShaderOutput.Highlight?this._highlightPassParameters:this._materialPassParameters,b.slot===e.RenderSlot.TRANSPARENT_MATERIAL);this._materialPassParameters.output=a.output;return this._invoke(a,(f,g)=>f.prepare(g,a.bindParameters))}renderNode(a,b){this._invoke(a,(f,g)=>f.dispatch(g,a.bindParameters,b))}_invoke(a,b){if(null===this._passes)return null;switch(a.bindParameters.slot){case e.RenderSlot.OPAQUE_MATERIAL:switch(a.output){case c.ShaderOutput.Color:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return b(this._passes.materialOpaque,
this._materialPassParameters);case c.ShaderOutput.Highlight:return b(this._passes.highlight,this._highlightPassParameters);case c.ShaderOutput.Shadow:return b(this._passes.shadowMap,this._shadowPassParameters);case c.ShaderOutput.ShadowHighlight:return b(this._passes.highlightShadowMap,this._shadowPassParameters);case c.ShaderOutput.ShadowExcludeHighlight:return b(this._passes.defaultShadowMap,this._shadowPassParameters);case c.ShaderOutput.ViewshedShadow:return b(this._passes.viewshedShadowMap,this._viewshedPassParameters)}break;
case e.RenderSlot.TRANSPARENT_MATERIAL:switch(a.output){case c.ShaderOutput.Color:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return b(this._passes.materialTransparent,this._materialPassParameters)}break;case e.RenderSlot.INTEGRATED_MESH:switch(a.output){case c.ShaderOutput.Color:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return b(this._passes.materialIntegratedMesh,this._materialPassParameters);
case c.ShaderOutput.Highlight:return b(this._passes.highlightIntegratedMesh,this._highlightPassParameters)}}return null}notifyDirty(){this._context.requestRender()}queryDepthRange(a){const b=new q.DepthRange;this._systems.forEach(f=>q.union(b,f.queryShadowCasterDepthRange(a)));return b}_updateParameters(a,b,f){const g=a.viewInverseTransposeMatrix;l.set(n,g[3],g[7],g[11]);p.set(n);l.copy(b.transformWorldFromViewTH,p.high);l.copy(b.transformWorldFromViewTL,p.low);l.copy(b.slicePlaneLocalOrigin,n);m.fromMat4(b.transformViewFromCameraRelativeRS,
a.viewMatrix);w.copy(b.transformProjFromView,a.projectionMatrix);b.identifier===h.RenderPassIdentifier.Material&&(this._materialPassParameters.transparent=f,m.transpose(r,b.transformViewFromCameraRelativeRS),m.invert(b.transformNormalViewFromGlobal,r))}};k.RenderPassManager=t.__decorate([u.subclass("esri.views.3d.webgl-engine.core.renderPasses.RenderPassManager")],k.RenderPassManager);const n=x.create(),r=v.create(),p=new y.TwoVectorPosition;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});