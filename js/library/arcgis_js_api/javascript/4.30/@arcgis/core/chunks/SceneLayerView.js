/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{a as e}from"./asyncUtils.js";import{clone as t,i as r}from"../core/lang.js";import{q as n}from"./featureQueryAll.js";import{fixFields as i,unpackFieldNames as o,collectLabelingFields as s,collectFilterFields as l}from"../layers/support/fieldUtils.js";import{_ as a}from"./tslib.es6.js";import d from"../core/Accessor.js";import{L as u}from"./Logger.js";import{debounce as c,throwIfAbortError as f,throwIfNotAbortError as p}from"../core/promiseUtils.js";import{watch as g,initial as y,whenOnce as m}from"../core/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import{subclass as b}from"../core/accessorSupport/decorators/subclass.js";import{a as F}from"./maybe.js";import{u as w,a as I,i as E}from"./TemporalSceneLayerView.js";import{project as x,canProjectWithoutEngine as j,isLoaded as v,load as _}from"../geometry/projection.js";import A from"../views/layers/LayerView.js";const O={setAttribute(){},rollback(){},commit(){}};var L;function N(e,r){const n=r.attributes[e.objectIdField];if(null==n)return O;const i=e.sessions.get(n);if(i)return i;const o=t(r.attributes),s=new Set,l=e.i3sOverrides.createInteractiveEditSession(n),a=new Map;let d=L.EDITING;const u={setAttribute(t,i){if(d!==L.EDITING)return;const u=e.fieldsIndex.get(t);if(!u)return;const c=e.attributeStorageInfo.findIndex((e=>e.name===u.name));if(c<0)return;if(!(t in o))throw new Error(`Attribute "${t}" is not an attribute of the edited feature.`);l.setAttribute(c,i);const f=e.attributeStorageInfo[c];let p=!1;s.add(t),e.forEachNode(((t,o)=>{const s=((e,t)=>{const r=a.get(e);if(null==r){const r=t.indexOf(n);return a.set(e,r),r}return r})(t,o);if(-1===s)return;const l=e.getAttributeData(t.index);if(l){const n=l[f.name];n&&(n[s]=i,e.setAttributeData(t.index,l,r),p=!0)}})),p&&e.clearMemCache()},rollback(){if(d===L.EDITING){for(const e of s)this.setAttribute(e,o[e]);l.remove(),d=L.ROLLED_BACK,e.sessions.delete(n)}},commit(){d===L.EDITING&&(l.remove(),d=L.COMMITTED,e.sessions.delete(n))}};return e.sessions.set(n,u),u}function T(e,t,r){const{gidToFeatureInfo:n,oidToFeatureInfo:i,fieldsIndex:o,objectIdField:s,globalIdField:l,featureOrIdentifierList:a}=r;if(!r.featuresResolved&&null!=a){for(const e of a){const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const r=e.attributes;if(null!=r)for(const e in r){if(-1!==t.oid&&null!=t.gid)break;const n=o.normalizeFieldName(e);n===s&&(t.oid=r[e]??-1),n===l&&(t.gid=r[e])}}else t.oid=e.objectId??-1,t.gid=e.globalId;null!=t.gid&&n.set(t.gid,t),-1!==t.oid&&i.set(t.oid,t)}r.featuresResolved=!0}return(-1!==e?i.get(e):null)??(null!=t?n.get(t):null)}function S(e,t,r,n,i=null,o=!0){const s=[],l={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==r,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const e of t){if(null!=e.error)continue;const t=e.objectId??-1,r=e.globalId,a=(-1===t||o?T(t,r,l):null)??{feature:null,oid:t,gid:r},d={oid:-1===t?a.oid:t,gid:r??a.gid,feature:a.feature,result:e};if(s.push(d),-1===d.oid&&null!=d.gid&&null!=i&&(d.oid=i.get(d.gid)??-1),-1===d.oid&&null!=d.gid){let e=n.get(d.gid);null==e&&(e=[],n.set(d.gid,e)),e.push(d)}}return s}async function M(t,r){const i=new Map,o=S(t,r.addedFeatures,r.edits?.addFeatures,i),s=S(t,r.updatedFeatures,r.edits?.updateFeatures,i),l=S(t,r.deletedFeatures,r.edits?.deleteFeatures,i,r.globalIdToObjectId,!1);return i.size>0&&await async function(t,r){const i=t.i3sOverrides.layer.associatedLayer;if(null==i?.globalIdField)return;const o=i.createQuery(),{objectIdField:s,globalIdField:l}=i;o.where=Array.from(r.keys()).map((e=>`${l}='${e}'`)).join(" OR "),o.returnGeometry=!1,o.outFields=[s,l],o.cacheHint=!1;const a=await e(n(i,o));if(!a.ok)return;const d=a.value.features;for(const e of d){const t=e.attributes[l],n=e.attributes[s];if(null==t||null==n||-1===n)continue;const i=r.get(t);if(null!=i)for(const e of i)e.oid=n}}(t,i),{adds:o.filter((e=>-1!==e.oid)),updates:s.filter((e=>-1!==e.oid)),deletes:l.filter((e=>-1!==e.oid))}}function D(e,t){const r=new Map,n=e=>{for(const{oid:t,feature:n}of e){const e=n?.geometry;"mesh"===e?.type&&r.set(t,e)}};n(t.adds),n(t.updates);for(const e of t.deletes)r.set(e.oid,null);for(const[t,n]of r)e.i3sOverrides.updateGeometry(t,n)}function R(e,t){const r=function(e,t){const r=t.updates;if(!r||0===r.length)return new q;const n=new q,i=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)i.set(e.attributeStorageInfo[t].name,t);return e.forEachNode(((t,i)=>{for(const o of r){if(null==o.feature)continue;const r=o.feature,s=o.oid,l=i.indexOf(s);for(const i in r.attributes){const o=e.fieldsIndex.normalizeFieldName(i),a=U(n,t.index,o),d=r.attributes[i];a.push({featureIndex:l,featureId:s,value:d})}}})),n}(e,t),n=function(e,t){const r=new Map,n=t.adds;if(!n||0===n.length||null==e.globalIdField)return r;for(const e of n){const t=e.oid,n=e.feature;"mesh"===n?.geometry?.type&&r.set(t,n)}return r}(e,t);if(0===r.size&&0===n.size)return;const i=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)i.set(e.attributeStorageInfo[t].name,t);let o=!1;r.forEach(((t,r)=>{const n=e.getAttributeData(r);let s=!1;t.forEach(((t,r)=>{const l=null!=n?n[r]:null,a=i.get(r);for(const{featureIndex:r,value:n,featureId:i}of t)l&&(l[r]=n,s=!0,o=!0),e.i3sOverrides.updateAttributeValue(i,a,n)})),s&&e.setAttributeData(r,n,null)})),o&&e.clearMemCache();const{fieldsIndex:s,i3sOverrides:l,objectIdField:a,globalIdField:d}=e,u=l.layer.associatedLayer?.infoFor3D,c=new Set(u?[...Object.values(u.assetMapFieldRoles),...Object.values(u.transformFieldRoles)]:[]);for(const[e,t]of n){l.featureAdded(e);const{attributes:r}=t;for(const t in r){if(t!==a&&t!==d&&c.has(t))continue;const n=s.normalizeFieldName(t),o=null!=n?i.get(n):null;if(null==o)continue;const u=r[t];l.updateAttributeValue(e,o,u)}}}function U(e,t,r){const n=function(e,t){const r=e.get(t);if(r)return r;const n=new C;return e.set(t,n),n}(e,t),i=null!=r&&n.get(r);if(i)return i;const o=new Array;return n.set(r,o),o}!function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"}(L||(L={}));const C=Map,q=Map;function k(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?i(t,[...o(t,e.outFields),...r]):i(t,r)}}}}const V=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){const r=c((async t=>{++this._numUpdating;try{const r=await t;this.destroyed||this._set(e,r)}catch(t){u.getLogger(this).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating}));return g(t,r,y)}};return a([h({readOnly:!0})],t.prototype,"updating",null),a([h()],t.prototype,"_numUpdating",void 0),t=a([b("esri.core.AsyncUpdate")],t),t};let P=class extends(V(d)){};P=a([b("esri.core.AsyncUpdate")],P);let z=class extends(V(d)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:n,viewFilterFields:o}=this;return i(e,[...t??[],...r??[],...n??[],...o??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?this._getFieldsAsync((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?this._getFieldsAsync((t=>s(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,mergedFilter:t}=this.layerView;return this._getFieldsAsync((r=>l(r,e,t)))}))])}async _getFieldsAsync(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(e){return u.getLogger(this).error(e),null}}};a([h()],z.prototype,"layerView",void 0),a([h()],z.prototype,"layer",null),a([h()],z.prototype,"requiredFields",null),a([h()],z.prototype,"rendererFields",void 0),a([h()],z.prototype,"labelingFields",void 0),a([h()],z.prototype,"viewFilterFields",void 0),z=a([b("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],z);let G=class extends A{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return w(this._layerFilter)}get _layerFilter(){const e=this.layer?.filter;if(null==e||e.geometries.length<1)return null;const t=this._geometryEngine;if(null==t||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return I;const n=e.geometries.at(0).spatialReference,i=e.geometries.toArray().map((e=>{try{e=t.simplify(e)}catch(e){return u.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(n))return e;try{return x(e,n)}catch(e){return u.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(r).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),o=new Set,s=new Array,l=new Array;for(let e of i){const r=e.extent.xmin;if(s.length=0,o.forEach((n=>{if(r>=n.extent.xmax)return l.push(n),void o.delete(n);e.extent.ymin<=n.extent.ymax&&e.extent.ymax>=n.extent.ymin&&t.intersects(e,n)&&s.push(n)})),s.length>0){s.push(e);try{e=t.union(s)}catch(e){u.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}s.pop(),s.forEach((e=>o.delete(e)))}o.add(e)}return o.forEach((e=>l.push(e))),l.length>0?{spatialRelationship:e.spatialRelationship,geometries:l}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((({spatialReference:e})=>!e.equals(t)&&!j(e,t)))}get layerFilterUpdating(){return E(this._layerFilter)}initialize(){const{signal:e}=this._abortController;m((()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length),e).then((async()=>{f(e),this._geometryEngine=await import("../geometry/geometryEngine.js")})).catch(p),this._projectionEngineLoaded=v(),m((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{f(e),await _(),this._projectionEngineLoaded=!0})).catch(p)}destroy(){this._abortController=F(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};a([h()],G.prototype,"layer",void 0),a([h()],G.prototype,"availableFields",null),a([h()],G.prototype,"maximumNumberOfFeatures",null),a([h({readOnly:!0})],G.prototype,"maximumNumberOfFeaturesExceeded",null),a([h()],G.prototype,"filter",void 0),a([h({readOnly:!0})],G.prototype,"layerFilter",null),a([h({readOnly:!0})],G.prototype,"_layerFilter",null),a([h()],G.prototype,"_geometryEngine",void 0),a([h()],G.prototype,"_projectionEngineLoaded",void 0),a([h()],G.prototype,"_filterNeedsProjectionEngine",null),a([h()],G.prototype,"layerFilterUpdating",null),G=a([b("esri.views.layers.SceneLayerView")],G);const $=G;export{z as S,R as a,$ as b,N as c,k as d,M as n,D as p};
