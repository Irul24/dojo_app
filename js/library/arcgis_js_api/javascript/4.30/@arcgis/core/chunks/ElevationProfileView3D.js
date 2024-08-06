/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import t from"../core/Handles.js";import{a as o,r as e,d as s}from"./maybe.js";import{watch as i,syncAndInitial as r}from"../core/reactiveUtils.js";import{g as p,E as m}from"../widgets/ElevationProfile/ElevationProfileLine.js";import{H as l}from"./HoveredPoints.js";import{c as n}from"./asyncUtils.js";import{d as a,h as j}from"./handleUtils.js";import{throwIfAborted as c}from"../core/promiseUtils.js";import{k as u}from"./elevationInfoUtils.js";import{S as h}from"./settings.js";import{O as d}from"./OutlineVisualElement.js";import{G as y}from"./GraphicState.js";import{R as g}from"./Material.js";import{h as b}from"./layerViewUtils.js";import{_ as f}from"./tslib.es6.js";import v from"../Color.js";import S from"../core/Accessor.js";import{t as w}from"./throttle.js";import{property as _}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as U}from"../core/accessorSupport/decorators/subclass.js";import{b as E}from"./vec4f64.js";import D from"../geometry/Polyline.js";import"../core/Collection.js";import"../core/Evented.js";import"../config.js";import"./ensureType.js";import"./utils.js";import"./metadata.js";import"../core/Error.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./shared.js";import"./SimpleObservable.js";import"./memoize.js";import"./uuid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/support/webMercatorUtils.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./interfaces3.js";import"./basicInterfaces.js";import"./VertexAttribute.js";import"./ViewingMode.js";import"./AnchorElementViewModel.js";import"../geometry/projection.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./colorUtils2.js";import"./vec4.js";import"./ExtendedLineVisualElement.js";import"./vec4f32.js";import"./frustum.js";import"./ray.js";import"./plane.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./mat4.js";import"./lineSegment.js";import"./EngineVisualElement.js";import"../core/Identifiable.js";import"./RenderGeometry.js";import"./debugFlags2.js";import"./IntegerPassUniform.js";import"./compilerUtils.js";import"./NormalAttribute.glsl.js";import"./Matrix4PassUniform.js";import"./BindType.js";import"./VertexPosition.glsl.js";import"./Matrix3DrawUniform.js";import"./StencilUtils.js";import"./Indices.js";import"./Util.js";import"./triangle.js";import"./doublePrecisionUtils.js";import"./mat3.js";import"./ShaderTechniqueConfiguration.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./GLObjectType.js";import"./vec2.js";import"./renderState.js";import"../views/3d/webgl/RenderCamera.js";import"./screenUtils.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"./enumeration.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./ScreenSpacePass.glsl.js";import"./Float4DrawUniform.js";import"./NestedMap.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./Attribute.js";import"./RibbonLineMaterial.js";import"./sphere.js";import"./Octree.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./floatRGBA.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./computeTranslationToOriginAndRotation.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./MemCache.js";import"./BufferObject.js";import"./VisualElement.js";import"./LaserlineVisualElement.js";import"./DoubleArray.js";import"./CameraSpace.glsl.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./lineStippleUtils.js";import"./aaBoundingBox.js";import"./dehydratedPoint.js";import"./ElevationInfo.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./ElevationContext.js";import"./ElevationProvider.js";import"./hydratedFeatures.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./line.js";import"./line2.js";import"./triangulationUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./deduplicate.js";class P{constructor(t){this._params=t,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null,this._settings=new h({getTheme:()=>this._params.view.effectiveTheme})}destroy(){this.remove()}remove(){this._highlightTask=o(this._highlightTask),this._highlightHandle=e(this._highlightHandle),this._visualElementHandle=e(this._visualElementHandle)}showHighlight(t){if(this.remove(),null==t||!L(t))return;const o=t.layer;this._highlightTask=n((async e=>{const s=await this._params.view.whenLayerView(o);c(e),b(s)&&(this._highlightHandle=s.highlight(t))}))}showReshaping(t){if(this.remove(),null==t)return;const o=this._params.view,e=new d({view:o,geometry:L(t)?t.geometry:null,attached:!1,elevationInfo:u(t),renderOccluded:g.OccludeAndTransparentStencil,isDecoration:!0}),s=new y({graphic:t}),r=[i((()=>s.isDraped),(t=>{e.isDraped=t})),s.on("changed",(()=>{e.geometry=L(t)?t.geometry:null})),o.trackGraphicState(s),o.maskOccludee(t),a(e)];this._settings.visualElements.lineObjects.outline.apply(e),e.attached=!0,this._visualElementHandle=j(r)}}function L(t){return null!=t.geometry&&"polyline"===t.geometry.type}let M=class extends S{constructor(t){super(t),this._chartData=null,this._visualElements=[]}initialize(){const t=w((t=>{this._update(t)}),100);this.addHandles([i((()=>({spatialReference:this.view.spatialReference,chartData:this._chartData})),t,r),t])}destroy(){this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(t){this._chartData=t}_update(t){const{chartData:o}=t;if(null==o)return this.remove();if(!o.refined)return;const e=this._visualElements,s=o.lines.filter((t=>t.viewVisualizationEnabled)),i=s.length;for(;e.length>i;)e.pop().destroy();const r=p().profileLinesStyle3D;for(;e.length<i;){const t=new d({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:r.width-r.outlineSize,width:r.width,falloff:r.falloff,color:r.outlineColor,renderOccluded:r.renderOccluded,isDecoration:!0});e.push(t)}const m=t.spatialReference;for(let t=0;t<i;++t){const o=e[t],r=s[i-1-t];o.geometry=this._createLineGeometry(r,m),o.innerColor=E(v.toUnitRGBA(r.color))}}_createLineGeometry(t,o){const e=t.samples??[],s=e.length-1,i=[];let r=[];for(let t=0;t<=s;t++){const{x:o,y:p,z:m}=e[t];null!=m&&r.push([o,p,m]),t!==s&&null!=m||!r.length||(i.push(r),r=[])}return new D({paths:i,hasZ:!0,spatialReference:o})}_destroyVisualElements(){this._visualElements.forEach((t=>t.destroy())),this._visualElements.length=0}};f([_()],M.prototype,"view",void 0),f([_()],M.prototype,"_chartData",void 0),M=f([U("esri.widgets.ElevationProfile.support.ProfileLines3D")],M);class I{constructor(o,e){this._handles=new t,this._inputRepresentation=new P({view:o}),this._hoveredPoints=new l({view:o}),this._profileLines=new M({view:o}),this._handles.add([i((()=>e.viewModel.hoveredPoints),(t=>this._hoveredPoints.update(t)),r),i((()=>{const{state:t,editable:o,highlightEnabled:s,viewModel:i}=e,r=i.input;return r&&(r.commitProperty("geometry"),r.commitProperty("layer")),{input:r,state:t,editable:o,highlightEnabled:s}}),(t=>this._updateInputRepresentation(t)),r),i((()=>e.viewModel.chartData),(t=>this._profileLines.update(t)),r),i((()=>e.viewModel.input?.geometry),(()=>{this._profileLines.remove()}),r)])}destroy(){this._handles=s(this._handles),this._inputRepresentation=s(this._inputRepresentation),this._hoveredPoints=s(this._hoveredPoints),this._profileLines=s(this._profileLines)}_updateInputRepresentation({input:t,state:o,editable:e,highlightEnabled:s}){const i=this._inputRepresentation;if(!s)return i.remove();o===m.Selected?i.showHighlight(t):o!==m.Created||e?i.remove():i.showReshaping(t)}}export{I as ElevationProfileView3D};
