"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2444],{42444:(e,t,r)=>{var s,n,o,a,i,l,c,u,d,p,h,f,m,g,y;r.r(t),r.d(t,{destroyWasm:()=>q,initialize:()=>N,process:()=>L}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(s||(s={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(o||(o={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(i||(i={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(d||(d={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(p||(p={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(h||(h={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(f||(f={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(m||(m={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(g||(g={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(y||(y={}));var w=r(18683);function b(e){return(0,w.g)(`esri/libs/lyr3d/${e}`)}let S,T;async function L(e){if(await N(),e.inputs.length<1)return{result:{status:y.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const r of e.inputs){const e=T._malloc(r.byteLength);new Uint8Array(T.HEAPU8.buffer,e,r.byteLength).set(new Uint8Array(r)),t.ptrs.push(e),t.sizes.push(r.byteLength)}const r=T.process(e.jobDescJson,t,e.isMissingResourceCase),s=r.status===y.Succeeded&&r.data,n=r.status===y.MissingInputs&&r.missingInputUrls.length>0;if(s){const e=r.data.slice();r.data=e}else n&&(r.jobDescJson=r.jobDescJson.slice(0),r.originalInputs=e.inputs);for(let e=0;e<t.ptrs.length;++e)T._free(t.ptrs[e]);const o=[];if(s)o.push(r.data.buffer);else if(n)for(const t of e.inputs)o.push(t);return{result:r,transferList:o}}function q(){T&&(T.uninitialize_lyr3d_worker_wasm(),T=null)}function N(){return T?Promise.resolve():(S||(S=new Promise((e=>r.e(7894).then(r.bind(r,37894)).then((e=>e.l)).then((({default:t})=>{const r=t({locateFile:b,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e})).then((e=>{T=e,T.initialize_lyr3d_worker_wasm(),S=null}))),S)}r(90740),r(32773),r(64604),r(29512),r(99063),r(6407),r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959)},18683:(e,t,r)=>{r.d(t,{g:()=>i});var s=r(90740),n=(r(64604),r(6407)),o=r(20266),a=r(99063);function i(e){if(!s.A.assetsPath)throw o.L.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.A("assets:path-not-set","config.assetsPath is not set");return(0,a.fj)(s.A.assetsPath,e)}},64604:(e,t,r)=>{r.d(t,{A:()=>m,i:()=>f,l:()=>d,s:()=>u});var s=r(90740),n=r(29512),o=r(6407),a=r(32773),i=r(80959),l=r(99063);r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371);const c=new Set(["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]);function u(e){const t=(0,l.$z)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!c.has(t)&&!e.endsWith("/sharing/rest/generateToken")}function d(e,t,r=!1,s){return new Promise(((n,o)=>{if((0,i.G4)(s))return void o(p());let l=()=>{d(),o(new Error(`Unable to load ${t}`))},c=()=>{const t=e;d(),n(t)},u=()=>{if(!e)return;const t=e;d(),t.src="",o(p())};const d=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",c)),l=null,c=null,e=null,null!=s&&s.removeEventListener("abort",u),u=null,r&&URL.revokeObjectURL(t)};null!=s&&s.addEventListener("abort",u),(0,a.h)("esri-image-decode")?e.decode().then(c,l):(e.addEventListener("error",l),e.addEventListener("load",c))}))}function p(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}const h="Timeout exceeded";function f(e){return"object"==typeof e&&!!e&&"message"in e&&e.message===h}async function m(e,t){e instanceof URL&&(e=e.toString()),t?.query instanceof URLSearchParams&&(t.query=(0,l.zf)(t.query.toString().replaceAll("+"," ")));const o=(0,l.DB)(e),c=(0,l.w8)(e);c||o||(e=(0,l.S8)(e));const d={url:e,requestOptions:{...t}},p=e=>({data:e,getAllHeaders:L,getHeader:L,httpStatus:200,requestOptions:d.requestOptions,url:d.url}),h=(0,l.sC)(e,y.internalInterceptors);if(h){const e=await A(h,d);if(null!=e)return p(e)}let f=(0,l.sC)(e);if(f){const e=await A(f,d);if(null!=e)return p(e);f.after||f.error||(f=null)}if(e=d.url,"image"===(t=d.requestOptions).responseType&&((0,a.h)("host-webworker")||(0,a.h)("host-node")))throw v("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),d);if("head"===t.method){if(t.body)throw v("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),d);if(o||c)throw v("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),d)}if(await async function(){(0,a.h)("host-webworker")&&!g&&(g=await r.e(1753).then(r.bind(r,1753)))}(),g)return g.execute(e,t);const m=new AbortController,b=(0,i.u7)(t,(()=>m.abort())),S={controller:m,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:f,params:d,redoRequest:!1,useIdentity:y.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},T=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,a=r.body;let l=null,c=null;if(w&&"HTMLFormElement"in globalThis&&(a instanceof FormData?l=a:a instanceof HTMLFormElement&&(l=new FormData(a))),"string"==typeof a&&(c=a),e.fetchOptions={cache:r.cacheBust?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:y.priority,redirect:"follow",signal:o},(l||c)&&(e.fetchOptions.body=l||c),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||l?.get("token")),!e.hasToken&&s.A.apiKey&&u(t)&&(r.query||(r.query={}),r.query.token=s.A.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!k(t)&&!(0,i.G4)(o)){let s;"immediate"===r.authMode?(await C(),s=await n.id.getCredential(t,{signal:o}),e.credential=s):"no-prompt"===r.authMode?(await C(),s=await n.id.getCredential(t,{prompt:!1,signal:o}).catch((()=>{})),e.credential=s):n.id&&(s=n.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await O(e)}while(!await U(e,t,r))}catch(r){const s=v("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(s),s}const o=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,l.FL)(o)){const e=(0,l.$z)(o,!0);e&&y.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&function(e){s.A.request.crossOriginNoCorsDomains||(s.A.request.crossOriginNoCorsDomains={});const t=s.A.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,l.$z)(r)??""]=0:(t[(0,l.$z)("http://"+r)??""]=0,t[(0,l.$z)("https://"+r)??""]=0)}(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&n.id){const e=n.id.findServerInfo(a.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=n.id.findCredential(t,a.userId);e&&-1===n.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getAllHeaders:t?()=>Array.from(t.headers):L,getHeader:t?e=>t.headers.get(e):L,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(S).finally((()=>b?.remove()));return f?.after?.(T),T}let g;const y=s.A.request,w="FormData"in globalThis,b=new Set([499,498,403,401]),S=new Set(["COM_0056","COM_0057","SB_0008"]),T=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],L=()=>null,q=Symbol();function N(e){const t=(0,l.$z)(e);return!t||t.endsWith(".arcgis.com")||m._corsServers.includes(t)||(0,l.FL)(t)}function v(e,t,r,s){let n="Error";const l={url:r.url,requestOptions:r.requestOptions,getAllHeaders:L,getHeader:L,ssl:!1};if(t instanceof o.A)return t.details?(t.details=(0,a.o8)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=l,t;if(t){const e=s&&(()=>Array.from(s.headers)),r=s&&(e=>s.headers.get(e)),o=s?.status,a=t.message;a&&(n=a),e&&r&&(l.getAllHeaders=e,l.getHeader=r),l.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||o||0,l.subCode=t.subcode,l.messageCode=t.messageCode,"string"==typeof t.details?l.messages=[t.details]:l.messages=t.details,l.raw=q in t?t[q]:t}return(0,i.zf)(t)?(0,i.NK)():new o.A(e,n,l)}async function C(){n.id||await Promise.all([r.e(9414),r.e(9513),r.e(1885)]).then(r.bind(r,91885))}function k(e){return T.some((t=>t.test(e)))}async function O(e){let t=e.params.url;const r=e.params.requestOptions,o=e.fetchOptions??{},c=(0,l.w8)(t)||(0,l.DB)(t),u=r.responseType||"json",d=c?0:null!=r.timeout?r.timeout:y.timeout;let p=!1;if(!c){e.useSSL&&(t=(0,l.lM)(t));let i={...r.query};e.credentialToken&&(i.token=e.credentialToken);let c=(0,l.x0)(i);(0,a.h)("esri-url-encodes-apostrophe")&&(c=c.replaceAll("'","%27"));const u=t.length+1+c.length;let d;p="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||u>y.maxUrlLength;const h=r.useProxy||!!(0,l.zs)(t);if(h){const e=(0,l.s_)(t);d=e.path,!p&&d.length+1+u>y.maxUrlLength&&(p=!0),e.query&&(i={...e.query,...i})}if("HEAD"===o.method&&(p||h)){if(p){if(u>y.maxUrlLength)throw v("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw v("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw v("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(p?(o.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.a6)(t,i):(o.body=(0,l.x0)(i),o.headers||(o.headers={}),o.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.a6)(t,i),h&&(e.useProxy=!0,t=`${d}?${t}`),i.token&&w&&o.body instanceof FormData&&!(0,l.i)(t)&&o.body.set("token",i.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.FX)(t,(0,l.Xq)()))if((0,l.FL)(t))e.withCredentials=!0;else if(n.id){const r=n.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(o.credentials="include",function(e){const t=s.A.request.crossOriginNoCorsDomains;if(t){let r=(0,l.$z)(e);if(r)return r=r.toLowerCase(),!(0,l.FX)(r,(0,l.Xq)())&&t[r]<Date.now()-36e5}return!1}(t)&&await async function(e){const t=s.A.request.crossOriginNoCorsDomains,r=(0,l.$z)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const n=(0,l.An)(e);e=n.path,"json"===n.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}(p?(0,l.a6)(t,i):t))}let f,g,b=0,S=!1;d>0&&(b=setTimeout((()=>{S=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)g=o,g.url=t;else if("image"!==r.responseType||"default"!==o.cache||"GET"!==o.method||p||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!c&&!e.useProxy&&y.proxyUrl&&!N(t)){if(m._beforeFetch&&await m._beforeFetch(t,o),f=await fetch(t,o),m._afterFetch&&await m._afterFetch(f),e.useProxy||function(e){const t=(0,l.$z)(e);t&&!m._corsServers.includes(t)&&m._corsServers.push(t)}(t),"native"===r.responseType)g=f;else if("HEAD"!==o.method)if(f.ok){switch(u){case"array-buffer":g=await f.arrayBuffer();break;case"blob":case"image":g=await f.blob();break;default:g=await f.text()}if(b&&(clearTimeout(b),b=0),"json"===u||"xml"===u||"document"===u)if(g)switch(u){case"json":g=JSON.parse(g);break;case"xml":g=x(g,"application/xml");break;case"document":g=x(g,"text/html")}else g=null;if(g){if("array-buffer"===u||"blob"===u){const e=f.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&g["blob"===u?"size":"byteLength"]<=750)try{const e=await new Response(g).json();e.error&&(g=e)}catch{}}"image"===u&&g instanceof Blob&&(g=await E(URL.createObjectURL(g),e,!0))}}else{g=await f.text();try{g=JSON.parse(g)}catch{}}}else g=await E(t,e)}catch(s){if("AbortError"===s.name){if(S)throw new Error(h);throw(0,i.NK)("Request canceled")}if(!(!f&&s instanceof TypeError&&y.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||N(t))throw s;e.redoRequest=!0,(0,l.oy)({proxyUrl:y.proxyUrl,urlPrefix:(0,l.$z)(t)??""})}finally{b&&clearTimeout(b)}return[f,g]}async function A(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=v("request:interceptor",e,t)}if((s instanceof Error||s instanceof o.A)&&(r=v("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}function x(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function U(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let o,a;if(r&&(r.error&&"object"==typeof r.error?o=r.error:"error"===r.status&&Array.isArray(r.messages)&&(o={...r},o[q]=r,o.details=r.messages)),!o&&!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[q]=r,o;let i,l=null;o&&(a=Number(o.code),l=o.hasOwnProperty("subcode")?Number(o.subcode):null,i=o.messageCode,i=i?.toUpperCase());const c=s.authMode;if(403===a&&(4===l||o.message?.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&b.has(a)&&!k(e.params.url)&&(403!==a||(!i||!S.has(i))&&(null==l||2===l&&e.credentialToken))){await C();try{const t=await n.id.getCredential(e.params.url,{error:v("request:server",o,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;o=t}}if(o)throw o;return!0}function E(e,t,r=!1){const s=t.controller.signal,n=new Image;return t.withCredentials?n.crossOrigin="use-credentials":n.crossOrigin="anonymous",n.alt="",n.fetchPriority=y.priority,n.src=e,d(n,e,r,s)}m._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"],m._beforeFetch=void 0,m._afterFetch=void 0}}]);