/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import t from"../Color.js";import"../symbols.js";import{d as o}from"../core/Accessor.js";import{clone as r}from"../core/lang.js";import{L as e}from"../chunks/Logger.js";import{schedule as i}from"../core/scheduling.js";import{t as n}from"../chunks/screenUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import{g as l}from"../chunks/utils.js";import{e as p}from"../chunks/enumeration.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{collectField as u,collectArcadeFieldNames as y}from"../layers/support/fieldUtils.js";import c from"./Renderer.js";import j from"./support/AuthoringInfo.js";import h from"./support/HeatmapColorStop.js";import{ClonableMixin as b}from"../core/Clonable.js";import{JSONSupport as d}from"../core/JSONSupport.js";import{k as g,g as S,m as k}from"../chunks/heatmapUtils.js";import x from"../symbols/SimpleMarkerSymbol.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/ensureType.js";import"../config.js";import"../symbols/CIMSymbol.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../symbols/Symbol.js";import"../chunks/jsonMap.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";let D=class extends(b(d)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};var f;function w(s){if(null!=s){const{maxDensity:t,minDensity:o,radius:r}=s;if(null!=t||null!=o||null!=r){const{blurRadius:t,maxPixelIntensity:o,minPixelIntensity:r,...e}=s;return e}}return s}s([m({type:String,json:{write:!0}})],D.prototype,"minLabel",void 0),s([m({type:String,json:{write:!0}})],D.prototype,"maxLabel",void 0),s([m({type:String,json:{write:!0}})],D.prototype,"title",void 0),D=s([a("esri.renderers.support.HeatmapLegendOptions")],D);let P=f=class extends c{constructor(s){super(s),this.authoringInfo=null,this.colorStops=[new h({ratio:0,color:new t("rgba(255, 140, 0, 0)")}),new h({ratio:.75,color:new t("rgba(255, 140, 0, 1)")}),new h({ratio:.9,color:new t("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(s){return w(s)}get blurRadius(){return g(this.radius)}set blurRadius(s){const t=this.maxPixelIntensity,o=this.minPixelIntensity;this._set("radius",S(s)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",o*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(s){this._set("maxDensity",s*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(s){this._set("minDensity",s*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(k**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(s,t){this._warnedProps[s]||"user"===l(this).getDefaultOrigin()&&(this._warnedProps[s]=!0,i((()=>{o(e.getLogger(this),s,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})})))}read(s,t){s=w(s),super.read(s,t)}getSymbol(){return new x}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(s,t){const o=this.field,r=this.valueExpression;o&&"string"==typeof o&&u(s,t,o),r&&"string"==typeof r&&await y(s,t,r)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new f({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:r(this.colorStops),field:this.field,legendOptions:r(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};s([m({type:j,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],P.prototype,"authoringInfo",void 0),s([m({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],P.prototype,"blurRadius",null),s([m({type:[h],json:{write:!0}})],P.prototype,"colorStops",void 0),s([m({type:String,json:{write:!0}})],P.prototype,"field",void 0),s([m({type:D,json:{write:!0}})],P.prototype,"legendOptions",void 0),s([m({type:Number,json:{write:!0}})],P.prototype,"maxDensity",void 0),s([m({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],P.prototype,"maxPixelIntensity",null),s([m({type:Number,json:{write:!0}})],P.prototype,"minDensity",void 0),s([m({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],P.prototype,"minPixelIntensity",null),s([m({type:Number,cast:n,json:{write:!0}})],P.prototype,"radius",void 0),s([m({type:Number,range:{min:0},json:{default:0,write:!0}})],P.prototype,"referenceScale",void 0),s([p({heatmap:"heatmap"})],P.prototype,"type",void 0),s([m({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],P.prototype,"valueExpression",void 0),s([m({type:String})],P.prototype,"valueExpressionTitle",void 0),s([m({readOnly:!0})],P.prototype,"_pixelIntensityToDensity",null),P=f=s([a("esri.renderers.HeatmapRenderer")],P);const v=P;export{v as default};
