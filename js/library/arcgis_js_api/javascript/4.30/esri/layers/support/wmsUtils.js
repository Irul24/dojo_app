// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/Error ../../core/urlUtils ../../geometry/Extent ../../geometry/SpatialReference ../ogc/crsUtils ../../chunks/datetime".split(" "),function(r,D,ca,da,G,J,N,O){function P(a){if(0<a.spatialReferences.length)return a.spatialReferences;if(a.sublayers)for(const d of a.sublayers)if(a=P(d),0<a.length)return a;return[]}function Q(a){let d=[];for(const b of a)d.push(b),b.sublayers?.length&&(d=d.concat(Q(b.sublayers)),delete b.sublayers);return d}function n(a,
d){for(let b=0;b<d.childNodes.length;b++){const c=d.childNodes[b];if(c.nodeType===Node.ELEMENT_NODE&&c.nodeName===a)return c}return null}function H(a,d){if(null==d)return[];const b=[];for(let c=0;c<d.childNodes.length;c++){const f=d.childNodes[c];f.nodeType===Node.ELEMENT_NODE&&f.nodeName===a&&b.push(f)}return b}function t(a,d,b){return n(a,d)?.textContent??b}function E(a,d,b){if(!a)return null;var c=parseFloat(a.getAttribute("minx")),f=parseFloat(a.getAttribute("miny")),g=parseFloat(a.getAttribute("maxx"));
a=parseFloat(a.getAttribute("maxy"));b?(b=isNaN(f)?-Number.MAX_VALUE:f,c=isNaN(c)?-Number.MAX_VALUE:c,f=isNaN(a)?Number.MAX_VALUE:a,g=isNaN(g)?Number.MAX_VALUE:g):(b=isNaN(c)?-Number.MAX_VALUE:c,c=isNaN(f)?-Number.MAX_VALUE:f,f=isNaN(g)?Number.MAX_VALUE:g,g=isNaN(a)?Number.MAX_VALUE:a);d=new J({wkid:d});return new G({xmin:b,ymin:c,xmax:f,ymax:g,spatialReference:d})}function R(a,d){if(a=n(d,a))if(a=n("DCPType",a))if(a=n("HTTP",a))if(a=n("Get",a)){var b=(a=n("OnlineResource",a))?a.getAttribute("xlink:href")??
null:null;if(b){b.indexOf("\x26")===b.length-1&&(b=b.substring(0,b.length-1));a=["service","request"];d=[];b=da.urlToObject(b);for(const c in b.query)b.query.hasOwnProperty(c)&&(a.includes(c.toLowerCase())||d.push(c+"\x3d"+b.query[c]));return b.path+(d.length?"?"+d.join("\x26"):"")}}return null}function S(a,d){var b=H("Operation",a);if(!b.length)return d=n(d,a),H("Format",d).map(({textContent:c})=>c).filter(D.isSome);a=[];for(const c of b)if(c.getAttribute("name")===d){b=H("Format",c);for(const {textContent:f}of b)null!=
f&&a.push(f)}return a}function T(a,d,b){a=n(d,a);if(!a)return b;({textContent:a}=a);if(null==a||""===a)return b;a=Number(a);return isNaN(a)?b:a}function F(a,d,b){if(!a)return null;const c={id:b.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===a.getAttribute("queryable"),spatialReferences:[],sublayers:null},f=n("LatLonBoundingBox",a),g=n("EX_GeographicBoundingBox",a);let p=null;f&&(p=E(f,4326));g&&(p=new G(0,0,0,0,new J({wkid:4326})),p.xmin=parseFloat(t("westBoundLongitude",g,"0")),p.ymin=
parseFloat(t("southBoundLatitude",g,"0")),p.xmax=parseFloat(t("eastBoundLongitude",g,"0")),p.ymax=parseFloat(t("northBoundLatitude",g,"0")));f||g||(p=new G(-180,-90,180,90,new J({wkid:4326})));c.minScale=T(a,"MaxScaleDenominator",0);c.maxScale=T(a,"MinScaleDenominator",0);const w=["1.0.0","1.1.0","1.1.1"].includes(d)?"SRS":"CRS";Array.prototype.slice.call(a.childNodes).forEach(e=>{if("Name"===e.nodeName)c.name=e.textContent||"";else if("Title"===e.nodeName)c.title=e.textContent||"";else if("Abstract"===
e.nodeName)c.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var h=e.getAttribute(w);if(h&&0===h.indexOf("EPSG:")){var q=parseInt(h.substring(5),10);0===q||isNaN(q)||p||(p="1.3.0"===d?E(e,q,N.isAxesOrderReversedForWkid(q)):E(e,q))}(q=h?.indexOf(":"))&&-1<q&&(h=parseInt(h.substring(q+1,h.length),10),0===h||isNaN(h)||(h=U[h]??h),(e="1.3.0"===d?E(e,h,N.isAxesOrderReversedForWkid(h)):E(e,h))&&c.fullExtents&&c.fullExtents.push(e))}else if(e.nodeName===w)(e.textContent?.split(" ")??[]).forEach(m=>
{m=m.includes(":")?parseInt(m.split(":")[1],10):parseInt(m,10);0===m||isNaN(m)||(m=U[m]??m,c.spatialReferences.includes(m)||c.spatialReferences.push(m))});else if("Style"!==e.nodeName||c.legendUrl)"Layer"===e.nodeName&&(e=F(e,d,b))&&(e.parentLayerId=c.id,c.sublayers||(c.sublayers=[]),c.sublayers.push(e));else if(e=n("LegendURL",e))if(e=n("OnlineResource",e))c.legendUrl=e.getAttribute("xlink:href")});c.extent=p?.toJSON();c.dimensions=H("Dimension",a).filter(e=>e.getAttribute("name")&&e.getAttribute("units")&&
e.textContent).map(e=>{const h=e.getAttribute("name"),q=e.getAttribute("units"),m=e.textContent,l=e.getAttribute("unitSymbol")??void 0,x=e.getAttribute("default")??void 0,A="0"!==(e.getAttribute("default")??"0"),y="0"!==(e.getAttribute("nearestValue")??"0");e="0"!==(e.getAttribute("current")??"0");return I({name:h,units:q})?{name:"time",units:"ISO8601",extent:V(m),default:V(x),multipleValues:A,nearestValue:y,current:e}:K({name:h,units:q})?{name:"elevation",units:q,extent:W(m),unitSymbol:l,default:W(x),
multipleValues:A,nearestValue:y}:{name:h,units:q,extent:X(m),unitSymbol:l,default:X(x),multipleValues:A,nearestValue:y}});return c}function ea(a){return Array.isArray(a)&&0<a.length&&a[0]instanceof Date}function K(a){return/^elevation$/i.test(a.name)&&/^(epsg|crs):\d+$/i.test(a.units)}function I(a){return/^time$/i.test(a.name)&&/^iso8601$/i.test(a.units)}function W(a){if(a){var d=a.includes("/");a=a.split(",");return d?a.map(b=>{var c=b.split("/");if(2>c.length)return null;b=parseFloat(c[0]);const f=
parseFloat(c[1]);c=3<=c.length&&"0"!==c[2]?parseFloat(c[2]):void 0;return{min:b,max:f,resolution:c}}).filter(D.isSome):a.map(b=>parseFloat(b))}}function X(a){if(a){var d=a.includes("/");a=a.split(",");return d?a.map(b=>{b=b.split("/");return 2>b.length?null:{min:b[0],max:b[1],resolution:3<=b.length&&"0"!==b[2]?b[2]:void 0}}).filter(D.isSome):a}}function V(a){if(a){var d=a.includes("/");a=a.split(",");return d?a.map(b=>{var c=b.split("/");if(2>c.length)return null;b=L(c[0]);const f=L(c[1]);c=3<=c.length&&
"0"!==c[2]?Y(c[2]):void 0;return{min:b,max:f,resolution:c}}).filter(D.isSome):a.map(b=>L(b))}}function L(a){return O.DateTime.fromISO(a,{zone:O.FixedOffsetZone.utcInstance}).toJSDate()}function Y(a){var d=a.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);if(!d)return null;a=B(d[1]);const b=B(d[2]),c=B(d[3]),f=B(d[4]),g=B(d[5]);d=B(d[6]);return{years:a,months:b,days:c,hours:f,minutes:g,
seconds:d}}function B(a){if(!a)return 0;a=a.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!a)return 0;a=a[0].replace(",",".");return Number(a)}function M(a){return a.toISOString().replace(/\.[0-9]{3}/,"")}const U={84:4326,83:4269,27:4267},Z=new Set([102100,3857,102113,900913]),fa=new Set([3395,54004]);r.fromISODuration=Y;r.getPopupLayers=function(a){a=a.filter(d=>d.popupEnabled&&d.name&&d.queryable);return a.length?a.map(({name:d})=>d).join():null};r.isDimensionInterval=function(a){return void 0!==a.min&&void 0!==
a.max};r.isElevationDimension=K;r.isGenericDimension=function(a){return!I(a)&&!K(a)};r.isTimeDimension=I;r.normalizeWKID=function(a,d){let b=a.wkid;if(null==d)return b;null!=b&&d.includes(b)||!a.latestWkid||(b=a.latestWkid);return null!=b&&Z.has(b)?d.find(c=>Z.has(c))||d.find(c=>fa.has(c))||102100:b};r.parseCapabilities=function(a){if(!a)return null;const d={idCounter:-1};"string"===typeof a&&(a=(new DOMParser).parseFromString(a,"text/xml"));a=a.documentElement;if("ServiceExceptionReport"===a.nodeName)throw a=
Array.prototype.slice.call(a.childNodes).map(k=>k.textContent).join("\r\n"),new ca("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",a);var b=n("Capability",a),c=n("Service",a),f=b&&n("Request",b);if(!b||!c||!f)return null;var g=n("Layer",b);if(!g)return null;const p="WMS_Capabilities"===a.nodeName||"WMT_MS_Capabilities"===a.nodeName?a.getAttribute("version"):"1.3.0";a=t("Title",c,"")||t("Name",c,"");var w=t("AccessConstraints",c,"");
w=/^none$/i.test(w)?"":w;const e=t("Abstract",c,""),h=parseInt(t("MaxWidth",c,"5000"),10);c=parseInt(t("MaxHeight",c,"5000"),10);const q=S(f,"GetMap"),m=R(f,"GetMap"),l=F(g,p,d);if(!l)return null;let x=0,A;b=Array.prototype.slice.call(b.childNodes);const y=l.sublayers??[];b.forEach(k=>{if("Layer"===k.nodeName){if(0===x)A=k;else if(1===x){if(l.name){l.name="";var u=F(A,p,d);null!=u&&y.push(u)}k=F(k,p,d);null!=k&&y.push(k)}else k=F(k,p,d),null!=k&&y.push(k);x++}});var v=l.sublayers;g=l.extent;b=l.fullExtents??
[];v||=[];0===v.length&&v.push(l);g||(g=new G(v[0].extent),l.extent=g.toJSON(),g=l.extent);const ha=0<l.spatialReferences.length?l.spatialReferences:P(l),aa=R(f,"GetFeatureInfo");f=aa?S(f,"GetFeatureInfo"):null;v=Q(v);const ia=l.minScale||0,ja=l.maxScale||0,ba=l.dimensions??[];var C=v.reduce((k,u)=>k.concat(u.dimensions??[]),[]);C=ba.concat(C).filter(I);var z=null;C.length&&(z=C.map(k=>{({extent:k}=k);return ea(k)?k.map(u=>u.getTime()):k?.map(u=>[u.min.getTime(),u.max.getTime()])}).flat(2).filter(D.isSome),
C=Math.min(...z),z=Math.max(...z),z={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[C,z]});return{copyright:w,description:e,dimensions:ba,extent:g,fullExtents:b,featureInfoFormats:f,featureInfoUrl:aa,mapUrl:m,maxWidth:h,maxHeight:c,maxScale:ja,minScale:ia,layers:v,spatialReferences:ha,supportedImageFormatTypes:q,timeInfo:z,title:a,version:p}};r.toTimeQueryParameter=function(a){if(a&&!a.isAllTime&&!a.isEmpty){var {start:d,end:b}=a;if(d&&b&&d.getTime()===b.getTime())return`${M(d)}`;
a=d?M(d):"0000-01-01T00:00:00Z";var c=b?M(b):"9999-12-31T23:59:59Z";return`${a}/${c}`}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});