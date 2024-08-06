// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../FeatureTechnique","../featureTechniqueUtils","../TechniqueType","../shaders/FillShader"],function(e,g,b,h,k){class l extends g.FeatureTechnique{constructor(){super(...arguments);this.type=h.TechniqueType.Fill;this.shaders={geometry:new k.FillShader}}render(a,c){const {painter:d}=a,f=c.instance.getInput();d.setShader({shader:this.shaders.geometry,uniforms:{...b.resolveDynamicUniforms(a,c.target,f.uniforms),...b.getFeatureUniforms(a,c.target)},defines:b.getSelectionDefines(a),
optionalAttributes:f.optionalAttributes,useComputeBuffer:b.isHittest(a)});d.setPipelineState(b.getFeaturePipelineState(a));d.submitDraw(a,c)}}e.FillTechnique=l;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});