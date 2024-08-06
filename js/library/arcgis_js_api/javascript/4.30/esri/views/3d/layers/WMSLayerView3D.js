// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ./DynamicLayerView3D ../../layers/WMSLayerView".split(" "),function(g,h,c,p,q,k,l,m,n){c=class extends n(m){constructor(){super(...arguments);this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible",
"The spatial references supported by this WMS layer are incompatible with the spatial reference of the view")));this._updatingHandles.add(()=>this.exportImageParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(d){var b=this.findExtentInfoAt(d),a=b.extent;a=new l(a[0],a[1],a[2],a[3],this._spatialReference);b=b.imageSize;const e=b.width,f=a.width/e;return{extent:a,width:e,height:b.height,x:Math.round((d.x-a.xmin)/f),y:Math.round((a.ymax-
d.y)/f)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};return c=g.__decorate([k.subclass("esri.views.3d.layers.WMSLayerView3D")],c)});