// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../geometry/support/jsonUtils ../utils ../operations/offset ../support/OffsetParameters".split(" "),function(c,e,f,d,g,h){c.offset=async function(b,a,k){a=h.from(a);const l=g.offsetToRESTParameters(a);b=d.parseUrl(b);const m=a.geometries?.[0].spatialReference;a=d.asValidOptions({...b.query,f:"json",...l},k);return e(b.path+"/offset",a).then(({data:n})=>(n.geometries||[]).map(p=>f.fromJSON(p).set({spatialReference:m})))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});