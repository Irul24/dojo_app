// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","./checkWebGLError","./enums","./ShaderTranspiler"],function(m,x,n,g,r){function t(a,b,c){a=a.gl;const d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);n.webglValidateShadersEnabled()&&!a.getShaderParameter(d,a.COMPILE_STATUS)&&(console.error("Compile error in ".concat(b===g.ShaderType.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(a.getShaderInfoLog(d)),console.error(v(c)));return d}function v(a){let b=2;return a.replaceAll("\n",()=>{var c=
b++;c=1E3<=c?c.toString():("  "+c).slice(-3);return"\n"+c+":"})}function l(a,b,c){const d=a.get(b);if(!d)return a.set(b,Array.from(c)),!0;const e=c.length;if(d.length!==e)return a.set(b,Array.from(c)),!0;for(a=0;a<e;++a)if(b=c[a],d[a]!==b){for(d[a]=b;a<e;++a)d[a]=c[a];return!0}return!1}class w{constructor(a,b,c,d,e=new Map,h=[]){this._context=a;this._locations=d;this._uniformBlockBindings=e;this._transformFeedbackVaryings=h;this._refCount=1;this._compiled=!1;this._linesOfCode=0;this._nameToUniformLocation=
new Map;this._nameToUniform1=new Map;this._nameToUniform1v=new Map;this._nameToUniform2=new Map;this._nameToUniform3=new Map;this._nameToUniform4=new Map;this._nameToUniformMatrix3=new Map;this._nameToUniformMatrix4=new Map;a||console.error("RenderingContext isn't initialized!");0===b.length&&console.error("Shaders source should not be empty!");b=r.transpileShader(b,g.ShaderType.VERTEX_SHADER);c=r.transpileShader(c,g.ShaderType.FRAGMENT_SHADER);this._vShader=t(this._context,g.ShaderType.VERTEX_SHADER,
b);this._fShader=t(this._context,g.ShaderType.FRAGMENT_SHADER,c);u.enabled&&(this._linesOfCode=b.match(/\n/g).length+c.match(/\n/g).length+2,this._context.instanceCounter.increment(g.ResourceType.LinesOfCode,this._vShader,this._linesOfCode));this._vShader&&this._fShader||console.error("Error loading shaders!");this._context.instanceCounter.increment(g.ResourceType.Shader,this);n.webglValidateShadersEnabled()&&(this.vertexShader=b,this.fragmentShader=c);this.usedMemory=b.length+c.length;const f=this._context.gl,
k=f.createProgram();f.attachShader(k,this._vShader);f.attachShader(k,this._fShader);this._locations.forEach((p,q)=>f.bindAttribLocation(k,p,q));this._transformFeedbackVaryings?.length&&f.transformFeedbackVaryings(k,this._transformFeedbackVaryings,f.SEPARATE_ATTRIBS);f.linkProgram(k);n.webglValidateShadersEnabled()&&!f.getProgramParameter(k,f.LINK_STATUS)&&console.error("Could not link shader\n"+`validated: ${f.getProgramParameter(k,f.VALIDATE_STATUS)}`+`, gl error ${f.getError()}`+`, vertex: ${f.getShaderParameter(this._vShader,
f.COMPILE_STATUS)}`+`, fragment: ${f.getShaderParameter(this._fShader,f.COMPILE_STATUS)}`+`, info log: ${f.getProgramInfoLog(k)}`+`, vertex source: ${this.vertexShader}`+`, fragment source: ${this.fragmentShader}`);for(const [p,q]of this._uniformBlockBindings)a=f.getUniformBlockIndex(k,p),4294967295>a&&f.uniformBlockBinding(k,a,q);this._glName=k;this._context.instanceCounter.increment(g.ResourceType.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;
const a=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==a||null==this.glName?this._compiled=!0:this._compiled=!!this._context.gl.getProgramParameter(this.glName,a.COMPLETION_STATUS_KHR)}dispose(){if(!(0<--this._refCount)){var a=this._context.gl,b=this._context.instanceCounter;this._nameToUniformLocation.forEach(c=>c&&b.decrement(g.ResourceType.Uniform,c));this._nameToUniformLocation.clear();this._vShader&&(0<this._linesOfCode&&(b.decrement(g.ResourceType.LinesOfCode,this._vShader,
this._linesOfCode),this._linesOfCode=0),a.deleteShader(this._vShader),this._vShader=null,b.decrement(g.ResourceType.Shader,this));this._fShader&&(a.deleteShader(this._fShader),this._fShader=null);this._glName&&(a.deleteProgram(this._glName),this._glName=null,b.decrement(g.ResourceType.Program,this))}}ref(){++this._refCount}_getUniformLocation(a){var b=this._nameToUniformLocation.get(a);return void 0!==b?b:this.glName?(b=this._context.gl.getUniformLocation(this.glName,a),this._nameToUniformLocation.set(a,
b),b&&this._context.instanceCounter.increment(g.ResourceType.Uniform,b),b):null}hasUniform(a){return null!=this._getUniformLocation(a)}setUniform1i(a,b){const c=this._nameToUniform1.get(a);if(void 0===c||b!==c)this._context.gl.uniform1i(this._getUniformLocation(a),b),this._nameToUniform1.set(a,b)}setUniform1iv(a,b){l(this._nameToUniform1v,a,b)&&this._context.gl.uniform1iv(this._getUniformLocation(a),b)}setUniform2iv(a,b){l(this._nameToUniform2,a,b)&&this._context.gl.uniform2iv(this._getUniformLocation(a),
b)}setUniform3iv(a,b){l(this._nameToUniform3,a,b)&&this._context.gl.uniform3iv(this._getUniformLocation(a),b)}setUniform4iv(a,b){l(this._nameToUniform4,a,b)&&this._context.gl.uniform4iv(this._getUniformLocation(a),b)}setUniform1f(a,b){const c=this._nameToUniform1.get(a);if(void 0===c||b!==c)this._context.gl.uniform1f(this._getUniformLocation(a),b),this._nameToUniform1.set(a,b)}setUniform1fv(a,b){l(this._nameToUniform1v,a,b)&&this._context.gl.uniform1fv(this._getUniformLocation(a),b)}setUniform2f(a,
b,c){const d=this._nameToUniform2.get(a);if(void 0===d)this._context.gl.uniform2f(this._getUniformLocation(a),b,c),this._nameToUniform2.set(a,[b,c]);else if(b!==d[0]||c!==d[1])this._context.gl.uniform2f(this._getUniformLocation(a),b,c),d[0]=b,d[1]=c}setUniform2fv(a,b){l(this._nameToUniform2,a,b)&&this._context.gl.uniform2fv(this._getUniformLocation(a),b)}setUniform3f(a,b,c,d){const e=this._nameToUniform3.get(a);if(void 0===e)this._context.gl.uniform3f(this._getUniformLocation(a),b,c,d),this._nameToUniform3.set(a,
[b,c,d]);else if(b!==e[0]||c!==e[1]||d!==e[2])this._context.gl.uniform3f(this._getUniformLocation(a),b,c,d),e[0]=b,e[1]=c,e[2]=d}setUniform3fv(a,b){const c=this._getUniformLocation(a);null!=c&&l(this._nameToUniform3,a,b)&&this._context.gl.uniform3fv(c,b)}setUniform4f(a,b,c,d,e){const h=this._nameToUniform4.get(a);if(void 0===h)this._context.gl.uniform4f(this._getUniformLocation(a),b,c,d,e),this._nameToUniform4.set(a,[b,c,d,e]);else if(void 0===h||b!==h[0]||c!==h[1]||d!==h[2]||e!==h[3])this._context.gl.uniform4f(this._getUniformLocation(a),
b,c,d,e),h[0]=b,h[1]=c,h[2]=d,h[3]=e}setUniform4fv(a,b){const c=this._getUniformLocation(a);null!=c&&l(this._nameToUniform4,a,b)&&this._context.gl.uniform4fv(c,b)}setUniformMatrix3fv(a,b,c=!1){const d=this._getUniformLocation(a);null!=d&&l(this._nameToUniformMatrix3,a,b)&&this._context.gl.uniformMatrix3fv(d,c,b)}setUniformMatrix4fv(a,b,c=!1){const d=this._getUniformLocation(a);null!=d&&l(this._nameToUniformMatrix4,a,b)&&this._context.gl.uniformMatrix4fv(d,c,b)}stop(){}}const u={enabled:!1};m.Program=
w;m.test=u;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});