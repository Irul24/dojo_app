// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./DefaultVertexAttributeLocations ./DefaultVertexBufferLayouts ./VertexArrayObject ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/Texture ../../../webgl/TextureDescriptor".split(" "),function(e,k,g,l,m,h,n,p){e.createEmptyTexture=function(d){const c=new p.TextureDescriptor(4);c.samplingMode=h.TextureSamplingMode.NEAREST;return new n.Texture(d,c)};e.createQuadVAO=function(d,c=g.Pos2,q=k.Default3D,a=-1,b=1){let f=null;switch(c){case g.Pos2Tex:f=new Float32Array([a,a,
0,0,b,a,1,0,a,b,0,1,b,b,1,1]);break;default:f=new Float32Array([a,a,b,a,a,b,b,b])}return new l.VertexArrayObject(d,q,{geometry:c},{geometry:m.BufferObject.createVertex(d,h.Usage.STATIC_DRAW,f)})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});