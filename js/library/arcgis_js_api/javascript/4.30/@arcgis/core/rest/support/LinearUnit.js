/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as t}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../chunks/networkEnums.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/jsonMap.js";let p=class extends r{constructor(s){super(s),this.distance=0,this.units=null}};s([o({json:{write:!0}})],p.prototype,"distance",void 0),s([t(i)],p.prototype,"units",void 0),p=s([e("esri.rest.support.LinearUnit")],p);const c=p;export{c as default};
