// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared"],function(a,e,c,d){class f extends e{constructor(b){super(b);this.declaredClass="esri.layers.featureset.sources.Empty";this._maxProcessing=1E3;this._wset=new c([],[],!1,null);this._parent=b.parentfeatureset;this._databaseType=d.FeatureServiceDatabaseType.Standardised}async _getSet(){return this._wset}optimisePagingFeatureQueries(){}_isInFeatureSet(){return d.IdState.NotInFeatureSet}async _getFeature(){throw new a.FeatureSetError(a.FeatureSetErrorCodes.NeverReach);
}async queryAttachments(){return[]}async _getFeatures(){return"success"}_featureFromCache(){return null}async _fetchAndRefineFeatures(){throw new a.FeatureSetError(a.FeatureSetErrorCodes.NeverReach);}async _getFilteredSet(){return new c([],[],!1,null)}_stat(b,g,l,m,n,h,k){return this._manualStat(b,g,h,k)}async _canDoAggregates(){return!1}}return f});