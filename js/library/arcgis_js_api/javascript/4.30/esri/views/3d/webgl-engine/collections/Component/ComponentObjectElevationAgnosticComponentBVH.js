// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/aaBoundingBox ./ComponentObjectElevationAgnosticComponentGeometryBVH ./ElevationAgnosticBVH ../../lib/ComponentUtils ../../lib/RayIntersections".split(" "),function(A,x,p,I,B,J,C,y){class K{constructor(a,b,d,e,f,c,g,h){this.vertexData=a;this.vertexStride=b;this.indexData=d;this._components=e;this._componentAabbs3D=f;this.geometryMinZ=c;this.planetCenterZ=g;this.localMode=
h;this.maxBspNodeDepth=6;this.minElementCountForBVH=10;this.minBspNodeElementCount=3;this._ray0=L;this._ray1=M;this._invDir=p.create();this._verticalOffset=this._componentVerticalOffsets=null;this._tolerance=0;this._intersectionOptions=N;this._callback=D;this.rayDirectionC=p.create();this._componentIndexMap=null;this._bvh=new J.ElevationAgnosticBVH(e.count,this);this.componentIntersectionData=Array(e.count)}get numComponents(){return this._components.count}get minZGlobal(){return this.geometryMinZ-
this.planetCenterZ}getAabbs2D(){return this.localMode?this.getAabbs2DLocal():this.getAabbs2DGlobal()}getAabbs2DGlobal(){const {numComponents:a,planetCenterZ:b,minZGlobal:d}=this,e=new Float64Array(4*a),f=this._componentAabbs3D;for(let l=0;l<a;++l){var c=6*l;const w=f[c+0];var g=f[c+1],h=f[c+3],k=f[c+4];const m=d/(f[c+2]-b);c=d/(f[c+5]-b);g=Math.min(g*m,g*c);h=Math.max(h*m,h*c);k=Math.max(k*m,k*c);const n=4*l;e[n+0]=Math.min(w*m,w*c);e[n+1]=g;e[n+2]=h;e[n+3]=k}return e}getAabbs2DLocal(){const {numComponents:a}=
this,b=new Float64Array(4*a),d=this._componentAabbs3D;for(let e=0;e<a;++e){const f=6*e,c=d[f+1],g=d[f+3],h=d[f+4],k=4*e;b[k+0]=d[f+0];b[k+1]=c;b[k+2]=g;b[k+3]=h}return b}intersectRay(a,b,d,e,f,c,g){const {isVerticalRay:h}=g;this._ray0=a;this._ray1=b;this._componentVerticalOffsets=d;this._verticalOffset=e;this._tolerance=c;this._intersectionOptions=g;this._componentIndexMap=this._bvh.elementIndexMap;y.computeInvDir(a,b,this._invDir);this._callback=f;this._bvh.intersectRay(a,b,h);this._callback=D}intersectRange(a,
b){const d=this._componentIndexMap;var e=this._components;const f=e.pickability;for(e=e.visibility;a<b;++a){const c=d?d[a]:a;C.getVisibility(f,c)&&e.isVisible(c)&&this._intersectComponent(c)}}getComponentTriangleCount(a){const b=this._components.offsets;return b[a+1]/3-b[a]/3}getComponentAabb3D(a,b){const d=this._componentAabbs3D;a*=6;b[0]=d[a];b[1]=d[a+1];b[2]=d[a+2];b[3]=d[a+3];b[4]=d[a+4];b[5]=d[a+5];return b}_intersectComponent(a){if(C.getVisibility(this._components.pickability,a)){var b=this.getComponentAabb3D(a,
O),d=!1,{localMode:e,_componentVerticalOffsets:f,_verticalOffset:c,_ray0:g,_ray1:h,_invDir:k,planetCenterZ:l,_tolerance:w,rayDirectionC:m,componentIntersectionData:n}=this,{isVerticalRay:P}=this._intersectionOptions,q=this._components.offsets,u=x.copy(Q,g),z=x.copy(R,h),v=f?.[a]??0,r=v+(c?.offset??0);0!==r&&(e?(u[2]=g[2]-r,z[2]=h[2]-r,d=!0):null!=c&&(c.componentOffset=v));null==c||d||0===r||c.applyToAabb(b);if(y.intersectAabbInvDir(b,u,k,w)){x.sub(m,z,u);b=q[a]/3;q=q[a+1]/3;v=(t,S,T)=>{this._callback(t,
S,a,T)};var {vertexData:E,vertexStride:F,indexData:G,_intersectionOptions:U}=this,{normalRequired:H}=U;if(40<q-b){let t=n[a];null==t&&(t=new B.ComponentObjectElevationAgnosticComponentGeometryBVH(a,E,F,G,b,q,this.geometryMinZ,l,e),n[a]=t);t.intersectRay(u,z,P,d?0:r,v,H)}else B.intersectTriangleRangeForComponent(u,m,b,q,G,E,F,d?0:r,l,H,v)}}}}const O=I.create(),Q=p.create(),R=p.create(),L=p.create(),M=p.create(),D=()=>{},N=new y.MeshIntersectionOptions;A.ComponentObjectElevationAgnosticComponentBVH=
K;Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});