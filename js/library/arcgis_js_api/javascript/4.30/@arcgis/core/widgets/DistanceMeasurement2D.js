/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import e from"./Widget.js";import r from"./DistanceMeasurement2D/DistanceMeasurement2DViewModel.js";import{g as p}from"../chunks/globalCss.js";import{M as n}from"../chunks/MeasurementWidgetContent.js";import"../chunks/widgetUtils.js";import{m}from"../chunks/messageBundle.js";import{t as l}from"../chunks/jsxFactory.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/unitUtils.js";import"../geometry/projection.js";import"../chunks/vec3f64.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/defaultUnit.js";import"../chunks/getDefaultUnitForView.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/unitFormatUtils.js";import"../chunks/ByteSizeUnit.js";import"../chunks/Cyclical.js";import"../chunks/quantityUtils.js";import"../chunks/UpdatingHandles.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/_commonjsHelpers.js";import"../chunks/hydrated.js";import"../geometry/support/geodesicUtils.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../layers/Layer.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../layers/mixins/ScaleRangeLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/ViewingMode.js";import"../chunks/SnappingVisualizer2D.js";import"../chunks/vec2.js";import"../chunks/vec2f64.js";import"../chunks/enums2.js";import"../chunks/normalizedPoint.js";import"../chunks/dehydratedPoint.js";import"../chunks/elevationInfoUtils.js";import"../chunks/Settings2.js";import"../chunks/SnappingVisualizer.js";import"../chunks/RightAngleSnappingHint.js";import"../chunks/PointSnappingHint.js";import"../views/draw/Draw.js";import"../views/draw/MultipointDrawAction.js";import"../views/draw/DrawAction.js";import"../chunks/EditGeometryOperations.js";import"../chunks/compilerUtils.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/mathUtils2.js";import"../chunks/geometry2dUtils.js";import"../chunks/SnappingContext.js";import"../chunks/SnappingOperation.js";import"../chunks/Scheduler.js";import"../core/signal.js";import"../chunks/debugFlags.js";import"../chunks/DrawEvents.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/keybindings.js";import"../chunks/screenUtils2.js";import"../views/draw/PointDrawAction.js";import"../chunks/DrawTool.js";import"../chunks/drawSurfaces.js";import"../chunks/memoize.js";import"../chunks/ReactiveSet.js";import"../chunks/diffUtils.js";import"../chunks/dehydratedFeatureComparison.js";import"../chunks/InteractiveToolBase.js";import"../chunks/meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../chunks/hydratedFeatures.js";import"../chunks/interfaces.js";import"../chunks/snappingUtils.js";import"../chunks/sphere.js";import"../chunks/ray.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../chunks/utils6.js";import"../chunks/projectVectorToVector.js";import"../chunks/projectPointToVector.js";import"../chunks/angularMeasurementUtils.js";import"../views/interactive/sketch/SketchLabelOptions.js";import"../chunks/SnappingDragPipelineStep.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../chunks/surfaceCoordinateSystems.js";import"../chunks/mat2d.js";import"../chunks/mat2df64.js";import"../chunks/quat.js";import"../chunks/GraphicManipulator.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/drapedUtils.js";import"../chunks/SnappingManagerPool.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../views/interactive/snapping/SnappingOptions.js";import"../chunks/SnappingManager.js";import"../layers/support/FeatureFilter.js";import"../chunks/floorFilterUtils.js";import"../chunks/layerUtils2.js";import"../chunks/layerViewUtils.js";import"../chunks/viewUtils.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/UnitSelect.js";const a="esri-distance-measurement-2d",u={base:a,newMeasurementButton:`${a}__clear-button`};let c=class extends e{constructor(s,t){super(s,t),this.messages=null,this.messagesCommon=null,this.viewModel=new r}get active(){return this.viewModel.active}get icon(){return"measure-line"}set icon(s){this._overrideIfSome("icon",s)}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get unit(){return this.viewModel.unit}set unit(s){this.viewModel.unit=s}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(s){this.viewModel.unitOptions=s}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get visible(){return this.viewModel.visible}set visible(s){this.viewModel.visible=s}render(){const{messages:s,messagesCommon:o,unit:i,unitOptions:e,viewModel:r}=this,{active:m,measurementLabel:a,state:c,supported:j}=r;return l("div",{"aria-label":this.messages.widgetLabel,class:this.classes(u.base,p.widget,p.panel),key:this,role:"presentation"},this.visible?l(n,{active:m,measurementItems:[{key:"distance",title:s.distance,value:a}],messages:{...s,notApplicable:o.notApplicable},newMeasurementButtonClass:u.newMeasurementButton,state:c,supported:j,unit:i,unitOptions:e,onNewMeasurementClick:()=>{t(this.viewModel.start())},onUnitChange:s=>{this.unit=s}}):null)}};s([o({readOnly:!0})],c.prototype,"active",null),s([o()],c.prototype,"icon",null),s([o()],c.prototype,"label",null),s([o()],c.prototype,"uiStrings",void 0),s([o(),m("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],c.prototype,"messages",void 0),s([o(),m("esri/t9n/common")],c.prototype,"messagesCommon",void 0),s([o()],c.prototype,"unit",null),s([o()],c.prototype,"unitOptions",null),s([o()],c.prototype,"view",null),s([o({type:r})],c.prototype,"viewModel",void 0),s([o({type:Boolean})],c.prototype,"visible",null),c=s([i("esri.widgets.DistanceMeasurement2D")],c);const j=c;export{j as default};
