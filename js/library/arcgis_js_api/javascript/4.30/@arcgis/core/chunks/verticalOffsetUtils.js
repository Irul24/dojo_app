/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{b as t}from"./mat3.js";import{c as s}from"./mat3f64.js";import{i as r,t as e,d as a,m as i}from"./mat4.js";import{c as n}from"./mat4f64.js";import{l as o,s as h,o as f,i as l,h as m}from"./vec3.js";import{c as p}from"./vec3f64.js";import{b as _,g as c}from"./sphere.js";import{V as u}from"./ViewingMode.js";import{O as g,c as M}from"./orientedBoundingBox.js";class v{constructor(){this._transform=n(),this._transformInverse=new b({value:this._transform},r,n),this._transformInverseTranspose=new b(this._transformInverse,e,n),this._transformTranspose=new b({value:this._transform},e,n),this._transformInverseRotation=new b({value:this._transform},t,s)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){a(this._transform,t)}multiplyTransform(t){i(this._transform,this._transform,t)}set(t){a(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class b{constructor(t,s,r){this._original=t,this._update=s,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}const T=new class{constructor(t=0){this.offset=t,this.sphere=_(),this.tmpVertex=p()}applyToVertex(t,s,r){const e=this.objectTransform.transform,a=h(L,t,s,r),i=m(a,a,e),n=this.offset/o(i);f(i,i,i,n);const l=this.objectTransform.inverse;return m(this.tmpVertex,i,l),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/o(t);f(t,t,t,r);const e=this.offset/o(s);f(s,s,s,e)}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=o(c(t)),r=this.offset/s;return f(c(this.sphere),c(t),c(t),r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}};function O(t){return null!=t?(T.offset=t,T):null}const x=new class{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=p(),this._tmpMbs=_(),this._tmpObb=new g,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=o(t)}applyToVertex(t,s,r){const e=h(L,t,s,r),a=h(j,t,s,r+this.componentLocalOriginLength),i=this._totalOffset/o(a);return f(this._tmpVertex,e,a,i),this._tmpVertex}applyToAabb(t){const s=this.componentLocalOriginLength,r=t[0],e=t[1],a=t[2]+s,i=t[3],n=t[4],o=t[5]+s,h=Math.abs(r),f=Math.abs(e),l=Math.abs(a),m=Math.abs(i),p=Math.abs(n),_=Math.abs(o),c=.5*(1+Math.sign(r*i))*Math.min(h,m),u=.5*(1+Math.sign(e*n))*Math.min(f,p),g=.5*(1+Math.sign(a*o))*Math.min(l,_),M=Math.max(h,m),v=Math.max(f,p),b=Math.max(l,_),T=Math.sqrt(c*c+u*u+g*g),O=Math.sign(h+r),x=Math.sign(f+e),y=Math.sign(l+a),d=Math.sign(m+i),V=Math.sign(p+n),I=Math.sign(_+o),L=this._totalOffset;if(T<L)return t[0]-=(1-O)*L,t[1]-=(1-x)*L,t[2]-=(1-y)*L,t[3]+=d*L,t[4]+=V*L,t[5]+=I*L,t;const j=L/Math.sqrt(M*M+v*v+b*b),w=L/T,q=w-j,z=-q;return t[0]+=r*(O*z+w),t[1]+=e*(x*z+w),t[2]+=a*(y*z+w),t[3]+=i*(d*q+j),t[4]+=n*(V*q+j),t[5]+=o*(I*q+j),t}applyToMbs(t){const s=o(c(t)),r=this._totalOffset/s;return f(c(this._tmpMbs),c(t),c(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/s,this._tmpMbs}applyToObb(t){return M(t,this._totalOffset,this._totalOffset,u.Global,this._tmpObb),this._tmpObb}};function y(t){return null!=t?(x.offset=t,x):null}const d=new class{constructor(t=0){this.offset=t,this.tmpVertex=p()}applyToVertex(t,s,r){const e=h(L,t,s,r),a=l(j,e,this.localOrigin),i=this.offset/o(a);return f(this.tmpVertex,e,a,i),this.tmpVertex}applyToAabb(t){const s=w,r=q,e=z;for(let a=0;a<3;++a)s[a]=t[0+a]+this.localOrigin[a],r[a]=t[3+a]+this.localOrigin[a],e[a]=s[a];const a=this.applyToVertex(s[0],s[1],s[2]);for(let s=0;s<3;++s)t[s]=a[s],t[s+3]=a[s];const i=s=>{const r=this.applyToVertex(s[0],s[1],s[2]);for(let s=0;s<3;++s)t[s]=Math.min(t[s],r[s]),t[s+3]=Math.max(t[s+3],r[s])};for(let t=1;t<8;++t){for(let a=0;a<3;++a)e[a]=t&1<<a?r[a]:s[a];i(e)}let n=0;for(let t=0;t<3;++t)s[t]*r[t]<0&&(n|=1<<t);if(0!==n&&7!==n)for(let t=0;t<8;++t)if(!(n&t)){for(let a=0;a<3;++a)e[a]=n&1<<a?0:t&1<<a?s[a]:r[a];i(e)}for(let s=0;s<3;++s)t[s]-=this.localOrigin[s],t[s+3]-=this.localOrigin[s];return t}};function V(t){return null!=t?(d.offset=t,d):null}const I="terrain",L=p(),j=p(),w=p(),q=p(),z=p();export{v as I,y as a,V as b,O as g,I as t};
