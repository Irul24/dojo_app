/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{clone as s}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e as t}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudRenderer.js";import{L as p}from"../chunks/LegendOptions.js";import n from"./visualVariables/support/ColorStop.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/PointSizeSplatAlgorithm.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/writer.js";var c;let m=c=class extends i{constructor(o){super(o),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new c({...this.cloneProperties(),field:s(this.field),fieldTransformType:s(this.fieldTransformType),stops:s(this.stops),legendOptions:s(this.legendOptions)})}};o([t({pointCloudStretchRenderer:"point-cloud-stretch"})],m.prototype,"type",void 0),o([r({json:{write:!0},type:String})],m.prototype,"field",void 0),o([r({type:p,json:{write:!0}})],m.prototype,"legendOptions",void 0),o([r({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),o([r({type:[n],json:{write:!0}})],m.prototype,"stops",void 0),m=c=o([e("esri.renderers.PointCloudStretchRenderer")],m);const l=m;export{l as default};
