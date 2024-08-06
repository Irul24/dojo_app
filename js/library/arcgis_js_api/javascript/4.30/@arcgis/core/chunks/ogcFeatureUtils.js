/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../request.js";import t from"../core/Error.js";import{L as n}from"./Logger.js";import{makeAbsolute as i,addQueryParameters as r,urlToObject as s}from"../core/urlUtils.js";import{w as a}from"./unitUtils.js";import{project as o}from"../geometry/support/webMercatorUtils.js";import{c as l,a as c,b as u}from"./featureConversionUtils.js";import{O as d}from"./OptimizedFeatureSet.js";import{v as f,i as m,c as p}from"./geojson.js";import{c as g}from"./clientSideDefaults.js";import{m as y}from"./sourceUtils.js";import w from"../layers/support/FieldsIndex.js";import{k as j}from"./fieldType.js";import{u as b}from"./timeZoneUtils.js";import h from"../geometry/SpatialReference.js";const F=()=>n.getLogger("esri.layers.ogc.ogcFeatureUtils"),I="startindex",T=new Set([I,"offset"]),k="http://www.opengis.net/def/crs/",x=`${k}OGC/1.3/CRS84`;var S;async function v(n,a,o={},l=5){const{links:c}=n,u=D(c,"items",S.geojson)||D(c,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==u)throw new t("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:p,signal:y}=o,k=i(u.href,n.landingPage.url),x={limit:l,...p,token:d},v=r(k,x),O={accept:S.geojson},{data:q}=await e(v,{signal:y,headers:O}),N=function(e,t,n){if(!n)return;const i=D(n,"next",S.geojson),r=s(i?.href)?.query;if(!r)return;const a=s(e).query,o=Object.keys(a??{}),l=Object.entries(r).filter((([e])=>!o.includes(e))).find((([e,n])=>T.has(e.toLowerCase())&&Number.parseInt(n,10)===t)),c=l?.[0];return c}(v,l,q.links)??I;f(q);const P=m(q,{geometryType:a.geometryType}),C=a.fields||P.fields||[],$=null!=a.hasZ?a.hasZ:P.hasZ,G=P.geometryType,R=a.objectIdField||P.objectIdFieldName||"OBJECTID";let W=a.timeInfo;const M=C.find((({name:e})=>e===R));if(M)M.editable=!1,M.nullable=!1;else{if(!P.objectIdFieldType)throw new t("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");C.unshift({name:R,alias:R,type:"number"===P.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(R!==P.objectIdFieldName){const e=C.find((({name:e})=>e===P.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}C===P.fields&&P.unknownFields.length>0&&F().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:P.unknownFields}});for(const e of C){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new t("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!j.jsonValues.includes(e.type))throw new t("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(W){const e=new w(C);if(W.startTimeField){const t=e.get(W.startTimeField);t?(W.startTimeField=t.name,t.type="esriFieldTypeDate"):W.startTimeField=null}if(W.endTimeField){const t=e.get(W.endTimeField);t?(W.endTimeField=t.name,t.type="esriFieldTypeDate"):W.endTimeField=null}if(W.trackIdField){const t=e.get(W.trackIdField);t?W.trackIdField=t.name:(W.trackIdField=null,F().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:W}}))}W.timeReference||={timeZoneIANA:b},W.startTimeField||W.endTimeField||(F().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:W}}),W=void 0)}const Z=G?g(G):null,L=function(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],i=4===n.length,[r,s]=n,a=i?void 0:n[2];return{xmin:r,ymin:s,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:a,zmax:i?void 0:n[5],spatialReference:h.WGS84.toJSON()}}(n);return{drawingInfo:Z,extent:L,geometryType:G,fields:C,hasZ:!!$,objectIdField:R,paginationParameter:N,timeInfo:W}}async function O(n,r={}){const{links:s,url:a}=n,o=D(s,"data",S.json)||D(s,"http://www.opengis.net/def/rel/ogc/1.0/data",S.json);if(null==o)throw new t("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:l,customParameters:c,signal:u}=r,d=i(o.href,a),{data:f}=await e(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});for(const e of f.collections)e.landingPage=n;return f}async function q(n,r={}){const{links:s,url:a}=n,o=D(s,"conformance",S.json)||D(s,"http://www.opengis.net/def/rel/ogc/1.0/conformance",S.json);if(null==o)throw new t("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:l,customParameters:c,signal:u}=r,d=i(o.href,a),{data:f}=await e(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});return f}async function N(t,n={}){const{apiKey:i,customParameters:r,signal:s}=n,{data:a}=await e(t,{signal:s,headers:{accept:S.json},query:{...r,token:i}});return a.url=t,a}async function P(t,n={}){const{links:r,url:s}=t,a=D(r,"service-desc",S.openapi);if(null==a)return F().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:l,signal:c}=n,u=i(a.href,s),{data:d}=await e(u,{signal:c,headers:{accept:S.openapi},query:{...l,token:o}});return d}function C(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:r}=n;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return h.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return h.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function $(e,t,n){const i=await G(e,t,n);return l(i)}async function G(n,r,s){const{collection:{links:l,landingPage:{url:f}},layerDefinition:m,maxRecordCount:g,queryParameters:{apiKey:j,customParameters:b},spatialReference:F,supportedCrs:I}=n,T=D(l,"items",S.geojson)||D(l,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==T)throw new t("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:v,timeExtent:O,where:q}=r;if(r.objectIds)throw new t("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const N=h.fromJSON(F),P=r.outSpatialReference??N,C=P.isWGS84?null:R(P,I),$=function(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:W(e)};const i=R(n,t);return null!=i?{bbox:W(e),"bbox-crs":i}:n.isWebMercator?{bbox:W(o(e,h.WGS84))}:null}(k,I),G=function(e){if(null==e)return null;const{start:t,end:n}=e;return`${null!=t?t.toISOString():".."}/${null!=n?n.toISOString():".."}`}(O),M=function(e){return null!=e&&e&&"1=1"!==e?e:null}(q),Z=x??(null==v?g:10),L=0===v?void 0:v,{fields:U,geometryType:K,hasZ:A,objectIdField:J,paginationParameter:z}=m,E=i(T.href,f),{data:_}=await e(E,{...s,query:{...b,...$,crs:C,datetime:G,query:M,limit:Z,[z]:L,token:j},headers:{accept:S.geojson}}),B=p(_,{geometryType:K,hasZ:A,objectIdField:J}),Q=B.length===Z&&!!D(_.links??[],"next",S.geojson),V=new w(U);for(const e of B){const t={};y(V,t,e.attributes),t[J]=e.attributes[J],e.attributes=t}if(!C&&P.isWebMercator)for(const e of B)if(null!=e.geometry&&null!=K){const t=c(e.geometry,K,A,!1);t.spatialReference=h.WGS84,e.geometry=u(o(t,P))}for(const e of B)e.objectId=e.attributes[J];const H=C||!C&&P.isWebMercator?P.toJSON():a,X=new d;return X.exceededTransferLimit=Q,X.features=B,X.fields=U,X.geometryType=K,X.hasZ=A,X.objectIdFieldName=J,X.spatialReference=H,X}function R(e,t){const{isWebMercator:n,wkid:i}=e;if(!i)return null;const r=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return r?`${k}${r}`:null}function W(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:i,ymax:r}=e;return`${t},${n},${i},${r}`}function D(e,t,n){return e.find((({rel:e,type:i})=>e===t&&i===n))??e.find((({rel:e,type:n})=>e===t&&!n))}!function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"}(S||(S={}));export{N as a,q as b,x as c,O as d,P as e,v as f,C as g,k as h,G as i,$ as q};
