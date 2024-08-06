// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./boundsUtils"],function(e,g){function h(a,c=!1,b=!1){return c?b?{xmin:a[0],ymin:a[1],zmin:a[2],mmin:a[3],xmax:a[4],ymax:a[5],zmax:a[6],mmax:a[7]}:{xmin:a[0],ymin:a[1],zmin:a[2],xmax:a[3],ymax:a[4],zmax:a[5]}:b?{xmin:a[0],ymin:a[1],mmin:a[2],xmax:a[3],ymax:a[4],mmax:a[5]}:{xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3]}}function l(a){const {hasZ:c,hasM:b,points:d}=a;return h(g.getPointsBounds(k,d,c??!1,b??!1),c,b)}function m(a){const {x:c,y:b,z:d,m:f}=a;a=null!=f;return null!=d?a?{xmin:c,
ymin:b,zmin:d,mmin:f,xmax:c,ymax:b,zmax:d,mmax:f}:{xmin:c,ymin:b,zmin:d,xmax:c,ymax:b,zmax:d}:a?{xmin:c,ymin:b,mmin:f,xmax:c,ymax:b,mmax:f}:{xmin:c,ymin:b,xmax:c,ymax:b}}function n(a){const {hasZ:c,hasM:b,rings:d}=a;return(a=g.getRingsOrPathsBounds(k,d,c??!1,b??!1))?h(a,c,b):null}function p(a){const {hasZ:c,hasM:b,paths:d}=a;return(a=g.getRingsOrPathsBounds(k,d,c??!1,b??!1))?h(a,c,b):null}const k=[];e.getGeometryExtent=function(a){return a?void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==
a.ymax?a:void 0!==a.x&&void 0!==a.y?m(a):void 0!==a.rings?n(a):void 0!==a.paths?p(a):void 0!==a.points?l(a):null:null};e.getMultipointExtent=l;e.getPointExtent=m;e.getPolygonExtent=n;e.getPolylineExtent=p;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});