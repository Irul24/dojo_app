/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Error.js";import{n as t}from"../core/lang.js";import{d as s}from"./maybe.js";import{watch as i,initial as o,syncAndInitial as a,when as n}from"../core/reactiveUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{f as c,g as p}from"./dehydratedFeatures.js";import{c as h,a as d,b as y,F as m}from"./Graphics3DGraphicsPipeline.js";import{L as f}from"./LayerView3D.js";import{b as g}from"./hydratedFeatures.js";import{L as F}from"./LayerViewPerformanceInfo.js";import _,{t as w}from"../core/Accessor.js";import{throwIfAborted as b,createAbortError as x}from"../core/promiseUtils.js";import{r as v,e as M}from"./query.js";import O from"../Graphic.js";import{W as P}from"./WorkerHandle.js";import V from"../geometry/SpatialReference.js";import C from"../layers/support/Field.js";import{E as R}from"./EventedSet.js";import{U as S}from"./RibbonLineMaterial.js";import{u as q}from"../views/SceneView.js";import{F as j}from"./FeatureLayerView.js";import N from"../views/layers/LayerView.js";import{R as D}from"./RefreshableLayerView.js";class T extends F{constructor(e,r,t,s,i,o){super(e.usedMemory,e.displayedFeatures,e.totalFeatures,e.maximumFeatures,e.nodes,e.core),this.storedFeatures=r,this.totalVertices=t,this.partial=s,this.mode=i,this.symbolComplexity=o}}class E{constructor(e){this._controller=e,this._handle=new L((r=>e.schedule(r)))}destroy(){this._handle.destroy()}invoke(e,r){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof V&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,r).then((e=>{let r=0,t=0;const s=V.fromJSON(e.spatialReference);e.spatialReference=s;const i=async o=>{const a=e.fields;if(a)for(;r<a.length;)if(a[r]=C.fromJSON(a[r]),r++,o.madeProgress())return this._controller.reschedule((e=>i(e)));const n=e.features;for(;t<n.length;){const e=n[t];++t,e.uid=O.generateUID();const r=e.geometry;if(null!=r&&(r.spatialReference=s,Q(r),o.madeProgress()))return this._controller.reschedule((e=>i(e)))}return e};return this._controller.schedule((e=>i(e)))}))):Promise.resolve(null)}}function Q(e){switch(e.type){case"polyline":e.paths.reduce(((e,r)=>e+r.length),0)<t&&(e.paths=e.hasZ||e.hasM?e.paths.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.paths.map((e=>e.map((e=>[e[0],e[1]])))));break;case"polygon":e.rings.reduce(((e,r)=>e+r.length),0)<t&&(e.rings=e.hasZ||e.hasM?e.rings.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.rings.map((e=>e.map((e=>[e[0],e[1]])))))}}class L extends P{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},e)}}let I=class extends _{constructor(e){super(e)}get implicitFields(){const e=this.layer.outFields?.includes("*");if(!e)return new Set;const r=new Set(this.layerView.requiredFields),t=new Set(this.layerView.availableFields);return w(t,r)}get queryFeaturesDehydrated(){const{layer:e}=this,r=e.capabilities,t=r&&r.query,s=t&&t.supportsFormatPBF,i=e.parsedUrl;if(s){null==this._decoder&&(this._decoder=new E(this.controller));const r={sourceSpatialReference:e.spatialReference?.toJSON()??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:G};return(e,t)=>v(i,e,"pbf",this._createRequestOptions(t)).then((e=>(b(t),null!=this._decoder?this._decoder.invoke({buffer:e.data,options:r},t.signal):Promise.reject(x()))))}return(r,t)=>M(i,r,e.spatialReference,this._createRequestOptions(t)).then((e=>c(e.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:G})))}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}destroy(){this._decoder=s(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...e?.query}}}};e([u({constructOnly:!0})],I.prototype,"layer",void 0),e([u({constructOnly:!0})],I.prototype,"layerView",void 0),e([u({constructOnly:!0})],I.prototype,"controller",void 0),e([u({readOnly:!0})],I.prototype,"implicitFields",null),e([u({readOnly:!0})],I.prototype,"queryFeaturesDehydrated",null),I=e([l("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],I);let Z=class extends _{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.layer.queryFeatures(e,r)}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}};e([u({constructOnly:!0})],Z.prototype,"layer",void 0),e([u({readOnly:!0})],Z.prototype,"queryFeaturesDehydrated",null),Z=e([l("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],Z);let A=class extends _{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.layer.queryFeatures(e,r)}};e([u({constructOnly:!0})],A.prototype,"layer",void 0),A=e([l("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],A);let H=class extends _{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.source.queryFeaturesJSON(e,r).then(c,(t=>{if(t&&"query-features-json:unsupported"===t.name)return this.layer.queryFeatures(e,r);throw t}))}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}};e([u({constructOnly:!0})],H.prototype,"layer",void 0),e([u({constructOnly:!0})],H.prototype,"source",void 0),H=e([l("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],H);const G=1024;class k{constructor(e){this._memoryCache=null,this._capabilities=null;const r=e.layerView.layer;this._layerView=e.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this._returnZ=e.returnZ,this._returnM=e.returnM;const t=this._layerView.view.resourceController;this.query=function(e,r){const{layer:t}=e;return"feature"===t.type&&"feature-layer"===t.source.type||"catalog-footprint"===t.type?"infoFor3D"in t&&null!=t.infoFor3D?new Z({layer:t}):new I({layer:t,layerView:e,controller:r}):"feature"===t.type&&"memory"===t.source.type||"csv"===t.type||"geojson"===t.type||"oriented-imagery"===t.type||"wfs"===t.type?new H({layer:t,source:t.source}):"ogc-feature"===t.type?new A({layer:t}):null}(this._layerView,t.normal),t&&this._memoryCacheEnabled&&(this._memoryCache=t.memoryController.newCache(`fl-${r.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=s(this._memoryCache),this.query.destroy()}createQuery(){const e=this._layerView.layer.createQuery();return e.outFields=this._layerView.availableFields,e.returnZ=this._returnZ,e.returnM=this._returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const e=this._layerView.view.resourceController;return e?e.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return null!=this._capabilities||(this._capabilities=h(this._layerView.layer)),this._capabilities}logFetchError(e,r){e.error("#fetchTile()",this._layerView.layer,r?.message??r)}}let U=class extends d{constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles(i((()=>({controller:this.controller,suspended:this.suspended})),(({controller:e,suspended:r})=>{e&&!r&&this._needsRefresh&&(e.refetch(),this._needsRefresh=!1)})))}destroy(){this._fetcherContext=s(this._fetcherContext)}get maximumNumberOfFeatures(){return this.controller?.maximumNumberOfFeatures??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){let e=0;if(this.controller?.updating){const r=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(e=(t-r)/t,this._controllerTotal=t)}let r=0;if(this.processor?.updating){const e=this.processor.updatingRemaining,t=Math.max(e,this._processorTotal);t>0&&(r=(t-e)/t,this._processorTotal=t)}return.5*(e+r)}get updatePolicy(){if(!this.controller)return S.ASYNC;switch(this.controller.mode){case"snapshot":{const e=J.get(this.layer.geometryType);return null==e||this.controller.serviceDataCount>e?S.ASYNC:S.SYNC}case"tiles":return S.ASYNC}}get usedMemory(){return(this.processor?.usedMemory??0)+(this.controller?.memoryForUnusedFeatures??0)}get unloadedMemory(){const e=this.processor?.unprocessedMemoryEstimate??0,r=this.controller?.expectedFeatureDiff??0,t=this.processor?.loadedFeatures??0,s=t+r>0?t/(t+r):1;return e+r*(this.processor?.usedMemoryPerFeature??0)*s}get ignoresMemoryFactor(){return this.controller?.hasMaximumNumberOfFeaturesOverride}get performanceInfo(){const e=this.controller?.displayFeatureLimit,r=null!=e?e.averageSymbolComplexity:void 0,t=null!=r?`f:${r.verticesPerFeature},v:${r.verticesPerCoordinate}`:"n/a";return new T(super.performanceInfo,this.controller?.performanceInfo?.storedFeatures??0,this.controller?.performanceInfo?.totalVertices??0,this.maximumNumberOfFeaturesExceeded,this.controller?.mode??"n/a",t)}async doRefresh(e){const{controller:r,processor:t,suspended:s}=this;e&&r&&(s?this._needsRefresh=!0:(r.refetch(),this._needsRefresh=!1)),t.refreshFilter()}setVisibility(e,r){this.processor?.setObjectIdVisibility(e,r)}getMissingAttributesForFeature(e){return this.controller.getMissingAttributesForFeature(e)}getHydratedGeometry(e){const r=this.graphics3DProcessor;if(null==r)return null;const t=r.graphics3DGraphicsByObjectID;if(null==t)return null;const s=t.get(e);return null==s?null:g(s.graphic.geometry)}createController(){this._fetcherContext=new k({layerView:this.layerView,returnZ:this.hasZ,returnM:this.hasM});const e=new y({layerView:this.layerView,context:this._fetcherContext,graphics:new R,extent:this.clippingExtent});return this.updatingHandles.add((()=>e.serviceDataExtent),(e=>{this.processor&&(this.processor.dataExtent=e)}),o),this.addHandles(i((()=>this.suspended&&this.layerView.updateSuspended),(r=>{r?e.suspend():e.resume()}),a)),this.updatingHandles.add((()=>this.processor?.displayFeatureLimit),(r=>e.displayFeatureLimit=r),o),this.addHandles(n((()=>!this.updating),(()=>{this._controllerTotal=0,this._processorTotal=0}))),e}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}get test(){return{controller:this.controller,graphics3DProcessor:this.graphics3DProcessor,heatmapProcessor:this.heatmapProcessor,loadedGraphics:this.loadedGraphics}}};e([u()],U.prototype,"layerView",void 0),e([u()],U.prototype,"controller",void 0),e([u()],U.prototype,"_controllerTotal",void 0),e([u()],U.prototype,"_processorTotal",void 0),e([u()],U.prototype,"_needsRefresh",void 0),e([u()],U.prototype,"maximumNumberOfFeatures",null),e([u()],U.prototype,"maximumNumberOfFeaturesExceeded",null),e([u()],U.prototype,"updatingProgressValue",null),e([u()],U.prototype,"updatePolicy",null),e([u()],U.prototype,"suspendResumeExtentMode",void 0),U=e([l("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")],U);const J=new Map([["point",5e3],["polygon",500],["polyline",1e3]]);let Y=class extends(D(m(j(f(N))))){constructor(e){super(e)}initialize(){this.addHandles(i((()=>this._updatingRequiredFieldsPromise),(e=>this._updatingHandles.addPromise(e)),a))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=s(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(e){this.graphicsPipeline.maximumNumberOfFeatures=e}get maximumNumberOfFeaturesExceeded(){return null!=this.graphicsPipeline&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){return this.graphicsPipeline?.updatingProgressValue??0}get updatePolicy(){return this.graphicsPipeline?.updatePolicy??S.ASYNC}get hasZ(){const e=this.layer,r=e.capabilities&&e.capabilities.data;return!(!r||!r.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:r.supportsZ)}get hasM(){const e=this.layer,r=e.capabilities&&e.capabilities.data;return!(!r||!r.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,r){this.graphicsPipeline?.setVisibility(e,r)}createQuery(){return super.createQuery()}queryFeatures(e,r){const t=()=>super.queryFeatures(e,r);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),t):t()}createGraphicsPipeline(){return new U({layerView:this})}async doRefresh(e){return await this.graphicsPipeline.doRefresh(e)}_popupFeatureHasRequiredFields(e,r){if(!super._popupFeatureHasRequiredFields(e,r))return!1;const t=p(e,this.layer.objectIdField);if(null==t)return!0;const s=this.graphicsPipeline.getMissingAttributesForFeature(t);if(null==s)return!0;for(const e of r)if(s.has(e))return!1;return!0}get usedMemory(){return this.graphicsPipeline?.usedMemory??0}get unloadedMemory(){return this.graphicsPipeline?.unloadedMemory??0}get ignoresMemoryFactor(){return this.graphicsPipeline?.ignoresMemoryFactor??!1}async _queryFeaturesMesh(e,r){await this._validateQueryFeaturesMesh(e);const t=await r(),s=this.graphicsPipeline;if(e?.outStatistics||null==s)return t;const i=this.layer.objectIdField,o=[];for(const e of t.features)if(e.geometry){const r=s.getHydratedGeometry(e.attributes[i]);r&&(e.geometry=r,o.push(e))}else o.push(e);return t.features=o,t}async _validateQueryFeaturesMesh(e){if(!e)return;const t=e=>{throw new r("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${e}'`)},s=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const r of s)null!=e[r]&&t(r);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),null==e.outSpatialReference||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get test(){}};e([u()],Y.prototype,"layer",void 0),e([u()],Y.prototype,"graphicsPipeline",void 0),e([u()],Y.prototype,"maximumNumberOfFeatures",null),e([u()],Y.prototype,"maximumNumberOfFeaturesExceeded",null),e([u(q)],Y.prototype,"updatingProgress",void 0),e([u({readOnly:!0})],Y.prototype,"updatingProgressValue",null),e([u({readOnly:!0})],Y.prototype,"updatePolicy",null),e([u({readOnly:!0})],Y.prototype,"hasZ",null),e([u({readOnly:!0})],Y.prototype,"hasM",null),Y=e([l("esri.views.3d.layers.FeatureLayerViewBase3D")],Y);const B=Y;export{B as F};
