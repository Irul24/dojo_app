// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["require","exports","./core/has","./core/urlUtils","./support/revision"],function(p,b,n,h,e){let k;(k=Symbol).dispose??(k.dispose=Symbol("Symbol.dispose"));let l;(l=Symbol).asyncDispose??(l.asyncDispose=Symbol("Symbol.asyncDispose"));b.id=void 0;if(!n("host-webworker")){console.debug(`Using ArcGIS Maps SDK for JavaScript ${"4.30"} [Date: ${e.buildDate}, Revision: ${e.commitHash.slice(0,8)}]`);let c;"function"===typeof globalThis.require&&(c=globalThis.require);const g=a=>{if(!c)return Promise.reject("global AMD `require` function not found");
const d=a.startsWith("@arcgis/core/")?a.replace("@arcgis/core/","esri/").replace(/.js$/,""):a;return new Promise(f=>c([d],f))},m=a=>{var d;var f=(d=globalThis.$arcgis.importMap?.imports)&&a in d?d[a]:null;f?(d=!0,a=f):d=a.startsWith("/")||a.startsWith("./")||a.startsWith("../")||h.isAbsolute(a);return d?import(a):g(a)};globalThis.$arcgis||Object.defineProperty(globalThis,"$arcgis",{configurable:!1,enumerable:!0,writable:!1,value:{}});Object.defineProperty(globalThis.$arcgis,"import",{configurable:!1,
enumerable:!0,writable:!1,value:a=>Array.isArray(a)?Promise.all(a.map(m)):m(a)})}b.buildDate=e.buildDate;b.revision=e.commitHash;b.addTokenParameter=function(c){const g=b.id?.findCredential(c);return g?.token?h.addQueryParameter(c,"token",g.token):c};b.fullVersion="4.30";b.setId=function(c){b.id=c};b.version="4.30";Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});