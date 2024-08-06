// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Accessor ../core/Error ../core/Logger ../core/MapUtils ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/scheduling ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../core/accessorSupport/get ../core/support/UpdatingHandles ../support/collectionUtils".split(" "),function(m,h,r,w,x,y,l,t,z,n,D,E,A,u,B,v){class C{constructor(a,b,c){this.layer=a;this.view=b;this.layerViewImporter=
c;this._controller=new AbortController;this._deferred=l.createResolver();this.done=this._started=!1;this.promise=this._deferred.promise;l.onAbort(this._controller.signal,()=>{const e=new r("cancelled:layerview-create","layerview creation cancelled",{layer:a});this._deferred.reject(e)})}tryRecycle(a){if(!(this.done&&this.layerView&&"tryRecycleWith"in this.layerView))return null;const b=this.layer.type,c=this._controller.signal;for(let e=0;e<a.length;e++){const d=a[e];if(d.type!==b)continue;const p=
this.layerView.tryRecycleWith(d,{signal:c});if(p){a.splice(e,1);this.layer=d;const k=this.layerView,q=k.view;return this.promise=Promise.race([p.then(()=>{l.throwIfAborted(this._controller.signal);d.emit("layerview-destroy",{view:q,layerView:k});q.emit("layerview-destroy",{view:q,layerView:k});d.emit("layerview-create",{view:q,layerView:k});q.emit("layerview-create",{view:q,layerView:k});return k}),new Promise((g,f)=>l.onAbort(this._controller.signal,()=>f(l.createAbortError())))])}}return null}destroy(){this._controller.abort();
const {layerView:a}=this;if(a){const {layer:b,view:c}=this;b.emit("layerview-destroy",{view:c,layerView:a});c.emit("layerview-destroy",{layer:b,layerView:a})}this.done=!0;this._map=this.layerViewImporter=this.view=this.layerView=this.layer=null}async start(){if(!this._started){this._started=!0;var {_controller:{signal:a},layer:b,view:c}=this;this._map=c.map;try{await b.load({signal:a});b.prefetchResources&&await b.prefetchResources({signal:a});let d;if("createLayerView"in b&&null!=b.createLayerView)d=
await b.createLayerView(c,{signal:a});else{if(!this.layerViewImporter.hasLayerViewModule(b))throw new r("layer:view-not-supported","No layerview implementation was found");var e=await this.layerViewImporter.importLayerView(b);l.throwIfAborted(a);d="default"in e?new e.default({layer:b,view:c}):new e({layer:b,view:c})}let p;e=()=>{p=y.removeMaybe(p);d.destroyed||d.destroy();d.layer=null;d.parent=null;d.view=null;this.done=!0};p=l.onAbort(a,e);l.throwIfAborted(a);try{await d.when()}catch(k){throw e(),
k;}this._map?.allLayers?.includes(b)?(this.layerView=d,b.emit("layerview-create",{view:c,layerView:d}),c.emit("layerview-create",{layer:b,layerView:d}),this.done=!0,this._deferred.resolve(d)):(e(),this._deferred.reject(new r("view:no-layerview-for-layer","The layer has been removed from the map",{layer:b})))}catch(d){b.emit("layerview-create-error",{view:c,error:d}),c.emit("layerview-create-error",{layer:b,error:d}),this.done=!0,this._deferred.reject(new r("layerview:create-error","layerview creation failed",
{layer:b,error:d}))}}}}h=class extends h{constructor(a){super(a);this._layerLayerViewInfoMap=new Map;this._recyclingInfoMap=new Map;this._watchUpdatingTracking=new B.UpdatingHandles;this.supportsGround=!0;this._preloadLayerViewModules=()=>{const b=this.view.map?.allLayers;if(b)for(const c of b)this.layerViewImporter.hasLayerViewModule(c)&&this.layerViewImporter.importLayerView(c)};this._reschedule=()=>{if(this.destroyed)return Promise.reject();null==this._workPromise&&(this._workPromise=l.createResolver(),
this._workPromise.promise.catch(()=>{}));this.removeHandles("reschedule");this.addHandles(z.schedule(this._doWork),"reschedule");return this._workPromise.promise};this._doWork=()=>{if(!this.destroyed){var b=this.view.map;this._map!==b&&(this.clear(),this._map=b);if(null==this._workPromise)this.notifyChange("updating");else{this.removeHandles("reschedule");this.removeHandles("collection-change");var c=new Set,e=[],d=this.view.ready,p=g=>{if(null!=g)for(const f of g)f&&(c.add(f),(g=this._layerLayerViewInfoMap.get(f))&&
d?g.start():g||this._recyclingInfoMap.has(f)||e.push(f),"layers"in f&&f.layers&&p(f.layers))};for(var k of this._rootCollectionNames)p(u.get(this,k));for(const [g,f]of this._layerLayerViewInfoMap)c.has(g)||(this._layerLayerViewInfoMap.delete(f.layer),(k=f.tryRecycle(e))?(this.notifyChange("updating"),this._recyclingInfoMap.set(f.layer,f),k.then(()=>{this.notifyChange("updating");this._recyclingInfoMap.delete(f.layer);this._layerLayerViewInfoMap.set(f.layer,f);this._reschedule()}).catch(()=>{this.notifyChange("updating");
this._recyclingInfoMap.delete(f.layer);f.destroy();this._reschedule()})):f.destroy());for(const [g,f]of this._recyclingInfoMap)c.has(g)||(this.notifyChange("updating"),this._recyclingInfoMap.delete(f.layer),f.destroy());for(const g of e)this._createLayerView(g);this._refreshCollections();var q=[b?.ground?.layers,b?.basemap?.baseLayers,b?.basemap?.referenceLayers,b?.layers].filter(g=>!!g);c.forEach(g=>"layers"in g&&q.push(g.layers));this.addHandles(q.map(g=>this._watchUpdatingTracking.addOnCollectionChange(()=>
g,this._reschedule)),"collection-change");this._workPromise.resolve();this._workPromise=null}}}}initialize(){this.addHandles([t.on(()=>this.view?.map?.allLayers,"change",this._preloadLayerViewModules,{onListenerAdd:this._preloadLayerViewModules}),t.watch(()=>{const a=this.view,b=a?.map;return[b?.basemap,b?.ground,b?.layers,a?.ready]},()=>this._reschedule(),t.syncAndInitial)]);this._preloadLayerViewModules();this._reschedule()}destroy(){this.clear();v.destroyMap(this._recyclingInfoMap);v.destroyMap(this._layerLayerViewInfoMap);
this._watchUpdatingTracking.destroy();this._map=null;null!=this._workPromise&&(this._workPromise.reject(l.createAbortError()),this._workPromise=null)}get _layersToLayerViews(){const a=[["view.map.basemap.baseLayers","view.basemapView.baseLayerViews"],["view.map.layers","view.layerViews"],["view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"]];this.supportsGround&&a.push(["view.map.ground.layers","view.groundView.layerViews"]);return new Map(a)}get _rootCollectionNames(){return Array.from(this._layersToLayerViews.keys())}get updating(){return null!=
this._workPromise||this._watchUpdatingTracking.updating||x.someMap(this._layerLayerViewInfoMap,a=>!a.done)||0<this._recyclingInfoMap.size}get updatingRemaining(){let a=0;for(const b of this._layerLayerViewInfoMap.values())b.done||++a;return a}clear(){this.destroyed||(v.destroyMap(this._layerLayerViewInfoMap),this._refreshCollections())}async whenLayerView(a){await this._reschedule();if(!this._layerLayerViewInfoMap.has(a)){if(this._recyclingInfoMap.has(a))return this._recyclingInfoMap.get(a).promise;
throw new r("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:a});}return this._layerLayerViewInfoMap.get(a).promise}isCreatingLayerViewsForLayer(a,b){this.commitProperty("updatingRemaining");const c=this._layerLayerViewInfoMap.get(a);if(!c?.done)return!0;const e=c.layerView;return e&&b&&e.parent!==b?!0:c.done&&e&&"layers"in a&&a.layers?.length?a.layers.some(d=>this.isCreatingLayerViewsForLayer(d,e)):!1}_refreshCollections(){for(const [a,b]of this._layersToLayerViews)this._populateLayerViewsOwners(u.get(this,
a),u.get(this,b),this.view);this.notifyChange("updating");this.notifyChange("updatingRemaining")}_populateLayerViewsOwners(a,b,c){if(a&&b){var e=0;for(const d of a)a=this._layerLayerViewInfoMap.get(d),a?.layerView&&(a=a.layerView,a.layer=d,a.parent=c,b.at(e)!==a&&b.splice(e,0,a),"layers"in d&&null!=a&&"object"===typeof a&&"layerViews"in a&&this._populateLayerViewsOwners(d.layers,a.layerViews,a),e+=1);e<b.length&&b.splice(e,b.length)}else b&&b.removeAll()}_createLayerView(a){a.load().catch(()=>{});
this.layerViewImporter.hasLayerViewModule(a)&&this.layerViewImporter.importLayerView(a);const b=new C(a,this.view,this.layerViewImporter);b.promise.then(()=>this._refreshCollections(),c=>{c&&(l.isAbortError(c)||"cancelled:layerview-create"===c.name)||w.getLogger(this).error(`Failed to create layerview for layer title:'${a.title??"no title"}', id:'${a.id??"no id"}' of type '${a.type}'.`,{layer:a,error:c});this._refreshCollections()});this._layerLayerViewInfoMap.set(a,b);this.view.ready&&b.start();
this.notifyChange("updating");this.notifyChange("updatingRemaining")}};m.__decorate([n.property()],h.prototype,"_workPromise",void 0);m.__decorate([n.property({readOnly:!0})],h.prototype,"_watchUpdatingTracking",void 0);m.__decorate([n.property({readOnly:!0})],h.prototype,"_layersToLayerViews",null);m.__decorate([n.property({readOnly:!0})],h.prototype,"_rootCollectionNames",null);m.__decorate([n.property()],h.prototype,"layerViewImporter",void 0);m.__decorate([n.property()],h.prototype,"supportsGround",
void 0);m.__decorate([n.property({readOnly:!0})],h.prototype,"updating",null);m.__decorate([n.property({readOnly:!0})],h.prototype,"updatingRemaining",null);m.__decorate([n.property({constructOnly:!0})],h.prototype,"view",void 0);return h=m.__decorate([A.subclass("esri.views.LayerViewManager")],h)});