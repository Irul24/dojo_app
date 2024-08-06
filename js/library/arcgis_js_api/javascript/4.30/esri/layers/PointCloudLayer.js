// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../PopupTemplate ../request ../core/Error ../core/lang ../core/Logger ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/CustomParametersMixin ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./pointCloudFilters/typeUtils ./support/commonProperties ./support/Field ./support/fieldProperties ../popup/ExpressionInfo ../renderers/support/pointCloud/typeUtils ../support/elevationInfoUtils ../support/popupUtils".split(" "),
function(d,v,w,k,x,r,c,y,z,A,f,m,B,C,D,E,F,G,H,I,J,K,n,L,p,q,M,t,u,l,N){m=M.defineFieldProperties();c=class extends n.SceneService(G.ArcGISService(I.OperationalLayer(J.PortalLayer(K.ScaleRangeLayer(c.MultiOriginJSONMixin(H.CustomParametersMixin(F.APIKeyMixin(E)))))))){constructor(...a){super(...a);this.operationalLayerType="PointCloudLayer";this.popupEnabled=!0;this.popupTemplate=null;this.opacity=1;this.filters=[];this.path=this.outFields=this.fieldsIndex=this.fields=null;this.legendEnabled=!0;this.renderer=
null;this.type="point-cloud"}normalizeCtorArgs(a,b){return"string"===typeof a?{url:a,...b}:a}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(a){a=this.fieldsIndex.get(a);return a?.domain?a.domain:null}readServiceFields(a,b,g){return Array.isArray(a)?a.map(e=>{const h=new q;"FieldTypeInteger"===e.type&&(e=x.clone(e),e.type="esriFieldTypeInteger");h.read(e,g);return h}):Array.isArray(b.attributeStorageInfo)?b.attributeStorageInfo.map(e=>new q({name:e.name,
type:"ELEVATION"===e.name?"double":"integer"})):null}set elevationInfo(a){this._set("elevationInfo",a);this._validateElevationInfo()}writeRenderer(a,b,g,e){y.setDeepValue("layerDefinition.drawingInfo.renderer",a.write({},e),b)}load(a){const b=null!=a?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).catch(z.throwIfAbortError).then(()=>this._fetchService(b));this.addResolvingPromise(a);return Promise.resolve(this)}createPopupTemplate(a){if(a=N.createPopupTemplate(this,a))this._formatPopupTemplateReturnsField(a),
this._formatPopupTemplateRGBField(a);return a}_formatPopupTemplateReturnsField(a){const b=this.fieldsIndex.get("RETURNS");if(b){var g=a.fieldInfos?.find(h=>h.fieldName===b.name);if(g){var e=new t({name:"pcl-returns-decoded",title:b.alias||b.name,expression:`\n        var returnValue = $feature.${b.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});a.expressionInfos=[...(a.expressionInfos||[]),e];g.fieldName="expression/pcl-returns-decoded"}}}_formatPopupTemplateRGBField(a){const b=
this.fieldsIndex.get("RGB");if(b){var g=a.fieldInfos?.find(h=>h.fieldName===b.name);if(g){var e=new t({name:"pcl-rgb-decoded",title:b.alias||b.name,expression:`\n        var rgb = $feature.${b.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});a.expressionInfos=[...(a.expressionInfos||[]),e];g.fieldName="expression/pcl-rgb-decoded"}}}async queryCachedStatistics(a,
b){await this.load(b);if(!this.attributeStorageInfo)throw new k("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const g=this.fieldsIndex.get(a);if(!g)throw new k("pointcloudlayer:field-unexisting",`Field '${a}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===g.name)return a=A.join(this.parsedUrl?.path??"",`./statistics/${e.key}`),w(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:b?
b.signal:null}).then(h=>h.data);throw new k("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");}async saveAs(a,b){return this._debouncedSaveOperations(n.SaveOperationType.SAVE_AS,{...b,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},a)}async save(){return this._debouncedSaveOperations(n.SaveOperationType.SAVE,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"})}validateLayer(a){if(a.layerType&&
"PointCloud"!==a.layerType)throw new k("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new k("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(2<this.version.major)throw new k("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,
supportedVersions:"1.x-2.x"});}hasCachedStatistics(a){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(b=>b.name===a)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const a=this.elevationInfo;l.logInvalidElevationInfoWarning(r.getLogger(this),l.elevationModeRequiredMessage("Point cloud layers","absolute-height",a));l.logInvalidElevationInfoWarning(r.getLogger(this),l.featureExpressionUnsupportedMessage("Point cloud layers",a))}};d.__decorate([f.property({type:["PointCloudLayer"]})],
c.prototype,"operationalLayerType",void 0);d.__decorate([f.property(p.popupEnabled)],c.prototype,"popupEnabled",void 0);d.__decorate([f.property({type:v,json:{name:"popupInfo",write:!0}})],c.prototype,"popupTemplate",void 0);d.__decorate([f.property({readOnly:!0,json:{read:!1}})],c.prototype,"defaultPopupTemplate",null);d.__decorate([f.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],c.prototype,"opacity",void 0);d.__decorate([f.property({type:["show","hide"]})],
c.prototype,"listMode",void 0);d.__decorate([f.property({types:[L.types],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],c.prototype,"filters",void 0);d.__decorate([f.property({type:[q]})],c.prototype,"fields",void 0);d.__decorate([f.property(m.fieldsIndex)],c.prototype,"fieldsIndex",void 0);d.__decorate([B.reader("service","fields",["fields","attributeStorageInfo"])],c.prototype,"readServiceFields",null);d.__decorate([f.property(m.outFields)],c.prototype,
"outFields",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"attributeStorageInfo",void 0);d.__decorate([f.property(p.elevationInfo)],c.prototype,"elevationInfo",null);d.__decorate([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0);d.__decorate([f.property(p.legendEnabled)],c.prototype,"legendEnabled",void 0);d.__decorate([f.property({types:u.types,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},
name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:u.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],c.prototype,"renderer",void 0);d.__decorate([D.writer("renderer")],c.prototype,"writeRenderer",null);d.__decorate([f.property({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0);return c=d.__decorate([C.subclass("esri.layers.PointCloudLayer")],c)});