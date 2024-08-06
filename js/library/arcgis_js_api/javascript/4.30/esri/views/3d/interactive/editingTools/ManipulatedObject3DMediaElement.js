// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Evented ../../../../core/handleUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./media/MediaElementControllerControlPoints ./media/MediaElementControllerShape ./media/MediaElementManipulator3D ./media/mediaElementUtils".split(" "),function(b,c,m,n,g,d,v,w,x,p,q,r,t,u){const k=
Symbol();b.ManipulatedObject3DMediaElement=class extends m.EventedAccessor{get operations(){return this._controller?.operations}get elevationInfo(){return{mode:"on-the-ground",offset:0}}get _layerView(){const a=this.view.allLayerViews.find(e=>e.layer===this.layer);return"media-3d"===a?.type?a:null}get visible(){return u.isMediaElementVisibleLayerView(this._layerView,this.element)}get isDraped(){return!0}get origin(){return null}get updating(){return!!this._controller?.updating}get _controllerClass(){return"transform"===
this.tool||"control-points"!==this.element.georeference?.type?r.MediaElementControllerShape:q.MediaElementControllerControlPoints}constructor(a){super(a);this.tool="transform"}initialize(){this.addHandles([g.watch(()=>this._controllerClass,a=>this._updateController(a),g.syncAndInitial),g.on(()=>this._layerView,"element-render-changed",({element:a})=>{this.element===a&&this.emit("committed")})])}toMap(a){const {layer:e,element:f}=this;return this.view.toMap(a,{include:{layer:e,element:f}})}createManipulator(a){const {view:e,
layer:f,element:h}=this;return new t.MediaElementManipulator3D({view:e,layer:f,element:h,...a})}_updateController(a){if(!(this._controller&&this._controller instanceof a)){this.removeHandles(k);var {view:e,layer:f,element:h}=this,l=()=>{this.emit("modified-externally")};this._controller=new a({view:e,layer:f,element:h,onModifiedExternally:l});l();this.addHandles(n.destroyHandle(this._controller),k)}}};c.__decorate([d.property({constructOnly:!0})],b.ManipulatedObject3DMediaElement.prototype,"view",
void 0);c.__decorate([d.property({constructOnly:!0})],b.ManipulatedObject3DMediaElement.prototype,"layer",void 0);c.__decorate([d.property({constructOnly:!0})],b.ManipulatedObject3DMediaElement.prototype,"element",void 0);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"tool",void 0);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"_controller",void 0);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"elevationInfo",null);c.__decorate([d.property()],
b.ManipulatedObject3DMediaElement.prototype,"_layerView",null);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"visible",null);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"updating",null);c.__decorate([d.property()],b.ManipulatedObject3DMediaElement.prototype,"_controllerClass",null);b.ManipulatedObject3DMediaElement=c.__decorate([p.subclass("esri.views.3d.interactive.editingTools.ManipulatedObject3DMediaElement")],b.ManipulatedObject3DMediaElement);
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});