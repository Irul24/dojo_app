/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import r from"./ExpressionInfo.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../core/Clonable.js";var p;let n=p=class extends s{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new p({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:o(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};t([i({type:Boolean,json:{write:!0}})],n.prototype,"isAutoGenerated",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"name",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"alias",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),t([i({type:r,json:{write:!0}})],n.prototype,"onStatisticExpression",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"statisticType",void 0),n=p=t([e("esri.layers.support.AggregateField")],n);const a=n;export{a as default};
