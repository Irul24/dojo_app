/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"./chunks/tslib.es6.js";import{ClonableMixin as e}from"./core/Clonable.js";import{JSONSupport as i}from"./core/JSONSupport.js";import{c as r}from"./chunks/timeUtils.js";import{property as o}from"./core/accessorSupport/decorators/property.js";import"./core/lang.js";import"./chunks/Logger.js";import{e as t}from"./chunks/enumeration.js";import{subclass as n}from"./core/accessorSupport/decorators/subclass.js";import{s as m}from"./chunks/jsonMap.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/maybe.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/ObservableBase.js";import"./chunks/tracking.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./core/Error.js";import"./config.js";import"./chunks/ensureType.js";import"./chunks/date.js";import"./chunks/locale.js";import"./chunks/timeZoneUtils.js";import"./chunks/datetime.js";const c=m()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let p=class extends(e(i)){constructor(s){super(s),this.unit="milliseconds",this.value=0}toMilliseconds(){return r(this.value,this.unit,"milliseconds")}};s([t(c,{nonNullable:!0})],p.prototype,"unit",void 0),s([o({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),p=s([n("esri.TimeInterval")],p);const u=p;export{u as default,c as t};
