/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as i}from"./tslib.es6.js";import e from"../core/Collection.js";import{r as s,c as r}from"./collectionUtils.js";import{watch as t,sync as l}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import y from"../views/layers/LayerView.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./asyncUtils.js";import"../core/Identifiable.js";import"../core/Promise.js";import"./UpdatingHandles.js";import"./layerViewUtils.js";let p=class extends y{constructor(i){super(i),this.type="group",this.layerViews=new e}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i}))}initialize(){this.addHandles([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),t((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),l),t((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}))}),l)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",s(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return!!e?.visible}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i}))}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((i=>t((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible)}),(()=>this._applyExclusiveVisibility(e?i:null)))),l))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e())}};i([a({readOnly:!0})],p.prototype,"creatingLayerViews",null),i([a({cast:r})],p.prototype,"layerViews",null),i([a({readOnly:!0})],p.prototype,"updatingProgress",null),i([a()],p.prototype,"view",void 0),p=i([o("esri.views.layers.GroupLayerView")],p);const n=p;export{n as default};
