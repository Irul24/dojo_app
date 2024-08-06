// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/Clouds.glsl ./CloudsData ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(g,f,h,k,l,m,n,p,b,c){class d extends m.ShaderTechnique{constructor(a,e){super(a,e,()=>this.destroy())}initializeProgram(a){return new p.Program(a.rctx,d.shader.get().build(this.configuration),
n.Default3D)}initializePipeline(){return c.makePipelineState({blending:c.simpleBlendingParams(b.BlendFactor.CONSTANT_COLOR,b.BlendFactor.ONE_MINUS_CONSTANT_COLOR,b.BlendOperation.ADD,this.configuration.writeTextureChannels===k.CloudsTextureChannels.RG?[1,1,0,0]:[0,0,1,1]),depthTest:{func:b.CompareFunction.LEQUAL},colorWrite:c.defaultColorWriteParams})}}d.shader=new l.ReloadableShaderModule(h.Clouds,()=>new Promise((a,e)=>g(["./Clouds.glsl"],a,e)));f.CloudsTechnique=d;Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});