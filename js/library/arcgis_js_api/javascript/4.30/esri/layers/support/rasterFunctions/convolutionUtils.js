// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock","../rasterFunctionConstants","./mirror"],function(w,F,c,G){function H(d){const a=Math.sqrt(d.length),h=d.slice(0,a),g=[1];for(let k=1;k<a;k++){let e=null;for(let f=0;f<a;f++){const p=d[f+k*a],l=d[f];if(null==e)if(0===l){if(p)return{separable:!1,row:null,col:null}}else e=p/l;else if(p/l!==e)return{separable:!1,row:null,col:null}}if(null==e)return{separable:!1,row:null,col:null};g.push(e)}return{separable:!0,row:h,col:g}}function I(d,a,h,g,k,e,f){const p=new Float32Array(a*
h),l=e.length,v=f?0:g,u=f?g:0;f=f?1:a;for(let r=v;r<h-v;r++){const q=r*a;for(let m=u;m<a-u;m++){if(k&&!k[q+m])continue;let t=0;for(let n=0;n<l;n++)t+=d[q+m+(n-g)*f]*e[n];p[q+m]=t}}return p}function N(d,a,h=!0){const {pixels:g,width:k,height:e,pixelType:f,mask:p}=d;d=g.length;const l=[],{kernel:v,rows:u,cols:r}=a;for(a=0;a<d;a++){var q=g[a],m=k,t=e,n=u,A=r,J=p,O=v;const K=new Float32Array(m*t),B=Math.floor(n/2),C=Math.floor(A/2);for(let D=B;D<t-B;D++){const E=D*m;for(let x=C;x<m-C;x++){if(J&&!J[E+
x])continue;let L=0;for(let y=0;y<n;y++)for(let z=0;z<A;z++)L+=q[E+x+(y-B)*m+z-C]*O[y*A+z];K[E+x]=L}}q=K;h&&G.mirror(q,k,e,u,r);l.push(q)}return new F({width:k,height:e,pixelType:f,pixels:l,mask:p})}function M(d,a,h,g=!0){const {pixels:k,width:e,height:f,pixelType:p,mask:l}=d;d=k.length;const v=[],u=a.length,r=h.length,q=Math.floor(u/2),m=Math.floor(r/2);for(let t=0;t<d;t++){let n=I(k[t],e,f,q,l,a,!0);n=I(n,e,f,m,l,h,!1);g&&G.mirror(n,e,f,u,r);v.push(n)}return new F({width:e,height:f,pixelType:p,
pixels:v,mask:l})}const b=new Map;b.set(c.convolutionKernel.none,[0,0,0,0,1,0,0,0,0]);b.set(c.convolutionKernel.lineDetectionHorizontal,[-1,-1,-1,2,2,2,-1,-1,-1]);b.set(c.convolutionKernel.lineDetectionVertical,[-1,2,-1,-1,2,-1,-1,2,-1]);b.set(c.convolutionKernel.lineDetectionLeftDiagonal,[2,-1,-1,-1,2,-1,-1,-1,2]);b.set(c.convolutionKernel.lineDetectionRightDiagonal,[-1,-1,2,-1,2,-1,2,-1,-1]);b.set(c.convolutionKernel.gradientNorth,[-1,-2,-1,0,0,0,1,2,1]);b.set(c.convolutionKernel.gradientWest,[-1,
0,1,-2,0,2,-1,0,1]);b.set(c.convolutionKernel.gradientEast,[1,0,-1,2,0,-2,1,0,-1]);b.set(c.convolutionKernel.gradientSouth,[1,2,1,0,0,0,-1,-2,-1]);b.set(c.convolutionKernel.gradientNorthEast,[0,-1,-2,1,0,-1,2,1,0]);b.set(c.convolutionKernel.gradientNorthWest,[-2,-1,0,-1,0,1,0,1,2]);b.set(c.convolutionKernel.smoothArithmeticMean,[.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111]);b.set(c.convolutionKernel.smoothing3x3,[.0625,
.125,.0625,.125,.25,.125,.0625,.125,.0625]);b.set(c.convolutionKernel.smoothing5x5,[1,1,1,1,1,1,4,4,4,1,1,4,12,4,1,1,4,4,4,1,1,1,1,1,1]);b.set(c.convolutionKernel.sharpening3x3,[-1,-1,-1,-1,9,-1,-1,-1,-1]);b.set(c.convolutionKernel.sharpening5x5,[-1,-3,-4,-3,-1,-3,0,6,0,-3,-4,6,21,6,-4,-3,0,6,0,-3,-1,-3,-4,-3,-1]);b.set(c.convolutionKernel.laplacian3x3,[0,-1,0,-1,4,-1,0,-1,0]);b.set(c.convolutionKernel.laplacian5x5,[0,0,-1,0,0,0,-1,-2,-1,0,-1,-2,17,-2,-1,0,-1,-2,-1,0,0,0,-1,0,0]);b.set(c.convolutionKernel.sobelHorizontal,
[-1,-2,-1,0,0,0,1,2,1]);b.set(c.convolutionKernel.sobelVertical,[-1,0,1,-2,0,2,-1,0,1]);b.set(c.convolutionKernel.sharpen,[0,-.25,0,-.25,2,-.25,0,-.25,0]);b.set(c.convolutionKernel.sharpen2,[-.25,-.25,-.25,-.25,3,-.25,-.25,-.25,-.25]);b.set(c.convolutionKernel.pointSpread,[-.627,.352,-.627,.352,2.923,.352,-.627,.352,-.627]);w.convolute=function(d,a){const h=H(a.kernel),g=!1!==a.mirrorEdges;d=h.separable?M(d,h.row,h.col,g):N(d,a,g);({outputPixelType:a}=a);a&&d.clamp(a);return d};w.convoluteSeparable=
M;w.convolutionKernels=b;w.separateKernels=H;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});