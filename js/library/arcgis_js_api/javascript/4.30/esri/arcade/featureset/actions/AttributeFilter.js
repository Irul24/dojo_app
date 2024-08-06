// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../support/errorsupport ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/SpatialReference".split(" "),function(p,q,h,f,m,t,r,u){class n extends q{constructor(a){super(a);this.declaredClass="esri.arcade.featureset.actions.AttributeFilter";this._maxProcessing=1E3;this._parent=a.parentfeatureset;a.whereclause instanceof r.WhereClause?(this._whereclause=a.whereclause,this._whereClauseFunction=
null):(this._whereClauseFunction=a.whereclause,this._whereclause=null)}_initialiseFeatureSet(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types,this.subtypeField=this._parent.subtypeField,
this.subtypes=this._parent.subtypes):(this.fields=[],this.globalIdField=this.objectIdField=this.subtypeField=this.typeIdField="",this.spatialReference=new u({wkid:4326}),this.geometryType=f.layerGeometryEsriConstants.point)}async _getSet(a){if(null===this._wset){await this._ensureLoaded();const b=await this._parent._getFilteredSet("",null,this._whereclause,null,a);this._checkCancelled(a);this._wset=null!==this._whereClauseFunction?new h(b._candidates.slice(0).concat(b._known.slice(0)),[],b._ordered,
this._clonePageDefinition(b.pagesDefinition)):new h(b._candidates.slice(0),b._known.slice(0),b._ordered,this._clonePageDefinition(b.pagesDefinition))}return this._wset}_isInFeatureSet(a){let b=this._parent?._isInFeatureSet(a);if(b===f.IdState.NotInFeatureSet)return b;b=this._idstates[a];return void 0===b?f.IdState.Unknown:b}_getFeature(a,b,d){return this._parent._getFeature(a,b,d)}_getFeatures(a,b,d,e){return this._parent._getFeatures(a,b,d,e)}_featureFromCache(a){return this._parent._featureFromCache(a)}executeWhereClause(a){return this._whereclause?.testFeature(a)??
!1}async executeWhereClauseDeferred(a){return null!==this._whereClauseFunction?(a=this._whereClauseFunction(a),t.isPromiseLike(a),a):this.executeWhereClause(a)}async _fetchAndRefineFeatures(a,b,d){var e=new h([],a,!1,null),c=Math.min(b,a.length);await this._parent?._getFeatures(e,-1,c,d);this._checkCancelled(d);if(null==this._whereClauseFunction){for(b=0;b<c;b++)d=this._parent?._featureFromCache(a[b]),!0===this.executeWhereClause(d)?this._idstates[a[b]]=f.IdState.InFeatureSet:this._idstates[a[b]]=
f.IdState.NotInFeatureSet;return"success"}d=[];for(e=0;e<c;e++){const g=this._parent?._featureFromCache(a[e]);d.push(await this.executeWhereClauseDeferred(g))}for(c=0;c<b;c++)this._idstates[a[c]]=!0===d[c]?f.IdState.InFeatureSet:f.IdState.NotInFeatureSet;return"success"}async _getFilteredSet(a,b,d,e,c){null===this._whereClauseFunction&&(null!==d?null!==this._whereclause&&(d=m.combine(this._whereclause,d)):d=this._whereclause);await this._ensureLoaded();a=await this._parent._getFilteredSet(a,b,d,e,
c);this._checkCancelled(c);return null!==this._whereClauseFunction?new h(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,this._clonePageDefinition(a.pagesDefinition)):new h(a._candidates.slice(0),a._known.slice(0),a._ordered,this._clonePageDefinition(a.pagesDefinition))}async _stat(a,b,d,e,c,g,k){if(null!==this._whereClauseFunction)return null===c&&""===d&&null===e?this._manualStat(a,b,g,k):{calculated:!1};var l=this._whereclause;null!==c&&null!==this._whereclause&&(l=m.combine(this._whereclause,
c));l=await this._parent._stat(a,b,d,e,l,g,k);return!1===l.calculated?null===c&&""===d&&null===e?this._manualStat(a,b,g,k):{calculated:!1}:l}async _canDoAggregates(a,b,d,e,c){if(null!==this._whereClauseFunction)return!1;null!==c?null!==this._whereclause&&(c=m.combine(this._whereclause,c)):c=this._whereclause;return null===this._parent?!1:this._parent._canDoAggregates(a,b,d,e,c)}async _getAggregatePagesDataSourceDefinition(a,b,d,e,c,g,k){if(null===this._parent)throw new p.FeatureSetError(p.FeatureSetErrorCodes.NeverReach);
null!==c?null!==this._whereclause&&(c=m.combine(this._whereclause,c)):c=this._whereclause;return this._parent._getAggregatePagesDataSourceDefinition(a,b,d,e,c,g,k)}static registerAction(){q._featuresetFunctions.filter=function(a){if("function"===typeof a)return new n({parentfeatureset:this,whereclause:a});let b=null;a instanceof r.WhereClause&&(b=a);return new n({parentfeatureset:this,whereclause:b})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}return n});