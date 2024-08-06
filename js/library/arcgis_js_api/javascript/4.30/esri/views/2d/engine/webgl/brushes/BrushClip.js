// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../../core/libs/gl-matrix-2/factories/vec4f32 ../Utils ./WGLBrush ../shaders/BackgroundPrograms ../../../../webgl/enums ../../../../webgl/ProgramTemplate".split(" "),function(g,h,k,l,b,m){class n extends k{constructor(){super(...arguments);this._color=g.fromValues(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:a}){a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setFaceCullingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(b.StencilOperation.KEEP,
b.StencilOperation.KEEP,b.StencilOperation.REPLACE);a.setStencilWriteMask(255);a.setStencilFunction(b.CompareFunction.ALWAYS,0,255)}draw(a,d){const {context:c,state:e,requestRender:f,allowDelayedRender:p}=a;a=h.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT}]});d=d.getVAO(c,e,a.attributes,a.bufferLayouts);null!=d.indexBuffer&&(this._program||(this._program=m.createProgram(c,l.background)),p&&null!=f&&!this._program.compiled?f():(c.useProgram(this._program),
this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",e.displayMat3),c.bindVAO(d),c.drawElements(b.PrimitiveType.TRIANGLES,d.indexBuffer.size,b.DataType.UNSIGNED_INT,0),c.bindVAO()))}}return n});