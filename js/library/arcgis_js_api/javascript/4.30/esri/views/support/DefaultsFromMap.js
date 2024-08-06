// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/asyncUtils ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/support/heightModelInfoUtils ../ViewingMode ./projectionUtils".split(" "),function(d,e,q,r,l,m,f,w,x,y,t,n,p,u){d.DefaultsFromMap=class extends q{constructor(a){super(a);this.required={tileInfo:!1,heightModelInfo:!1,
extent:!1};this.userSpatialReference=this.defaultSpatialReference=null;this.sourcePreloadCount=10;this.priorityCollection=null;this.requiresExtentInSpatialReference=!0;this.suspended=!1;this._projectExtentTask={task:null,input:null,output:null,spatialReference:null}}destroy(){this._projectExtentTask.task&&(this._projectExtentTask.task=l.abortMaybe(this._projectExtentTask.task));this._set("map",null)}get ready(){return!this._spatialReferenceTask.updating&&!this._tileInfoTask.updating&&!this._extentTask.updating}get heightModelInfoReady(){return!this._heightModelInfoTask.updating}get spatialReference(){return this.userSpatialReference??
this._spatialReferenceTask.spatialReference}get extent(){return this._extentTask.extent}get heightModelInfo(){return this._heightModelInfoTask.heightModelInfo}get vcsWkid(){return this._heightModelInfoTask.vcsWkid}get latestVcsWkid(){return this._heightModelInfoTask.latestVcsWkid}get viewingMode(){return null==this.userSpatialReference||this.userSpatialReference.equals(this._spatialReferenceTask.spatialReference)?this._spatialReferenceTask.viewingMode:null}get tileInfo(){return this._tileInfoTask.tileInfo}get mapCollections(){const a=
this.map?.(),c=[];null!=this.priorityCollection&&c.push(this.priorityCollection);c.push({parent:a?.basemap,layers:a?.basemap?.baseLayers},{layers:a?.layers},{parent:a?.ground,layers:a?.ground?.layers},{parent:a?.basemap,layers:a?.basemap?.referenceLayers});return c}get _allLayers(){return this._collectLayers(this.mapCollections)}get _spatialReferenceTask(){if(this.suspended)return this._get("_spatialReferenceTask")??{updating:!1};const {layers:a,updating:c}=this._allLayers;var b=null;for(const h of a){var g=
this._getSupportedSpatialReferences(h);0<g.length&&(g=this._narrowDownSpatialReferenceCandidates(b,g),null!=g&&(b=g));if(null!=b&&1===b.length)break}if(c&&(null==b||1!==b.length))return{updating:!0};b=this._pickSpatialReferenceCandidate(b);return{spatialReference:b?.spatialReference??null,viewingMode:b?.viewingMode??null,updating:!1}}get _tileInfoTask(){if(!this.required.tileInfo)return this._get("_tileInfoTask")??{updating:!1};if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};
const {layers:a,updating:c}=this._collectLayers([{parent:this.map?.()?.basemap,layers:this.map?.()?.basemap?.baseLayers},{layers:this.map?.()?.layers}]);if(a&&0<a.length&&"tileInfo"in a[0]){const b=a[0].tileInfo;return{tileInfo:b?.spatialReference.equals(this.spatialReference)?b:null,updating:!1}}return{updating:c}}get _heightModelInfoTask(){if(!this.required.heightModelInfo||this.suspended&&this._get("_heightModelInfoTask")?.heightModelInfo)return this._get("_heightModelInfoTask")??{updating:!1};
const {layers:a,updating:c}=this._allLayers;for(const b of a)if(n.supportsHeightModelInfo(b)){const g=n.deriveHeightModelInfoFromLayer(b);if(g)return{heightModelInfo:g,vcsWkid:b.spatialReference?.vcsWkid,latestVcsWkid:b.spatialReference?.latestVcsWkid,updating:!1}}return{updating:c}}get _extentCandidatesTask(){if(this.suspended||!this.required.extent)return this._get("_extentCandidatesTask")??{updating:!1};if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};var a=this._allLayers;
const c=a.updating,b=[];for(const h of a.layers){a="fullExtents"in h&&h.fullExtents||(null!=h.fullExtent?[h.fullExtent]:[]);var g=this.requiresExtentInSpatialReference?null:a[0];if(g=a.find(k=>k.spatialReference.equals(this.spatialReference))??g)return{candidates:[{extent:g,layer:h}],updating:!1};if(0<this._getSupportedSpatialReferences(h).length)for(const k of a)b.push({extent:k,layer:h})}return{candidates:b,updating:c}}get _extentTask(){const {candidates:a,updating:c}=this._extentCandidatesTask;
if(c)return{updating:c};if(null==a||0===a.length)return{updating:!1};if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};const b=this._pickExtentCandidate(a),g=this.spatialReference;if(b.extent.equals(this._projectExtentTask.input)&&g.equals(this._projectExtentTask.spatialReference))return{extent:this._projectExtentTask.output,updating:null!=this._projectExtentTask.task&&!this._projectExtentTask.task.finished};null!=this._projectExtentTask.task&&(this._projectExtentTask.task=
l.abortMaybe(this._projectExtentTask.task));this._projectExtentTask={input:b.extent.clone(),output:null,spatialReference:g.clone(),task:r.createTask(async h=>{try{const k=await u.projectWithEngineOrService(b.extent,g,"portalItem"in b.layer?b.layer.portalItem:void 0,h);this._projectExtentTask={...this._projectExtentTask,task:null,output:k}}catch(k){m.isAborted(h)||(this._projectExtentTask={...this._projectExtentTask,task:null})}})};return{updating:!0}}_narrowDownSpatialReferenceCandidates(a,c){if(null==
a)return c;const b=[];for(const h of a)for(const k of c)if(h.spatialReference.equals(k.spatialReference)){a=h.viewingMode;var g=k.viewingMode;a=null!=a?null!=g?a===g?a:!1:a:g;if(!1!==a){b.push({spatialReference:h.spatialReference,viewingMode:a});break}}return 0<b.length?b:null}_pickSpatialReferenceCandidate(a){const c=this.defaultSpatialReference;if(null==a||1>a.length)return c?{spatialReference:c,viewingMode:null}:null;null!=c&&1<a.length&&a.some(({spatialReference:b})=>b.equals(c))&&(a=a.filter(({spatialReference:b})=>
b.equals(c)));1<a.length&&a.some(({viewingMode:b})=>b!==p.ViewingMode.Local)&&(a=a.filter(({viewingMode:b})=>b!==p.ViewingMode.Local));return a[0]}_getSupportedSpatialReferences(a){var c="supportedSpatialReferences"in a&&a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===c.length)return[];const b=[];for(const g of c)if(c=this.getSpatialReferenceSupport(g,a),null!=c){c=c.constraints??[{spatialReference:g,viewingMode:null}];for(const {spatialReference:h,viewingMode:k}of c)this.requiresExtentInSpatialReference&&
null!=this.userSpatialReference&&!h.equals(this.userSpatialReference)||b.push({spatialReference:h,viewingMode:k})}return b}_pickExtentCandidate(a){const c=this.spatialReference;return a.find(({extent:b})=>c.equals(b.spatialReference))||a[0]}_collectLayers(a){if("loaded"!==this._loadMaybe(this.map?.()))return{layers:[],updating:!0};const c=new v;for(const b of a)if(this._collectCollection(b,c),c.preloading===this.sourcePreloadCount)break;return{layers:c.layers,updating:c.updating}}_collectCollection(a,
c){if(a.layers){switch(this._loadMaybe(a.parent)){case "loading":c.updating=!0;++c.preloading;return;case "failed":return}for(const b of a.layers){switch(this._loadMaybe(b)){case "failed":continue;case "loading":c.updating=!0;++c.preloading;break;case "loaded":c.updating||c.layers.push(b),"layers"in b&&this._collectCollection({layers:b.layers},c)}if(c.preloading===this.sourcePreloadCount)break}}}_loadMaybe(a){return a&&"loadStatus"in a&&null!=a.loadStatus?"not-loaded"===a.loadStatus?(a.load().catch(c=>
{m.isAbortError(c)||console.log(c)}),"loading"):a.loadStatus:"loaded"}};e.__decorate([f.property()],d.DefaultsFromMap.prototype,"required",void 0);e.__decorate([f.property({constructOnly:!0})],d.DefaultsFromMap.prototype,"map",void 0);e.__decorate([f.property({constructOnly:!0})],d.DefaultsFromMap.prototype,"getSpatialReferenceSupport",void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"defaultSpatialReference",void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"userSpatialReference",
void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"sourcePreloadCount",void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"priorityCollection",void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"requiresExtentInSpatialReference",void 0);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"suspended",void 0);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"ready",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,
"heightModelInfoReady",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"spatialReference",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"extent",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"heightModelInfo",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"vcsWkid",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"latestVcsWkid",null);e.__decorate([f.property({readOnly:!0})],
d.DefaultsFromMap.prototype,"viewingMode",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"tileInfo",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"mapCollections",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"_allLayers",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"_spatialReferenceTask",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"_tileInfoTask",null);
e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"_heightModelInfoTask",null);e.__decorate([f.property({readOnly:!0})],d.DefaultsFromMap.prototype,"_extentCandidatesTask",null);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"_extentTask",null);e.__decorate([f.property()],d.DefaultsFromMap.prototype,"_projectExtentTask",void 0);d.DefaultsFromMap=e.__decorate([t.subclass("esri.views.support.DefaultsFromMap")],d.DefaultsFromMap);class v{constructor(){this.layers=[];this.preloading=
-1;this.updating=!1}}Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});