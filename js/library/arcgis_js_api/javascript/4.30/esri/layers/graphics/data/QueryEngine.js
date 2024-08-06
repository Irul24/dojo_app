// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/Error ../../../core/JSONSupport ../../../core/lang ../../../core/maybe ../../../core/MemCache ../../../core/promiseUtils ../../../core/unitUtils ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./attributeSupport ./geometryUtils ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./queryUtils ./queryValidationUtils ./spatialQuerySupport ./timeSupport ../../support/FieldsIndex ../../../views/support/Scheduler".split(" "),
function(D,M,S,T,E,F,N,p,G,U,B,H,V,C,O,v,W,X,I,y,Y,n,t,J,z,P,Z,Q){function K(a){if(z.canQueryWithRBush(a)){if(C.isExtent(a))return[H.fromValues(Math.min(a.xmin,a.xmax),Math.min(a.ymin,a.ymax),Math.max(a.xmin,a.xmax),Math.max(a.ymin,a.ymax))];if(C.isPolygon(a))return a.rings.map(b=>H.fromValues(Math.min(b[0][0],b[2][0]),Math.min(b[0][1],b[2][1]),Math.max(b[0][0],b[2][0]),Math.max(b[0][1],b[2][1])))}return[V.getBoundsXY(H.create(),a)]}class aa{constructor(a,b=null,c,d,e){this.attributes=a;this.geometry=
c;this.centroid=d;this.filterFlags=e;this.groupId=-1;this.displayId=b}}const ba=new N.MemCacheStorage(2E6);let ca=0;class da{constructor(a){this._changeHandle=this._geometryQueryCache=null;this.capabilities={query:Y.queryCapabilities};this.geometryType=a.geometryType;this.hasM=!!a.hasM;this.hasZ=!!a.hasZ;this.objectIdField=a.objectIdField;this.spatialReference=a.spatialReference;this.definitionExpression=a.definitionExpression;this.featureStore=a.featureStore;this.aggregateAdapter=a.aggregateAdapter;
this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache());this.timeInfo=a.timeInfo;a.cacheSpatialQueries&&(this._geometryQueryCache=new N.MemCache(ca++ +"$$",ba));this.fieldsIndex=T.isSerializable(a.fieldsIndex)?a.fieldsIndex:Z.fromJSON(a.fieldsIndex);this.availableFields=!a.availableFields||1===a.availableFields.length&&"*"===a.availableFields[0]?new Set(this.fieldsIndex.fields.map(b=>b.name)):new Set(a.availableFields.map(b=>this.fieldsIndex.get(b)?.name).filter(b=>null!=b));
a.scheduler&&a.priority&&(this._frameTask=a.scheduler.registerTask(a.priority))}destroy(){this._frameTask=F.removeMaybe(this._frameTask);this.clearCache();F.destroyMaybe(this._geometryQueryCache);this._changeHandle=F.removeMaybe(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear();this._fullExtentPromise=this._timeExtentPromise=this._allFeaturesPromise=null}async executeQuery(a,b){b=p.signalFromSignalOrOptions(b);try{return(await this._executeQuery(a,
{},b)).createQueryResponse()}catch(c){if(c!==t.queryEngineEmptyResult)throw c;return(new n.QueryEngineResult([],a,this)).createQueryResponse()}}async executeQueryForCount(a={},b){b=p.signalFromSignalOrOptions(b);try{return(await this._executeQuery(a,{returnGeometry:!1,returnCentroid:!1,outSR:null},b)).createQueryResponseForCount()}catch(c){if(c!==t.queryEngineEmptyResult)throw c;return 0}}async executeQueryForExtent(a,b){b=p.signalFromSignalOrOptions(b);const c=a.outSR;try{const d=await this._executeQuery(a,
{returnGeometry:!0,returnCentroid:!1,outSR:null},b),e=d.size;if(!e)return{count:0,extent:null};const f=await this._getBounds(d.items,d.spatialReference,c||this.spatialReference);return{count:e,extent:f}}catch(d){if(d===t.queryEngineEmptyResult)return{count:0,extent:null};throw d;}}async executeQueryForIds(a,b){return this.executeQueryForIdSet(a,b).then(c=>Array.from(c))}async executeQueryForIdSet(a,b){b=p.signalFromSignalOrOptions(b);try{const c=await this._executeQuery(a,{returnGeometry:!0,returnCentroid:!1,
outSR:null},b),d=c.items,e=new Set;await this._reschedule(()=>{for(const f of d)e.add(c.featureAdapter.getObjectId(f))},b);return e}catch(c){if(c===t.queryEngineEmptyResult)return new Set;throw c;}}async executeQueryForSnapping(a,b){const c=p.signalFromSignalOrOptions(b),{point:d,distance:e,returnEdge:f,vertexMode:h}=a;if(!f&&"none"===h)return{candidates:[]};let l=E.clone(a.query);l=await this._schedule(()=>t.normalizeQueryLike(l,this.definitionExpression,this.spatialReference),c);l=await this._reschedule(()=>
J.validateQuery(l,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),c);(b=!v.equals(d.spatialReference,this.spatialReference))&&await y.checkProjectionSupport(d.spatialReference,this.spatialReference);var g="number"===typeof e?e:e.x,k="number"===typeof e?e:e.y;g={xmin:d.x-g,xmax:d.x+g,ymin:d.y-k,ymax:d.y+k,spatialReference:d.spatialReference};g=b?y.project(g,this.spatialReference):g;if(!g)return{candidates:[]};
k=(await O.normalizeCentralMeridian(C.fromJSON(d),null,{signal:c}))[0];const r=(await O.normalizeCentralMeridian(C.fromJSON(g),null,{signal:c}))[0];if(null==k||null==r)return{candidates:[]};const m=new n.QueryEngineResult(await this._reschedule(()=>this._searchFeatures(K(r.toJSON())),c),l,this);await this._reschedule(()=>this._executeObjectIdsQuery(m),c);await this._reschedule(()=>this._executeTimeQuery(m),c);await this._reschedule(()=>this._executeAttributesQuery(m),c);await this._reschedule(()=>
this._executeGeometryQueryForSnapping(m,c),c);k=k.toJSON();k=b?y.project(k,this.spatialReference):k;return m.createSnappingResponse({...a,point:k,distance:b?Math.max(g.xmax-g.xmin,g.ymax-g.ymin)/2:e},d.spatialReference)}async executeQueryForLatestObservations(a,b){b=p.signalFromSignalOrOptions(b);if(!this.timeInfo?.trackIdField)throw new S("unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:a,timeInfo:this.timeInfo});try{const c=await this._executeQuery(a,{},b);await this._reschedule(()=>
this._filterLatest(c),b);return c.createQueryResponse()}catch(c){if(c!==t.queryEngineEmptyResult)throw c;return(new n.QueryEngineResult([],a,this)).createQueryResponse()}}async executeQueryForSummaryStatistics(a={},b,c){c=p.signalFromSignalOrOptions(c);const {field:d,normalizationField:e,valueExpression:f}=b;return(await this._executeQueryForStatistics(a,{field:d,normalizationField:e,valueExpression:f},c)).createSummaryStatisticsResponse(b)}async executeQueryForUniqueValues(a={},b,c){c=p.signalFromSignalOrOptions(c);
const {field:d,field2:e,field3:f,valueExpression:h}=b;return(await this._executeQueryForStatistics(a,{field:d,field2:e,field3:f,valueExpression:h},c)).createUniqueValuesResponse(b)}async executeQueryForClassBreaks(a={},b,c){c=p.signalFromSignalOrOptions(c);const {field:d,normalizationField:e,valueExpression:f}=b;return(await this._executeQueryForStatistics(a,{field:d,normalizationField:e,valueExpression:f},c)).createClassBreaksResponse(b)}async executeQueryForHistogram(a={},b,c){c=p.signalFromSignalOrOptions(c);
const {field:d,normalizationField:e,valueExpression:f}=b;return(await this._executeQueryForStatistics(a,{field:d,normalizationField:e,valueExpression:f},c)).createHistogramResponse(b)}async fetchRecomputedExtents(a){a=p.signalFromSignalOrOptions(a);this._timeExtentPromise||(this._timeExtentPromise=P.getTimeExtent(this.timeInfo,this.featureStore));const [b,c]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);p.throwIfAborted(a);return{fullExtent:b,timeExtent:c}}async _getBounds(a,
b,c){const d=B.set(B.create(),B.negativeInfinity);await this.featureStore.forEachBounds(a,e=>B.expandWithAABB(d,e));a={xmin:d[0],ymin:d[1],xmax:d[3],ymax:d[4],spatialReference:I.cleanFromGeometryEngine(this.spatialReference)};this.hasZ&&isFinite(d[2])&&isFinite(d[5])&&(a.zmin=d[2],a.zmax=d[5],a.hasZ=!0);b=y.project(a,b,c);b.spatialReference=I.cleanFromGeometryEngine(c);0===b.xmax-b.xmin&&(c=G.getMetersPerUnitForSR(b.spatialReference),b.xmin-=c,b.xmax+=c);0===b.ymax-b.ymin&&(c=G.getMetersPerUnitForSR(b.spatialReference),
b.ymin-=c,b.ymax+=c);this.hasZ&&null!=b.zmin&&null!=b.zmax&&0===b.zmax-b.zmin&&(c=G.getMetersPerUnitForSR(b.spatialReference),b.zmin-=c,b.zmax+=c);return b}_getFullExtent(){this._fullExtentPromise||(this._fullExtentPromise="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(a=>this._getBounds(a,this.spatialReference,this.spatialReference)));return this._fullExtentPromise}async _schedule(a,
b){return null!=this._frameTask?this._frameTask.schedule(a,b):a(Q.noBudget)}async _reschedule(a,b){return null!=this._frameTask?this._frameTask.reschedule(a,b):a(Q.noBudget)}async _getAllFeaturesQueryEngineResult(a){return new n.QueryEngineResult(await this._getAllFeatures(),a,this)}async _getAllFeatures(){if(null==this._allFeaturesPromise){const c=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(d=>c.push(d))})().then(()=>c)}const a=this._allFeaturesPromise,b=await a;return a===
this._allFeaturesPromise?b.slice():this._getAllFeatures()}async _executeQuery(a,b,c){a=E.clone(a);a=await this._schedule(()=>t.normalizeQuery(a,this.definitionExpression,this.spatialReference),c);a=await this._reschedule(()=>J.validateQuery(a,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),c);a={...a,...b};const d=await this._reschedule(()=>this._executeSceneFilterQuery(a,c),c),e=await this._reschedule(()=>
this._executeGeometryQuery(a,d,c),c);await this._reschedule(()=>this._executeAggregateIdsQuery(e),c);await this._reschedule(()=>this._executeObjectIdsQuery(e),c);await this._reschedule(()=>this._executeTimeQuery(e),c);await this._reschedule(()=>this._executeAttributesQuery(e),c);return e}async _executeSceneFilterQuery(a,b){if(null==a.sceneFilter)return null;const {outSR:c,returnGeometry:d,returnCentroid:e}=a;var f=this.featureStore.featureSpatialReference,h=a.sceneFilter.geometry;const l=null==f||
v.equals(f,h.spatialReference)?h:y.project(h,f);if(!l)return null;f=d||e;f=v.isValid(c)&&!v.equals(this.spatialReference,c)&&f?async m=>this._project(m,c):m=>m;const g=this.featureAdapter;h=await this._reschedule(()=>this._searchFeatures(K(l)),b);if("disjoint"===a.sceneFilter.spatialRelationship){if(!h.length)return null;const m=new Set;for(var k of h)m.add(g.getObjectId(k));const w=await this._reschedule(()=>this._getAllFeatures(),b);k=await this._reschedule(async()=>{const A=await z.getSpatialQueryOperator("esriSpatialRelDisjoint",
l,this.geometryType,this.hasZ,this.hasM),u=await this._runSpatialFilter(w,x=>!m.has(g.getObjectId(x))||A(g.getGeometry(x)),b);return new n.QueryEngineResult(u,a,this)},b);return f(k)}if(!h.length)return new n.QueryEngineResult([],a,this);if(this._canExecuteSinglePass(l,a))return f(new n.QueryEngineResult(h,a,this));const r=await z.getSpatialQueryOperator("esriSpatialRelContains",l,this.geometryType,this.hasZ,this.hasM);k=await this._runSpatialFilter(h,m=>r(g.getGeometry(m)),b);return f(new n.QueryEngineResult(k,
a,this))}async _executeGeometryQuery(a,b,c){if(null!=b&&0===b.items.length)return b;a=null!=b?b.query:a;const {geometry:d,outSR:e,spatialRel:f,returnGeometry:h,returnCentroid:l}=a;var g=this.featureStore.featureSpatialReference;const k=!d||null==g||v.equals(g,d.spatialReference)?d:y.project(d,g),r=h||l,m=v.isValid(e)&&!v.equals(this.spatialReference,e),w=this._geometryQueryCache&&null==b?m&&r?JSON.stringify({originalFilterGeometry:d,spatialRelationship:f,outSpatialReference:e}):JSON.stringify({originalFilterGeometry:d,
spatialRelationship:f}):null;g=w?this._geometryQueryCache.get(w):null;if(null!=g)return new n.QueryEngineResult(g,a,this);g=async q=>{m&&r&&await this._project(q,e);w&&this._geometryQueryCache.put(w,q.items,q.items.length+1);return q};if(!k)return g(null!=b?b:await this._getAllFeaturesQueryEngineResult(a));const A=this.featureAdapter;let u=await this._reschedule(()=>this._searchFeatures(K(d)),c);if("esriSpatialRelDisjoint"===f){if(!u.length)return g(null!=b?b:await this._getAllFeaturesQueryEngineResult(a));
const q=new Set;for(var x of u)q.add(A.getObjectId(x));const L=null!=b?b.items:await this._reschedule(()=>this._getAllFeatures(),c);x=await this._reschedule(async()=>{const ea=await z.getSpatialQueryOperator(f,k,this.geometryType,this.hasZ,this.hasM),fa=await this._runSpatialFilter(L,R=>!q.has(A.getObjectId(R))||ea(A.getGeometry(R)),c);return new n.QueryEngineResult(fa,a,this)},c);return g(x)}if(null!=b){const q=new M.PositionHint;u=u.filter(L=>0<=M.indexOf(b.items,L,b.items.length,q))}if(!u.length)return g=
new n.QueryEngineResult([],a,this),w&&this._geometryQueryCache.put(w,g.items,1),g;if(this._canExecuteSinglePass(k,a))return g(new n.QueryEngineResult(u,a,this));const ha=await z.getSpatialQueryOperator(f,k,this.geometryType,this.hasZ,this.hasM);x=await this._runSpatialFilter(u,q=>ha(A.getGeometry(q)),c);return g(new n.QueryEngineResult(x,a,this))}async _executeGeometryQueryForSnapping(a,b){const {query:c}=a,{spatialRel:d}=c;if(a?.items?.length&&c.geometry&&d){var e=await z.getSpatialQueryOperator(d,
c.geometry,this.geometryType,this.hasZ,this.hasM);b=await this._runSpatialFilter(a.items,f=>e(f.geometry),b);a.items=b}}_executeAggregateIdsQuery(a){if(0!==a.items.length&&a.query.aggregateIds?.length&&null!=this.aggregateAdapter){var b=new Set;for(const d of a.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(d).forEach(e=>b.add(e));var c=this.featureAdapter.getObjectId;a.items=a.items.filter(d=>b.has(c(d)))}}_executeObjectIdsQuery(a){if(0!==a.items.length&&a.query.objectIds?.length){var b=
new Set(a.query.objectIds),c=this.featureAdapter.getObjectId;a.items=a.items.filter(d=>b.has(c(d)))}}_executeTimeQuery(a){if(0!==a.items.length){var b=P.getTimeOperator(this.timeInfo,a.query.timeExtent,this.featureAdapter);null!=b&&(a.items=a.items.filter(b))}}_executeAttributesQuery(a){if(0!==a.items.length){var b=X.getWhereClause(a.query.where,this.fieldsIndex);if(b){if(!b.isStandardized)throw new TypeError("Where clause is not standardized");a.items=a.items.filter(c=>b.testFeature(c,this.featureAdapter))}}}async _runSpatialFilter(a,
b,c){if(!b)return a;if(null==this._frameTask)return a.filter(h=>b(h));let d=0;const e=[],f=async h=>{for(;d<a.length;){const l=a[d++];b(l)&&(e.push(l),h.madeProgress());h.done&&await this._reschedule(g=>f(g),c)}};return this._reschedule(h=>f(h),c).then(()=>e)}_filterLatest(a){const {trackIdField:b,startTimeField:c,endTimeField:d}=this.timeInfo,e=d||c,f=new Map,h=this.featureAdapter.getAttribute;for(const l of a.items){const g=h(l,b),k=h(l,e),r=f.get(g);(!r||k>h(r,e))&&f.set(g,l)}a.items=Array.from(f.values())}_canExecuteSinglePass(a,
b){({spatialRel:b}=b);return z.canQueryWithRBush(a)&&("esriSpatialRelEnvelopeIntersects"===b||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===b||"esriSpatialRelContains"===b))}async _project(a,b){if(!b||v.equals(this.spatialReference,b))return a;const c=this.featureAdapter;let d=void 0;try{const e=await this._getFullExtent();d=U.getTransformation(this.spatialReference,b,e)}catch{}b=await y.projectMany(a.items.map(e=>I.getGeometry(this.geometryType,this.hasZ,this.hasM,c.getGeometry(e))),
this.spatialReference,b,d);a.items=b.map((e,f)=>c.cloneWithGeometry(a.items[f],W.convertFromGeometry(e,this.hasZ,this.hasM)));return a}async _searchFeatures(a){const b=new Set;await Promise.all(a.map(c=>this.featureStore.forEachInBounds(c,d=>b.add(d))));a=Array.from(b.values());b.clear();return a}async _executeQueryForStatistics(a,b,c){a=E.clone(a);try{a=await this._schedule(()=>t.normalizeQuery(a,this.definitionExpression,this.spatialReference),c);a=await this._reschedule(()=>J.validateStatisticsQuery(a,
b,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),c);const d=await this._reschedule(()=>this._executeSceneFilterQuery(a,c),c),e=await this._reschedule(()=>this._executeGeometryQuery(a,d,c),c);await this._reschedule(()=>this._executeAggregateIdsQuery(e),c);await this._reschedule(()=>this._executeObjectIdsQuery(e),c);await this._reschedule(()=>this._executeTimeQuery(e),c);await this._reschedule(()=>this._executeAttributesQuery(e),
c);return e}catch(d){if(d!==t.queryEngineEmptyResult)throw d;return new n.QueryEngineResult([],a,this)}}}D.Feature=aa;D.QueryEngine=da;Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});