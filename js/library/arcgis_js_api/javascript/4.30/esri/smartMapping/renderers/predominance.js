// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../intl/messages ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/numberUtils ../../renderers/visualVariables/OpacityVariable ../../renderers/visualVariables/support/OpacityStop ../../renderers/visualVariables/support/VisualVariableLegendOptions ../heuristics/outline ./size ./type ./support/utils ../statistics/predominantCategories ../statistics/summaryStatistics ../statistics/support/predominanceUtils ../support/binningUtils ../support/adapters/support/layerUtils ../symbology/predominance".split(" "),
function(y,m,u,v,F,G,H,z,I,J,K,L,l,M,N,O,P,p,A){async function Q(a){if(!(a?.layer&&a.view&&a.fields?.length))throw new m("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(2>a.fields.length)throw new m("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(10<a.fields.length)throw new m("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");a.forBinning&&P.verifyBinningParams(a,"predominance-renderer");
const b={...a,layer:a.layer,fields:a.fields};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=!0);b.includeOpacityVariable=a.includeOpacityVariable||!1;b.includeSizeVariable=a.includeSizeVariable||!1;b.sortBy??(b.sortBy="count");a=p.createLayerAdapter(b.layer,a.forBinning?p.binningCapableLayerTypes:p.featureCapableLayerTypes,a.forBinning);if(!a)throw new m("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(p.featureCapableLayerTypes).join(", "));
b.layer=a;await a.load(null!=b.signal?{signal:b.signal}:null);var c=a.geometryType;const d=b.symbolType.includes("3d");b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.includeSizeVariable||(b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1);if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none",b.sizeOptimizationEnabled=!1;else{if(d&&("polyline"===c||"polygon"===
c))throw new m("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new m("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=b.fields.map(e=>e.name);if(a=l.verifyBasicFieldValidity(a,c,"predominance-renderer:invalid-parameters"))throw a;return b}async function R(a){let b=
a.predominanceScheme,c=null;var d=null;d=await l.getBasemapInfo(a.basemap,a.view);c=null!=d.basemapId?d.basemapId:null;d=null!=d.basemapTheme?d.basemapTheme:null;if(b)return{scheme:A.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=A.getSchemes({basemapTheme:d,geometryType:a.geometryType,numColors:a.numColors,theme:a.theme,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}}async function S(a,b,c,d){var e=await u.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),
g=a.layer,k={layer:a.layer,view:a.view,signal:a.signal};const [f,w]=await Promise.all([M({layer:g,fields:d,view:a.view,signal:a.signal}),a.outlineOptimizationEnabled?J(k).catch(l.errorCallback):null]);k=f;f?.predominantCategoryInfos||(k={predominantCategoryInfos:d.map(h=>({value:h,count:0}))});const B=w?.opacity;b=await L.createRenderer({layer:g,basemap:a.basemap,valueExpression:b.valueExpression,valueExpressionTitle:e.predominantCategory,numTypes:-1,defaultSymbolEnabled:a.defaultSymbolEnabled,sortBy:a.sortBy,
typeScheme:c,statistics:{uniqueValueInfos:k.predominantCategoryInfos},legendOptions:a.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:a.includeSizeVariable&&a.sizeOptimizationEnabled?!1:a.sizeOptimizationEnabled,symbolType:a.symbolType,colorMixMode:a.colorMixMode,edgesType:a.edgesType,view:a.view,signal:a.signal});const {renderer:q,basemapId:T,basemapTheme:U,uniqueValueInfos:x,excludedUniqueValueInfos:V}=b;b=q.uniqueValueInfos??[];const C={};for(var n of a.fields)e=g.getField(n.name),
C[e.name]=n.label||e&&e.alias||n.name;b.forEach((h,r)=>{const t=C[h.value];h.label=t;x[r].label=t});if(a.includeSizeVariable){let h=g.geometryType,r=null;"polygon"===h?(g=c.sizeScheme,n=g.background,q.backgroundFillSymbol=l.createSymbol(h,{type:a.symbolType,color:n.color,outline:l.getSymbolOutlineFromScheme(n,h,B)}),r=g.marker.size,h="point"):r="polyline"===h?c.width:c.size;const t=l.createColors(c.colors,b.length);b.forEach((W,D)=>{const E=l.createSymbol(h,{type:a.symbolType,color:t[D],size:r,outline:l.getSymbolOutlineFromScheme(c,
h,B),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}});W.symbol=E;x[D].symbol=E.clone()})}w?.visualVariables.length&&(q.visualVariables=w.visualVariables.map(h=>h.clone()));q.authoringInfo=new v({type:"predominance",fields:[...d]});return{renderer:q,predominantCategoryInfos:x,excludedCategoryInfos:V,predominanceScheme:c,basemapId:T,basemapTheme:U}}async function X(a,b,c){const d=await u.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return K.createVisualVariables({layer:a.layer,
basemap:a.basemap,valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere,sizeScheme:c,sizeOptimizationEnabled:a.sizeOptimizationEnabled,worldScale:!!a.symbolType?.includes("3d-volumetric"),legendOptions:{title:d.sumOfCategories},view:a.view,signal:a.signal})}async function Y(a,b){var c=await u.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const d=await N({layer:a.layer,valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,
sqlWhere:b.statisticsQuery.sqlWhere,view:a.view,signal:a.signal}),{avg:e,stddev:g}=d,k=null==e||null==g;a=1/a.fields.length*100;let f=k?100:e+1.285*g;100<f&&(f=100);a=G.round([a,f],{strictBounds:!0});b=new H({valueExpression:b.valueExpression,stops:[new z({value:a[0],opacity:.15}),new z({value:a[1],opacity:1})],legendOptions:new I({title:c.strengthOfPredominance})});c=new F({type:"opacity",minSliderValue:d.min,maxSliderValue:d.max});c=new v({visualVariables:[c]});return{visualVariable:b,statistics:d,
defaultValuesUsed:k,authoringInfo:c}}y.createRenderer=async function(a){a=await Q(a);var b=a.layer,c=(await R({basemap:a.basemap,geometryType:b.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:!!a.symbolType?.includes("3d-volumetric"),view:a.view})).scheme,d=a.fields.map(f=>f.name);b=O.getPredominanceExpressions(b,d);d=S(a,b.predominantCategory,c,d);c=a.includeSizeVariable?X(a,b.size,c.sizeScheme):null;a=a.includeOpacityVariable?Y(a,b.opacity):null;const [e,
g,k]=await Promise.all([d,c,a]);a=[];c=[];g&&(Array.prototype.push.apply(a,g.visualVariables.map(f=>f.clone())),delete g.sizeScheme,e.size=g,Array.prototype.push.apply(c,g.authoringInfo.visualVariables.map(f=>f.clone())));k&&(a.push(k.visualVariable.clone()),e.opacity=k,Array.prototype.push.apply(c,k.authoringInfo.visualVariables.map(f=>f.clone())));if(a.length){b=e.renderer.visualVariables||[];Array.prototype.push.apply(b,a);e.renderer.visualVariables=b;let f;(f=e.renderer).authoringInfo??(f.authoringInfo=
new v);e.renderer.authoringInfo.visualVariables=c}return e};Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});