/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{h as t,clone as s}from"../core/lang.js";import{q as e}from"./QueryEngineCapabilities.js";import{d as r,a as p,b as o}from"./defaultsJSON.js";function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?r:"esriGeometryPolyline"===t?p:o}}}const n=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let a=1;function i(s,e){if(t("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this${c(e)} = null;`;for(const e in s)t+=`this${c(e)} = ${JSON.stringify(s[e])};`;const r=new Function(`\n      return class AttributesClass$${a++} {\n        constructor() {\n          ${t};\n        }\n      }\n    `)();return()=>new r}catch(t){return()=>({[e]:null,...s})}}function c(t){return n.test(t)?`.${t}`:`["${t}"]`}function l(t={}){return[{name:"New Feature",description:"",prototype:{attributes:s(t)}}]}function y(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:e,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{l as a,i as b,u as c,y as d};
