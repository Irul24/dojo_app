/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{h as t}from"../core/lang.js";import{L as r}from"./Logger.js";import{D as i,B as s,m as a,S as o,n,d as c,o as l,b as _,c as h,T as d,R as u}from"./enums.js";import{G as p}from"./GLObjectType.js";const m=!!t("enable-feature:webgl-debug");function E(){return m}function T(){return m}function R(t){if(E()){const i=t.getError();if(i){const s=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(t,i),a=(new Error).stack;r.getLogger("esri.views.webgl.checkWebGLError").error(new e("webgl-error","WebGL error occurred",{message:s,stack:a}))}}}function A(e){switch(e){case i.BYTE:case i.UNSIGNED_BYTE:return 1;case i.SHORT:case i.UNSIGNED_SHORT:case i.HALF_FLOAT:return 2;case i.FLOAT:case i.INT:case i.UNSIGNED_INT:return 4}}function g(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function f(e,t){return e.vertexBuffers[t].usedMemory/e.layout[t][0].stride}function I(e,t,r,i,s=0){const a=e.gl;e.bindBuffer(r);for(const r of i){const i=t.get(r.name);if(void 0===i){console.warn(`There is no location for vertex attribute '${r.name}' defined.`);continue}const o=s*r.stride;if(r.count<=4)a.vertexAttribPointer(i,r.count,r.type,r.normalized,r.stride,r.offset+o),a.enableVertexAttribArray(i),r.divisor>0&&e.gl.vertexAttribDivisor(i,r.divisor);else if(9===r.count)for(let t=0;t<3;t++)a.vertexAttribPointer(i+t,3,r.type,r.normalized,r.stride,r.offset+12*t+o),a.enableVertexAttribArray(i+t),r.divisor>0&&e.gl.vertexAttribDivisor(i+t,r.divisor);else if(16===r.count)for(let t=0;t<4;t++)a.vertexAttribPointer(i+t,4,r.type,r.normalized,r.stride,r.offset+16*t+o),a.enableVertexAttribArray(i+t),r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count);if(E()){const t=g(e),i=A(r.type),s=r.offset,a=Math.round(i/s)!==i/s?`. Offset not a multiple of stride. DataType requires ${i} bytes, but descriptor has an offset of ${s}`:"";t&&console.error(`Unable to bind vertex attribute "${r.name}" with baseInstanceOffset ${o}${a}:`,t,r)}}}function x(e,t,r,i){const a=e.gl;e.bindBuffer(r);for(const r of i){const i=t.get(r.name);if(r.count<=4)a.disableVertexAttribArray(i),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i,0);else if(9===r.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else if(16===r.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else console.error("Unsupported vertex attribute element count: "+r.count)}e.unbindBuffer(s.ARRAY_BUFFER)}function M(e){switch(e){case c.ALPHA:case c.LUMINANCE:case c.RED:case c.RED_INTEGER:case o.R8:case o.R8I:case o.R8UI:case o.R8_SNORM:case n.STENCIL_INDEX8:return 1;case c.LUMINANCE_ALPHA:case c.RG:case c.RG_INTEGER:case o.RGBA4:case o.R16F:case o.R16I:case o.R16UI:case o.RG8:case o.RG8I:case o.RG8UI:case o.RG8_SNORM:case o.RGB565:case o.RGB5_A1:case n.DEPTH_COMPONENT16:return 2;case c.DEPTH_COMPONENT:case c.RGB:case c.RGB_INTEGER:case o.RGB8:case o.RGB8I:case o.RGB8UI:case o.RGB8_SNORM:case o.SRGB8:case n.DEPTH_COMPONENT24:return 3;case c.DEPTH_STENCIL:case c.DEPTH24_STENCIL8:case c.RGBA:case c.RGBA_INTEGER:case o.RGBA8:case o.R32F:case o.R11F_G11F_B10F:case o.RG16F:case o.R32I:case o.R32UI:case o.RG16I:case o.RG16UI:case o.RGBA8I:case o.RGBA8UI:case o.RGBA8_SNORM:case o.SRGB8_ALPHA8:case o.RGB9_E5:case o.RGB10_A2UI:case o.RGB10_A2:case n.DEPTH_STENCIL:case n.DEPTH_COMPONENT32F:case n.DEPTH24_STENCIL8:return 4;case n.DEPTH32F_STENCIL8:return 5;case o.RGB16F:case o.RGB16I:case o.RGB16UI:return 6;case o.RG32F:case o.RG32I:case o.RG32UI:case o.RGBA16F:case o.RGBA16I:case o.RGBA16UI:return 8;case o.RGB32F:case o.RGB32I:case o.RGB32UI:return 12;case o.RGBA32F:case o.RGBA32I:case o.RGBA32UI:return 16;case a.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.COMPRESSED_R11_EAC:case a.COMPRESSED_SIGNED_R11_EAC:case a.COMPRESSED_RGB8_ETC2:case a.COMPRESSED_SRGB8_ETC2:case a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case a.COMPRESSED_RG11_EAC:case a.COMPRESSED_SIGNED_RG11_EAC:case a.COMPRESSED_RGBA8_ETC2_EAC:case a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class N{constructor(e=0,t=e){this.width=e,this.height=t,this.target=l.TEXTURE_2D,this.pixelFormat=c.RGBA,this.dataType=_.UNSIGNED_BYTE,this.samplingMode=h.LINEAR,this.wrapMode=d.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}class D extends N{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case o.R16F:case o.R16I:case o.R16UI:case o.R32F:case o.R32I:case o.R32UI:case o.R8_SNORM:case o.R8:case o.R8I:case o.R8UI:this.pixelFormat=c.RED}}static validate(e,t){return new D(e,t)}}let S=class t{constructor(t,r=null,i=null){if(this.type=p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in t)this._descriptor=t,i=r;else{const i=D.validate(t,r);if(!i)throw new e("Texture descriptor invalid");this._descriptor=i}this._descriptor.target===l.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(e=this._descriptor).width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:M(e.internalFormat)));var e}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(u.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(t,r){const i=this._descriptor;if(i.width!==t||i.height!==r){if(this._wasImmutablyAllocated)throw new e("Immutable textures can't be resized!");i.width=t,i.height=r,this._descriptor.target===l.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=l.TEXTURE_CUBE_MAP_POSITIVE_X;t<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(r,i){if(!this._descriptor.context?.gl)return;const s=this._descriptor.context.gl;R(s),this._glName||(this._glName=s.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(u.Texture,this)),void 0===r&&(r=null);const o=this._descriptor,n=i??o.target,c=O(n);null===r&&(o.width=o.width||4,o.height=o.height||4,c&&(o.depth=o.depth??1));const l=this._descriptor.context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),b(o),this._configurePixelStorage(),R(s);const _=this._deriveInternalFormat();if(G(r)){let e="width"in r?r.width:r.codedWidth,t="height"in r?r.height:r.codedHeight;const i=1;r instanceof HTMLVideoElement&&(e=r.videoWidth,t=r.videoHeight),o.width&&o.height,c&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,_,o.hasMipmap,e,t,i),this._texImage(n,0,_,e,t,i,r),R(s),o.hasMipmap&&this.generateMipmap(),o.width||(o.width=e),o.height||(o.height=t),c&&!o.depth&&(o.depth=i)}else{const{width:t,height:i,depth:l}=o;if(null==t||null==i)throw new e("Width and height must be specified!");if(c&&null==l)throw new e("Depth must be specified!");if(o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,_,o.hasMipmap,t,i,l),w(r)){const c=r.levels,h=F(n,t,i,l),d=Math.min(h-1,c.length-1);s.texParameteri(o.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,d);const u=_;if(!(u in a))throw new e("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const s=c[Math.min(e,c.length-1)];this._compressedTexImage(n,e,u,t,r,i,s)}),d)}else this._texImage(n,0,_,t,i,l,r),R(s),o.hasMipmap&&this.generateMipmap()}P(s,this._descriptor),U(s,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),R(s),this._descriptor.context.bindTexture(l,t.TEXTURE_UNIT_FOR_UPDATES)}updateData(r,i,s,a,o,n,c=0){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,_=this._deriveInternalFormat(),{context:h,pixelFormat:d,dataType:u,target:p,isImmutable:m}=l;if(m&&!this._wasImmutablyAllocated)throw new e("Cannot update immutable texture before allocation!");const E=h.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES,!0);(i<0||s<0||i+a>l.width||s+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:T}=h;c&&T.pixelStorei(T.UNPACK_SKIP_ROWS,c),G(n)?T.texSubImage2D(p,r,i,s,a,o,d,u,n):w(n)?T.compressedTexSubImage2D(p,r,i,s,a,o,_,n.levels[r]):T.texSubImage2D(p,r,i,s,a,o,d,u,n),c&&T.pixelStorei(T.UNPACK_SKIP_ROWS,0),h.bindTexture(E,t.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(r,i,s,a,o,n,c,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const _=this._descriptor,h=this._deriveInternalFormat(),{context:d,pixelFormat:u,dataType:p,isImmutable:m,target:E}=_;if(m&&!this._wasImmutablyAllocated)throw new e("Cannot update immutable texture before allocation!");O(E)||console.warn("Attempting to set 3D texture data on a non-3D texture");const T=d.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);d.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),(i<0||s<0||a<0||i+o>_.width||s+n>_.height||a+c>_.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:R}=d;if(w(l))l=l.levels[r],R.compressedTexSubImage3D(E,r,i,s,a,o,n,c,h,l);else{const e=l;R.texSubImage3D(E,r,i,s,a,o,n,c,u,p,e)}d.bindTexture(T,t.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const r=this._descriptor;if(!r.hasMipmap){if(this._wasImmutablyAllocated)throw new e("Cannot add mipmaps to immutable texture after allocation");r.hasMipmap=!0,this._samplingModeDirty=!0,b(r)}r.samplingMode===h.LINEAR?(this._samplingModeDirty=!0,r.samplingMode=h.LINEAR_MIPMAP_NEAREST):r.samplingMode===h.NEAREST&&(this._samplingModeDirty=!0,r.samplingMode=h.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(r.target),this._descriptor.context.bindTexture(i,t.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const t=this._descriptor;if(t.hasMipmap){if(this._wasImmutablyAllocated)throw new e("Cannot delete mipmaps to immutable texture after allocation");t.hasMipmap=!1,this._samplingModeDirty=!0,b(t)}t.samplingMode===h.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,t.samplingMode=h.LINEAR):t.samplingMode===h.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=h.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,b(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(P(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(U(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===c.DEPTH_STENCIL&&(this._descriptor.internalFormat=c.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case _.FLOAT:switch(this._descriptor.pixelFormat){case c.RGBA:return this._descriptor.internalFormat=o.RGBA32F;case c.RGB:return this._descriptor.internalFormat=o.RGB32F;default:throw new e("Unable to derive format")}case _.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case c.RGBA:return this._descriptor.internalFormat=o.RGBA8;case c.RGB:return this._descriptor.internalFormat=o.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===c.DEPTH_STENCIL?c.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(t,r,i,s,a,n){const{gl:c}=this._descriptor.context;if(!(r in o))throw new e("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=i?F(t,s,a,n):1;if(O(t)){if(null==n)throw new e("Missing depth dimension for 3D texture upload");c.texStorage3D(t,l,r,s,a,n)}else c.texStorage2D(t,l,r,s,a);this._wasImmutablyAllocated=!0}_texImage(t,r,i,s,a,o,n){const c=this._descriptor.context.gl,l=O(t),{isImmutable:_,pixelFormat:h,dataType:d}=this._descriptor;if(_){if(null!=n){const i=n;if(l){if(null==o)throw new e("Missing depth dimension for 3D texture upload");c.texSubImage3D(t,r,0,0,0,s,a,o,h,d,i)}else c.texSubImage2D(t,r,0,0,s,a,h,d,i)}}else{const _=n;if(l){if(null==o)throw new e("Missing depth dimension for 3D texture upload");c.texImage3D(t,r,i,s,a,o,0,h,d,_)}else c.texImage2D(t,r,i,s,a,0,h,d,_)}}_compressedTexImage(t,r,i,s,a,o,n){const c=this._descriptor.context.gl,l=O(t);if(this._descriptor.isImmutable){if(null!=n)if(l){if(null==o)throw new e("Missing depth dimension for 3D texture upload");c.compressedTexSubImage3D(t,r,0,0,0,s,a,o,i,n)}else c.compressedTexSubImage2D(t,r,0,0,s,a,i,n)}else if(l){if(null==o)throw new e("Missing depth dimension for 3D texture upload");c.compressedTexImage3D(t,r,i,s,a,o,0,n)}else c.compressedTexImage2D(t,r,i,s,a,0,n)}_forEachMipmapLevel(t,r=1/0){let{width:i,height:s,depth:a,hasMipmap:o,target:n}=this._descriptor;const c=n===l.TEXTURE_3D;if(null==i||null==s||c&&null==a)throw new e("Missing texture dimensions for mipmap calculation");for(let e=0;t(e,i,s,a),o&&(1!==i||1!==s||c&&1!==a)&&!(e>=r);++e)i=Math.max(1,i>>1),s=Math.max(1,s>>1),c&&(a=Math.max(1,a>>1))}};function b(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function P(e,t){let r=t.samplingMode,i=t.samplingMode;r===h.LINEAR_MIPMAP_NEAREST||r===h.LINEAR_MIPMAP_LINEAR?(r=h.LINEAR,t.hasMipmap||(i=h.LINEAR)):r!==h.NEAREST_MIPMAP_NEAREST&&r!==h.NEAREST_MIPMAP_LINEAR||(r=h.NEAREST,t.hasMipmap||(i=h.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function U(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function w(e){return null!=e&&"type"in e&&"compressed"===e.type}function G(e){return null!=e&&!w(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function O(e){return e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY}function F(e,t,r,i=1){let s=Math.max(t,r);return e===l.TEXTURE_3D&&(s=Math.max(s,i)),Math.round(Math.log(s)/Math.LN2)+1}S.TEXTURE_UNIT_FOR_UPDATES=0;export{S as T,N as a,I as b,R as c,g as d,M as e,T as f,A as g,m as h,x as u,f as v,E as w};
