/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../../geometry.js";import t from"../../core/Error.js";import{l as e,f as s,b as n,c as i}from"../../chunks/unitUtils.js";import{t as r,s as o,w as a}from"../../chunks/geodesicConstants.js";import c from"../Polyline.js";import p from"../Polygon.js";import h from"../Point.js";import u from"../SpatialReference.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"./webMercatorUtils.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/typeUtils.js";import"./jsonUtils.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";function l(t){if(!t)return null;if(i(t)&&t.wkid){const e=o[t.wkid];if(e)return e}const e=t.wkt2||t.wkt;if(e){const t=function(t){const e=a.exec(t);if(!e||2!==e.length)return null;const s=e[1].split(",");if(!s||s.length<3)return null;const n=parseFloat(s[1]),i=parseFloat(s[2]);return isNaN(n)||isNaN(i)?null:{a:n,f:0===i?0:1/i}}(e);if(t)return t}return null}function m(t){const e=l(t);if(function(t){return null!=t&&"b"in t&&"eSq"in t&&"radius"in t}(e))return e;const s=e.a*(1-e.f);return Object.assign(e,{b:s,eSq:1-(s/e.a)**2,radius:(2*e.a+s)/3,densificationRatio:1e4/((2*e.a+s)/3)})}function f(t){return null!=t&&t<0?t+360:t}function d(t,e,s){const{a:n,eSq:i}=m(s),o=Math.sqrt(i),a=Math.sin(e[1]*r),c=n*e[0]*r;let p;return p=i>0?n*((1-i)*(a/(1-i*(a*a))-1/(2*o)*Math.log((1-o*a)/(1+o*a))))*.5:n*a,t[0]=c,t[1]=p,t}function g(t){return null!==l(t)}function M(s,n="square-meters"){if(s.some((t=>!g(t.spatialReference))))throw new t("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const e=s[t],n=e.spatialReference,{radius:r,densificationRatio:o}=m(n),a=r*o;i.push(w(e,a))}const r=[],o=[0,0],a=[0,0];for(let t=0;t<i.length;t++){const{rings:s,spatialReference:c}=i[t];let p=0;for(let t=0;t<s.length;t++){const e=s[t];d(o,e[0],c),d(a,e[e.length-1],c);let n=a[0]*o[1]-o[0]*a[1];for(let t=0;t<e.length-1;t++)d(o,e[t+1],c),d(a,e[t],c),n+=a[0]*o[1]-o[0]*a[1];p+=n}p=e(p,"square-meters",n),r.push(p/-2)}return r}function j(s,n="meters"){if(!s)throw new t("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(s.some((t=>!g(t.spatialReference))))throw new t("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const r=s[t],{spatialReference:o}=r,a="polyline"===r.type?r.paths:r.rings;let c=0;for(let t=0;t<a.length;t++){const e=a[t];let s=0;for(let t=1;t<e.length;t++){const n=e[t-1][0],i=e[t][0],r=e[t-1][1],a=e[t][1];if(r!==a||n!==i){const t=new y;v(t,[n,r],[i,a],o),s+=t.distance}}c+=s}c=e(c,"meters",n),i.push(c)}return i}function w(e,s){if("polyline"!==e.type&&"polygon"!==e.type)throw new t("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!g(n))throw new t("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const i="polyline"===e.type?e.paths:e.rings,r=[],o=[0,0],a=new y;for(const t of i){const e=[];r.push(e),e.push([t[0][0],t[0][1]]);let i,c,p=t[0][0],h=t[0][1];for(let r=0;r<t.length-1;r++){if(i=t[r+1][0],c=t[r+1][1],p===i&&h===c)continue;const u=[p,h];v(a,[p,h],[i,c],n);const{azimuth:l,distance:m}=a,f=m/s;if(f>1){for(let t=1;t<=f-1;t++)k(o,u,l,t*s,n),e.push(o.slice(0));k(o,u,l,(m+Math.floor(f-1)*s)/2,n),e.push(o.slice(0))}k(o,u,l,m,n),e.push(o.slice(0)),p=o[0],h=o[1]}}return"polyline"===e.type?new c({paths:r,spatialReference:n}):new p({rings:r,spatialReference:n})}class y{constructor(t=0,e=void 0,s=void 0){this.distance=t,this.azimuth=e,this.reverseAzimuth=s}}function k(t,e,s,n,i){const o=e[0],a=e[1],c=o*r,p=a*r,h=(s??0)*r,{a:u,b:l,f}=m(i),d=Math.sin(h),g=Math.cos(h),M=(1-f)*Math.tan(p),j=1/Math.sqrt(1+M*M),w=M*j,y=Math.atan2(M,g),k=j*d,v=k*k,R=1-v,b=R*(u*u-l*l)/(l*l),z=1+b/16384*(4096+b*(b*(320-175*b)-768)),x=b/1024*(256+b*(b*(74-47*b)-128));let U,q,S,A,N=n/(l*z),P=2*Math.PI;for(;Math.abs(N-P)>1e-12;)S=Math.cos(2*y+N),U=Math.sin(N),q=Math.cos(N),A=x*U*(S+x/4*(q*(2*S*S-1)-x/6*S*(4*U*U-3)*(4*S*S-3))),P=N,N=n/(l*z)+A;const O=w*U-j*q*g,B=Math.atan2(w*q+j*U*g,(1-f)*Math.sqrt(v+O*O)),E=Math.atan2(U*d,j*q-w*U*g),F=f/16*R*(4+f*(4-3*R)),G=B/r,C=(c+(E-(1-F)*f*k*(N+F*U*(S+F*q*(2*S*S-1)))))/r;return t[0]=C,t[1]=G,t}function v(t,e,s,n){const i=e[0]*r,o=e[1]*r,a=s[0]*r,c=s[1]*r,{a:p,b:h,f:u,radius:l}=m(n),f=a-i,d=Math.atan((1-u)*Math.tan(o)),g=Math.atan((1-u)*Math.tan(c)),M=Math.sin(d),j=Math.cos(d),w=Math.sin(g),y=Math.cos(g);let k,v,R,b,z,x,U,q,S,A,N=1e3,P=f;do{if(U=Math.sin(P),q=Math.cos(P),R=Math.sqrt(y*U*(y*U)+(j*w-M*y*q)*(j*w-M*y*q)),0===R)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;z=M*w+j*y*q,x=Math.atan2(R,z),S=j*y*U/R,v=1-S*S,b=z-2*M*w/v,isNaN(b)&&(b=0),A=u/16*v*(4+u*(4-3*v)),k=P,P=f+(1-A)*u*S*(x+A*R*(b+A*z*(2*b*b-1)))}while(Math.abs(P-k)>1e-12&&--N>0);if(0===N){const e=l,s=Math.acos(Math.sin(o)*Math.sin(c)+Math.cos(o)*Math.cos(c)*Math.cos(a-i))*e,n=a-i,p=Math.sin(n)*Math.cos(c),h=Math.cos(o)*Math.sin(c)-Math.sin(o)*Math.cos(c)*Math.cos(n),u=Math.atan2(p,h);return t.azimuth=u/r,t.distance=s,t.reverseAzimuth=void 0,t}const O=v*(p*p-h*h)/(h*h),B=O/1024*(256+O*(O*(74-47*O)-128)),E=h*(1+O/16384*(4096+O*(O*(320-175*O)-768)))*(x-B*R*(b+B/4*(z*(2*b*b-1)-B/6*b*(4*R*R-3)*(4*b*b-3)))),F=Math.atan2(y*Math.sin(P),j*w-M*y*Math.cos(P)),G=Math.atan2(j*Math.sin(P),j*w*Math.cos(P)-M*y);return t.azimuth=F/r,t.distance=E,t.reverseAzimuth=G/r,t}function R(n,i,r="meters"){if(!n||!i)throw new t("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!n.spatialReference||!i.spatialReference)throw new t("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!s(n.spatialReference,i.spatialReference))throw new t("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:o}=n;if(!g(o))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(n.x===i.x&&n.y===i.y)return new y(0,0,0);const a=new y;return v(a,[n.x,n.y],[i.x,i.y],o),a.distance=e(a.distance,"meters",r),a.azimuth=f(a.azimuth),a.reverseAzimuth=f(a.reverseAzimuth),a}function b(e,s,n){if(!e||null==s||null==n)throw new t("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(n<0||n>360)throw new t("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0° to 360° degrees");if(!e.spatialReference)throw new t("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:i}=e;if(!g(i))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");const r=[0,0];return k(r,[e.x,e.y],n,s,i),new h({x:r[0],y:r[1],spatialReference:i})}function z(t){return g(t)?t:n(t)?u.WGS84:null}export{y as InverseGeodeticSolverResult,k as directGeodeticSolver,M as geodesicAreas,z as geodesicCompatibleSpatialReference,w as geodesicDensify,R as geodesicDistance,j as geodesicLengths,v as inverseGeodeticSolver,g as isSupported,b as pointFromDistance};
