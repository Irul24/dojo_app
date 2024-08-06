/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as o,h as s,a}from"../widgets/Widget.js";import{c as i,d as r}from"./conditionalSlot.js";import{v as c}from"./dom.js";import{s as n,a as l,c as p}from"./loadable.js";import{c as d,d as m}from"./locale2.js";import{u,c as h,d as g,s as f}from"./t9n.js";import{t as j,E as x}from"./ExpandToggle.js";import{c as b}from"./observers.js";import{d as y}from"./action.js";import{d as v}from"./action-group.js";import{d as w}from"./action-menu.js";import{d as k}from"./icon.js";import{d as E}from"./loader.js";import{d as L}from"./popover.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./key.js";import"./interactive.js";import"./component.js";import"./array.js";import"./floating-ui.js";import"./debounce.js";import"./focusTrapComponent.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const S=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=o(this,"calciteActionPadToggle",6),this.mutationObserver=b("mutation",(()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=c(e).filter((e=>e?.matches("calcite-action-group")));this.setGroupLayout(t)},this.handleTooltipSlotChange=e=>{const t=c(e).filter((e=>e?.matches("calcite-tooltip")));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){j({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){u(this,this.effectiveLocale)}connectedCallback(){i(this),d(this),h(this)}disconnectedCallback(){m(this),g(this),r(this)}async componentWillLoad(){n(this);const{el:e,expanded:t}=this;j({el:e,expanded:t}),await f(this)}componentDidLoad(){l(this)}async setFocus(){await p(this),this.el?.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach((e=>e.layout=this.layout))}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,messages:o,el:a,position:i,toggleExpand:r,scale:c,layout:n,actionsEndGroupLabel:l,overlayPositioning:p}=this,d=t?null:s(x,{collapseText:o.collapse,el:a,expandText:o.expand,expanded:e,position:i,scale:c,toggle:r,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return d?s("calcite-action-group",{class:"action-group--end",label:l,layout:n,overlayPositioning:p,scale:c},s("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),d):null}render(){return s(a,{key:"e8df8bdd77a410f00dd26fe16cf17cb1cd94c2b8",onCalciteActionMenuOpen:this.actionMenuOpenHandler},s("div",{key:"eebbf1f3012dc62ec12e66ffe310716ec98816d4",class:"container"},s("slot",{key:"30f1f28d2dbf9e244e6b14571263973c3d369955",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-color-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function C(){"undefined"!=typeof customElements&&["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||y();break;case"calcite-action-group":customElements.get(e)||v();break;case"calcite-action-menu":customElements.get(e)||w();break;case"calcite-icon":customElements.get(e)||k();break;case"calcite-loader":customElements.get(e)||E();break;case"calcite-popover":customElements.get(e)||L()}}))}C();const T=S,A=C;export{T as CalciteActionPad,A as defineCustomElement};
