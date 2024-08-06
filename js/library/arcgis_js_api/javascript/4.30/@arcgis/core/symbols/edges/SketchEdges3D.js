/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/Logger.js";import"../../core/lang.js";import"../../core/Error.js";import{e as r}from"../../chunks/enumeration.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import t from"./Edges3D.js";import"../../config.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";var e;let c=e=class extends t{constructor(s){super(s),this.type="sketch"}clone(){return new e(this.cloneProperties())}};s([r({sketch:"sketch"},{readOnly:!0})],c.prototype,"type",void 0),c=e=s([o("esri.symbols.edges.SketchEdges3D")],c);const i=c;export{i as default};
