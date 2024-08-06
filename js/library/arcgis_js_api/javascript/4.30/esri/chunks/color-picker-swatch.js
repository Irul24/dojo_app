// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom"],function(n,p,X){function x(a,b,c){return Math.min(Math.max(b,a),c)}function E(a){a=Math.round(a).toString(16).toUpperCase();return 2>a.length?"0"+a:a}function Y(a,b){return function(c){return b(a(c))}}function Z(a){const b=function(...c){const d=c[0];if(void 0===d||null===d)return d;1<d.length&&(c=d);return a(c)};"conversion"in a&&(b.conversion=a.conversion);return b}function aa(a){const b=function(...c){const d=c[0];if(void 0===d||null===d)return d;
1<d.length&&(c=d);c=a(c);if("object"===typeof c)for(let e=c.length,f=0;f<e;f++)c[f]=Math.round(c[f]);return c};"conversion"in a&&(b.conversion=a.conversion);return b}function q(a,b){if(!(this instanceof q))return new q(a,b);b&&b in O&&(b=null);if(b&&!(b in t))throw Error("Unknown model: "+b);if(null==a)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(a instanceof q)this.model=a.model,this.color=[...a.color],this.valpha=a.valpha;else if("string"===typeof a){b=y.get(a);if(null===b)throw Error("Unable to parse color from string: "+
a);this.model=b.model;var c=t[this.model].channels;this.color=b.value.slice(0,c);this.valpha="number"===typeof b.value[c]?b.value[c]:1}else if(0<a.length)this.model=b||"rgb",c=t[this.model].channels,b=Array.prototype.slice.call(a,0,c),this.color=I(b,c),this.valpha="number"===typeof a[c]?a[c]:1;else if("number"===typeof a)this.model="rgb",this.color=[a>>16&255,a>>8&255,a&255],this.valpha=1;else{this.valpha=1;b=Object.keys(a);"alpha"in a&&(b.splice(b.indexOf("alpha"),1),this.valpha="number"===typeof a.alpha?
a.alpha:0);b=b.sort().join("");if(!(b in J))throw Error("Unable to parse color from object: "+JSON.stringify(a));this.model=J[b];({labels:c}=t[this.model]);const d=[];for(b=0;b<c.length;b++)d.push(a[c[b]]);this.color=I(d)}if(F[this.model])for(c=t[this.model].channels,b=0;b<c;b++)(a=F[this.model][b])&&(this.color[b]=a(this.color[b]));this.valpha=Math.max(0,Math.min(1,this.valpha));Object.freeze&&Object.freeze(this)}function ba(a){return function(b){return Number(b.toFixed(a))}}function l(a,b,c){a=
Array.isArray(a)?a:[a];for(const d of a)(F[d]||(F[d]=[]))[b]=c;a=a[0];return function(d){let e;if(void 0!==d)return c&&(d=c(d)),e=this[a](),e.color[b]=d,e;e=this[a]().color[b];c&&(e=c(e));return e}}function r(a){return function(b){return Math.max(0,Math.min(a,b))}}function I(a,b){for(let c=0;c<b;c++)"number"!==typeof a[c]&&(a[c]=0);return a}function K(a,b=!1){return L(a,b)||P(a,b)}function L(a,b=!1){return a?a.length===(b?5:4)&&(b?ca:da).test(a):!1}function P(a,b=!1){return a?a.length===(b?9:7)&&
(b?ea:fa).test(a):!1}function M(a,b=!1){return b?a.hexa():a.hex()}function N(a){const {r:b,g:c,b:d}=a,e=G(b),f=G(c),h=G(d);a="a"in a?G(255*a.a):"";return`#${e}${f}${h}${a}`.toLowerCase()}function G(a){return a.toString(16).padStart(2,"0")}function Q(a,b=!1){if(!K(a,b))return null;a=a.replace("#","");let c,d;if(3===a.length||4===a.length){const [e,f,h,k]=a.split("");b=parseInt(`${e}${e}`,16);c=parseInt(`${f}${f}`,16);d=parseInt(`${h}${h}`,16);a=parseInt(`${k}${k}`,16)/255}else b=parseInt(a.slice(0,
2),16),c=parseInt(a.slice(2,4),16),d=parseInt(a.slice(4,6),16),a=parseInt(a.slice(6,8),16)/255;return isNaN(a)?{r:b,g:c,b:d}:{r:b,g:c,b:d,a}}function z(a,...b){return b.every(c=>c&&a&&`${c}`in a)}function R(){"undefined"!==typeof customElements&&["calcite-color-picker-swatch"].forEach(a=>{switch(a){case "calcite-color-picker-swatch":customElements.get(a)||customElements.define(a,S)}})}var C={},w={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,
255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,
107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],
gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],
lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,
179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,
239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,
255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};C={};var ha=Array.prototype.concat,ia=Array.prototype.slice,T=C=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=e;f&&"string"!==typeof f&&(f instanceof Array||Array.isArray(f)||0<=f.length&&(f.splice instanceof Function||Object.getOwnPropertyDescriptor(f,
f.length-1)&&"String"!==f.constructor.name))?b=ha.call(b,ia.call(e)):b.push(e)}return b};T.wrap=function(a){return function(){return a(T(arguments))}};var D=C,U=Object.hasOwnProperty,V=Object.create(null),H;for(H in w)U.call(w,H)&&(V[w[H]]=H);var u=C={to:{},get:{}};u.get=function(a){switch(a.substring(0,3).toLowerCase()){case "hsl":a=u.get.hsl(a);var b="hsl";break;case "hwb":a=u.get.hwb(a);b="hwb";break;default:a=u.get.rgb(a),b="rgb"}return a?{model:b,value:a}:null};u.get.rgb=function(a){if(!a)return null;
var b=/^#([a-f0-9]{3,4})$/i,c=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,d=/^rgba?\(\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,e=/^(\w+)$/,f=[0,0,0,1],h;if(h=a.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){b=h[2];h=h[1];for(a=0;3>a;a++)c=2*a,f[a]=parseInt(h.slice(c,c+2),16);b&&(f[3]=parseInt(b,16)/255)}else if(h=a.match(b)){h=h[1];b=h[3];for(a=0;3>a;a++)f[a]=
parseInt(h[a]+h[a],16);b&&(f[3]=parseInt(b+b,16)/255)}else if(h=a.match(c)){for(a=0;3>a;a++)f[a]=parseInt(h[a+1],0);h[4]&&(f[3]=h[5]?.01*parseFloat(h[4]):parseFloat(h[4]))}else if(h=a.match(d)){for(a=0;3>a;a++)f[a]=Math.round(2.55*parseFloat(h[a+1]));h[4]&&(f[3]=h[5]?.01*parseFloat(h[4]):parseFloat(h[4]))}else{if(h=a.match(e)){if("transparent"===h[1])return[0,0,0,0];if(!U.call(w,h[1]))return null;f=w[h[1]];f[3]=1;return f}return null}for(a=0;3>a;a++)f[a]=x(f[a],0,255);f[3]=x(f[3],0,1);return f};u.get.hsl=
function(a){if(!a)return null;var b=a.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(b){var c=parseFloat(b[4]);a=(parseFloat(b[1])%360+360)%360;var d=x(parseFloat(b[2]),0,100);b=x(parseFloat(b[3]),0,100);c=x(isNaN(c)?1:c,0,1);return[a,d,b,c]}return null};u.get.hwb=function(a){if(!a)return null;var b=a.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
if(b){var c=parseFloat(b[4]);a=(parseFloat(b[1])%360+360)%360;var d=x(parseFloat(b[2]),0,100);b=x(parseFloat(b[3]),0,100);c=x(isNaN(c)?1:c,0,1);return[a,d,b,c]}return null};u.to.hex=function(){var a=D(arguments);return"#"+E(a[0])+E(a[1])+E(a[2])+(1>a[3]?E(Math.round(255*a[3])):"")};u.to.rgb=function(){var a=D(arguments);return 4>a.length||1===a[3]?"rgb("+Math.round(a[0])+", "+Math.round(a[1])+", "+Math.round(a[2])+")":"rgba("+Math.round(a[0])+", "+Math.round(a[1])+", "+Math.round(a[2])+", "+a[3]+
")"};u.to.rgb.percent=function(){var a=D(arguments),b=Math.round(a[0]/255*100),c=Math.round(a[1]/255*100),d=Math.round(a[2]/255*100);return 4>a.length||1===a[3]?"rgb("+b+"%, "+c+"%, "+d+"%)":"rgba("+b+"%, "+c+"%, "+d+"%, "+a[3]+")"};u.to.hsl=function(){var a=D(arguments);return 4>a.length||1===a[3]?"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)":"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+a[3]+")"};u.to.hwb=function(){var a=D(arguments),b="";4<=a.length&&1!==a[3]&&(b=", "+a[3]);return"hwb("+a[0]+", "+a[1]+"%, "+
a[2]+"%"+b+")"};u.to.keyword=function(a){return V[a.slice(0,3)]};const W={};for(const a of Object.keys(w))W[w[a]]=a;const g={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},
hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(const a of Object.keys(g)){if(!("channels"in g[a]))throw Error("missing channels property: "+a);if(!("labels"in g[a]))throw Error("missing channel labels property: "+a);if(g[a].labels.length!==g[a].channels)throw Error("channel and label counts mismatch: "+a);const {channels:b,labels:c}=g[a];delete g[a].channels;delete g[a].labels;Object.defineProperty(g[a],"channels",{value:b});
Object.defineProperty(g[a],"labels",{value:c})}g.rgb.hsl=function(a){var b=a[0]/255;const c=a[1]/255,d=a[2]/255;a=Math.min(b,c,d);const e=Math.max(b,c,d),f=e-a;let h;e===a?h=0:b===e?h=(c-d)/f:c===e?h=2+(d-b)/f:d===e&&(h=4+(b-c)/f);h=Math.min(60*h,360);0>h&&(h+=360);b=(a+e)/2;return[h,100*(e===a?0:.5>=b?f/(e+a):f/(2-e-a)),100*b]};g.rgb.hsv=function(a){let b;let c,d;const e=a[0]/255,f=a[1]/255,h=a[2]/255,k=Math.max(e,f,h);var v=k-Math.min(e,f,h);0===v?d=c=0:(d=v/k,a=(k-e)/6/v+.5,b=(k-f)/6/v+.5,v=(k-
h)/6/v+.5,e===k?c=v-b:f===k?c=1/3+a-v:h===k&&(c=2/3+b-a),0>c?c+=1:1<c&&--c);return[360*c,100*d,100*k]};g.rgb.hwb=function(a){const b=a[0],c=a[1];let d=a[2];a=g.rgb.hsl(a)[0];const e=1/255*Math.min(b,Math.min(c,d));d=1-1/255*Math.max(b,Math.max(c,d));return[a,100*e,100*d]};g.rgb.cmyk=function(a){const b=a[0]/255,c=a[1]/255;a=a[2]/255;const d=Math.min(1-b,1-c,1-a);return[100*((1-b-d)/(1-d)||0),100*((1-c-d)/(1-d)||0),100*((1-a-d)/(1-d)||0),100*d]};g.rgb.keyword=function(a){var b=W[a];if(b)return b;b=
Infinity;let c;for(const e of Object.keys(w)){var d=w[e];d=(a[0]-d[0])**2+(a[1]-d[1])**2+(a[2]-d[2])**2;d<b&&(b=d,c=e)}return c};g.keyword.rgb=function(a){return w[a]};g.rgb.xyz=function(a){let b=a[0]/255,c=a[1]/255;a=a[2]/255;b=.04045<b?((b+.055)/1.055)**2.4:b/12.92;c=.04045<c?((c+.055)/1.055)**2.4:c/12.92;a=.04045<a?((a+.055)/1.055)**2.4:a/12.92;return[100*(.4124*b+.3576*c+.1805*a),100*(.2126*b+.7152*c+.0722*a),100*(.0193*b+.1192*c+.9505*a)]};g.rgb.lab=function(a){var b=g.rgb.xyz(a);a=b[0];let c=
b[1];b=b[2];a/=95.047;c/=100;b/=108.883;c=.008856<c?c**(1/3):7.787*c+16/116;return[116*c-16,500*((.008856<a?a**(1/3):7.787*a+16/116)-c),200*(c-(.008856<b?b**(1/3):7.787*b+16/116))]};g.hsl.rgb=function(a){const b=a[0]/360;var c=a[1]/100;a=a[2]/100;if(0===c){var d=255*a;return[d,d,d]}c=.5>a?a*(1+c):a+c-a*c;a=2*a-c;const e=[0,0,0];for(let f=0;3>f;f++)d=b+1/3*-(f-1),0>d&&d++,1<d&&d--,d=1>6*d?a+6*(c-a)*d:1>2*d?c:2>3*d?a+(c-a)*(2/3-d)*6:a,e[f]=255*d;return e};g.hsl.hsv=function(a){const b=a[0];let c=a[1]/
100;a=a[2]/100;let d=c;const e=Math.max(a,.01);a*=2;c*=1>=a?a:2-a;d*=1>=e?e:2-e;return[b,100*(0===a?2*d/(e+d):2*c/(a+c)),(a+c)/2*100]};g.hsv.rgb=function(a){var b=a[0]/60,c=a[1]/100;a=a[2]/100;const d=Math.floor(b)%6,e=b-Math.floor(b);b=255*a*(1-c);const f=255*a*(1-c*e);c=255*a*(1-c*(1-e));a*=255;switch(d){case 0:return[a,c,b];case 1:return[f,a,b];case 2:return[b,a,c];case 3:return[b,f,a];case 4:return[c,b,a];case 5:return[a,b,f]}};g.hsv.hsl=function(a){const b=a[0],c=a[1]/100;a=a[2]/100;var d=Math.max(a,
.01);const e=(2-c)*d;d=c*d/(1>=e?e:2-e)||0;return[b,100*d,(2-c)*a/2*100]};g.hwb.rgb=function(a){var b=a[0]/360,c=a[1]/100;a=a[2]/100;var d=c+a;1<d&&(c/=d,a/=d);d=Math.floor(6*b);a=1-a;b=6*b-d;0!==(d&1)&&(b=1-b);b=c+b*(a-c);let e;switch(d){default:case 6:case 0:d=a;e=b;break;case 1:d=b;e=a;break;case 2:d=c;e=a;c=b;break;case 3:d=c;e=b;c=a;break;case 4:d=b;e=c;c=a;break;case 5:d=a,e=c,c=b}return[255*d,255*e,255*c]};g.cmyk.rgb=function(a){const b=a[3]/100;return[255*(1-Math.min(1,a[0]/100*(1-b)+b)),
255*(1-Math.min(1,a[1]/100*(1-b)+b)),255*(1-Math.min(1,a[2]/100*(1-b)+b))]};g.xyz.rgb=function(a){var b=a[0]/100;const c=a[1]/100,d=a[2]/100;let e;a=3.2406*b+-1.5372*c+-.4986*d;e=-.9689*b+1.8758*c+.0415*d;b=.0557*b+-.204*c+1.057*d;a=Math.min(Math.max(0,.0031308<a?1.055*a**(1/2.4)-.055:12.92*a),1);e=Math.min(Math.max(0,.0031308<e?1.055*e**(1/2.4)-.055:12.92*e),1);b=Math.min(Math.max(0,.0031308<b?1.055*b**(1/2.4)-.055:12.92*b),1);return[255*a,255*e,255*b]};g.xyz.lab=function(a){let b=a[0],c=a[1];a=
a[2];b/=95.047;c/=100;a/=108.883;c=.008856<c?c**(1/3):7.787*c+16/116;return[116*c-16,500*((.008856<b?b**(1/3):7.787*b+16/116)-c),200*(c-(.008856<a?a**(1/3):7.787*a+16/116))]};g.lab.xyz=function(a){var b=a[1],c=a[2];a=(a[0]+16)/116;b=b/500+a;c=a-c/200;const d=a**3,e=b**3,f=c**3;return[95.047*(.008856<e?e:(b-16/116)/7.787),100*(.008856<d?d:(a-16/116)/7.787),108.883*(.008856<f?f:(c-16/116)/7.787)]};g.lab.lch=function(a){const b=a[0],c=a[1];a=a[2];let d;d=360*Math.atan2(a,c)/2/Math.PI;0>d&&(d+=360);return[b,
Math.sqrt(c*c+a*a),d]};g.lch.lab=function(a){const b=a[1],c=a[2]/360*2*Math.PI;return[a[0],b*Math.cos(c),b*Math.sin(c)]};g.rgb.ansi16=function(a,b=null){const [c,d,e]=a;a=null===b?g.rgb.hsv(a)[2]:b;a=Math.round(a/50);if(0===a)return 30;b=30+(Math.round(e/255)<<2|Math.round(d/255)<<1|Math.round(c/255));2===a&&(b+=60);return b};g.hsv.ansi16=function(a){return g.rgb.ansi16(g.hsv.rgb(a),a[2])};g.rgb.ansi256=function(a){const b=a[0],c=a[1];a=a[2];return b===c&&c===a?8>b?16:248<b?231:Math.round((b-8)/247*
24)+232:16+36*Math.round(b/255*5)+6*Math.round(c/255*5)+Math.round(a/255*5)};g.ansi16.rgb=function(a){let b=a%10;if(0===b||7===b)return 50<a&&(b+=3.5),b=b/10.5*255,[b,b,b];a=.5*(~~(50<a)+1);return[(b&1)*a*255,(b>>1&1)*a*255,(b>>2&1)*a*255]};g.ansi256.rgb=function(a){if(232<=a){var b=10*(a-232)+8;return[b,b,b]}a-=16;b=Math.floor(a/36)/5*255;const c=Math.floor((a%=36)/6)/5*255;return[b,c,a%6/5*255]};g.rgb.hex=function(a){a=(((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&
255)).toString(16).toUpperCase();return"000000".substring(a.length)+a};g.hex.rgb=function(a){a=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];let b=a[0];3===a[0].length&&(b=b.split("").map(c=>c+c).join(""));a=parseInt(b,16);return[a>>16&255,a>>8&255,a&255]};g.rgb.hcg=function(a){const b=a[0]/255,c=a[1]/255;a=a[2]/255;const d=Math.max(Math.max(b,c),a),e=Math.min(Math.min(b,c),a),f=d-e;return[(0>=f?0:d===b?(c-a)/f%6:d===c?2+(a-b)/f:4+(b-c)/f)/6%1*360,100*f,100*(1>f?e/(1-f):0)]};
g.hsl.hcg=function(a){var b=a[1]/100;const c=a[2]/100;b=.5>c?2*b*c:2*b*(1-c);let d=0;1>b&&(d=(c-.5*b)/(1-b));return[a[0],100*b,100*d]};g.hsv.hcg=function(a){const b=a[2]/100,c=a[1]/100*b;let d=0;1>c&&(d=(b-c)/(1-c));return[a[0],100*c,100*d]};g.hcg.rgb=function(a){const b=a[1]/100,c=a[2]/100;if(0===b)return[255*c,255*c,255*c];const d=[0,0,0];a=a[0]/360%1*6;const e=a%1,f=1-e;let h=0;switch(Math.floor(a)){case 0:d[0]=1;d[1]=e;d[2]=0;break;case 1:d[0]=f;d[1]=1;d[2]=0;break;case 2:d[0]=0;d[1]=1;d[2]=e;
break;case 3:d[0]=0;d[1]=f;d[2]=1;break;case 4:d[0]=e;d[1]=0;d[2]=1;break;default:d[0]=1,d[1]=0,d[2]=f}h=(1-b)*c;return[255*(b*d[0]+h),255*(b*d[1]+h),255*(b*d[2]+h)]};g.hcg.hsv=function(a){const b=a[1]/100,c=b+a[2]/100*(1-b);let d=0;0<c&&(d=b/c);return[a[0],100*d,100*c]};g.hcg.hsl=function(a){const b=a[1]/100,c=a[2]/100*(1-b)+.5*b;let d=0;0<c&&.5>c?d=b/(2*c):.5<=c&&1>c&&(d=b/(2*(1-c)));return[a[0],100*d,100*c]};g.hcg.hwb=function(a){const b=a[1]/100,c=b+a[2]/100*(1-b);return[a[0],100*(c-b),100*(1-
c)]};g.hwb.hcg=function(a){const b=1-a[2]/100,c=b-a[1]/100;let d=0;1>c&&(d=(b-c)/(1-c));return[a[0],100*c,100*d]};g.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]};g.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]};g.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]};g.gray.hsl=function(a){return[0,0,a[0]]};g.gray.hsv=g.gray.hsl;g.gray.hwb=function(a){return[0,100,a[0]]};g.gray.cmyk=function(a){return[0,0,0,a[0]]};g.gray.lab=
function(a){return[a[0],0,0]};g.gray.hex=function(a){a=Math.round(a[0]/100*255)&255;a=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(a.length)+a};g.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]};const ja=function(a){const b={};var c=Object.keys(g);for(let h=c.length,k=0;k<h;k++)b[c[k]]={distance:-1,parent:null};c=[a];for(b[a].distance=0;c.length;){a=c.pop();var d=Object.keys(g[a]);for(let h=d.length,k=0;k<h;k++){var e=d[k],f=b[e];-1===f.distance&&(f.distance=b[a].distance+
1,f.parent=a,c.unshift(e))}}c={};a=Object.keys(b);for(let h=a.length,k=0;k<h;k++){e=a[k];if(null===b[e].parent)continue;d=b;f=[d[e].parent,e];let v=g[d[e].parent][e],A=d[e].parent;for(;d[A].parent;)f.unshift(d[A].parent),v=Y(g[d[A].parent][A],v),A=d[A].parent;v.conversion=f;c[e]=v}return c},B={};Object.keys(g).forEach(a=>{B[a]={};Object.defineProperty(B[a],"channels",{value:g[a].channels});Object.defineProperty(B[a],"labels",{value:g[a].labels});const b=ja(a);Object.keys(b).forEach(c=>{const d=b[c];
B[a][c]=aa(d);B[a][c].raw=Z(d)})});const y=C,t=B,O=["keyword","gray","hex"],J={};for(const a of Object.keys(t))J[[...t[a].labels].sort().join("")]=a;const F={};q.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(a){let b=this.model in y.to?this:this.rgb();b=b.round("number"===typeof a?a:1);a=1===b.valpha?b.color:[...b.color,this.valpha];return y.to[b.model](a)},percentString(a){a=this.rgb().round("number"===typeof a?a:1);a=1===a.valpha?a.color:[...a.color,this.valpha];
return y.to.rgb.percent(a)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const a={},{channels:b}=t[this.model],{labels:c}=t[this.model];for(let d=0;d<b;d++)a[c[d]]=this.color[d];1!==this.valpha&&(a.alpha=this.valpha);return a},unitArray(){const a=this.rgb().color;a[0]/=255;a[1]/=255;a[2]/=255;1!==this.valpha&&a.push(this.valpha);return a},unitObject(){const a=this.rgb().object();a.r/=255;a.g/=255;a.b/=255;1!==this.valpha&&(a.alpha=this.valpha);return a},round(a){a=
Math.max(a||0,0);return new q([...this.color.map(ba(a)),this.valpha],this.model)},alpha(a){return void 0!==a?new q([...this.color,Math.max(0,Math.min(1,a))],this.model):this.valpha},red:l("rgb",0,r(255)),green:l("rgb",1,r(255)),blue:l("rgb",2,r(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,a=>(a%360+360)%360),saturationl:l("hsl",1,r(100)),lightness:l("hsl",2,r(100)),saturationv:l("hsv",1,r(100)),value:l("hsv",2,r(100)),chroma:l("hcg",1,r(100)),gray:l("hcg",2,r(100)),white:l("hwb",1,r(100)),wblack:l("hwb",
2,r(100)),cyan:l("cmyk",0,r(100)),magenta:l("cmyk",1,r(100)),yellow:l("cmyk",2,r(100)),black:l("cmyk",3,r(100)),x:l("xyz",0,r(95.047)),y:l("xyz",1,r(100)),z:l("xyz",2,r(108.833)),l:l("lab",0,r(100)),a:l("lab",1),b:l("lab",2),keyword(a){return void 0!==a?new q(a):t[this.model].keyword(this.color)},hex(a){return void 0!==a?new q(a):y.to.hex(this.rgb().round().color)},hexa(a){if(void 0!==a)return new q(a);a=this.rgb().round().color;let b=Math.round(255*this.valpha).toString(16).toUpperCase();1===b.length&&
(b="0"+b);return y.to.hex(a)+b},rgbNumber(){const a=this.rgb().color;return(a[0]&255)<<16|(a[1]&255)<<8|a[2]&255},luminosity(){var a=this.rgb().color;const b=[];for(const [c,d]of a.entries())a=d/255,b[c]=.04045>=a?a/12.92:((a+.055)/1.055)**2.4;return.2126*b[0]+.7152*b[1]+.0722*b[2]},contrast(a){const b=this.luminosity();a=a.luminosity();return b>a?(b+.05)/(a+.05):(a+.05)/(b+.05)},level(a){a=this.contrast(a);return 7<=a?"AAA":4.5<=a?"AA":""},isDark(){const a=this.rgb().color;return 128>(2126*a[0]+
7152*a[1]+722*a[2])/1E4},isLight(){return!this.isDark()},negate(){const a=this.rgb();for(let b=0;3>b;b++)a.color[b]=255-a.color[b];return a},lighten(a){const b=this.hsl();b.color[2]+=b.color[2]*a;return b},darken(a){const b=this.hsl();b.color[2]-=b.color[2]*a;return b},saturate(a){const b=this.hsl();b.color[1]+=b.color[1]*a;return b},desaturate(a){const b=this.hsl();b.color[1]-=b.color[1]*a;return b},whiten(a){const b=this.hwb();b.color[1]+=b.color[1]*a;return b},blacken(a){const b=this.hwb();b.color[2]+=
b.color[2]*a;return b},grayscale(){var a=this.rgb().color;a=.3*a[0]+.59*a[1]+.11*a[2];return q.rgb(a,a,a)},fade(a){return this.alpha(this.valpha-this.valpha*a)},opaquer(a){return this.alpha(this.valpha+this.valpha*a)},rotate(a){const b=this.hsl();let c=b.color[0];c=(c+a)%360;b.color[0]=0>c?360+c:c;return b},mix(a,b){if(!a||!a.rgb)throw Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof a);a=a.rgb();const c=this.rgb();b=void 0===b?.5:b;var d=2*b-1,e=a.alpha()-c.alpha();
d=((-1===d*e?d:(d+e)/(1+d*e))+1)/2;e=1-d;return q.rgb(d*a.red()+e*c.red(),d*a.green()+e*c.green(),d*a.blue()+e*c.blue(),a.alpha()*b+c.alpha()*(1-b))}};for(const a of Object.keys(t)){if(O.includes(a))continue;const {channels:b}=t[a];q.prototype[a]=function(...c){if(this.model===a)return new q(this);if(0<c.length)return new q(c,a);c=t[this.model][a].raw(this.color);c=Array.isArray(c)?c:[c];return new q([...c,this.valpha],a)};q[a]=function(...c){let d=c[0];"number"===typeof d&&(d=I(c,b));return new q(d,
a)}}const da=/^#[0-9A-F]{3}$/i,fa=/^#[0-9A-F]{6}$/i,ca=/^#[0-9A-F]{4}$/i,ea=/^#[0-9A-F]{8}$/i,m={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},S=p.proxyCustomElement(class extends p.H{constructor(){super();this.__registerHost();this.__attachShadow();this.active=!1;this.color=void 0;this.scale="m"}handleColorChange(a){this.internalColor=a?q(a):null}componentWillLoad(){this.handleColorChange(this.color)}render(){return p.h("svg",{key:"b29377be8ce0518f7b0f3691dcb1dda08890dd94",
class:{swatch:!0,["swatch--no-color"]:!this.internalColor},xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const {active:a,el:b,internalColor:c}=this,d=a?"100%":"0";var e="light"===X.getModeName(b)?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.15)";e={height:"100%",rx:d,stroke:e,["stroke-width"]:"2",width:"100%"};if(!c)return p.h(p.Fragment,null,p.h("clipPath",{id:"shape"},p.h("rect",{height:"100%",rx:d,width:"100%"})),p.h("rect",{"clip-path":`inset(0 round ${d})`,rx:d,...e}),
p.h("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const f=c.alpha(),h=M(c),k=M(c,1>f);return p.h(p.Fragment,null,p.h("title",null,k),p.h("defs",null,p.h("pattern",{height:8,id:"checker",patternUnits:"userSpaceOnUse",width:8,x:"0",y:"0"},p.h("rect",{class:"checker",height:4,width:4,x:"0",y:"0"}),p.h("rect",{class:"checker",height:4,width:4,x:4,y:4}))),p.h("rect",{fill:"url(#checker)",height:"100%",rx:d,width:"100%"}),p.h("rect",{fill:h,style:{"clip-path":1>
f?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${d})`},...e}),1>f?p.h("rect",{fill:k,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...e}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return":host{position:relative;display:inline-flex}:host([scale\x3ds]){block-size:1.25rem;inline-size:1.25rem}:host([scale\x3dm]){block-size:1.5rem;inline-size:1.5rem}:host([scale\x3dl]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]},void 0,{color:["handleColorChange"]}]);R();n.CSSColorMode=m;n.Color$1=q;n.ColorPickerSwatch=S;n.alphaCompatible=function(a){return a===m.HEXA||a===m.RGBA_CSS||a===m.HSLA_CSS||"rgba"===a||"hsla"===a||"hsva"===a};n.alphaToOpacity=a=>Number((100*a).toFixed());n.colorEqual=function(a,b){return a?.rgb().array().toString()===b?.rgb().array().toString()};n.defineCustomElement=R;n.hexChar=/^[0-9A-F]$/i;n.hexify=M;n.isLonghandHex=P;n.isValidHex=
K;n.normalizeAlpha=function(a){a={...a,a:a.alpha??1};delete a.alpha;return a};n.normalizeColor=function(a){a={...a,alpha:a.a??1};delete a.a;return a};n.normalizeHex=function(a,b=!1,c=!1){a=a.toLowerCase();a.startsWith("#")||(a=`#${a}`);return L(a,b)?N(Q(a,b)):b&&c&&K(a,!1)?(b=L(a,!1),N(Q(`${a}${b?"f":"ff"}`,!0))):a};n.opacityToAlpha=a=>Number((a/100).toFixed(2));n.parseMode=function(a){if("string"===typeof a){if(a.startsWith("#")){const {length:b}=a;if(4===b||7===b)return m.HEX;if(5===b||9===b)return m.HEXA}if(a.startsWith("rgba("))return m.RGBA_CSS;
if(a.startsWith("rgb("))return m.RGB_CSS;if(a.startsWith("hsl("))return m.HSL_CSS;if(a.startsWith("hsla("))return m.HSLA_CSS}if("object"===typeof a){if(z(a,"r","g","b"))return z(a,"a")?"rgba":"rgb";if(z(a,"h","s","l"))return z(a,"a")?"hsla":"hsl";if(z(a,"h","s","v"))return z(a,"a")?"hsva":"hsv"}return null};n.rgbToHex=N;n.toAlphaMode=function(a){return a===m.HEX?m.HEXA:a===m.RGB_CSS?m.RGBA_CSS:a===m.HSL_CSS?m.HSLA_CSS:"rgb"===a?"rgba":"hsl"===a?"hsla":"hsv"===a?"hsva":a};n.toNonAlphaMode=function(a){return a===
m.HEXA?m.HEX:a===m.RGBA_CSS?m.RGB_CSS:a===m.HSLA_CSS?m.HSL_CSS:"rgba"===a?"rgb":"hsla"===a?"hsl":"hsva"===a?"hsv":a}});