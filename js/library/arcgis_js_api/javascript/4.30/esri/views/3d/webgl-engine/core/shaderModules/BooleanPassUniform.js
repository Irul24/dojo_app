// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./Uniform","../shaderTechnique/BindType"],function(a,c,d){class e extends c.Uniform{constructor(b,f){super(b,"bool",d.BindType.Pass,(g,h,k)=>g.setUniform1b(b,f(h,k)))}}a.BooleanPassUniform=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});