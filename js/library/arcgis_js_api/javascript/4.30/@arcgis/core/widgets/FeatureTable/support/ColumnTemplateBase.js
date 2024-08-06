/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../../core/JSONSupport.js";import{property as i}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";let e=class extends t{constructor(o){super(o),this.autoWidth=!1,this.description=null,this.direction=null,this.flexGrow=1,this.fieldName=null,this.formatFunction=null,this.frozen=!1,this.frozenToEnd=!1,this.icon=null,this.initialSortPriority=null,this.invalid=!1,this.label=null,this.menuConfig=null,this.resizable=!0,this.sortable=!1,this.textAlign="start",this.textWrap=!1,this.type=null,this.visible=!0,this.width=200}};o([i()],e.prototype,"autoWidth",void 0),o([i()],e.prototype,"description",void 0),o([i()],e.prototype,"direction",void 0),o([i()],e.prototype,"flexGrow",void 0),o([i({type:String})],e.prototype,"fieldName",void 0),o([i()],e.prototype,"formatFunction",void 0),o([i()],e.prototype,"frozen",void 0),o([i()],e.prototype,"frozenToEnd",void 0),o([i()],e.prototype,"icon",void 0),o([i()],e.prototype,"initialSortPriority",void 0),o([i()],e.prototype,"invalid",void 0),o([i()],e.prototype,"label",void 0),o([i()],e.prototype,"menuConfig",void 0),o([i()],e.prototype,"resizable",void 0),o([i()],e.prototype,"sortable",void 0),o([i()],e.prototype,"textAlign",void 0),o([i()],e.prototype,"textWrap",void 0),o([i({type:String,json:{read:!1,write:!0}})],e.prototype,"type",void 0),o([i()],e.prototype,"visible",void 0),o([i()],e.prototype,"width",void 0),e=o([r("esri.widgets.FeatureTable.support.ColumnTemplateBase")],e);const s=e;export{s as default};
