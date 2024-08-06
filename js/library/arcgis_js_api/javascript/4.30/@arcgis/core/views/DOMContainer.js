/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{b as e,r as s,e as i}from"../chunks/domUtils.js";import{o as r}from"../core/promiseUtils.js";import{L as o}from"../chunks/Logger.js";import{d as n,r as a}from"../chunks/maybe.js";import{watch as h,initial as d}from"../core/reactiveUtils.js";import{addFrameTask as c}from"../core/scheduling.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import p from"../core/Accessor.js";import m from"../core/Collection.js";import{U as f}from"../chunks/UpdatingHandles.js";import{c as g}from"../chunks/projector.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/asyncUtils.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/ObservableBase.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/widgetUtils.js";let _=class extends p{constructor(){super(...arguments),this.items=new m,this._watchUpdatingTracking=new f,this._callbacks=new Map,this._projector=g(),this._hiddenProjector=g()}get needsRender(){return this.items.length>0}get updating(){return this._watchUpdatingTracking?.updating??!1}initialize(){const t=document.createElement("div");t.className="esri-overlay-surface",this._set("surface",t),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),t.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange((()=>this.items),(t=>{for(const e of t.added){const t=()=>e.render();this._callbacks.set(e,t),this._projector.append(this.surface,t)}for(const e of t.removed){const t=this._projector.detach(this._callbacks.get(e));this.surface.removeChild(t.domNode),this._callbacks.delete(e)}}))}addItem(t){this.items.add(t)}removeItem(t){this.items.remove(t)}destroy(){this.items.removeAll(),this._callbacks.forEach((t=>this._projector.detach(t))),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()}render(){this._projector.renderNow()}computeBoundingRect(t){const e=this._hiddenSurface,s=this._hiddenProjector;let i;const r=()=>(i=t.render(),i);s.append(e,r),s.renderNow();const o={left:0,top:0,right:0,bottom:0};if(i?.domNode){const t=i.domNode.getBoundingClientRect();o.left=t.left,o.top=t.top,o.right=t.right,o.bottom=t.bottom}for(s.detach(r);e.firstChild;)e.removeChild(e.firstChild);return o}overlaps(t,e){const s=this.computeBoundingRect(t),i=this.computeBoundingRect(e);return Math.max(s.left,i.left)<=Math.min(s.right,i.right)&&Math.max(s.top,i.top)<=Math.min(s.bottom,i.bottom)}get hasVisibleItems(){return this.items.some((t=>t.visible))}async prepare(){await document.fonts.load(this._fontString()).catch((()=>{}))}renderCanvas(t,e){const s=!!e?.disableDecorations;if(!this.items.some((t=>t.visible&&!(s&&t.isDecoration))))return;const i=t.getContext("2d");i.save(),i.font=this._fontString(),this.items.forEach((t=>{s&&t.isDecoration||(i.save(),t.renderCanvas(i),i.restore())})),i.restore()}_fontString(){return`10px ${getComputedStyle(this.surface).fontFamily}`}};t([l({readOnly:!0})],_.prototype,"surface",void 0),t([l({readOnly:!0})],_.prototype,"items",void 0),t([l({readOnly:!0})],_.prototype,"needsRender",null),t([l({readOnly:!0})],_.prototype,"_watchUpdatingTracking",void 0),t([l({readOnly:!0})],_.prototype,"updating",null),_=t([u("esri.views.overlay.ViewOverlay")],_);const y=_,v=[0,0];function k(t){const e=(t.ownerDocument||window.document).defaultView,s=t.getBoundingClientRect();return v[0]=s.left+(e?.pageXOffset??0),v[1]=s.top+(e?.pageYOffset??0),v}function w(t){t&&(i(t),t.parentNode&&t.parentNode.removeChild(t))}const j=750,C=i=>{let p=class extends i{constructor(...t){super(...t),this._freqInfo={freq:16,time:j},this._overlayRenderTaskHandle=null,this.height=0,this.messagesCommon=null,this.overlay=null,this.position=null,this.resizing=!1,this.root=null,this.surface=null,this.suspended=!0,this.ui=null,this.userContent=null,this.width=0,this.widthBreakpoint=null,this.addHandles([h((()=>this.cursor),(t=>{const{surface:e}=this;e&&e.setAttribute("data-cursor",t)})),h((()=>this.navigating),(t=>{const{surface:e}=this;e&&e.setAttribute("data-navigating",t.toString())}))])}initialize(){this.addHandles([h((()=>this.ui),((t,e)=>this._handleUIChange(t,e)),d),this.on("focus",(()=>this.notifyChange("focused"))),this.on("blur",(()=>this.notifyChange("focused")))])}destroy(){this.destroyed||(this.ui=n(this.ui),this.container=null)}get container(){return this._get("container")??null}set container(t){const i=this._get("container"),r=e(t);if(r||"string"!=typeof t||o.getLogger(this).error("#container",`element with id '${t}' not found`),i===r)return;if(this._stopMeasuring(),i&&(i.classList.remove("esri-view"),this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null),this.overlay&&(this.overlay.destroy(),this._set("overlay",null)),this.root&&(w(this.root),this._set("root",null)),this.userContent&&(s(this.userContent,i),w(this.userContent),this._set("userContent",null))),!r)return this._set("width",0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null),void this._set("container",null);r.classList.add("esri-view");const n=document.createElement("div");n.className="esri-view-user-storage",s(r,n),r.appendChild(n),this._set("userContent",n);const d=document.createElement("div");d.className="esri-view-root",r.insertBefore(d,r.firstChild),this._set("root",d);const l=document.createElement("div");l.className="esri-view-surface",l.setAttribute("role","application"),l.tabIndex=0,d.appendChild(l),this._set("surface",l);const u=new y;d.appendChild(u.surface),this._set("overlay",u),this.addHandles(h((()=>u.needsRender),(t=>{t&&!this._overlayRenderTaskHandle?this._overlayRenderTaskHandle=c({render:()=>this.overlay?.render()}):this._overlayRenderTaskHandle=a(this._overlayRenderTaskHandle)}))),this.forceDOMReadyCycle(),this._set("container",r),this._startMeasuring()}get focused(){const t=document.activeElement===this.surface;return document.hasFocus()&&t}get size(){return[this.width,this.height]}blur(){this.surface?.blur()}focus(){this.surface?.focus()}pageToContainer(t,e,s){const i=this.position;return t-=i?i[0]:0,e-=i?i[1]:0,s?(s[0]=t,s[1]=e):s=[t,e],s}containerToPage(t,e,s){const i=this.position;return t+=i?i[0]:0,e+=i?i[1]:0,s?(s[0]=t,s[1]=e):s=[t,e],s}_handleUIChange(t,e){this.removeHandles("ui"),e&&e!==t&&e.destroy(),t&&(t.view=this,this.addHandles(h((()=>this.root),(e=>{t.container=e?function(t){const e=document.createElement("div");return t.appendChild(e),e}(e):null}),d),"ui")),this._set("ui",t)}_stopMeasuring(){this.removeHandles("measuring"),this._get("resizing")&&this._set("resizing",!1)}_startMeasuring(){const t=this._freqInfo;t.freq=16,t.time=j,this.addHandles([r(window,"resize",(()=>{t.freq=16,t.time=j})),c({prepare:t=>{const e=this._measure(),s=this._freqInfo;if(s.time+=t.deltaTime,e&&(s.freq=16,this._get("resizing")||this._set("resizing",!0)),s.time<s.freq)return;s.time=0;const i=this._position();s.freq=i||e?16:Math.min(j,2*s.freq),!e&&s.freq>=512&&this._get("resizing")&&this._set("resizing",!1)}})],"measuring"),this._measure(),this._position()}_measure(){const t=this.container,e=t?t.clientWidth:0,s=t?t.clientHeight:0;if(0===e||0===s)return this.suspended||this._set("suspended",!0),!1;const i=this.width,r=this.height;return e===i&&s===r?(this.suspended&&this._set("suspended",!1),!1):(this._set("width",e),this._set("height",s),this.suspended&&this._set("suspended",!1),this.emit("resize",{oldWidth:i,oldHeight:r,width:e,height:s}),!0)}_position(){const t=this.container,e=this.position,s=t&&k(t);return!(!s||e&&s[0]===e[0]&&s[1]===e[1]||(this._set("position",[s[0],s[1]]),0))}forceDOMReadyCycle(){}};return t([l()],p.prototype,"container",null),t([l({readOnly:!0})],p.prototype,"focused",null),t([l({readOnly:!0})],p.prototype,"height",void 0),t([l()],p.prototype,"messagesCommon",void 0),t([l({type:y})],p.prototype,"overlay",void 0),t([l({readOnly:!0})],p.prototype,"position",void 0),t([l({readOnly:!0})],p.prototype,"resizing",void 0),t([l({readOnly:!0})],p.prototype,"root",void 0),t([l({value:null,readOnly:!0})],p.prototype,"size",null),t([l({readOnly:!0})],p.prototype,"surface",void 0),t([l({readOnly:!0})],p.prototype,"suspended",void 0),t([l()],p.prototype,"ui",void 0),t([l({readOnly:!0})],p.prototype,"userContent",void 0),t([l({readOnly:!0})],p.prototype,"width",void 0),t([l()],p.prototype,"widthBreakpoint",void 0),p=t([u("esri.views.DOMContainer")],p),p};export{C as DOMContainer};
