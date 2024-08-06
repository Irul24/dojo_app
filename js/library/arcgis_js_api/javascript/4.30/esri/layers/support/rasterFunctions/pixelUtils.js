// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock","../rasterFormats/pixelRangeUtils"],function(z,F,W){function E(a){return null!=a&&"esri.layers.support.PixelBlock"===a.declaredClass&&a.pixels&&0<a.pixels.length}function T(a,b,c,e,f){const d=a.length;f=F.createEmptyBand(f,d);if(b)for(let g=0;g<d;g++)b[g]&&(f[g]=c[a[g]-e]);else for(b=0;b<d;b++)f[b]=c[a[b]-e];return f}function X(a,b,c,e){const f=null!=c&&2<=c.length?new Set(c):null;c=1===c?.length?c[0]:null;const d=!!b?.length;for(let g=0;g<a.length;g++)if(e[g]){const k=
a[g];if(d){let h=!1;for(let m=0;m<b.length;m+=2)if(k>=b[m]&&k<=b[m+1]){h=!0;break}h||(e[g]=0)}e[g]&&(k===c||f?.has(k))&&(e[g]=0)}}function Y(a,b){const c=a[0].length;for(let e=0;e<c;e++)if(b[e]){let f=!1;for(let d=0;d<a.length;d++)if(a[d][e]){f=!0;break}f||(b[e]=0)}}function Z(a,b){const c=a[0].length;for(let e=0;e<c;e++)if(b[e]){let f=!1;for(let d=0;d<a.length;d++)if(0===a[d][e]){f=!0;break}f&&(b[e]=0)}}function aa(a,b,c,e,f,d,g,k){return{xmin:f<=c*a?0:f<c*a+a?f-c*a:a,ymin:d<=e*b?0:d<e*b+b?d-e*b:
b,xmax:f+g<=c*a?0:f+g<c*a+a?f+g-c*a:a,ymax:d+k<=e*b?0:d+k<e*b+b?d+k-e*b:b}}function I(a,b,c,e,f,d){const {width:g,height:k}=c.block,{x:h,y:m}=c.offset,{width:n,height:p}=c.mosaic;c=aa(g,k,e,f,h,m,n,p);let l=0;var q=0;if(d){var r=d.hasGCSSShiftTransform?360:d.halfWorldWidth??0,u=g*d.resolutionX;const t=d.startX+e*u;t<r&&t+u>r?q=d.rightPadding:t>=r&&(l=d.leftMargin-d.rightPadding,q=0)}c.xmax-=q;if("number"===typeof b)for(d=c.ymin;d<c.ymax;d++)for(q=(f*k+d-m)*n+(e*g-h)+l,r=c.xmin;r<c.xmax;r++)a[q+r]=
b;else for(d=c.ymin;d<c.ymax;d++)for(q=(f*k+d-m)*n+(e*g-h)+l,r=d*g,u=c.xmin;u<c.xmax;u++)a[q+u]=b[r+u]}function ba(a,b,c={}){const {clipOffset:e,clipSize:f,alignmentInfo:d,blockWidths:g}=c;if(g)return ha(a,b,{blockWidths:g});var k=a.find(x=>E(x));if(null==k)return null;c=f?f.width:b.width;const h=f?f.height:b.height;var m=k.width,n=k.height;const p=b.width/m,l=b.height/n;b={offset:e||{x:0,y:0},mosaic:f||b,block:{width:m,height:n}};m=k.pixelType;var q=F.getPixelArrayConstructor(m);k=k.pixels.length;
n=[];for(var r=0;r<k;r++){var u=new q(c*h);for(var t=0;t<l;t++)for(var v=0;v<p;v++){var w=a[t*p+v];E(w)&&(w=w.pixels[r],I(u,w,b,v,t,d))}n.push(u)}q=a.some(x=>null==x||null!=x.mask&&0<x.mask.length);u=a.some(x=>x?.bandMasks&&1<x.bandMasks.length);q=q?new Uint8Array(c*h):void 0;u=u?[]:void 0;if(q){for(r=0;r<l;r++)for(t=0;t<p;t++)v=a[r*p+t],w=null!=v?v.mask:null,null!=w?I(q,w,b,t,r,d):v?I(q,255,b,t,r,d):I(q,0,b,t,r,d);if(u)for(r=0;r<k;r++){t=new Uint8Array(c*h);for(v=0;v<l;v++)for(w=0;w<p;w++){const x=
a[v*p+w],A=x?.bandMasks?.[r]??x?.mask;null!=A?I(t,A,b,w,v,d):x?I(t,255,b,w,v,d):I(t,0,b,w,v,d)}u.push(t)}}a=new F({width:c,height:h,pixels:n,pixelType:m,bandMasks:u,mask:q});a.updateStatistics();return a}function ha(a,b,c){const e=a.find(t=>null!=t);if(null==e)return null;var f=a.some(t=>null!=t?!!t.mask:!0);const {width:d,height:g}=b;b=f?new Uint8Array(d*g):null;({blockWidths:c}=c);const k=[],h=e.getPlaneCount(),m=F.getPixelArrayConstructor(e.pixelType);if(f)for(let t=0,v=0;t<a.length;v+=c[t],t++)if(f=
a[t],E(f)){var n=f.mask;for(var p=0;p<g;p++)for(var l=0;l<c[t];l++)b[p*d+l+v]=null==n?255:n[p*f.width+l]}n=(f=a.some(t=>t?.bandMasks&&1<t.bandMasks.length))?[]:void 0;p=d*g;for(l=0;l<h;l++){const t=new m(p),v=f?new Uint8Array(p):void 0;for(let w=0,x=0;w<a.length;x+=c[w],w++){const A=a[w];if(E(A)){var q=A.pixels[l];if(null!=q){for(var r=0;r<g;r++)for(var u=0;u<c[w];u++)t[r*d+u+x]=q[r*A.width+u];if(v)for(q=A.bandMasks?.[l]??A.mask,r=0;r<g;r++)for(u=0;u<c[w];u++)v[r*d+u+x]=q?q[r*A.width+u]:255}}}k.push(t);
n&&v&&n.push(v)}a=new F({width:d,height:g,mask:b,bandMasks:n,pixels:k,pixelType:e.pixelType});a.updateStatistics();return a}function ca(a){if(!E(a))return null;const b=a.clone(),{width:c,height:e,pixels:f}=a;var d=f[0];const g=b.pixels[0];a=a.mask;for(let m=2;m<e-1;m++){const n=new Map;for(var k=m-2;k<m+2;k++)for(var h=0;4>h;h++){const p=k*c+h;L(n,d[p],a?a[p]:1)}g[m*c]=da(n);g[m*c+1]=g[m*c+2]=g[m*c];for(k=3;k<c-1;k++)h=(m-2)*c+k+1,L(n,d[h],a?a[h]:1),h=(m-1)*c+k+1,L(n,d[h],a?a[h]:1),h=m*c+k+1,L(n,
d[h],a?a[h]:1),h=(m+1)*c+k+1,L(n,d[h],a?a[h]:1),h=(m-2)*c+k-3,P(n,d[h],a?a[h]:1),h=(m-1)*c+k-3,P(n,d[h],a?a[h]:1),h=m*c+k-3,P(n,d[h],a?a[h]:1),h=(m+1)*c+k-3,P(n,d[h],a?a[h]:1),g[m*c+k]=da(n);g[m*c+k+1]=g[m*c+k]}for(d=0;d<c;d++)g[d]=g[c+d]=g[2*c+d],g[(e-1)*c+d]=g[(e-2)*c+d];b.updateStatistics();return b}function da(a){if(0===a.size)return 0;let b=0,c=-1,e=0;const f=a.keys();let d=f.next();for(;!d.done;)e=a.get(d.value),e>b&&(c=d.value,b=e),d=f.next();return c}function P(a,b,c){0!==c&&(c=a.get(b),1===
c?a.delete(b):a.set(b,c-1))}function L(a,b,c){0!==c&&a.set(b,a.has(b)?a.get(b)+1:1)}function U(a,b,c){let {x:e,y:f}=b;const {width:d,height:g}=c;if(0===e&&0===f&&g===a.height&&d===a.width)return a;const {width:k,height:h}=a;b=Math.max(0,f);const m=Math.max(0,e),n=Math.min(e+d,k),p=Math.min(f+g,h);if(0>n||0>p||!E(a))return null;e=Math.max(0,-e);f=Math.max(0,-f);var {pixels:l}=a,q=d*g,r=l.length;const u=[];for(var t=0;t<r;t++){var v=l[t],w=F.createEmptyBand(a.pixelType,q);for(let x=b;x<p;x++){const A=
x*k;let y=(x+f-b)*d+e;for(let C=m;C<n;C++)w[y++]=v[A+C]}u.push(w)}l=new Uint8Array(q);q=a.mask;for(r=b;r<p;r++)for(t=r*k,v=(r+f-b)*d+e,w=m;w<n;w++)l[v++]=q?q[t+w]:1;a=new F({width:c.width,height:c.height,pixelType:a.pixelType,pixels:u,mask:l});a.updateStatistics();return a}function ea(a,b=!0){if(!E(a))return null;const {pixels:c,width:e,height:f,mask:d,pixelType:g}=a;a=[];const k=Math.round(e/2),h=Math.round(f/2),m=f-1,n=e-1;for(var p=0;p<c.length;p++){var l=c[p],q=F.createEmptyBand(g,k*h),r=0;for(var u=
0;u<f;u+=2)for(var t=0;t<e;t+=2){var v=l[u*e+t];if(b){var w=t===n?v:l[u*e+t+1];const x=u===m?v:l[u*e+t+e],A=t===n?x:u===m?w:l[u*e+t+e+1];q[r++]=(v+w+x+A)/4}else q[r++]=v}a.push(q)}p=null;if(null!=d)for(p=new Uint8Array(k*h),l=0,q=0;q<f;q+=2)for(r=0;r<e;r+=2)u=d[q*e+r],b?(t=r===n?u:d[q*e+r+1],v=q===m?u:d[q*e+r+e],w=r===n?v:q===m?t:d[q*e+r+e+1],p[l++]=u*t*v*w?1:0):p[l++]=u;return new F({width:k,height:h,pixelType:g,pixels:a,mask:p})}function V(a,b,c,e,f=0){const {width:d,height:g}=a,{width:k,height:h}=
b;a=e.cols;e=e.rows;b=Math.ceil(k/a-.1/a);const m=Math.ceil(h/e-.1/e);let n,p,l,q,r;const u=b*a;var t=u*m*e;const v=new Float32Array(t),w=new Float32Array(t),x=new Uint32Array(t),A=new Uint32Array(t);let y=0,C,H;for(let J=0;J<m;J++)for(let K=0;K<b;K++){var B=12*(J*b+K);t=c[B];n=c[B+1];p=c[B+2];l=c[B+3];q=c[B+4];r=c[B+5];for(var D=0;D<e;D++){y=(J*e+D)*u+K*a;H=(D+.5)/e;for(let G=0;G<D;G++)C=(G+.5)/a,v[y+G]=(t*C+n*H+p)*d+f,w[y+G]=(l*C+q*H+r)*g+f,x[y+G]=Math.floor(v[y+G]),A[y+G]=Math.floor(w[y+G])}B+=
6;t=c[B];n=c[B+1];p=c[B+2];l=c[B+3];q=c[B+4];r=c[B+5];for(B=0;B<e;B++)for(y=(J*e+B)*u+K*a,H=(B+.5)/e,D=B;D<a;D++)C=(D+.5)/a,v[y+D]=(t*C+n*H+p)*d+f,w[y+D]=(l*C+q*H+r)*g+f,x[y+D]=Math.floor(v[y+D]),A[y+D]=Math.floor(w[y+D])}return{offsets_x:v,offsets_y:w,offsets_xi:x,offsets_yi:A,gridWidth:u}}z.NoDataInterpretation=void 0;(function(a){a[a.matchAny=0]="matchAny";a[a.matchAll=1]="matchAll"})(z.NoDataInterpretation||(z.NoDataInterpretation={}));z.MissingBandAction=void 0;(function(a){a[a.bestMatch=0]=
"bestMatch";a[a.fail=1]="fail"})(z.MissingBandAction||(z.MissingBandAction={}));z.approximateTransform=function(a,b,c,e,f="nearest"){if(!E(a))return null;"majority"===f&&(a=ca(a));const {pixels:d,mask:g,bandMasks:k,pixelType:h}=a,m=a.width;var n=a.height;const p=F.getPixelArrayConstructor(h),l=d.length,{width:q,height:r}=b;a=!1;for(var u=0;u<c.length;u+=3)-1===c[u]&&-1===c[u+1]&&-1===c[u+2]&&(a=!0);const {offsets_x:t,offsets_y:v,offsets_xi:w,offsets_yi:x,gridWidth:A}=V({width:m,height:n},b,c,e,"majority"===
f?.5:0);let y;b=(H,B,D,J)=>{const K=H instanceof Float32Array||H instanceof Float64Array?0:.5;for(let G=0;G<r;G++){y=G*A;for(let M=0;M<q;M++){if(0>t[y]||0>v[y])H[G*q+M]=0;else if(J)H[G*q+M]=B[w[y]+x[y]*m];else{const N=Math.floor(t[y]),O=Math.floor(v[y]),Q=Math.ceil(t[y]),R=Math.ceil(v[y]),S=t[y]-N,fa=v[y]-O;H[G*q+M]=!D||D[N+O*m]&&D[Q+O*m]&&D[N+R*m]&&D[Q+R*m]?(1-fa)*((1-S)*B[N+O*m]+S*B[Q+O*m])+fa*((1-S)*B[N+R*m]+S*B[Q+R*m])+K:B[w[y]+x[y]*m]}y++}}};c=[];e=k?.length===l;n=[];for(u=0;u<l;u++){if(e){var C=
new Uint8Array(q*r);b(C,k[u],k[u],!0);n.push(C)}C=new p(q*r);b(C,d[u],e?k[u]:g,"nearest"===f||"majority"===f);c.push(C)}f=new F({width:q,height:r,pixelType:h,pixels:c,bandMasks:e?n:void 0});if(null!=g)f.mask=new Uint8Array(q*r),b(f.mask,g,g,!0);else if(a)for(f.mask=new Uint8Array(q*r),a=0;a<q*r;a++)f.mask[a]=0>t[a]||0>v[a]?0:1;f.updateStatistics();return f};z.clip=U;z.clipTile=function(a){const {pixelBlock:b,tileSize:c,level:e,row:f,col:d,useBilinear:g}=a;if(!E(b))return null;const {width:k,height:h}=
c;var m=2**e;a=m*k;m*=h;a=U(b,{y:f*m,x:d*a},{width:a,height:m});if(!a)return null;for(m=e;0<m;m--)a=ea(a,g);return a};z.colorize=function(a,b){if(!E(a)||!b||!b.indexedColormap&&!b.indexed2DColormap)return a;const c=a.clone();var e=c.pixels;let f=c.mask;const d=c.width*c.height;if(1!==e.length)return a;const {indexedColormap:g,indexed2DColormap:k,offset:h,alphaSpecified:m}=b;a=0;e=e[0];b=new Uint8Array(e.length);const n=new Uint8Array(e.length),p=new Uint8Array(e.length);var l=0;if(g){const q=g.length-
1;if(null!=f)for(a=0;a<d;a++)f[a]&&(l=4*(e[a]-h),l<h||l>q?f[a]=0:(b[a]=g[l],n[a]=g[l+1],p[a]=g[l+2],f[a]=g[l+3]));else{f=new Uint8Array(d);for(a=0;a<d;a++)l=4*(e[a]-h),l<h||l>q?f[a]=0:(b[a]=g[l],n[a]=g[l+1],p[a]=g[l+2],f[a]=g[l+3]);c.mask=f}}else if(k)if(null!=f)for(a=0;a<d;a++)f[a]&&(l=k[e[a]],b[a]=l[0],n[a]=l[1],p[a]=l[2],f[a]=l[3]);else{f=new Uint8Array(d);for(a=0;a<d;a++)l=k[e[a]],b[a]=l[0],n[a]=l[1],p[a]=l[2],f[a]=l[3];c.mask=f}c.pixels=[b,n,p];c.statistics=null;c.pixelType="u8";c.maskIsAlpha=
m;return c};z.compositeBands=function(a){if(!a?.length||a.some(h=>!E(h)))return null;if(1===a.length)return a[0]?.clone()??null;const {width:b,height:c,pixelType:e}=a[0];if(a.some(h=>h.width!==b||h.height!==c))return null;const f=a.map(({mask:h})=>h).filter(h=>null!=h);let d=null;f.length&&(d=new Uint8Array(b*c),d.set(f[0]),1<f.length&&Z(f.slice(1),d));const g=[];a.forEach(({pixels:h})=>g.push(...h));const k=[];a.map(({statistics:h})=>h).filter(h=>h?.length).forEach(h=>k.push(...h));return new F({pixelType:e,
width:b,height:c,mask:d,pixels:g,statistics:k.length?k:null})};z.createColormapLUT=function(a){if(a){var b=a.colormap;if(b&&0!==b.length){b=b.sort((m,n)=>m[0]-n[0]);var c=0;0>b[0][0]&&(c=b[0][0]);var e=Math.max(256,b[b.length-1][0]-c+1),f=new Uint8Array(4*e),d=[],g=0,k=0,h=5===b[0].length;if(65536<e)return b.forEach(m=>{d[m[0]-c]=h?m.slice(1):m.slice(1).concat([255])}),{indexed2DColormap:d,offset:c,alphaSpecified:h};if(a.fillUnspecified)for(a=b[k],g=a[0]-c;g<e;g++)f[4*g]=a[1],f[4*g+1]=a[2],f[4*g+
2]=a[3],f[4*g+3]=h?a[4]:255,g===a[0]-c&&(a=k===b.length-1?a:b[++k]);else for(g=0;g<b.length;g++)a=b[g],k=4*(a[0]-c),f[k]=a[1],f[k+1]=a[2],f[k+2]=a[3],f[k+3]=h?a[4]:255;return{indexedColormap:f,offset:c,alphaSpecified:h}}}};z.createMaskLUT=function(a,b,c){if("u8"!==a&&"s8"!==a&&"u16"!==a&&"s16"!==a)return null;var e=a.includes("16")?65536:256;a=a.includes("s")?-e/2:0;e=new Uint8Array(e);if(b)for(let d=0;d<b.length;d++){var f=Math.ceil(b[2*d]-a);const g=Math.floor(b[2*d+1]-a);for(;f<=g;f++)e[f]=255}else e.fill(255);
if(c)for(b=0;b<c.length;b++)e[c[b]-a]=0;return{lut:e,offset:a}};z.createRemapLUT=function(a){const {srcPixelType:b,inputRanges:c,outputValues:e,allowUnmatched:f,noDataRanges:d,isLastInputRangeInclusive:g,outputPixelType:k}=a;if("u8"!==b&&"s8"!==b&&"u16"!==b&&"s16"!==b)return null;var h=b.includes("16")?65536:256;a=b.includes("s")?-h/2:0;const m=F.createEmptyBand(k,h);h=new Uint8Array(h);f&&h.fill(255);const [n,p]=W.getPixelValueRange(k);if(c?.length&&e?.length){var l=c.map(t=>t-1E-6);l[0]=c[0];g&&
(l[l.length-1]=c[c.length-1]);for(var q=0;q<l.length;q++){var r=e[q]>p?p:e[q]<n?n:e[q],u=Math.ceil(l[2*q]-a);const t=Math.floor(l[2*q+1]-a);for(;u<=t;u++)m[u]=r,h[u]=255}}if(d?.length)for(l=0;l<d.length;l++)for(r=Math.ceil(d[2*l]-a),q=Math.floor(d[2*l+1]-a);r<=q;r++)h[r]=0;return{lut:m,offset:a,mask:h}};z.extractBands=function(a,b){return b?.length&&E(a)?a.extractBands(b):a};z.getClipBounds=aa;z.getLocalArithmeticNorthRotations=function(a,b){const {coefficients:c,spacing:e}=b,{offsets_x:f,offsets_y:d,
gridWidth:g}=V(a,a,c,{rows:e[0],cols:e[1]}),{width:k,height:h}=a;a=new Float32Array(k*h);b=180/Math.PI;for(let p=0;p<h;p++)for(let l=0;l<k;l++){var m=p*g+l,n=0===p?m:m-g;const q=p===h-1?m:m+g;m=f[n]-f[q];n=d[q]-d[n];isNaN(m)||isNaN(n)?a[p*k+l]=90:(n=Math.atan2(n,m)*b,n=(360+n)%360,a[p*k+l]=n)}return a};z.interpolateOffsets=V;z.isValidPixelBlock=E;z.lookupBandValues=T;z.lookupPixels=function(a,b){if(!E(a))return null;const {pixels:c,mask:e}=a,f=c.length;let d=b.lut;const {offset:g}=b;d&&1===d[0].length&&
(d=c.map(()=>d));const k=[];b=b.outputPixelType||"u8";for(let h=0;h<f;h++){const m=T(c[h],e,d[h],g||0,b);k.push(m)}a=new F({width:a.width,height:a.height,pixels:k,mask:e,pixelType:b});a.updateStatistics();return a};z.mask=function(a,b){if(!E(a))return null;const {width:c,height:e,pixels:f}=a;var d=c*e;const g=new Uint8Array(d);a.mask?g.set(a.mask):g.fill(255);a=f.length;const {includedRanges:k,noDataValues:h,outputPixelType:m,matchAll:n,lookups:p}=b;if(p){d=[];for(b=0;b<a;b++){var l=p[b];l=T(f[b],
g,l.lut,l.offset||0,"u8");d.push(l)}1===d.length?g.set(d[0]):n?Y(d,g):Z(d,g)}else if(n){b=[];for(l=0;l<a;l++){const q=new Uint8Array(d);q.set(g);X(f[l],k?.slice(2*l,2*l+2),h?.[l],q);b.push(q)}1===b.length?g.set(b[0]):Y(b,g)}else for(d=0;d<a;d++)X(f[d],k?.slice(2*d,2*d+2),h?.[d],g);return new F({width:c,height:e,pixelType:m,pixels:f,mask:g})};z.maxMapSizeGpu=6;z.mosaic=ba;z.mosaicPixelData=function(a,b){if(!a||0===a.length)return null;var c=a.find(p=>p.pixelBlock);if(null==c?.pixelBlock)return null;
var e=(c.extent.xmax-c.extent.xmin)/c.pixelBlock.width;const f=(c.extent.ymax-c.extent.ymin)/c.pixelBlock.height,d=.01*Math.min(e,f),g=a.sort((p,l)=>Math.abs(p.extent.ymax-l.extent.ymax)>d?l.extent.ymax-p.extent.ymax:Math.abs(p.extent.xmin-l.extent.xmin)>d?p.extent.xmin-l.extent.xmin:0);var k=Math.min.apply(null,g.map(p=>p.extent.xmin));const h=Math.min.apply(null,g.map(p=>p.extent.ymin)),m=Math.max.apply(null,g.map(p=>p.extent.xmax)),n=Math.max.apply(null,g.map(p=>p.extent.ymax));a={x:Math.round((b.xmin-
k)/e),y:Math.round((n-b.ymax)/f)};k={width:Math.round((m-k)/e),height:Math.round((n-h)/f)};e={width:Math.round((b.xmax-b.xmin)/e),height:Math.round((b.ymax-b.ymin)/f)};if(Math.round(k.width/c.pixelBlock.width)*Math.round(k.height/c.pixelBlock.height)!==g.length||0>a.x||0>a.y||k.width<e.width||k.height<e.height)return null;c=g.map(p=>p.pixelBlock);c=ba(c,k,{clipOffset:a,clipSize:e});return{extent:b,pixelBlock:c}};z.remap=function(a,b){if(!E(a))return null;const {width:c,height:e}=a,{inputRanges:f,
outputValues:d,outputPixelType:g,noDataRanges:k,allowUnmatched:h,isLastInputRangeInclusive:m}=b;b=a.pixels[0];const n=F.createEmptyBand(g,b.length),p=a.mask,l=new Uint8Array(c*e);p?l.set(p):l.fill(255);const q=a.pixelType.startsWith("f")?1E-6:0;a=f.map(y=>y-q);a[0]=f[0];a[a.length-1]=f[f.length-1]+(m?1E-6:0);var r=f.length/2;const [u,t]=W.getPixelValueRange(g);for(var v=0;v<e;v++)for(var w=0;w<c;w++){var x=v*c+w;if(l[x]){var A=b[x];let y=!1;for(let C=r-1;0<=C;C--)if(A===a[2*C]||A>a[2*C]&&A<a[2*C+
1]){n[x]=d[C];y=!0;break}y||(h?n[x]=A>t?t:A<u?u:A:l[x]=0)}}if(a=k?.length)for(r=0;r<e;r++)for(v=0;v<c;v++)if(w=r*c+v,!p||p[w])for(x=b[w],A=0;A<a;A+=2)if(x>=k[A]&&x<=k[A+1]){n[w]=0;l[w]=0;break}return new F({width:c,height:e,pixelType:g,pixels:[n],mask:l})};z.remapColor=function(a,b){if(!E(a))return null;a=a.clone();var {pixels:c}=a;const e=a.width*a.height,f=b.length,d=Math.floor(f/2),g=b[Math.floor(d)];c=c[0];let k,h,m,n,p,l,q=!1;const r=new Uint8Array(e),u=new Uint8Array(e),t=new Uint8Array(e);
let v=a.mask;const w=4===b[0].mappedColor.length;v||(v=new Uint8Array(e),v.fill(w?255:1),a.mask=v);for(p=0;p<e;p++)if(v[p]){k=c[p];q=!1;l=d;h=g;m=0;for(n=f-1;1<n-m;){if(k===h.value){q=!0;break}k>h.value?m=l:n=l;l=Math.floor((m+n)/2);h=b[Math.floor(l)]}q||(k===b[m].value?(h=b[m],q=!0):k===b[n].value?(h=b[n],q=!0):k<b[m].value?(q=!1,h=null):k>b[m].value&&(k<b[n].value?(h=b[m],q=!0):n===f-1?(q=!1,h=null):(h=b[n],q=!0)));q?(r[p]=h.mappedColor[0],u[p]=h.mappedColor[1],t[p]=h.mappedColor[2],v[p]=h.mappedColor[3]):
r[p]=u[p]=t[p]=v[p]=0}a.pixels=[r,u,t];a.mask=v;a.pixelType="u8";a.maskIsAlpha=w;return a};z.resampleByMajority=ca;z.setValidBoundary=function(a,b,c){if(!E(a))return null;const {width:e,height:f}=a,d=b.x;b=b.y;const g=c.width+d;c=c.height+b;if(0>d||0>b||g>e||c>f||0===d&&0===b&&g===e&&c===f)return a;a.mask||(a.mask=new Uint8Array(e*f));const k=a.mask;for(let h=0;h<f;h++){const m=h*e;for(let n=0;n<e;n++)k[m+n]=h<b||h>=c||n<d||n>=g?0:1}a.updateStatistics();return a};z.split=function(a,b,c=0,e=!0){if(!E(a))return null;
const {width:f,height:d}=b;let {width:g,height:k}=a;const h=new Map,m={x:0,y:0};c=1+c;for(let n=0;n<c;n++){const p=Math.ceil(g/f),l=Math.ceil(k/d);for(let q=0;q<l;q++){m.y=q*d;for(let r=0;r<p;r++){m.x=r*f;const u=U(a,m,b);h.set(`${n}/${q}/${r}`,u)}}n<c-1&&(a=ea(a,e));g=Math.round(g/2);k=Math.round(k/2)}return h};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});