/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as o}from"../widgets/Widget.js";import{c,d as s,u as n,I as a}from"./interactive.js";import{t as r}from"./dom.js";import{c as l,a as d,s as p}from"./loadable.js";import{d as h}from"./icon.js";import{d as m}from"./link.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const v="container",b="content-container",u="interactive",g="large-visual-deprecated",f="row",x="selected",j=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTileKeyEvent=i(this,"calciteInternalTileKeyEvent",6),this.calciteTileSelect=i(this,"calciteTileSelect",7),this.clickHandler=()=>{this.interactive&&(this.setFocus(),this.handleSelectEvent())},this.handleSelectEvent=()=>{this.disabled||!this.interactive||"single-persist"===this.selectionMode&&!0===this.selected||this.calciteTileSelect.emit()},this.setContainerEl=e=>{this.containerEl=e},this.active=!1,this.alignment="start",this.description=void 0,this.disabled=!1,this.embed=!1,this.heading=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.interactive=!1,this.label=void 0,this.layout="horizontal",this.scale="m",this.selected=!1,this.selectionAppearance="icon",this.selectionMode="none"}async setFocus(){await l(this),!this.disabled&&this.interactive&&this.containerEl?.focus()}connectedCallback(){c(this)}componentDidLoad(){d(this)}disconnectedCallback(){s(this)}componentDidRender(){n(this)}async componentWillLoad(){p(this)}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleSelectEvent(),e.preventDefault();break;case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"Home":case"End":this.calciteInternalTileKeyEvent.emit(e),e.preventDefault()}}renderSelectionIcon(){const{selected:e,selectionAppearance:t,selectionMode:i}=this;if("icon"===t&&"none"!==i)return o("calcite-icon",{class:"selection-icon",icon:e?"multiple"===i?"check-square-f":"circle-f":"multiple"===i?"square":"circle",scale:"s"})}renderTile(){const{description:e,disabled:t,heading:i,icon:c,iconFlipRtl:s,interactive:n,selectionMode:a}=this,l=i&&c&&!Boolean(e),d=Boolean(this.href)||!n,p="multiple"===a&&n?"checkbox":"none"!==a&&n?"radio":n?"button":void 0;return o("div",{"aria-checked":"none"!==a&&n?r(this.selected):void 0,"aria-disabled":d?r(t):void 0,"aria-label":p&&this.label,class:{[v]:!0,[u]:n,[g]:l,[f]:!0,[x]:this.selected},onClick:this.clickHandler,role:p,tabIndex:d?void 0:0,ref:this.setContainerEl},this.renderSelectionIcon(),o("div",{class:"column"},o("slot",{name:"content-top"}),c&&o("calcite-icon",{flipRtl:s,icon:c,scale:"l"}),o("div",{class:{[b]:!0,[f]:!0}},o("slot",{name:"content-start"}),o("div",{class:"text-content"},i&&o("div",{class:"heading"},i),e&&o("div",{class:"description"},e)),o("slot",{name:"content-end"})),o("slot",{name:"content-bottom"})))}render(){const{disabled:e}=this;return o(a,{key:"0498410835d5fc00d19eb6787aa89862ce784c46",disabled:e},this.href?o("calcite-link",{disabled:e,href:this.href},this.renderTile()):this.renderTile())}get el(){return this}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-tile-background-color:var(--calcite-color-foreground-1);--calcite-tile-border-color:var(--calcite-color-border-2);--calcite-tile-description-text-color:var(--calcite-color-text-3);--calcite-tile-heading-text-color:var(--calcite-color-text-2);--calcite-ui-icon-color:var(--calcite-color-text-3);box-sizing:border-box;display:inline-block}.container{background-color:var(--calcite-tile-background-color);block-size:var(--calcite-container-size-content-fluid);box-sizing:border-box;inline-size:var(--calcite-container-size-content-fluid);outline:var(--calcite-border-width-sm, 1px) solid var(--calcite-tile-border-color);-webkit-user-select:none;user-select:none}.container.interactive{cursor:pointer}.container.interactive:hover,.container.interactive:focus,.container.interactive.selected{outline-color:var(--calcite-color-brand);position:relative}.container.interactive:hover .selection-icon,.container.interactive:focus .selection-icon,.container.interactive.selected .selection-icon{--calcite-ui-icon-color:var(--calcite-color-brand)}.container.interactive.selected{z-index:var(--calcite-z-index)}.container.interactive:focus{box-shadow:inset 0px 0px 0px 1px var(--calcite-color-brand);z-index:var(--calcite-z-index-sticky)}.column,.row{align-items:flex-start;display:flex}.column{flex-direction:column}.content-container{inline-size:100%;outline-color:transparent;padding:0}.text-content{display:flex;flex-direction:column}.heading{color:var(--calcite-tile-heading-text-color);font-weight:var(--calcite-font-weight-medium);line-height:1.20313rem;overflow-wrap:break-word}.large-visual-deprecated{align-items:center;justify-content:center;min-block-size:12rem;text-align:center}.large-visual-deprecated calcite-icon{align-self:center;block-size:64px;inline-size:64px}.large-visual-deprecated .content-container{justify-content:center}.description{color:var(--calcite-tile-description-text-color);font-weight:var(--calcite-font-weight-regular);overflow-wrap:break-word}:host([alignment=center]) .row,:host([alignment=center]) .column{align-items:center;text-align:center}:host([alignment=center]) slot[name=content-start]::slotted(*),:host([alignment=center]) slot[name=content-end]::slotted(*){align-self:center}:host([scale=s]){max-inline-size:400px;min-inline-size:100px}:host([scale=s]) .container{padding:var(--calcite-spacing-sm)}:host([scale=s]) .column,:host([scale=s]) .row{gap:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=s]) .description{font-size:var(--calcite-font-size--3);line-height:0.85938rem}:host([scale=m]){max-inline-size:460px;min-inline-size:140px}:host([scale=m]) .container{padding:var(--calcite-spacing-md)}:host([scale=m]) .column,:host([scale=m]) .row{gap:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([scale=m]) .description{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=l]){max-inline-size:520px;min-inline-size:160px}:host([scale=l]) .container{padding:var(--calcite-spacing-xl)}:host([scale=l]) .column,:host([scale=l]) .row{gap:var(--calcite-spacing-xl)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-0);line-height:1.375rem}:host([scale=l]) .description{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([selection-appearance=border][layout=horizontal]) .container.selected:focus::before,:host([selection-appearance=border][layout=vertical]) .container.selected:focus::before{block-size:100%;box-shadow:inset 0px 0px 0px 1px var(--calcite-color-brand);content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}:host([selection-appearance=border][layout=horizontal]) .container.selected{box-shadow:inset 0px -4px 0px 0px var(--calcite-color-brand)}:host([selection-appearance=border][layout=vertical]) .container.selected{box-shadow:inset 4px 0px 0px 0px var(--calcite-color-brand)}:host([href]:focus:not([disabled])),:host([href]:hover:not([disabled])){--calcite-tile-border-color:var(--calcite-color-text-link);--calcite-tile-heading-text-color:var(--calcite-color-text-link);--calcite-ui-icon-color:var(--calcite-color-text-link)}:host([href]:focus:not([disabled])) .container,:host([href]:hover:not([disabled])) .container{position:relative;z-index:var(--calcite-z-index)}:host([href]:active:not([disabled])) .container{box-shadow:0 0 0 3px var(--calcite-tile-border-color)}:host([embed]) .container{box-shadow:none;padding:0}:host([selection-mode=none]) .container{outline-color:var(--calcite-tile-border-color)}:host([selection-mode=none]) .container:focus{outline-color:var(--calcite-color-brand);position:relative}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host(:hover:not([disabled])),:host([active]:not([disabled])){--calcite-tile-description-text-color:var(--calcite-color-text-2);--calcite-tile-heading-text-color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-tile",{active:[516],alignment:[513],description:[513],disabled:[516],embed:[516],heading:[513],href:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],interactive:[4],label:[1],layout:[513],scale:[513],selected:[516],selectionAppearance:[513,"selection-appearance"],selectionMode:[513,"selection-mode"],setFocus:[64]},[[0,"keydown","keyDownHandler"]]]);function k(){"undefined"!=typeof customElements&&["calcite-tile","calcite-icon","calcite-link"].forEach((e=>{switch(e){case"calcite-tile":customElements.get(e)||customElements.define(e,j);break;case"calcite-icon":customElements.get(e)||h();break;case"calcite-link":customElements.get(e)||m()}}))}k();const w=j,z=k;export{w as CalciteTile,z as defineCustomElement};
