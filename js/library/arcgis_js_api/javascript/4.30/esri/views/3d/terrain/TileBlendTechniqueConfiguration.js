// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ./BlendModeTechniqueConfiguration ../webgl-engine/core/shaderLibrary/terrain/BaseOpacityMode ../webgl-engine/core/shaderLibrary/terrain/BlendLayersOutput ../webgl-engine/core/shaderLibrary/terrain/PremultipliedAlphaSource ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration".split(" "),function(d,b,g,e,f,h,c){class a extends g.BlendModeTechniqueConfiguration{constructor(){super(...arguments);this.output=f.BlendLayersOutput.Composite;this.baseOpacityMode=
e.BaseOpacityMode.NotRequired;this.premultipliedSource=h.PremultipliedAlphaSource.Off}}b.__decorate([c.parameter({count:f.BlendLayersOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:e.BaseOpacityMode.COUNT})],a.prototype,"baseOpacityMode",void 0);b.__decorate([c.parameter()],a.prototype,"premultipliedSource",void 0);d.TileBlendTechniqueConfiguration=a;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});