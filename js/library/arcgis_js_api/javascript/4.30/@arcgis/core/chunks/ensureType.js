/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../core/lang.js";import{L as e}from"./Logger.js";function n(e,n){for(const[r,t]of e)if(n(t,r))return!0;return!1}function r(e,n){for(const[r,t]of e)if(n(t,r))return t;return null}function t(e,n,r){const t=e.get(n);if(void 0!==t)return t;const o=r();return e.set(n,o),o}function o(e){const n=new Map;return r=>(n.has(r)||n.set(r,e(r)),n.get(r))}const u=()=>e.getLogger("esri.core.accessorSupport.ensureTypes");function a(e){return null==e?e:new Date(e)}function s(e){return null==e?e:!!e}function c(e){return null==e?e:e.toString()}function i(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function l(e){return null==e?e:Math.round(parseFloat(e))}function f(e){return null}function p(e){return e?.constructor&&void 0!==e.constructor.__accessorMetadata__}function y(e,n){return null!=n&&e&&!(n instanceof e)}function v(e){return e&&"isCollection"in e}function g(e){return e?.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function h(e,n){return!!p(n)&&(u().error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+m(e)+"'"),!0)}function d(e,n){return null==n?n:v(e)?function(e,n){if(!n?.constructor||!v(n.constructor))return h(e,n)?n:new e(n);const r=g(e.prototype.itemType),t=g(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(h(e,n),n):new e(n):n}(e,n):y(e,n)?h(e,n)?n:new e(n):n}function m(e){return e?.prototype?.declaredClass||"unknown"}const b=new WeakMap;function w(e,n){const r=function(e){switch(e){case Number:return i;case _:return l;case Boolean:return s;case String:return c;case Date:return a;case B:return f;default:return t(b,e,(()=>d.bind(null,e)))}}(e);return 1===arguments.length?r:r(n)}function A(e,n,r){return 1===arguments.length?A.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function $(e,n){return 1===arguments.length?A((n=>w(e,n))):A((n=>w(e,n)),n)}function j(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>j(e,n-1,r))):e(r)}function k(e,n,r){if(2===arguments.length)return r=>k(e,n,r);if(!r)return r;r=j(e,n,r);let t=n,o=r;for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let e=0;e<t;e++)r=[r];return r}function M(e,n,r){return 2===arguments.length?k((n=>w(e,n)),n):k((n=>w(e,n)),n,r)}function N(e){return!!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return!("string"===r||"number"===r||"function"===r&&e.length>1)}))}function S(e,n){if(2===arguments.length)return S(e).call(null,n);const r=new Set,t=e.filter((e=>"function"!=typeof e)),o=e.filter((e=>"function"==typeof e));for(const n of e)"string"!=typeof n&&"number"!=typeof n||r.add(n);let a=null,s=null;return(e,n)=>{if(null==e)return e;const c=typeof e,i="string"===c||"number"===c;return i&&(r.has(e)||o.some((e=>"string"===c&&e===String||"number"===c&&e===Number)))||"object"===c&&o.some((n=>!y(e,n)))?e:(i&&t.length?(a||(a=t.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),u().error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&o.length?(s||(s=o.map((e=>m(e))).join(", ")),u().error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):u().error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function T(e,n){if(2===arguments.length)return T(e).call(null,n);const r={},t=[],o=[];for(const n in e.typeMap){const u=e.typeMap[n];r[n]=w(u),t.push(m(u)),o.push(n)}const a="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!y(e.base,n))return n;if(null==n)return n;const s=a(n)||e.defaultKeyValue,c=r[s];if(!c)return u().error("Accessor#set",`Invalid property value, value needs to be one of '${t.join("', '")}', or a plain object that can autocast (having .type = '${o.join("', '")}')`),null;if(!y(e.typeMap[s],n))return n;if("string"==typeof e.key&&!p(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return c(r)}return c(n)}}class _{}class B{}const C={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function D(e){if(!e||!("type"in e))return!1;switch(e.type){case"native":case"array":case"one-of":return!0}return!1}function I(e){switch(e.type){case"native":return w(e.value);case"array":return A(I(e.value));case"one-of":return function(e){let n=null;return(r,t)=>F(r,e)?r:(null==n&&(n=L(e)),u().error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),t&&(t.valid=!1),null)}(e);default:return null}}function L(e){switch(e.type){case"native":switch(e.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case _:return"integer";case Date:return"date";case B:return"null";default:return m(e.value)}case"array":return`array of ${L(e.value)}`;case"one-of":{const n=e.values.map((e=>L(e)));return`one of ${n.slice(0,-1)} or ${n[n.length-1]}`}}return"unknown"}function F(e,n){if(null==e)return!0;switch(n.type){case"native":switch(n.value){case Number:case _:return"number"==typeof e;case Boolean:return"boolean"==typeof e;case String:return"string"==typeof e;case B:return null===e}return e instanceof n.value;case"array":return!!Array.isArray(e)&&!e.some((e=>!F(e,n.value)));case"one-of":return n.values.some((n=>F(e,n)))}}export{_ as I,B as N,T as a,d as b,l as c,c as d,w as e,i as f,t as g,A as h,D as i,I as j,N as k,S as l,k as m,$ as n,M as o,o as p,r as q,n as s,C as t};
