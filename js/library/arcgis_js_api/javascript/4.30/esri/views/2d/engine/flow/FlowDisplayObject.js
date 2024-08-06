// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/math/mat3","../../../../core/libs/gl-matrix-2/factories/mat3f32","../DisplayObject"],function(f,g,d,h,k){class l extends k.DisplayObject{constructor(){super(...arguments);this._displayData=null}get displayData(){return this._displayData}set displayData(a){this._displayData=a;this.requestRender()}clear(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(a){var {displayData:b}=
this;if(null!=b){var e=[0,0];a.toScreen(e,[b.extent.xmin,b.extent.ymax]);b=(b.extent.xmax-b.extent.xmin)/b.size[0]/a.resolution;var m=g.deg2rad(a.rotation),{displayViewScreenMat3:c}=this.transforms;d.fromTranslation(c,[-1,1,0]);d.scale(c,c,[2/(a.size[0]*a.pixelRatio),-2/(a.size[1]*a.pixelRatio),1]);d.translate(c,c,[e[0],e[1],0]);d.rotate(c,c,m);d.scale(c,c,[b*a.pixelRatio,b*a.pixelRatio,1])}}_createTransforms(){return{displayViewScreenMat3:h.create()}}}f.FlowDisplayObject=l;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});