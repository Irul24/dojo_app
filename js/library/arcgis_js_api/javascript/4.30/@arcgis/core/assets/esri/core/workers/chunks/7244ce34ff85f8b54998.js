"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2913,7138],{67138:(e,r,t)=>{t.d(r,{c:()=>n,g:()=>a});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},62913:(e,r,t)=>{t.r(r),t.d(r,{l:()=>l});var n,a,o,i=t(67138),u={exports:{}};n=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,o=function(e={}){var r,t,n=e;n.ready=new Promise(((e,n)=>{r=e,t=n}));var o=Object.assign({},n),i="./this.program",u="";"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),a&&(u=a),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"",n.print||console.log.bind(console);var s,l,c=n.printErr||console.error.bind(console);Object.assign(n,o),o=null,n.arguments&&n.arguments,n.thisProgram&&(i=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(s=n.wasmBinary),"object"!=typeof WebAssembly&&W("no native wasm support detected");var f,d,h,p,m,v,g,y,w=!1;function _(){var e=l.buffer;n.HEAP8=f=new Int8Array(e),n.HEAP16=h=new Int16Array(e),n.HEAPU8=d=new Uint8Array(e),n.HEAPU16=p=new Uint16Array(e),n.HEAP32=m=new Int32Array(e),n.HEAPU32=v=new Uint32Array(e),n.HEAPF32=g=new Float32Array(e),n.HEAPF64=y=new Float64Array(e)}var b=[],A=[],T=[],C=0,F=null;function W(e){n.onAbort&&n.onAbort(e),c(e="Aborted("+e+")"),w=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var E,P,S=e=>e.startsWith("data:application/octet-stream;base64,");function O(e){if(e==E&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}function R(e,r,t){return function(e){return s||"function"!=typeof fetch?Promise.resolve().then((()=>O(e))):fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>O(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{c(`failed to asynchronously prepare wasm: ${e}`),W(e)}))}S(E="lyr3DMain.wasm")||(P=E,E=n.locateFile?n.locateFile(P,u):u+P);var j=e=>{for(;e.length>0;)e.shift()(n)};function x(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){v[this.ptr+4>>2]=e},this.get_type=function(){return v[this.ptr+4>>2]},this.set_destructor=function(e){v[this.ptr+8>>2]=e},this.get_destructor=function(){return v[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,f[this.ptr+12|0]=e},this.get_caught=function(){return 0!=f[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,f[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=f[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){v[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return v[this.ptr+16>>2]},this.get_exception_ptr=function(){if(ze(this.get_type()))return v[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}n.noExitRuntime;var M={},D=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function k(e){return this.fromWireType(m[e>>2])}var $,I,U,Y={},H={},V={},z=e=>{throw new $(e)},B=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&z("Mismatched type converter count");for(var a=0;a<e.length;++a)q(e[a],n[a])}e.forEach((function(e){V[e]=r}));var a=new Array(r.length),o=[],i=0;r.forEach(((e,r)=>{H.hasOwnProperty(e)?a[r]=H[e]:(o.push(e),Y.hasOwnProperty(e)||(Y[e]=[]),Y[e].push((()=>{a[r]=H[e],++i===o.length&&n(a)})))})),0===o.length&&n(a)},L={},N=e=>{for(var r="",t=e;d[t];)r+=I[d[t++]];return r},G=e=>{throw new U(e)};function q(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r,t={}){var n=r.name;if(e||G(`type "${n}" must have a positive integer typeid pointer`),H.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;G(`Cannot register type '${n}' twice`)}if(H[e]=r,delete V[e],Y.hasOwnProperty(e)){var a=Y[e];delete Y[e],a.forEach((e=>e()))}}(e,r,t)}function J(){this.allocated=[void 0],this.freelist=[]}var X,Z,K=new J,Q=e=>{e>=K.reserved&&0==--K.get(e).refcount&&K.free(e)},ee=e=>(e||G("Cannot use deleted val. handle = "+e),K.get(e).value),re=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return K.allocate({refcount:1,value:e})}},te=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(g[e>>2])};case 8:return function(e){return this.fromWireType(y[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},ne=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||G(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},ae=[],oe=e=>{var r=ae[e];return r||(e>=ae.length&&(ae.length=e+1),ae[e]=r=X.get(e)),r},ie=(e,r)=>{var t,a,o,i=(e=N(e)).includes("j")?(t=e,a=r,o=[],function(){return o.length=0,Object.assign(o,arguments),((e,r,t)=>e.includes("j")?((e,r,t)=>{var a=n["dynCall_"+e];return t&&t.length?a.apply(null,[r].concat(t)):a.call(null,r)})(e,r,t):oe(r).apply(null,t))(t,a,o)}):oe(r);return"function"!=typeof i&&G(`unknown function pointer with signature ${e}: ${r}`),i},ue=e=>{var r=He(e),t=N(r);return Ue(r),t},se=(e,r,t)=>{switch(r){case 1:return t?e=>f[0|e]:e=>d[0|e];case 2:return t?e=>h[e>>1]:e=>p[e>>1];case 4:return t?e=>m[e>>2]:e=>v[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}};function le(e){return this.fromWireType(v[e>>2])}var ce,fe,de,he,pe,me,ve=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<e.length;++i){var u=e.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},ge=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},ye="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,we=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&ye)return ye.decode(e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var u=63&e[r++];if(192!=(224&i)){var s=63&e[r++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var l=i-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(d,e,r):"",_e="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,be=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-e>32&&_e)return _e.decode(d.subarray(e,t));for(var o="",i=0;!(i>=r/2);++i){var u=h[e+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Ae=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var i=e.charCodeAt(o);h[r>>1]=i,r+=2}return h[r>>1]=0,r-n},Te=e=>2*e.length,Ce=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=m[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Fe=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var i=e.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++o)),m[r>>2]=i,(r+=4)+4>a)break}return m[r>>2]=0,r-n},We=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},Ee={},Pe=e=>{var r=(e-l.buffer.byteLength+65535)/65536;try{return l.grow(r),_(),1}catch(e){}},Se={},Oe=()=>{if(!Oe.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:i||"./this.program"};for(var r in Se)void 0===Se[r]?delete e[r]:e[r]=Se[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);Oe.strings=t}return Oe.strings},Re=e=>e%4==0&&(e%100!=0||e%400==0),je=[31,29,31,30,31,30,31,31,30,31,30,31],xe=[31,28,31,30,31,30,31,31,30,31,30,31],Me=(e,r)=>{e<128?r.push(e):r.push(e%128|128,e>>7)},De=[],ke=(e,r)=>{X.set(e,r),ae[e]=X.get(e)};$=n.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);I=e})(),U=n.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(J.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),K.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),K.reserved=K.allocated.length,n.count_emval_handles=()=>{for(var e=0,r=K.reserved;r<K.allocated.length;++r)void 0!==K.allocated[r]&&++e;return e},Z=n.UnboundTypeError=(fe=Error,pe=function(e){this.name=de,this.message=e;var r=new Error(e).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))},he=(e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?`_${e}`:e})(he=de="UnboundTypeError"),me={[he]:function(){return pe.apply(this,arguments)}}[he],me.prototype=Object.create(fe.prototype),me.prototype.constructor=me,me.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},me);var $e={k:(e,r,t)=>{throw new x(e).init(r,t),e},l:e=>{var r=M[e];delete M[e];var t=r.elements,n=t.length,a=t.map((e=>e.getterReturnType)).concat(t.map((e=>e.setterArgumentType))),o=r.rawConstructor,i=r.rawDestructor;B([e],a,(function(e){return t.forEach(((r,t)=>{var a=e[t],o=r.getter,i=r.getterContext,u=e[t+n],s=r.setter,l=r.setterContext;r.read=e=>a.fromWireType(o(i,e)),r.write=(e,r)=>{var t=[];s(l,e,u.toWireType(t,r)),D(t)}})),[{name:r.name,fromWireType:e=>{for(var r=new Array(n),a=0;a<n;++a)r[a]=t[a].read(e);return i(e),r},toWireType:(e,a)=>{if(n!==a.length)throw new TypeError(`Incorrect number of tuple elements for ${r.name}: expected=${n}, actual=${a.length}`);for(var u=o(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==e&&e.push(i,u),u},argPackAdvance:8,readValueFromPointer:k,destructorFunction:i}]}))},s:e=>{var r=L[e];delete L[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));B([e],o,(e=>{var o={};return a.forEach(((r,t)=>{var n=r.fieldName,i=e[t],u=r.getter,s=r.getterContext,l=e[t+a.length],c=r.setter,f=r.setterContext;o[n]={read:e=>i.fromWireType(u(s,e)),write:(e,r)=>{var t=[];c(f,e,l.toWireType(t,r)),D(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in o)r[t]=o[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in o)if(!(a in r))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,r[a]);return null!==e&&e.push(n,i),i},argPackAdvance:8,readValueFromPointer:k,destructorFunction:n}]}))},u:(e,r,t,n,a)=>{},B:(e,r,t,n)=>{q(e,{name:r=N(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(d[e])},destructorFunction:null})},A:(e,r)=>{q(e,{name:r=N(r),fromWireType:e=>{var r=ee(e);return Q(e),r},toWireType:(e,r)=>re(r),argPackAdvance:8,readValueFromPointer:k,destructorFunction:null})},r:(e,r,t)=>{q(e,{name:r=N(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:8,readValueFromPointer:te(r,t),destructorFunction:null})},c:(e,r,t,a,o,i,u)=>{var s=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(v[r+4*n>>2]);return t})(r,t);e=(e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?(")"==e[e.length-1]||W("Parentheses for argument names should match."),e.substr(0,r)):e})(e=N(e)),o=ie(a,o),((e,r,t)=>{n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&G(`Cannot register public name '${e}' twice`),ne(n,e,e),n.hasOwnProperty(t)&&G(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))})(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||H[r]||(V[r]?V[r].forEach(e):(t.push(r),n[r]=!0))})),new Z(`${e}: `+t.map(ue).join([", "]))})(`Cannot call ${e} due to unbound types`,s)}),r-1),B([],s,(function(t){var a=[t[0],null].concat(t.slice(1));return((e,r,t)=>{n.hasOwnProperty(e)||z("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)})(e,function(e,r,t,n,a,o){var i=r.length;i<2&&G("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&!1,s=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){s=!0;break}var c="void"!==r[0].name,f=i-2,d=new Array(f),h=[],p=[];return function(){var t;arguments.length!==f&&G(`function ${e} called with ${arguments.length} arguments, expected ${f}`),p.length=0,h.length=u?2:1,h[0]=a,u&&(t=r[1].toWireType(p,this),h[1]=t);for(var o=0;o<f;++o)d[o]=r[o+2].toWireType(p,arguments[o]),h.push(d[o]);return function(e){if(s)D(p);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(c)return r[0].fromWireType(e)}(n.apply(null,h))}}(e,a,0,o,i),r-1),[]}))},f:(e,r,t,n,a)=>{r=N(r);var o=e=>e;if(0===n){var i=32-8*t;o=e=>e<<i>>>i}var u=r.includes("unsigned");q(e,{name:r,fromWireType:o,toWireType:u?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:8,readValueFromPointer:se(r,t,0!==n),destructorFunction:null})},b:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=v[e>>2],t=v[e+4>>2];return new n(f.buffer,t,r)}q(e,{name:t=N(t),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},q:(e,r)=>{var t="std::string"===(r=N(r));q(e,{name:r,fromWireType(e){var r,n=v[e>>2],a=e+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==d[u]){var s=we(o,u-o);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),o=u+1}}else{var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(d[a+i]);r=l.join("")}return Ue(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||G("Cannot pass non-string to std::string"),n=t&&a?ge(r):r.length;var o=Ye(4+n+1),i=o+4;if(v[o>>2]=n,t&&a)ve(r,d,i,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(Ue(i),G("String has UTF-16 code units that do not fit in 8 bits")),d[i+u]=s}else for(u=0;u<n;++u)d[i+u]=r[u];return null!==e&&e.push(Ue,o),o},argPackAdvance:8,readValueFromPointer:le,destructorFunction(e){Ue(e)}})},o:(e,r,t)=>{var n,a,o,i,u;t=N(t),2===r?(n=be,a=Ae,i=Te,o=()=>p,u=1):4===r&&(n=Ce,a=Fe,i=We,o=()=>v,u=2),q(e,{name:t,fromWireType:e=>{for(var t,a=v[e>>2],i=o(),s=e+4,l=0;l<=a;++l){var c=e+4+l*r;if(l==a||0==i[c>>u]){var f=n(s,c-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=c+r}}return Ue(e),t},toWireType:(e,n)=>{"string"!=typeof n&&G(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),s=Ye(4+o+r);return v[s>>2]=o>>u,a(n,s+4,o+r),null!==e&&e.push(Ue,s),s},argPackAdvance:8,readValueFromPointer:k,destructorFunction(e){Ue(e)}})},m:(e,r,t,n,a,o)=>{M[e]={name:N(r),rawConstructor:ie(t,n),rawDestructor:ie(a,o),elements:[]}},d:(e,r,t,n,a,o,i,u,s)=>{M[e].elements.push({getterReturnType:r,getter:ie(t,n),getterContext:a,setterArgumentType:o,setter:ie(i,u),setterContext:s})},t:(e,r,t,n,a,o)=>{L[e]={name:N(r),rawConstructor:ie(t,n),rawDestructor:ie(a,o),fields:[]}},i:(e,r,t,n,a,o,i,u,s,l)=>{L[e].fields.push({fieldName:N(r),getterReturnType:t,getter:ie(n,a),getterContext:o,setterArgumentType:i,setter:ie(u,s),setterContext:l})},C:(e,r)=>{q(e,{isVoid:!0,name:r=N(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},a:Q,n:e=>{e>4&&(K.get(e).refcount+=1)},D:()=>re([]),h:e=>{return re(void 0===(t=Ee[r=e])?N(r):t);var r,t},j:()=>re({}),e:(e,r,t)=>{e=ee(e),r=ee(r),t=ee(t),e[r]=t},g:(e,r)=>{var t,n;void 0===(n=H[t=e])&&G("_emval_take_value has unknown type "+ue(t));var a=(e=n).readValueFromPointer(r);return re(a)},p:()=>{W("")},z:(e,r,t)=>d.copyWithin(e,r,r+t),y:e=>{var r=d.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var i=Math.min(t,(n=Math.max(e,o))+(65536-n%65536)%65536);if(Pe(i))return!0}return!1},w:(e,r)=>{var t=0;return Oe().forEach(((n,a)=>{var o=r+t;v[e+4*a>>2]=o,((e,r)=>{for(var t=0;t<e.length;++t)f[0|r++]=e.charCodeAt(t);f[0|r]=0})(n,o),t+=n.length+1})),0},x:(e,r)=>{var t=Oe();v[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),v[r>>2]=n,0},v:(e,r,t,n,a)=>((e,r,t,n)=>{var a=v[n+40>>2],o={tm_sec:m[n>>2],tm_min:m[n+4>>2],tm_hour:m[n+8>>2],tm_mday:m[n+12>>2],tm_mon:m[n+16>>2],tm_year:m[n+20>>2],tm_wday:m[n+24>>2],tm_yday:m[n+28>>2],tm_isdst:m[n+32>>2],tm_gmtoff:m[n+36>>2],tm_zone:a?we(a):""},i=we(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function d(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function h(e,r){return d(e,r,"0")}function p(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function g(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function y(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=Re(t.getFullYear()),a=t.getMonth(),o=(n?je:xe)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=g(t),o=g(n);return p(a,r)<=0?p(o,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var w={"%a":e=>l[e.tm_wday].substring(0,3),"%A":e=>l[e.tm_wday],"%b":e=>c[e.tm_mon].substring(0,3),"%B":e=>c[e.tm_mon],"%C":e=>h((e.tm_year+1900)/100|0,2),"%d":e=>h(e.tm_mday,2),"%e":e=>d(e.tm_mday,2," "),"%g":e=>y(e).toString().substring(2),"%G":e=>y(e),"%H":e=>h(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),h(r,2)},"%j":e=>h(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(Re(e.tm_year+1900)?je:xe,e.tm_mon-1),3),"%m":e=>h(e.tm_mon+1,2),"%M":e=>h(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>h(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return h(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&Re(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&Re(e.tm_year%400-1))&&r++}return h(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return h(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),w)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),w[s](o)));i=i.replace(/\0\0/g,"%");var _,b,A,T,C,F=(b=ge(_=i)+1,A=new Array(b),ve(_,A,0,A.length),A);return F.length>r?0:(T=F,C=e,f.set(T,C),F.length-1)})(e,r,t,n)},Ie=function(){var e,r,a,o,i={a:$e};function u(e,r){var t;return Ie=e.exports,l=Ie.E,_(),X=Ie.G,t=Ie.F,A.unshift(t),function(e){if(C--,n.monitorRunDependencies&&n.monitorRunDependencies(C),0==C&&F){var r=F;F=null,r()}}(),Ie}if(C++,n.monitorRunDependencies&&n.monitorRunDependencies(C),n.instantiateWasm)try{return n.instantiateWasm(i,u)}catch(e){c(`Module.instantiateWasm callback failed with error: ${e}`),t(e)}return(e=s,r=E,a=i,o=function(e){u(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||S(r)||"function"!=typeof fetch?R(r,a,o):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,a).then(o,(function(e){return c(`wasm streaming compile failed: ${e}`),c("falling back to ArrayBuffer instantiation"),R(r,a,o)}))))).catch(t),{}}(),Ue=n._free=e=>(Ue=n._free=Ie.H)(e),Ye=n._malloc=e=>(Ye=n._malloc=Ie.I)(e),He=e=>(He=Ie.J)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=Ie.K)();var Ve,ze=e=>(ze=Ie.L)(e);function Be(){function e(){Ve||(Ve=!0,n.calledRun=!0,w||(j(A),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),T.unshift(e);var e;j(T)}()))}C>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),b.unshift(e);var e;j(b)}(),C>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.dynCall_viji=(e,r,t,a,o)=>(n.dynCall_viji=Ie.M)(e,r,t,a,o),n.dynCall_ji=(e,r)=>(n.dynCall_ji=Ie.N)(e,r),n.dynCall_viijii=(e,r,t,a,o,i,u)=>(n.dynCall_viijii=Ie.O)(e,r,t,a,o,i,u),n.dynCall_iiiiij=(e,r,t,a,o,i,u)=>(n.dynCall_iiiiij=Ie.P)(e,r,t,a,o,i,u),n.dynCall_iiiiijj=(e,r,t,a,o,i,u,s,l)=>(n.dynCall_iiiiijj=Ie.Q)(e,r,t,a,o,i,u,s,l),n.dynCall_iiiiiijj=(e,r,t,a,o,i,u,s,l,c)=>(n.dynCall_iiiiiijj=Ie.R)(e,r,t,a,o,i,u,s,l,c),n.addFunction=(e,r)=>{var t=(e=>(ce||(ce=new WeakMap,((e,r)=>{if(ce)for(var t=0;t<0+r;t++){var n=oe(t);n&&ce.set(n,t)}})(0,X.length)),ce.get(e)||0))(e);if(t)return t;var n=(()=>{if(De.length)return De.pop();try{X.grow(1)}catch(e){if(!(e instanceof RangeError))throw e;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return X.length-1})();try{ke(n,e)}catch(t){if(!(t instanceof TypeError))throw t;var a=((e,r)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{for(var r={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==e[0]?[]:[r[e[0]]]},n=1;n<e.length;++n)t.parameters.push(r[e[n]]);return t})(r),e);var t=[1];((e,r)=>{var t=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};r.push(96),Me(n.length,r);for(var o=0;o<n.length;++o)r.push(a[n[o]]);"v"==t?r.push(0):r.push(1,a[t])})(r,t);var n=[0,97,115,109,1,0,0,0,1];Me(t.length,n),n.push.apply(n,t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:e}}).exports.f})(e,r);ke(n,a)}return ce.set(e,n),n},n.UTF8ToString=we,F=function e(){Ve||Be(),Ve||(F=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Be(),e.ready},n.exports=o;const s=(0,i.g)(u.exports),l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);