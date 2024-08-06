/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{Z as e}from"./vec2f64.js";import{b as t,S as a,d as n,c as s,T as i,e as r}from"./enums.js";import{a as o,T as u}from"./Texture.js";function f(e,r,f="nearest",c=!1){const m=!(c&&"u8"===r.pixelType),l=m?t.FLOAT:t.UNSIGNED_BYTE,_=null==r.pixels||0===r.pixels.length?null:m?r.getAsRGBAFloat():r.getAsRGBA(),g=e.capabilities.textureFloatLinear,p=new o;return p.width=r.width,p.height=r.height,p.internalFormat=m?a.RGBA32F:n.RGBA,p.samplingMode=!g||"bilinear"!==f&&"cubic"!==f?s.NEAREST:s.LINEAR,p.dataType=l,p.wrapMode=i.CLAMP_TO_EDGE,new u(e,p,_)}function c(e,n){const{spacing:r,offsets:f,coefficients:c,size:[m,l]}=n,_=r[0]>1,g=new o;g.width=_?4*m:m,g.height=l,g.internalFormat=a.RGBA32F,g.dataType=t.FLOAT,g.samplingMode=s.NEAREST,g.wrapMode=i.CLAMP_TO_EDGE;const p=new Float32Array(_?m*l*16:2*f.length);if(_&&null!=c)for(let e=0,t=0;e<c.length;e++)p[t++]=c[e],e%3==2&&(p[t++]=1);else for(let e=0;e<l;e++)for(let t=0;t<m;t++){const a=4*(e*m+t),n=2*(t*l+e);p[a]=f[n],p[a+1]=f[n+1],p[a+3]=-1===f[n]?0:1}return new u(e,g,p)}function m(e,t){const a=new o;return a.internalFormat=n.RGBA,a.width=t.length/4,a.height=1,a.samplingMode=s.NEAREST,a.wrapMode=i.CLAMP_TO_EDGE,new u(e,a,t)}function l(t,a,n,s=1,i=!0){return{u_flipY:i,u_applyTransform:!!t,u_opacity:s,u_transformSpacing:t?t.spacing:e,u_transformGridSize:t?t.size:e,u_targetImageSize:a,u_srcImageSize:n}}function _(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function g(e,t){return{u_scale:e,u_offset:t}}function p(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function A(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function T(e,t){const a=e.gl,n=t.glName,s=new Map;if(null==n)return s;const i=a.getProgramParameter(n,a.ACTIVE_UNIFORMS);let r;for(let e=0;e<i;e++)r=a.getActiveUniform(n,e),r&&s.set(r.name,{location:a.getUniformLocation(n,r.name),info:r});return s}function h(e,t,a){Object.keys(a).forEach((n=>{const s=t.get(n)||t.get(n+"[0]");s&&function(e,t,a,n){if(null===n||null==a)return!1;const{info:s}=n;switch(s.type){case r.FLOAT:s.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case r.FLOAT_VEC2:e.setUniform2fv(t,a);break;case r.FLOAT_VEC3:e.setUniform3fv(t,a);break;case r.FLOAT_VEC4:e.setUniform4fv(t,a);break;case r.FLOAT_MAT3:e.setUniformMatrix3fv(t,a);break;case r.FLOAT_MAT4:e.setUniformMatrix4fv(t,a);break;case r.INT:s.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case r.BOOL:e.setUniform1i(t,a?1:0);break;case r.INT_VEC2:case r.BOOL_VEC2:e.setUniform2iv(t,a);break;case r.INT_VEC3:case r.BOOL_VEC3:e.setUniform3iv(t,a);break;case r.INT_VEC4:case r.BOOL_VEC4:e.setUniform4iv(t,a)}}(e,n,a[n],s)}))}function O(e,t,a,n){a.length===n.length&&(n.some((e=>null==e))||a.some((e=>null==e))||a.forEach(((a,s)=>{t.setUniform1i(a,s),e.bindTexture(n[s],s)})))}export{_ as a,p as b,c,A as d,f as e,m as f,l as g,h,T as i,g as j,O as s};
