/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import i from"../webdoc/applicationProperties/Viewing.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";import"../webdoc/applicationProperties/Search.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../webdoc/applicationProperties/SearchLayer.js";import"../webdoc/applicationProperties/SearchLayerField.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../chunks/fieldType.js";import"../webdoc/applicationProperties/SearchTable.js";import"../webdoc/applicationProperties/SearchTableField.js";var t;let p=t=class extends o{constructor(r){super(r),this.viewing=null}clone(){return new t({viewing:this.viewing?.clone()??null})}};r([e({type:i,json:{write:!0}})],p.prototype,"viewing",void 0),p=t=r([s("esri.webscene.ApplicationProperties")],p);const c=p;export{c as default};
