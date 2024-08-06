"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8269],{8269:(r,e,t)=>{t.r(e),t.d(e,{l:()=>l});var n,a,o,i=t(67138),u={exports:{}};n=u,a="undefined"!=typeof document?document.currentScript?.src:void 0,o=function(r={}){var e,t,n=Object.assign({},r),o=new Promise(((r,n)=>{e=r,t=n})),i=Object.assign({},n),u="./this.program",s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),a&&(s=a),s=s.startsWith("blob:")?"":s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1),n.print||console.log.bind(console);var l,c,f=n.printErr||console.error.bind(console);Object.assign(n,i),i=null,n.arguments&&n.arguments,n.thisProgram&&(u=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(l=n.wasmBinary);var d,h,m,v,p,y,g,w,_=!1;function b(){var r=c.buffer;n.HEAP8=d=new Int8Array(r),n.HEAP16=m=new Int16Array(r),n.HEAPU8=h=new Uint8Array(r),n.HEAPU16=v=new Uint16Array(r),n.HEAP32=p=new Int32Array(r),n.HEAPU32=y=new Uint32Array(r),n.HEAPF32=g=new Float32Array(r),n.HEAPF64=w=new Float64Array(r)}var A=[],T=[],C=[],F=0,P=null;function W(r){n.onAbort?.(r),f(r="Aborted("+r+")"),_=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}var E,S,O=r=>r.startsWith("data:application/octet-stream;base64,");function $(r){if(r==E&&l)return new Uint8Array(l);throw"both async and sync fetching of the wasm failed"}function M(r,e,t){return function(r){return l||"function"!=typeof fetch?Promise.resolve().then((()=>$(r))):fetch(r,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw`failed to load wasm binary file at '${r}'`;return e.arrayBuffer()})).catch((()=>$(r)))}(r).then((r=>WebAssembly.instantiate(r,e))).then(t,(r=>{f(`failed to asynchronously prepare wasm: ${r}`),W(r)}))}O(E="lclayout.wasm")||(S=E,E=n.locateFile?n.locateFile(S,s):s+S);var R=r=>{for(;r.length>0;)r.shift()(n)};n.noExitRuntime;class k{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){y[this.ptr+4>>2]=r}get_type(){return y[this.ptr+4>>2]}set_destructor(r){y[this.ptr+8>>2]=r}get_destructor(){return y[this.ptr+8>>2]}set_caught(r){r=r?1:0,d[this.ptr+12]=r}get_caught(){return 0!=d[this.ptr+12]}set_rethrown(r){r=r?1:0,d[this.ptr+13]=r}get_rethrown(){return 0!=d[this.ptr+13]}init(r,e){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(e)}set_adjusted_ptr(r){y[this.ptr+16>>2]=r}get_adjusted_ptr(){return y[this.ptr+16>>2]}get_exception_ptr(){if(qr(this.get_type()))return y[this.excPtr>>2];var r=this.get_adjusted_ptr();return 0!==r?r:this.excPtr}}var D={},j=r=>{for(;r.length;){var e=r.pop();r.pop()(e)}};function x(r){return this.fromWireType(y[r>>2])}var I,U,Y,H={},V={},B={},z=r=>{throw new I(r)},N=(r,e,t)=>{function n(e){var n=t(e);n.length!==r.length&&z("Mismatched type converter count");for(var a=0;a<r.length;++a)J(r[a],n[a])}r.forEach((function(r){B[r]=e}));var a=new Array(e.length),o=[],i=0;e.forEach(((r,e)=>{V.hasOwnProperty(r)?a[e]=V[r]:(o.push(r),H.hasOwnProperty(r)||(H[r]=[]),H[r].push((()=>{a[e]=V[r],++i===o.length&&n(a)})))})),0===o.length&&n(a)},q=r=>{for(var e="",t=r;h[t];)e+=U[h[t++]];return e},G=r=>{throw new Y(r)};function J(r,e,t={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(r,e,t={}){var n=e.name;if(r||G(`type "${n}" must have a positive integer typeid pointer`),V.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;G(`Cannot register type '${n}' twice`)}if(V[r]=e,delete B[r],H.hasOwnProperty(r)){var a=H[r];delete H[r],a.forEach((r=>r()))}}(r,e,t)}var L,X,K,Q=[],Z=[],rr=r=>{r>9&&0==--Z[r+1]&&(Z[r]=void 0,Q.push(r))},er=r=>(r||G("Cannot use deleted val. handle = "+r),Z[r]),tr=r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Q.pop()||Z.length;return Z[e]=r,Z[e+1]=1,e}}},nr={name:"emscripten::val",fromWireType:r=>{var e=er(r);return rr(r),e},toWireType:(r,e)=>tr(e),argPackAdvance:8,readValueFromPointer:x,destructorFunction:null},ar=r=>J(r,nr),or=(r,e,t)=>{if(void 0===r[e].overloadTable){var n=r[e];r[e]=function(...n){return r[e].overloadTable.hasOwnProperty(n.length)||G(`Function '${t}' called with an invalid number of arguments (${n.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[n.length].apply(this,n)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},ir=(r,e,t)=>{n.hasOwnProperty(r)?((void 0===t||void 0!==n[r].overloadTable&&void 0!==n[r].overloadTable[t])&&G(`Cannot register public name '${r}' twice`),or(n,r,r),n.hasOwnProperty(t)&&G(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),n[r].overloadTable[t]=e):(n[r]=e,void 0!==t&&(n[r].numArguments=t))},ur=(r,e,t)=>{switch(e){case 1:return t?function(r){return this.fromWireType(d[r])}:function(r){return this.fromWireType(h[r])};case 2:return t?function(r){return this.fromWireType(m[r>>1])}:function(r){return this.fromWireType(v[r>>1])};case 4:return t?function(r){return this.fromWireType(p[r>>2])}:function(r){return this.fromWireType(y[r>>2])};default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},sr=(r,e)=>Object.defineProperty(e,"name",{value:r}),lr=r=>{var e=Br(r),t=q(e);return Nr(e),t},cr=(r,e)=>{var t=V[r];return void 0===t&&G(`${e} has unknown type ${lr(r)}`),t},fr=(r,e)=>{switch(e){case 4:return function(r){return this.fromWireType(g[r>>2])};case 8:return function(r){return this.fromWireType(w[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},dr=[],hr=r=>{var e=dr[r];return e||(r>=dr.length&&(dr.length=r+1),dr[r]=e=L.get(r)),e},mr=(r,e)=>{var t,a,o=(r=q(r)).includes("j")?(t=r,a=e,(...r)=>((r,e,t=[])=>r.includes("j")?((r,e,t)=>(r=r.replace(/p/g,"i"),(0,n["dynCall_"+r])(e,...t)))(r,e,t):hr(e)(...t))(t,a,r)):hr(e);return"function"!=typeof o&&G(`unknown function pointer with signature ${r}: ${e}`),o},vr=(r,e,t)=>{switch(e){case 1:return t?r=>d[r]:r=>h[r];case 2:return t?r=>m[r>>1]:r=>v[r>>1];case 4:return t?r=>p[r>>2]:r=>y[r>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},pr=(r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),u<=127){if(t>=o)break;e[t++]=u}else if(u<=2047){if(t+1>=o)break;e[t++]=192|u>>6,e[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;e[t++]=224|u>>12,e[t++]=128|u>>6&63,e[t++]=128|63&u}else{if(t+3>=o)break;e[t++]=240|u>>18,e[t++]=128|u>>12&63,e[t++]=128|u>>6&63,e[t++]=128|63&u}}return e[t]=0,t-a},yr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},gr="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,wr=(r,e)=>r?((r,e,t)=>{for(var n=e+t,a=e;r[a]&&!(a>=n);)++a;if(a-e>16&&r.buffer&&gr)return gr.decode(r.subarray(e,a));for(var o="";e<a;){var i=r[e++];if(128&i){var u=63&r[e++];if(192!=(224&i)){var s=63&r[e++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&r[e++])<65536)o+=String.fromCharCode(i);else{var l=i-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(h,r,e):"",_r="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,br=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&v[n];)++n;if((t=n<<1)-r>32&&_r)return _r.decode(h.subarray(r,t));for(var o="",i=0;!(i>=e/2);++i){var u=m[r+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Ar=(r,e,t)=>{if(t??=2147483647,t<2)return 0;for(var n=e,a=(t-=2)<2*r.length?t/2:r.length,o=0;o<a;++o){var i=r.charCodeAt(o);m[e>>1]=i,e+=2}return m[e>>1]=0,e-n},Tr=r=>2*r.length,Cr=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=p[r+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Fr=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,a=n+t-4,o=0;o<r.length;++o){var i=r.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++o)),p[e>>2]=i,(e+=4)+4>a)break}return p[e>>2]=0,e-n},Pr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Wr=(r,e,t)=>{var n=[],a=r.toWireType(n,t);return n.length&&(y[e>>2]=tr(n)),a},Er={},Sr=r=>{var e=Er[r];return void 0===e?q(r):e},Or=[],$r=Reflect.construct;K=()=>performance.now();var Mr,Rr,kr=r=>{var e=(r-c.buffer.byteLength+65535)/65536;try{return c.grow(e),b(),1}catch(r){}},Dr={},jr=()=>{if(!jr.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(var e in Dr)void 0===Dr[e]?delete r[e]:r[e]=Dr[e];var t=[];for(var e in r)t.push(`${e}=${r[e]}`);jr.strings=t}return jr.strings},xr=r=>r%4==0&&(r%100!=0||r%400==0),Ir=[31,29,31,30,31,30,31,31,30,31,30,31],Ur=[31,28,31,30,31,30,31,31,30,31,30,31];I=n.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},(()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);U=r})(),Y=n.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},Z.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=()=>Z.length/2-5-Q.length,X=n.UnboundTypeError=(Mr=Error,(Rr=sr("UnboundTypeError",(function(r){this.name="UnboundTypeError",this.message=r;var e=new Error(r).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}))).prototype=Object.create(Mr.prototype),Rr.prototype.constructor=Rr,Rr.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},Rr);var Yr,Hr={a:(r,e,t)=>{throw new k(r).init(e,t),r},k:r=>{var e=D[r];delete D[r];var t=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map((r=>r.getterReturnType)).concat(a.map((r=>r.setterArgumentType)));N([r],o,(r=>{var o={};return a.forEach(((e,t)=>{var n=e.fieldName,i=r[t],u=e.getter,s=e.getterContext,l=r[t+a.length],c=e.setter,f=e.setterContext;o[n]={read:r=>i.fromWireType(u(s,r)),write:(r,e)=>{var t=[];c(f,r,l.toWireType(t,e)),j(t)}}})),[{name:e.name,fromWireType:r=>{var e={};for(var t in o)e[t]=o[t].read(r);return n(r),e},toWireType:(r,e)=>{for(var a in o)if(!(a in e))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,e[a]);return null!==r&&r.push(n,i),i},argPackAdvance:8,readValueFromPointer:x,destructorFunction:n}]}))},w:(r,e,t,n,a)=>{},E:(r,e,t,n)=>{J(r,{name:e=q(e),fromWireType:function(r){return!!r},toWireType:function(r,e){return e?t:n},argPackAdvance:8,readValueFromPointer:function(r){return this.fromWireType(h[r])},destructorFunction:null})},u:(r,e,t)=>{r=q(r),N([],[e],(e=>(e=e[0],n[r]=e.fromWireType(t),[])))},v:ar,K:(r,e,t,n)=>{function a(){}e=q(e),a.values={},J(r,{name:e,constructor:a,fromWireType:function(r){return this.constructor.values[r]},toWireType:(r,e)=>e.value,argPackAdvance:8,readValueFromPointer:ur(e,t,n),destructorFunction:null}),ir(e,a)},q:(r,e,t)=>{var n=cr(r,"enum");e=q(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:sr(`${n.name}_${e}`,(function(){}))}});a.values[t]=o,a[e]=o},t:(r,e,t)=>{J(r,{name:e=q(e),fromWireType:r=>r,toWireType:(r,e)=>e,argPackAdvance:8,readValueFromPointer:fr(e,t),destructorFunction:null})},d:(r,e,t,a,o,i,u)=>{var s=((r,e)=>{for(var t=[],n=0;n<r;n++)t.push(y[e+4*n>>2]);return t})(e,t);r=(r=>{const e=(r=r.trim()).indexOf("(");return-1!==e?r.substr(0,e):r})(r=q(r)),o=mr(a,o),ir(r,(function(){((r,e)=>{var t=[],n={};throw e.forEach((function r(e){n[e]||V[e]||(B[e]?B[e].forEach(r):(t.push(e),n[e]=!0))})),new X(`${r}: `+t.map(lr).join([", "]))})(`Cannot call ${r} due to unbound types`,s)}),e-1),N([],s,(t=>{var a=[t[0],null].concat(t.slice(1));return((r,e,t)=>{n.hasOwnProperty(r)||z("Replacing nonexistent public symbol"),void 0!==n[r].overloadTable&&void 0!==t?n[r].overloadTable[t]=e:(n[r]=e,n[r].argCount=t)})(r,function(r,e,t,n,a,o){var i=e.length;i<2&&G("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=null!==e[1]&&!1,s=function(r){for(var e=1;e<r.length;++e)if(null!==r[e]&&void 0===r[e].destructorFunction)return!0;return!1}(e),l="void"!==e[0].name,c=i-2,f=new Array(c),d=[],h=[];return sr(r,(function(...t){var o;t.length!==c&&G(`function ${r} called with ${t.length} arguments, expected ${c}`),h.length=0,d.length=u?2:1,d[0]=a,u&&(o=e[1].toWireType(h,this),d[1]=o);for(var i=0;i<c;++i)f[i]=e[i+2].toWireType(h,t[i]),d.push(f[i]);return function(r){if(s)j(h);else for(var t=u?1:2;t<e.length;t++){var n=1===t?o:f[t-2];null!==e[t].destructorFunction&&e[t].destructorFunction(n)}if(l)return e[0].fromWireType(r)}(n(...d))}))}(r,a,0,o,i),e-1),[]}))},j:(r,e,t,n,a)=>{e=q(e);var o=r=>r;if(0===n){var i=32-8*t;o=r=>r<<i>>>i}var u=e.includes("unsigned");J(r,{name:e,fromWireType:o,toWireType:u?function(r,e){return this.name,e>>>0}:function(r,e){return this.name,e},argPackAdvance:8,readValueFromPointer:vr(e,t,0!==n),destructorFunction:null})},f:(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(r){var e=y[r>>2],t=y[r+4>>2];return new n(d.buffer,t,e)}J(r,{name:t=q(t),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},L:(r,e)=>{ar(r)},s:(r,e)=>{var t="std::string"===(e=q(e));J(r,{name:e,fromWireType(r){var e,n=y[r>>2],a=r+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==h[u]){var s=wr(o,u-o);void 0===e?e=s:(e+=String.fromCharCode(0),e+=s),o=u+1}}else{var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(h[a+i]);e=l.join("")}return Nr(r),e},toWireType(r,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||G("Cannot pass non-string to std::string"),n=t&&a?yr(e):e.length;var o=zr(4+n+1),i=o+4;if(y[o>>2]=n,t&&a)pr(e,h,i,n+1);else if(a)for(var u=0;u<n;++u){var s=e.charCodeAt(u);s>255&&(Nr(i),G("String has UTF-16 code units that do not fit in 8 bits")),h[i+u]=s}else for(u=0;u<n;++u)h[i+u]=e[u];return null!==r&&r.push(Nr,o),o},argPackAdvance:8,readValueFromPointer:x,destructorFunction(r){Nr(r)}})},r:(r,e,t)=>{var n,a,o,i;t=q(t),2===e?(n=br,a=Ar,i=Tr,o=r=>v[r>>1]):4===e&&(n=Cr,a=Fr,i=Pr,o=r=>y[r>>2]),J(r,{name:t,fromWireType:r=>{for(var t,a=y[r>>2],i=r+4,u=0;u<=a;++u){var s=r+4+u*e;if(u==a||0==o(s)){var l=n(i,s-i);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),i=s+e}}return Nr(r),t},toWireType:(r,n)=>{"string"!=typeof n&&G(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),u=zr(4+o+e);return y[u>>2]=o/e,a(n,u+4,o+e),null!==r&&r.push(Nr,u),u},argPackAdvance:8,readValueFromPointer:x,destructorFunction(r){Nr(r)}})},l:(r,e,t,n,a,o)=>{D[r]={name:q(e),rawConstructor:mr(t,n),rawDestructor:mr(a,o),fields:[]}},e:(r,e,t,n,a,o,i,u,s,l)=>{D[r].fields.push({fieldName:q(e),getterReturnType:t,getter:mr(n,a),getterContext:o,setterArgumentType:i,setter:mr(u,s),setterContext:l})},J:(r,e)=>{J(r,{isVoid:!0,name:e=q(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,e)=>{}})},C:()=>1,H:(r,e,t)=>h.copyWithin(r,e,e+t),g:(r,e,t)=>(r=er(r),e=cr(e,"emval::as"),Wr(e,t,r)),n:(r,e,t,n,a)=>(r=Or[r])(e=er(e),e[t=Sr(t)],n,a),b:rr,o:(r,e,t)=>{var n=((r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=cr(y[e+4*n>>2],"parameter "+n);return t})(r,e),a=n.shift();r--;var o,i,u=new Array(r),s=`methodCaller<(${n.map((r=>r.name)).join(", ")}) => ${a.name}>`;return o=sr(s,((e,o,i,s)=>{for(var l=0,c=0;c<r;++c)u[c]=n[c].readValueFromPointer(s+l),l+=n[c].argPackAdvance;var f=1===t?$r(o,u):o.apply(e,u);return Wr(a,i,f)})),i=Or.length,Or.push(o),i},h:(r,e)=>(r=er(r),e=er(e),tr(r[e])),p:()=>tr([]),I:r=>{r=er(r);for(var e=new Array(r.length),t=0;t<r.length;t++)e[t]=r[t];return tr(e)},m:r=>tr(Sr(r)),c:r=>{var e=er(r);j(e),rr(r)},i:(r,e)=>{var t=(r=cr(r,"_emval_take_value")).readValueFromPointer(e);return tr(t)},B:()=>{W("")},D:()=>Date.now(),x:()=>2147483648,G:K,F:r=>{var e=h.length,t=2147483648;if((r>>>=0)>t)return!1;for(var n,a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,r+100663296);var i=Math.min(t,(n=Math.max(r,o))+(65536-n%65536)%65536);if(kr(i))return!0}return!1},z:(r,e)=>{var t=0;return jr().forEach(((n,a)=>{var o=e+t;y[r+4*a>>2]=o,((r,e)=>{for(var t=0;t<r.length;++t)d[e++]=r.charCodeAt(t);d[e]=0})(n,o),t+=n.length+1})),0},A:(r,e)=>{var t=jr();y[r>>2]=t.length;var n=0;return t.forEach((r=>n+=r.length+1)),y[e>>2]=n,0},y:(r,e,t,n,a)=>((r,e,t,n)=>{var a=y[n+40>>2],o={tm_sec:p[n>>2],tm_min:p[n+4>>2],tm_hour:p[n+8>>2],tm_mday:p[n+12>>2],tm_mon:p[n+16>>2],tm_year:p[n+20>>2],tm_wday:p[n+24>>2],tm_yday:p[n+28>>2],tm_isdst:p[n+32>>2],tm_gmtoff:p[n+36>>2],tm_zone:a?wr(a):""},i=wr(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(r,e,t){for(var n="number"==typeof r?r.toString():r||"";n.length<e;)n=t[0]+n;return n}function h(r,e){return f(r,e,"0")}function m(r,e){function t(r){return r<0?-1:r>0?1:0}var n;return 0===(n=t(r.getFullYear()-e.getFullYear()))&&0===(n=t(r.getMonth()-e.getMonth()))&&(n=t(r.getDate()-e.getDate())),n}function v(r){switch(r.getDay()){case 0:return new Date(r.getFullYear()-1,11,29);case 1:return r;case 2:return new Date(r.getFullYear(),0,3);case 3:return new Date(r.getFullYear(),0,2);case 4:return new Date(r.getFullYear(),0,1);case 5:return new Date(r.getFullYear()-1,11,31);case 6:return new Date(r.getFullYear()-1,11,30)}}function g(r){var e=((r,e)=>{for(var t=new Date(r.getTime());e>0;){var n=xr(t.getFullYear()),a=t.getMonth(),o=(n?Ir:Ur)[a];if(!(e>o-t.getDate()))return t.setDate(t.getDate()+e),t;e-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(r.tm_year+1900,0,1),r.tm_yday),t=new Date(e.getFullYear(),0,4),n=new Date(e.getFullYear()+1,0,4),a=v(t),o=v(n);return m(a,e)<=0?m(o,e)<=0?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var w={"%a":r=>l[r.tm_wday].substring(0,3),"%A":r=>l[r.tm_wday],"%b":r=>c[r.tm_mon].substring(0,3),"%B":r=>c[r.tm_mon],"%C":r=>h((r.tm_year+1900)/100|0,2),"%d":r=>h(r.tm_mday,2),"%e":r=>f(r.tm_mday,2," "),"%g":r=>g(r).toString().substring(2),"%G":g,"%H":r=>h(r.tm_hour,2),"%I":r=>{var e=r.tm_hour;return 0==e?e=12:e>12&&(e-=12),h(e,2)},"%j":r=>h(r.tm_mday+((r,e)=>{for(var t=0,n=0;n<=e;t+=r[n++]);return t})(xr(r.tm_year+1900)?Ir:Ur,r.tm_mon-1),3),"%m":r=>h(r.tm_mon+1,2),"%M":r=>h(r.tm_min,2),"%n":()=>"\n","%p":r=>r.tm_hour>=0&&r.tm_hour<12?"AM":"PM","%S":r=>h(r.tm_sec,2),"%t":()=>"\t","%u":r=>r.tm_wday||7,"%U":r=>{var e=r.tm_yday+7-r.tm_wday;return h(Math.floor(e/7),2)},"%V":r=>{var e=Math.floor((r.tm_yday+7-(r.tm_wday+6)%7)/7);if((r.tm_wday+371-r.tm_yday-2)%7<=2&&e++,e){if(53==e){var t=(r.tm_wday+371-r.tm_yday)%7;4==t||3==t&&xr(r.tm_year)||(e=1)}}else{e=52;var n=(r.tm_wday+7-r.tm_yday-1)%7;(4==n||5==n&&xr(r.tm_year%400-1))&&e++}return h(e,2)},"%w":r=>r.tm_wday,"%W":r=>{var e=r.tm_yday+7-(r.tm_wday+6)%7;return h(Math.floor(e/7),2)},"%y":r=>(r.tm_year+1900).toString().substring(2),"%Y":r=>r.tm_year+1900,"%z":r=>{var e=r.tm_gmtoff,t=e>=0;return e=(e=Math.abs(e)/60)/60*100+e%60,(t?"+":"-")+String("0000"+e).slice(-4)},"%Z":r=>r.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),w)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),w[s](o)));i=i.replace(/\0\0/g,"%");var _,b,A,T,C,F=(b=yr(_=i)+1,A=new Array(b),pr(_,A,0,A.length),A);return F.length>e?0:(T=F,C=r,d.set(T,C),F.length-1)})(r,e,t,n)},Vr=function(){var r,e,a,o,i={a:Hr};function u(r,e){var t;return Vr=r.exports,c=Vr.M,b(),L=Vr.P,t=Vr.N,T.unshift(t),function(r){if(F--,n.monitorRunDependencies?.(F),0==F&&P){var e=P;P=null,e()}}(),Vr}if(F++,n.monitorRunDependencies?.(F),n.instantiateWasm)try{return n.instantiateWasm(i,u)}catch(r){f(`Module.instantiateWasm callback failed with error: ${r}`),t(r)}return(r=l,e=E,a=i,o=function(r){u(r.instance)},r||"function"!=typeof WebAssembly.instantiateStreaming||O(e)||"function"!=typeof fetch?M(e,a,o):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,a).then(o,(function(r){return f(`wasm streaming compile failed: ${r}`),f("falling back to ArrayBuffer instantiation"),M(e,a,o)}))))).catch(t),{}}(),Br=r=>(Br=Vr.O)(r),zr=n._malloc=r=>(zr=n._malloc=Vr.Q)(r),Nr=n._free=r=>(Nr=n._free=Vr.R)(r),qr=r=>(qr=Vr.S)(r);function Gr(){function r(){Yr||(Yr=!0,n.calledRun=!0,_||(R(T),e(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)r=n.postRun.shift(),C.unshift(r);var r;R(C)}()))}F>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)r=n.preRun.shift(),A.unshift(r);var r;R(A)}(),F>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),r()}),1)):r()))}if(n.dynCall_viijii=(r,e,t,a,o,i,u)=>(n.dynCall_viijii=Vr.T)(r,e,t,a,o,i,u),n.dynCall_iiiiij=(r,e,t,a,o,i,u)=>(n.dynCall_iiiiij=Vr.U)(r,e,t,a,o,i,u),n.dynCall_iiiiijj=(r,e,t,a,o,i,u,s,l)=>(n.dynCall_iiiiijj=Vr.V)(r,e,t,a,o,i,u,s,l),n.dynCall_iiiiiijj=(r,e,t,a,o,i,u,s,l,c)=>(n.dynCall_iiiiiijj=Vr.W)(r,e,t,a,o,i,u,s,l,c),P=function r(){Yr||Gr(),Yr||(P=r)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Gr(),o},n.exports=o;const s=(0,i.g)(u.exports),l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);