/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{r as i}from"../../chunks/asyncUtils.js";import s from"../../core/Collection.js";import{watch as r,on as o,when as n}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import l,{a as u}from"../../geometry/Extent.js";import h from"../../geometry/SpatialReference.js";import{geographicToWebMercator as m,project as p}from"../../geometry/support/webMercatorUtils.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";let d,y=null;const f=new Map;async function b(t){null==y&&(null==d&&(d=import("../../chunks/Lyr3DWasmPerSceneView.js")),y=await d);const e=t.view;let i=f.get(e);return i||(i=new y.default({view:e}),f.set(e,i)),await i.initializeWasm(),i.add3DTilesLayerView(t)}function g(t){return f.get(t)}function j(t){const e=t.view,i=f.get(e);i&&i.remove3DTilesLayerView(t)<1&&(f.delete(e),0===f.size&&(d=null,y=null))}function v(t,e){return t&&"copyright"in t&&(!e||"function"==typeof t.originOf&&"user"===t.originOf("copyright"))}function w(t,e,i){i&&e&&(t.find((t=>t.layerView===e&&t.text===i))||t.push({text:i,layerView:e}))}const A=[];let _=class extends e{constructor(t){super(t),this._clear=()=>{this._fetchedAttributionData.clear(),this._pendingAttributions.clear(),this.removeHandles("suspension"),this.notifyChange("state")},this._pendingAttributions=new Set,this._fetchedAttributionData=new Map,this.items=new s,this.view=null,this._allLayerViewsChange=t=>{this.removeHandles("suspension"),this.removeHandles("visible-geometry-changed");const e=this.view?.allLayerViews;e&&(this.addHandles(e.map((t=>r((()=>[t.suspended,t.layer?.attributionVisible]),(()=>this._updateAttributionItems())))).toArray(),"suspension"),e.forEach((t=>{"esri.views.3d.layers.Tiles3DLayerView3D"===t.declaredClass&&this.addHandles(t.on("visible-geometry-changed",(()=>this._updateAttributionItems())),"visible-geometry-changed")}))),t?.removed&&t.removed.forEach((t=>{this._pendingAttributions.delete(t),this._fetchedAttributionData.delete(t)})),this._updateAttributionItems()},this.addHandles([o((()=>this.view?.allLayerViews),"change",(t=>this._allLayerViewsChange(t)),{onListenerAdd:()=>this._allLayerViewsChange(),onListenerRemove:this._clear}),n((()=>!0===this.view?.stationary),(()=>this._updateAttributionItems()))])}destroy(){this.view=null,this._fetchedAttributionData.clear(),this._pendingAttributions.clear(),this.items.removeAll()}get state(){return this.view?.ready?this._pendingAttributions.size>0?"loading":"ready":"disabled"}_updateAttributionItems(){const t=this.view,e=t?.allLayerViews;if(A.length=0,!t||!e)return void this._clear();e.forEach((e=>{if(e.suspended||!e.layer?.attributionVisible)return;const i=e.layer;if(v(i,"user"))return void w(A,e,i.copyright);if(i.hasAttributionData){if(this._fetchedAttributionData.has(e)){const s=this._fetchedAttributionData.get(e);return void(s?w(A,e,this._getDynamicAttribution(s,t,i)):v(i)&&w(A,e,i.copyright))}return void this._fetchAttributionData(e)}const s="portalItem"in i?i.portalItem?.accessInformation:void 0;w(A,e,s||i.copyright)}));const i=e.find((t=>"integrated-mesh-3dtiles"===t.layer?.type));if(this.view&&i){const t=g(this.view);if(t){const e=t.getAttributionText();for(let t=0;t<e.length;++t)w(A,i,e[t])}}var s,r;s=this.items,r=A,(s.length!==r.length||s.some(((t,e)=>t.text!==r[e].text)))&&(this.items.removeAll(),this.items.addMany(A)),A.length=0,this.notifyChange("state")}async _fetchAttributionData(t){if(this._pendingAttributions.has(t))return;this._pendingAttributions.add(t);const e=await i(t.layer.fetchAttributionData());if(this._pendingAttributions.has(t)){const i=e.ok?this._createContributionIndex(e.value,"bing-maps"===t.layer.type):null;this._pendingAttributions.delete(t),this._fetchedAttributionData.set(t,i)}this._updateAttributionItems()}_createContributionIndex(t,e){const i=t.contributors,s={};if(!i)return s;for(let t=0;t<i.length;t++){const r=i[t],o=r.coverageAreas;if(!o)return;for(const i of o){const o=i.bbox,n=i.zoomMin-(e&&i.zoomMin?1:0),a=i.zoomMax-(e&&i.zoomMax?1:0),c=new l({xmin:o[1],ymin:o[0],xmax:o[3],ymax:o[2],spatialReference:h.WGS84}),u={extent:m(c),attribution:r.attribution||"",score:null!=i.score?i.score:100,id:t};for(let t=n;t<=a;t++)s[t]??=[],s[t].push(u)}}return s.maxKey=Math.max.apply(null,Object.keys(s)),s}_getDynamicAttribution(t,e,i){const{extent:s,scale:r}=e;let o=i.tileInfo?.scaleToZoom(r)??0;if(o=Math.min(t.maxKey??0,Math.round(o)),!s||null==o||o<=-1)return"";const n=t[o],a=p(s.center.clone().normalize(),e.spatialReference),c=new Set;return n?n.filter((t=>{const e=t.id,i=!c.has(e)&&a&&t.extent&&u(t.extent,a);return i&&c.add(e),i})).sort(((t,e)=>e.score-t.score||t.objectId-e.objectId)).map((t=>t.attribution)).join(", "):""}};t([a({readOnly:!0,type:s})],_.prototype,"items",void 0),t([a({readOnly:!0})],_.prototype,"state",null),t([a()],_.prototype,"view",void 0),_=t([c("esri.widgets.Attribution.AttributionViewModel")],_);const x=_;export{b as a,x as default,g,j as r};
