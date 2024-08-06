/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import s from"../../../Basemap.js";import o from"../../../core/Accessor.js";import t from"../../../core/Collection.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../request.js";import"../../../config.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/Error.js";import"../../../core/JSONSupport.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/promiseUtils.js";import"../../../chunks/maybe.js";import"../../../chunks/collectionUtils.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../core/Handles.js";import"../../../chunks/ensureType.js";import"../../../chunks/metadata.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../chunks/writer.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../portal/Portal.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/locale.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalItem.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/persistableUrlUtils.js";import"../../../chunks/messages.js";import"../../../support/BasemapStyle.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils2.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";const i=t.ofType(s);let m=class extends o{constructor(r){super(r),this.basemaps=new i}destroy(){this.basemaps.forEach((r=>r.destroy()))}get state(){return"ready"}refresh(){}};r([e({type:i})],m.prototype,"basemaps",void 0),r([e({readOnly:!0})],m.prototype,"state",null),m=r([p("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],m);const a=m;export{a as default};
