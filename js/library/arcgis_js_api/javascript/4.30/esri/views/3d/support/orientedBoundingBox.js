// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../core/libs/gl-matrix-2/math/quat ../../../core/libs/gl-matrix-2/factories/quatf64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../chunks/vec42 ../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../geometry/ellipsoidUtils ../../../geometry/spatialReferenceEllipsoidUtils ../../../geometry/projection/computeTranslationToOriginAndRotation ../../../geometry/projection/projectBuffer ../../../geometry/projection/projectors ../../../geometry/support/plane ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/vectorStacks ../../ViewingMode ./dito ../webgl-engine/lib/Attribute".split(" "),
function(H,I,U,V,B,J,f,p,W,X,Y,F,Z,K,O,M,P,N,aa,ba,ca){function Q(a,c=new G){ba.computeOBB(a,c);return c}function R(a,c,b,e,d){var k=c.getQuaternion(x);k=I.fromQuat(D,k);c=c.getHalfSize(E);for(let n=0;8>n;++n){for(var h=0;3>h;++h)u[h]=c[h]*(0!==(n&1<<h)?-1:1);for(h=0;3>h;++h){let y=b[h];for(let z=0;3>z;++z)y+=u[z]*k[3*z+h];L[3*n+h]=y}}K.projectBuffer(L,a,0,L,e,0,8);Q(da,d)}function ea(a,c,b,e,d=F.getSphericalPCPF(b),k=O.getProjector(b,d)){a.getCorners(S);a.getCenter(u);u[2]+=e;Z.computeTranslationToOriginAndRotation(b,
u,q,d);c.setCenter(q[12],q[13],q[14]);b=2*Math.sqrt(1+q[0]+q[5]+q[10]);m[0]=(q[6]-q[9])/b;m[1]=(q[8]-q[2])/b;m[2]=(q[1]-q[4])/b;m[3]=.25*b;a=a.getQuaternion(x);c.quaternion=B.multiply(m,m,a);B.conjugate(m,m);f.set(v,0,0,0);a=c.getCenter(fa);for(const h of S)h[2]+=e,k(h,0,h,0),f.sub(l,h,a),f.transformQuat(l,l,m),f.abs(l,l),f.max(v,v,l);c.halfSize=v}function ha(a,c,b,e,d=F.getSphericalPCPF(b)){const k=Y.getReferenceEllipsoid(b),h=1+Math.max(0,e)/(k.radius+a.centerZ);a.getCenter(u);u[2]+=e;K.projectBuffer(u,
b,0,u,d,0,1);c.center=u;b=a.getQuaternion(x);c.quaternion=b;B.conjugate(m,b);f.set(l,0,0,1);f.transformQuat(l,l,m);a=a.getHalfSize(E);f.set(l,a[0]*Math.abs(l[0]),a[1]*Math.abs(l[1]),a[2]*Math.abs(l[2]));f.scale(l,l,k.inverseFlattening);f.add(l,a,l);c.halfSize=f.scale(l,l,h)}class G{constructor(a=p.ZEROS,c=ia,b=J.IDENTITY){this._data=[a[0],a[1],a[2],c[0],c[1],c[2],b[0],b[1],b[2],b[3]]}clone(){const a=new G;a._data=this._data.slice();return a}invalidate(){this._data[3]=-1}get isValid(){return 0<=this._data[3]}static fromData(a){const c=
new G;c._data=a.slice();return c}static fromJSON(a){return new G(a.center,a.halfSize,a.quaternion)}copy(a){this._data=a.data.slice()}get center(){return f.set(N.sv3d.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(a){a[0]=this._data[0];a[1]=this._data[1];a[2]=this._data[2];return a}set center(a){this._data[0]=a[0];this._data[1]=a[1];this._data[2]=a[2]}setCenter(a,c,b){this._data[0]=
a;this._data[1]=c;this._data[2]=b}get halfSize(){return f.set(N.sv3d.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(a){a[0]=this._data[3];a[1]=this._data[4];a[2]=this._data[5];return a}set halfSize(a){this._data[3]=a[0];this._data[4]=a[1];this._data[5]=a[2]}get quaternion(){return B.set(N.sq4d.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(a){a[0]=
this._data[6];a[1]=this._data[7];a[2]=this._data[8];a[3]=this._data[9];return a}set quaternion(a){this._data[6]=a[0];this._data[7]=a[1];this._data[8]=a[2];this._data[9]=a[3]}get data(){return this._data}getCorners(a){const c=m,b=this._data;c[0]=b[6];c[1]=b[7];c[2]=b[8];c[3]=b[9];for(let e=0;8>e;++e){const d=a[e];d[0]=(e&1?-1:1)*b[3];d[1]=(e&2?-1:1)*b[4];d[2]=(e&4?-1:1)*b[5];f.transformQuat(d,d,c);d[0]+=b[0];d[1]+=b[1];d[2]+=b[2]}}doesIntersectFrustumConservativeApproximation(a){return 0>=this.intersectPlane(a[0])&&
0>=this.intersectPlane(a[1])&&0>=this.intersectPlane(a[2])&&0>=this.intersectPlane(a[3])&&0>=this.intersectPlane(a[4])&&0>=this.intersectPlane(a[5])}get radius(){const a=this._data[3],c=this._data[4],b=this._data[5];return Math.sqrt(a*a+c*c+b*b)}intersectSphere(a){g[0]=this._data[0]-a[0];g[1]=this._data[1]-a[1];g[2]=this._data[2]-a[2];const c=this.getQuaternion(x);B.conjugate(m,c);f.transformQuat(g,g,m);f.abs(g,g);A[0]=Math.min(g[0],this._data[3]);A[1]=Math.min(g[1],this._data[4]);A[2]=Math.min(g[2],
this._data[5]);return f.sqrDist(A,g)<a[3]*a[3]}intersectSphereWithMBS(a,c=this.radius){const b=this._data;g[0]=b[0]-a[0];g[1]=b[1]-a[1];g[2]=b[2]-a[2];a=a[3];const e=f.sqrLen(g);c=a+c;if(e>c*c)return!1;m[0]=-b[6];m[1]=-b[7];m[2]=-b[8];m[3]=b[9];f.transformQuat(g,g,m);f.abs(g,g);A[0]=Math.min(g[0],b[3]);A[1]=Math.min(g[1],b[4]);A[2]=Math.min(g[2],b[5]);return f.sqrDist(A,g)<a*a}intersectPlane(a){const c=a[0]*this._data[0]+a[1]*this._data[1]+a[2]*this._data[2]+a[3];a=this.projectedRadius(M.getNormal(a));
return c>a?1:c<-a?-1:0}intersectRay(a,c,b=0){var e=this._data,d=m;d[0]=-e[6];d[1]=-e[7];d[2]=-e[8];d[3]=e[9];g[0]=a[0]-e[0];g[1]=a[1]-e[1];g[2]=a[2]-e[2];a=f.transformQuat(g,g,m);c=f.transformQuat(A,c,m);e=-Infinity;d=Infinity;const k=this.getHalfSize(E);for(let n=0;3>n;n++){var h=a[n];const y=c[n],z=k[n]+b;if(1E-6<Math.abs(y)){const T=(z-h)/y;h=(-z-h)/y;e=Math.max(e,Math.min(T,h));d=Math.min(d,Math.max(T,h))}else if(h>z||h<-z)return!1}return e<=d}projectedArea(a,c,b,e){var d=this.getQuaternion(x);
B.conjugate(m,d);g[0]=a[0]-this._data[0];g[1]=a[1]-this._data[1];g[2]=a[2]-this._data[2];f.transformQuat(g,g,m);var k=this.getHalfSize(E),h=g[0]<-k[0]?-1:g[0]>k[0]?1:0,n=g[1]<-k[1]?-1:g[1]>k[1]?1:0;const y=g[2]<-k[2]?-1:g[2]>k[2]?1:0;a=Math.abs(h)+Math.abs(n)+Math.abs(y);if(0===a)return Infinity;a=1===a?4:6;h=6*(h+3*n+9*y+13);I.fromQuat(D,d);I.scale(D,D,k);d=this.getCenter(r);for(k=0;k<a;k++)n=ja[h+k],f.set(g,((n&1)<<1)-1,(n&2)-1,((n&4)>>1)-1),f.transformMat3(g,g,D),f.add(C,d,g),C[3]=1,W.transformMat4(C,
C,c),n=1/Math.max(1E-6,C[3]),w[2*k]=C[0]*n,w[2*k+1]=C[1]*n;c=2*a-2;a=w[0]*(w[3]-w[c+1])+w[c]*(w[1]-w[c-1]);for(d=2;d<c;d+=2)a+=w[d]*(w[d+3]-w[d-1]);return Math.abs(a)*b*e*.125}projectedRadius(a){const c=this.getQuaternion(x);B.conjugate(m,c);f.transformQuat(g,a,m);return Math.abs(g[0]*this._data[3])+Math.abs(g[1]*this._data[4])+Math.abs(g[2]*this._data[5])}minimumDistancePlane(a){const c=a[0]*this._data[0]+a[1]*this._data[1]+a[2]*this._data[2]+a[3];a=this.projectedRadius(M.getNormal(a));return c-
a}maximumDistancePlane(a){const c=a[0]*this._data[0]+a[1]*this._data[1]+a[2]*this._data[2]+a[3];a=this.projectedRadius(M.getNormal(a));return c+a}toAaBoundingBox(a){var c=this.getQuaternion(x),b=I.fromQuat(D,c);c=this._data[3]*Math.abs(b[0])+this._data[4]*Math.abs(b[3])+this._data[5]*Math.abs(b[6]);const e=this._data[3]*Math.abs(b[1])+this._data[4]*Math.abs(b[4])+this._data[5]*Math.abs(b[7]);b=this._data[3]*Math.abs(b[2])+this._data[4]*Math.abs(b[5])+this._data[5]*Math.abs(b[8]);a[0]=this._data[0]-
c;a[1]=this._data[1]-e;a[2]=this._data[2]-b;a[3]=this._data[0]+c;a[4]=this._data[1]+e;a[5]=this._data[2]+b}transform(a,c,b,e=0,d=F.getSphericalPCPF(b),k=F.getSphericalPCPF(c),h=O.getProjector(c,k)){b===d?c.isGeographic?ha(this,a,c,e,k):ea(this,a,c,e,k,h):c.isWGS84&&(b.isWebMercator||P.isPlateCarree(b))?(this.getCenter(r),r[2]+=e,e=F.getSphericalPCPF(b),K.projectBuffer(r,c,0,r,e,0,1),R(e,this,r,b,a)):c.isWebMercator&&P.isPlateCarree(b)?(this.getCenter(r),r[2]+=e,R(c,this,r,b,a)):(d=this.getCenter(r),
d[2]+=e,K.projectBuffer(d,c,0,d,b,0,1),a.center=d,this!==a&&(a.quaternion=this.getQuaternion(x),a.halfSize=this.getHalfSize(E)))}}const m=J.create(),x=J.create(),ka=J.create(),g=p.create(),A=p.create(),C=X.create(),w=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],ja=(()=>{const a=new Int8Array(162);let c=0;const b=e=>{for(let d=0;d<e.length;d++)a[c+d]=e[d];c+=6};b([6,2,3,1,5,4]);b([0,2,3,1,5,4]);b([0,2,3,7,5,4]);b([0,1,3,2,6,4]);b([0,1,3,2,0,0]);b([0,1,5,7,3,2]);b([0,1,3,7,6,4]);b([0,1,3,7,6,2]);b([0,1,5,
7,6,2]);b([0,1,5,4,6,2]);b([0,1,5,4,0,0]);b([0,1,3,7,5,4]);b([0,2,6,4,0,0]);b([0,0,0,0,0,0]);b([1,3,7,5,0,0]);b([2,3,7,6,4,0]);b([2,3,7,6,0,0]);b([2,3,1,5,7,6]);b([0,1,5,7,6,2]);b([0,1,5,7,6,4]);b([0,1,3,7,6,4]);b([4,5,7,6,2,0]);b([4,5,7,6,0,0]);b([4,5,1,3,7,6]);b([0,2,3,7,5,4]);b([6,2,3,7,5,4]);b([6,2,3,1,5,4]);return a})(),L=Array(24),da=new ca.Vertices(L,3),u=p.create(),r=p.create(),fa=p.create(),E=p.create(),D=U.create(),q=V.create(),S=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],
[0,0,0]],l=p.create(),v=p.create(),t=p.create(),ia=p.fromValues(-1,-1,-1);H.Obb=G;H.compute=Q;H.computeOffsetObb=function(a,c,b,e,d){var k=a.getQuaternion(x);d.quaternion=k;B.conjugate(m,k);var h=a.getCenter(r);k=a.getHalfSize(E);if(e===aa.ViewingMode.Global){f.transformQuat(l,h,m);f.abs(v,l);f.min(t,v,k);f.sub(t,v,t);e=f.length(t);f.add(t,v,k);const n=f.length(t);e<b?(d.center=h,f.set(l,b,b,b),d.halfSize=f.add(l,k,l)):(c=0<n?1+c/n:1,h=0<e?1+b/e:1,b=(h+c)/2,c=(h-c)/2,f.scale(t,v,c),d.halfSize=f.scaleAndAdd(t,
t,k,b),f.scale(t,v,b),f.scaleAndAdd(t,t,k,c),f.sign(l,l),f.multiply(l,t,l),a=a.getQuaternion(ka),d.center=f.transformQuat(l,l,a))}else d.center=f.scaleAndAdd(l,h,p.UNIT_Z,(b+c)/2),a=f.transformQuat(l,p.UNIT_Z,m),f.abs(a,a),d.halfSize=f.scaleAndAdd(v,k,a,(b-c)/2);return d};Object.defineProperty(H,Symbol.toStringTag,{value:"Module"})});