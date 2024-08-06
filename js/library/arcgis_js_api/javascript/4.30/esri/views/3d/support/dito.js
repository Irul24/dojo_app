// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../core/libs/gl-matrix-2/factories/quatf64 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../webgl-engine/lib/Attribute".split(" "),function(la,ta,fa,ua,ca,g,va){function N(a,b,d,f,e,c){if(!(1E-6>b[0]*b[0]+b[1]*b[1]+b[2]*b[2]))for(A(ma,d,b),A(na,f,b),A(oa,e,b),R(a,b,m),S[1]=m[0],T[1]=m[1],da[1]=T[1]-S[1],d=[d,f,e],f=[ma,na,oa],e=0;3>e;++e){R(a,d[e],m);S[0]=
m[0];T[0]=m[1];R(a,f[e],m);S[2]=m[0];T[2]=m[1];da[0]=T[0]-S[0];da[2]=T[2]-S[2];const u=ha(da);u<c.quality&&(x(c.b0,d[e]),x(c.b1,b),x(c.b2,f[e]),c.quality=u)}}function R(a,b,d){const {data:f,size:e}=a;d[0]=Number.POSITIVE_INFINITY;d[1]=Number.NEGATIVE_INFINITY;for(a=0;a<f.length;a+=e){const c=f[a]*b[0]+f[a+1]*b[1]+f[a+2]*b[2];d[0]=Math.min(d[0],c);d[1]=Math.max(d[1],c)}}function pa(a,b,d,f,e,c){R(a,b,m);e[0]=m[0];c[0]=m[1];R(a,d,m);e[1]=m[0];c[1]=m[1];R(a,f,m);e[2]=m[0];c[2]=m[1]}function qa(a,b,d,
f,e,c,u){H[0]=a[0];H[1]=a[1];H[2]=a[2];H[3]=b[0];H[4]=b[1];H[5]=b[2];H[6]=d[0];H[7]=d[1];H[8]=d[2];var l=wa,h=H,k=h[0]+h[4]+h[8];if(0<k)k=Math.sqrt(k+1),l[3]=.5*k,k=.5/k,l[0]=(h[5]-h[7])*k,l[1]=(h[6]-h[2])*k,l[2]=(h[1]-h[3])*k;else{k=0;h[4]>h[0]&&(k=1);h[8]>h[3*k+k]&&(k=2);const y=(k+1)%3,p=(k+2)%3;let r=Math.sqrt(h[3*k+k]-h[3*y+y]-h[3*p+p]+1);l[k]=.5*r;r=.5/r;l[3]=(h[3*y+p]-h[3*p+y])*r;l[y]=(h[3*y+k]+h[3*k+y])*r;l[p]=(h[3*p+k]+h[3*k+p])*r}u.quaternion=l;ia(O,f,e);Y(O,O,.5);Y(Z,a,O[0]);Y(ea,b,O[1]);
ia(Z,Z,ea);Y(ea,d,O[2]);u.center=ca.add(Z,Z,ea);u.halfSize=ca.scale(O,c,.5)}function ha(a){return a[0]*a[1]+a[0]*a[2]+a[1]*a[2]}function ia(a,b,d){a[0]=b[0]+d[0];a[1]=b[1]+d[1];a[2]=b[2]+d[2]}function B(a,b,d){a[0]=b[0]-d[0];a[1]=b[1]-d[1];a[2]=b[2]-d[2]}function Y(a,b,d){a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d}function x(a,b,d=0){a[0]=b[d];a[1]=b[d+1];a[2]=b[d+2]}function A(a,b,d){const f=b[0],e=b[1];b=b[2];const c=d[0],u=d[1];d=d[2];a[0]=e*d-b*u;a[1]=b*c-f*d;a[2]=f*u-e*c}function n(a,b){var d=b[0]*
b[0]+b[1]*b[1]+b[2]*b[2];0<d&&(d=1/Math.sqrt(d),a[0]=b[0]*d,a[1]=b[1]*d,a[2]=b[2]*d)}function ja(a,b){const d=b[0]-a[0],f=b[1]-a[1];a=b[2]-a[2];return d*d+f*f+a*a}const aa=g.create(),U=g.create(),P=g.create(),I=g.create(),C=g.create(),D=g.create(),E=g.create(),J=g.create(),K=g.create(),L=g.create(),F=[0,0,0],m=ua.create(),ma=g.create(),na=g.create(),oa=g.create(),T=g.create(),S=g.create(),da=g.create(),ka=g.create(),v=g.create(),V=g.create(),ba=g.create(),W=g.create(),X=g.create(),ra=g.create(),O=
g.create(),Z=g.create(),ea=g.create(),H=ta.fromValues(1,0,0,0,1,0,0,0,1),wa=fa.create();class xa{constructor(a){this.minVert=Array(7);this.maxVert=Array(7);this.buffer=new ArrayBuffer(448);var b=0;this.minProj=new Float64Array(this.buffer,b,7);b+=56;this.maxProj=new Float64Array(this.buffer,b,7);b+=56;for(var d=0;7>d;++d)this.minVert[d]=new Float64Array(this.buffer,b,3),b+=24;for(d=0;7>d;++d)this.maxVert[d]=new Float64Array(this.buffer,b,3),b+=24;for(b=0;7>b;++b)this.minProj[b]=Number.POSITIVE_INFINITY,
this.maxProj[b]=Number.NEGATIVE_INFINITY;b=Array(7);d=Array(7);const {data:f,size:e}=a;for(a=0;a<f.length;a+=e){var c=f[a];c<this.minProj[0]&&(this.minProj[0]=c,b[0]=a);c>this.maxProj[0]&&(this.maxProj[0]=c,d[0]=a);c=f[a+1];c<this.minProj[1]&&(this.minProj[1]=c,b[1]=a);c>this.maxProj[1]&&(this.maxProj[1]=c,d[1]=a);c=f[a+2];c<this.minProj[2]&&(this.minProj[2]=c,b[2]=a);c>this.maxProj[2]&&(this.maxProj[2]=c,d[2]=a);c=f[a]+f[a+1]+f[a+2];c<this.minProj[3]&&(this.minProj[3]=c,b[3]=a);c>this.maxProj[3]&&
(this.maxProj[3]=c,d[3]=a);c=f[a]+f[a+1]-f[a+2];c<this.minProj[4]&&(this.minProj[4]=c,b[4]=a);c>this.maxProj[4]&&(this.maxProj[4]=c,d[4]=a);c=f[a]-f[a+1]+f[a+2];c<this.minProj[5]&&(this.minProj[5]=c,b[5]=a);c>this.maxProj[5]&&(this.maxProj[5]=c,d[5]=a);c=f[a]-f[a+1]-f[a+2];c<this.minProj[6]&&(this.minProj[6]=c,b[6]=a);c>this.maxProj[6]&&(this.maxProj[6]=c,d[6]=a)}for(a=0;7>a;++a)c=b[a],x(this.minVert[a],f,c),c=d[a],x(this.maxVert[a],f,c)}}class ya{constructor(){this.b0=g.fromValues(1,0,0);this.b1=
g.fromValues(0,1,0);this.b2=g.fromValues(0,0,1);this.quality=0}}la.computeOBB=function(a,b){const {data:d,size:f}=a;var e=d.length/f;if(!(0>=e)){var c=new xa(a);ia(aa,c.minProj,c.maxProj);Y(aa,aa,.5);B(U,c.maxProj,c.minProj);var u=ha(U),l=new ya;l.quality=u;14>e&&(a=new va.Vertices(new Float64Array(c.buffer,112,42),3));var h=g.create(),k=g.create(),y=g.create();e=g.create();var p=g.create(),r=g.create(),q=g.create();var w=a;var z=ja(c.maxVert[0],c.minVert[0]),t=0;for(var G=1;7>G;++G){const M=ja(c.maxVert[G],
c.minVert[G]);M>z&&(z=M,t=G)}x(h,c.minVert[t]);x(k,c.maxVert[t]);if(1E-6>ja(h,k))w=1;else{B(e,h,k);n(e,e);const {data:M,size:za}=w;c=Number.NEGATIVE_INFINITY;z=0;for(t=0;t<M.length;t+=za)F[0]=M[t]-h[0],F[1]=M[t+1]-h[1],F[2]=M[t+2]-h[2],G=e[0]*F[0]+e[1]*F[1]+e[2]*F[2],G=F[0]*F[0]+F[1]*F[1]+F[2]*F[2]-G*G/(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),G>c&&(c=G,z=t);x(y,M,z);1E-6>c?w=2:(B(p,k,y),n(p,p),B(r,y,h),n(r,r),A(q,p,e),n(q,q),N(w,q,e,p,r,l),w=0)}switch(w){case 1:b.center=aa;b.halfSize=ca.scale(U,U,.5);b.quaternion=
fa.IDENTITY;return;case 2:u=a;x(v,e);Math.abs(e[0])>Math.abs(e[1])&&Math.abs(e[0])>Math.abs(e[2])?v[0]=0:Math.abs(e[1])>Math.abs(e[2])?v[1]=0:v[2]=0;1E-6>v[0]*v[0]+v[1]*v[1]+v[2]*v[2]&&(v[0]=v[1]=v[2]=1);A(V,e,v);n(V,V);A(ba,e,V);n(ba,ba);pa(u,e,V,ba,W,X);B(ra,X,W);qa(e,V,ba,W,X,ra,b);return}w=a;c=m;const {data:Q,size:sa}=w;x(I,Q);x(P,I);c[0]=ka[0]*q[0]+ka[1]*q[1]+ka[2]*q[2];c[1]=c[0];for(z=sa;z<Q.length;z+=sa)t=Q[z]*q[0]+Q[z+1]*q[1]+Q[z+2]*q[2],t<c[0]&&(c[0]=t,x(I,Q,z)),t>c[1]&&(c[1]=t,x(P,Q,z));
q=h[0]*q[0]+h[1]*q[1]+h[2]*q[2];m[1]-1E-6<=q&&(P[0]=void 0);m[0]+1E-6>=q&&(I[0]=void 0);void 0!==P[0]&&(B(C,P,h),n(C,C),B(D,P,k),n(D,D),B(E,P,y),n(E,E),A(J,D,e),n(J,J),A(K,E,p),n(K,K),A(L,C,r),n(L,L),N(w,J,e,D,C,l),N(w,K,p,E,D,l),N(w,L,r,C,E,l));void 0!==I[0]&&(B(C,I,h),n(C,C),B(D,I,k),n(D,D),B(E,I,y),n(E,E),A(J,D,e),n(J,J),A(K,E,p),n(K,K),A(L,C,r),n(L,L),N(w,J,e,D,C,l),N(w,K,p,E,D,l),N(w,L,r,C,E,l));pa(a,l.b0,l.b1,l.b2,W,X);a=g.create();B(a,X,W);l.quality=ha(a);l.quality<u?qa(l.b0,l.b1,l.b2,W,X,
a,b):(b.center=aa,b.halfSize=ca.scale(U,U,.5),b.quaternion=fa.IDENTITY)}};Object.defineProperty(la,Symbol.toStringTag,{value:"Module"})});