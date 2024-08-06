/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import{C as t}from"../chunks/CollectionFlattener.js";import e from"../core/Error.js";import{clone as o}from"../core/lang.js";import{l as i}from"../chunks/loadAll.js";import{L as p}from"../chunks/Logger.js";import{M as n}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as m}from"../core/promiseUtils.js";import{join as l}from"../core/urlUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{r as u}from"../chunks/reader.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import j from"../geometry/SpatialReference.js";import y from"./Layer.js";import h from"./buildingSublayers/BuildingComponentSublayer.js";import d from"./buildingSublayers/BuildingGroupSublayer.js";import{APIKeyMixin as b}from"./mixins/APIKeyMixin.js";import{A as k}from"../chunks/ArcGISService.js";import{CustomParametersMixin as f}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as S}from"./mixins/OperationalLayer.js";import{PortalLayer as g}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as v}from"./mixins/ScaleRangeLayer.js";import{SceneService as I,SaveOperationType as U}from"./mixins/SceneService.js";import{f as L}from"../chunks/associatedFeatureServiceUtils.js";import C from"./support/BuildingFilter.js";import x from"./support/BuildingSummaryStatistics.js";import{s as F,a as T,r as P,e as R}from"../chunks/commonProperties2.js";import{l as O,e as D,f as w}from"../chunks/elevationInfoUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/Evented.js";import"../config.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../core/JSONSupport.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../core/Identifiable.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/utils7.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"./FeatureLayer.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../chunks/formUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/EditBusLayer.js";import"../chunks/uuid.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"./support/Subtype.js";import"./mixins/FeatureReductionLayer.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"./mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"./mixins/PublishableLayer.js";import"./support/PublishingInfo.js";import"./mixins/RefreshableLayer.js";import"./mixins/TemporalLayer.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../chunks/interfaces2.js";import"./buildingSublayers/BuildingSublayer.js";import"../chunks/capabilities.js";import"../chunks/I3SIndexInfo.js";import"../chunks/I3SLayerDefinitions.js";import"../chunks/I3SUtil.js";import"../chunks/mat4f64.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/projectVectorToVector.js";import"../chunks/projectPointToVector.js";import"../chunks/dehydratedPoint.js";import"../chunks/sphere.js";import"../chunks/ray.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/I3SBinaryReader.js";import"../chunks/VertexAttribute.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/edgeUtils.js";import"../chunks/floatRGBA.js";import"../chunks/DecodeSymbolColor.glsl.js";import"../chunks/interfaces3.js";import"../chunks/Matrix4PassUniform.js";import"../chunks/BindType.js";import"../chunks/Float4DrawUniform.js";import"../chunks/NormalAttribute.glsl.js";import"../chunks/Matrix3DrawUniform.js";import"../chunks/orientedBoundingBox.js";import"../chunks/mat3.js";import"../chunks/quat.js";import"../chunks/ViewingMode.js";import"../chunks/Attribute.js";import"../chunks/popupUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/jsonContext.js";import"../chunks/resourceUtils2.js";import"../chunks/resourceUtils.js";import"../chunks/saveAPIKeyUtils.js";import"../chunks/saveUtils.js";import"../chunks/BuildingFilterBlock.js";const B=r.ofType(C),M=o(d.sublayersProperty),V=M.json?.origins;V&&(V["web-scene"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},V["portal-item"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let E=class extends(I(k(S(g(v(n(f(b(y))))))))){constructor(s){super(s),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new t({getCollections:()=>[this.sublayers],getChildrenFunction:s=>"building-group"===s.type?s.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new B,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(s){return"string"==typeof s?{url:s}:s??{}}destroy(){this.allSublayers.destroy()}readSublayers(s,r,t){const e=d.readSublayers(s,r,t);return d.forEachSublayer(e,(s=>s.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(e,this._sublayerOverrides),this._sublayerOverrides=null),e}applySublayerOverrides(s,{overrides:r,context:t}){d.forEachSublayer(s,(s=>s.read(r.get(s.id),t)))}readSublayerOverrides(s,r){const t=new Map;for(const o of s)null!=o&&"object"==typeof o&&"number"==typeof o.id?t.set(o.id,o):r.messages?.push(new e("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}));return{overrides:t,context:r}}writeSublayerOverrides(s,r,t){const e=[];d.forEachSublayer(this.sublayers,(s=>{const r=s.write({},t);Object.keys(r).length>1&&e.push(r)})),e.length>0&&(r.sublayers=e)}writeUnappliedOverrides(s,r){r.sublayers=[],s.overrides.forEach((s=>{r.sublayers.push(o(s))}))}write(s,r){return s=super.write(s,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,s,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,s)),s}read(s,r){if(super.read(s,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=s&&Array.isArray(s.sublayers)){const t=this.readSublayerOverrides(s.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this._sublayerOverrides=t}}readSummaryStatistics(s,r){if("string"==typeof r.statisticsHRef){const s=l(this.parsedUrl?.path,r.statisticsHRef);return new x({url:s})}return null}set elevationInfo(s){this._set("elevationInfo",s),this._validateElevationInfo()}load(s){const r=null!=s?s.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},s).catch(m).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return i(this,(s=>{d.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&s(r)})),this.summaryStatistics&&s(this.summaryStatistics)}))}async saveAs(s,r){return this._debouncedSaveOperations(U.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},s)}async save(){const s={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(U.SAVE,s)}validateLayer(s){if(!s.layerType||"Building"!==s.layerType)throw new e("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:s.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(s){try{const{portalItem:r}=await L(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:s});this.associatedFeatureServiceItem=r}catch(s){p.getLogger(this).warn("Associated feature service item could not be loaded",s)}}_validateElevationInfo(){const s=this.elevationInfo,r="Building scene layers";O(p.getLogger(this),D(r,"absolute-height",s)),O(p.getLogger(this),w(r,s))}};s([a({type:["BuildingSceneLayer"]})],E.prototype,"operationalLayerType",void 0),s([a({readOnly:!0})],E.prototype,"allSublayers",void 0),s([a(M)],E.prototype,"sublayers",void 0),s([u("service","sublayers")],E.prototype,"readSublayers",null),s([a({type:B,nonNullable:!0,json:{write:!0}})],E.prototype,"filters",void 0),s([a({type:String,json:{write:!0}})],E.prototype,"activeFilterId",void 0),s([a({readOnly:!0,type:x})],E.prototype,"summaryStatistics",void 0),s([u("summaryStatistics",["statisticsHRef"])],E.prototype,"readSummaryStatistics",null),s([a({type:[String],json:{read:!1}})],E.prototype,"outFields",void 0),s([a(F)],E.prototype,"fullExtent",void 0),s([a(T)],E.prototype,"legendEnabled",void 0),s([a({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),s([a(P(j))],E.prototype,"spatialReference",void 0),s([a(R)],E.prototype,"elevationInfo",null),s([a({json:{read:!1},readOnly:!0})],E.prototype,"type",void 0),s([a()],E.prototype,"associatedFeatureServiceItem",void 0),E=s([c("esri.layers.BuildingSceneLayer")],E);const A=E;export{A as default};
