/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../symbols.js";import{m as o}from"./timeUtils.js";import{isTimeOnlyField as t}from"../layers/support/fieldUtils.js";import{f as s}from"./numberUtils.js";import{i as r,f as i}from"./utils2.js";import e from"../symbols/SimpleLineSymbol.js";import"./ensureType.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"../core/Error.js";import"../symbols/CIMSymbol.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./layerUtils2.js";import"./utils3.js";import"./mat4.js";const m="<",l=">";function p(o,t,r,e){let m="";return 0===t?m="< ":t===r&&(m="> "),m+(e?i(o,e):s(o))}const a=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];async function n(o){if(!("visualVariables"in o)||!o.visualVariables)return null;const t=o.visualVariables.find((o=>"color"===o.type));if(!t)return null;let s=null,r=null;if(t.stops){if(1===t.stops.length)return t.stops[0].color;s=t.stops[0].value,r=t.stops[t.stops.length-1].value}const i=null!=s&&null!=r?s+(r-s)/2:0,{getColor:e}=await import("./visualVariableUtils.js");return e(t,i)??null}async function j(o,t){const s=o.trailCap,r=o.trailWidth||1,i=t||await n(o)||o.color;return new e({cap:s,color:i,width:r})}function A(o){return null!=o&&"object"==typeof o&&"min"in o&&"max"in o}function y(s,i,e){const m=function(o,t){if(!t.field)return null;if("featureReduction"in o)switch(o.featureReduction?.type){case"cluster":case"binning":{const s=o.featureReduction.fields.find((({name:o})=>o.toLowerCase()===t.field.toLowerCase()));return s&&"getField"in o?o.getField(s.onStatisticField):null}}return"getField"in o?o.getField?.(t.field):null}(s,i);if(!m||!r(m)&&!t(m))return null;let l=function(o,t){const s="popupTemplate"in o?o.popupTemplate?.fieldInfos:null;if(s?.length&&t)return s.find((o=>o.fieldName?.toLowerCase()===t.toLowerCase()))?.format?.dateFormat}(s,m.name);if(!l&&"date"===m.type){let t=0,s=0;i.stops?(t=i.stops?.at(0)?.value??t,s=i.stops?.at(-1)?.value??s):"minDataValue"in i&&"maxDataValue"in i&&(t=i.minDataValue??t,s=i.maxDataValue??s),l=s-t>2*o.days?"short-date":"short-date-short-time"}return{fieldType:m.type,format:l,timeZoneOptions:{layerTimeZone:"preferredTimeZone"in s?s.preferredTimeZone:null,viewTimeZone:e,datesInUnknownTimezone:"datesInUnknownTimezone"in s&&s.datesInUnknownTimezone}}}function u(o){if("authoringInfo"in o)return o.authoringInfo?.visualVariables?.find((({theme:o})=>"reference-size"===o))}export{p as createStopLabel,y as getDateFormatOptions,n as getMedianColor,u as getReferenceSizeAuthoringInfoVisualVariable,j as getSymbolForFlowRenderer,A as isRasterBandStatistics,a as rgbImgSource,l as specialCharsGreaterThan,m as specialCharsLessThan};
