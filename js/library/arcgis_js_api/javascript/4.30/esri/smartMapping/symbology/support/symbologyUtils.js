// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./Theme"],function(e,k){e.createThemes=function(a){a=a.themeDictionary;const b=new Map;for(const c in a)b.set(c,new k(a[c]));return b};e.filterSchemesByName=function(a,b){if(a&&b){var c=null;b=[b.primaryScheme,...b.secondarySchemes];for(const d of b)if(d.name?.toLowerCase()===a.toLowerCase()){c=d;break}return c}};e.filterSchemesByTag=function(a,b,c){if(!a&&!b||!c)return[];const d=!a?.length,l=!b?.length;var f=[c.primaryScheme,...c.secondarySchemes];c=[];for(const g of f){f=d?!0:
a.some(h=>g.tags.includes(h));const m=!l&&b.some(h=>g.tags.includes(h));f&&!m&&c.push(g)}return c};e.getRawSchemes=function(a){const b=a.theme;if(b)return b.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme})};e.getThemesforBasemap=function(a,b){const c=[];a.forEach(d=>{d.isBasemapSupported(b)&&c.push({name:d.name,label:d.label,description:d.description,basemaps:[...d.supportedBasemaps]})});return c};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});