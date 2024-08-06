// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/sphere ../../../ViewingMode ../../support/orientedBoundingBox".split(" "),function(p,N,O,w,B,d,r,n,P,E){class Q{constructor(){this._transform=B.create();this._transformInverse=new C({value:this._transform},
w.invert,B.create);this._transformInverseTranspose=new C(this._transformInverse,w.transpose,B.create);this._transformTranspose=new C({value:this._transform},w.transpose,B.create);this._transformInverseRotation=new C({value:this._transform},N.normalFromMat4Legacy,O.create)}_invalidateLazyTransforms(){this._transformInverse.invalidate();this._transformInverseTranspose.invalidate();this._transformTranspose.invalidate();this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(a){w.copy(this._transform,
a)}multiplyTransform(a){w.multiply(this._transform,this._transform,a)}set(a){w.copy(this._transform,a);this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(a,b){this.setTransformMatrix(a);this.multiplyTransform(b);this._invalidateLazyTransforms()}}class C{constructor(a,b,c){this._original=a;this._update=b;this._dirty=!0;this._transform=c()}invalidate(){this._dirty=!0}get value(){this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1);return this._transform}}class F{constructor(a=
0){this.offset=a;this.tmpVertex=r.create()}applyToVertex(a,b,c){a=d.set(D,a,b,c);b=d.add(G,a,this.localOrigin);c=this.offset/d.length(b);d.scaleAndAdd(this.tmpVertex,a,b,c);return this.tmpVertex}applyToAabb(a){var b=R;const c=S,k=T;for(var f=0;3>f;++f)b[f]=a[0+f]+this.localOrigin[f],c[f]=a[3+f]+this.localOrigin[f],k[f]=b[f];f=this.applyToVertex(b[0],b[1],b[2]);for(var g=0;3>g;++g)a[g]=f[g],a[g+3]=f[g];f=h=>{h=this.applyToVertex(h[0],h[1],h[2]);for(let l=0;3>l;++l)a[l]=Math.min(a[l],h[l]),a[l+3]=Math.max(a[l+
3],h[l])};for(g=1;8>g;++g){for(var e=0;3>e;++e)k[e]=0===(g&1<<e)?b[e]:c[e];f(k)}g=0;for(e=0;3>e;++e)0>b[e]*c[e]&&(g|=1<<e);if(0!==g&&7!==g)for(e=0;8>e;++e)if(0===(g&e)){for(let h=0;3>h;++h)k[h]=0!==(g&1<<h)?0:0!==(e&1<<h)?b[h]:c[h];f(k)}for(b=0;3>b;++b)a[b]-=this.localOrigin[b],a[b+3]-=this.localOrigin[b];return a}}class H{constructor(a=0){this._offset=this._totalOffset=this.componentLocalOriginLength=0;this._tmpVertex=r.create();this._tmpMbs=n.create();this._tmpObb=new E.Obb;this._resetOffset(a)}_resetOffset(a){this._totalOffset=
this._offset=a}set offset(a){this._resetOffset(a)}get offset(){return this._offset}set componentOffset(a){this._totalOffset=this._offset+a}set localOrigin(a){this.componentLocalOriginLength=d.length(a)}applyToVertex(a,b,c){const k=d.set(D,a,b,c);a=d.set(G,a,b,c+this.componentLocalOriginLength);b=this._totalOffset/d.length(a);d.scaleAndAdd(this._tmpVertex,k,a,b);return this._tmpVertex}applyToAabb(a){var b=this.componentLocalOriginLength;const c=a[0],k=a[1],f=a[2]+b,g=a[3],e=a[4];b=a[5]+b;var h=Math.abs(c),
l=Math.abs(k),x=Math.abs(f),y=Math.abs(g),z=Math.abs(e),A=Math.abs(b),q=.5*(1+Math.sign(c*g))*Math.min(h,y),m=.5*(1+Math.sign(k*e))*Math.min(l,z);const I=.5*(1+Math.sign(f*b))*Math.min(x,A);var t=Math.max(h,y),u=Math.max(l,z),v=Math.max(x,A);q=Math.sqrt(q*q+m*m+I*I);h=Math.sign(h+c);l=Math.sign(l+k);x=Math.sign(x+f);y=Math.sign(y+g);z=Math.sign(z+e);A=Math.sign(A+b);m=this._totalOffset;if(q<m)return a[0]-=(1-h)*m,a[1]-=(1-l)*m,a[2]-=(1-x)*m,a[3]+=y*m,a[4]+=z*m,a[5]+=A*m,a;t=m/Math.sqrt(t*t+u*u+v*
v);u=m/q;v=u-t;q=-v;a[0]+=c*(h*q+u);a[1]+=k*(l*q+u);a[2]+=f*(x*q+u);a[3]+=g*(y*v+t);a[4]+=e*(z*v+t);a[5]+=b*(A*v+t);return a}applyToMbs(a){const b=d.length(n.getCenter(a)),c=this._totalOffset/b;d.scaleAndAdd(n.getCenter(this._tmpMbs),n.getCenter(a),n.getCenter(a),c);this._tmpMbs[3]=a[3]+a[3]*this._totalOffset/b;return this._tmpMbs}applyToObb(a){E.computeOffsetObb(a,this._totalOffset,this._totalOffset,P.ViewingMode.Global,this._tmpObb);return this._tmpObb}}class J{constructor(a=0){this.offset=a;this.sphere=
n.create();this.tmpVertex=r.create()}applyToVertex(a,b,c){var k=this.objectTransform.transform;a=d.set(D,a,b,c);k=d.transformMat4(a,a,k);a=this.offset/d.length(k);d.scaleAndAdd(k,k,k,a);d.transformMat4(this.tmpVertex,k,this.objectTransform.inverse);return this.tmpVertex}applyToMinMax(a,b){const c=this.offset/d.length(a);d.scaleAndAdd(a,a,a,c);a=this.offset/d.length(b);d.scaleAndAdd(b,b,b,a)}applyToAabb(a){var b=this.offset/Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);a[0]+=a[0]*b;a[1]+=a[1]*b;a[2]+=a[2]*
b;b=this.offset/Math.sqrt(a[3]*a[3]+a[4]*a[4]+a[5]*a[5]);a[3]+=a[3]*b;a[4]+=a[4]*b;a[5]+=a[5]*b;return a}applyToBoundingSphere(a){const b=d.length(n.getCenter(a)),c=this.offset/b;d.scaleAndAdd(n.getCenter(this.sphere),n.getCenter(a),n.getCenter(a),c);this.sphere[3]=a[3]+a[3]*this.offset/b;return this.sphere}}const K=new J,L=new H,M=new F,D=r.create(),G=r.create(),R=r.create(),S=r.create(),T=r.create();p.I3SVerticalOffsetGlobalViewingMode=H;p.IntersectorTransform=Q;p.Object3DVerticalOffsetGlobalViewingMode=
J;p.TerrainVerticalOffsetGlobalViewingMode=F;p.getVerticalOffsetI3S=function(a){return null!=a?(L.offset=a,L):null};p.getVerticalOffsetObject3D=function(a){return null!=a?(K.offset=a,K):null};p.getVerticalOffsetTerrain=function(a){return null!=a?(M.offset=a,M):null};p.terrainId="terrain";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});