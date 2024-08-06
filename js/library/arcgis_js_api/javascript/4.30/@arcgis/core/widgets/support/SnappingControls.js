/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{i as t}from"../../core/lang.js";import{d as s}from"../../chunks/maybe.js";import i,{g as l}from"../../core/Accessor.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import r,{l as a}from"../Widget.js";import{g as c}from"../../chunks/globalCss.js";import"../../chunks/widgetUtils.js";import{t as p,a as d}from"../../chunks/jsxFactory.js";import{m as h}from"../../chunks/messageBundle.js";import u,{i as g}from"./SnappingControls/SnappingControlsViewModel.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Evented.js";import"../../core/Promise.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../../views/interactive/snapping/SnappingOptions.js";import"../../chunks/Settings2.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/layerListUtils.js";import"../LayerList/LayerListViewModel.js";import"../LayerList/ListItem.js";import"../../core/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"../LayerList/ListItemPanel.js";import"./widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";let m=class extends i{constructor(e){super(e),this.enabledToggle=!0,this.featureEnabledToggle=!0,this.header=!1,this.layerList=!0,this.layerListToggleLayersButton=!0,this.selfEnabledToggle=!0}};e([n({type:Boolean,nonNullable:!0})],m.prototype,"enabledToggle",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"featureEnabledToggle",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"header",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"layerList",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"layerListToggleLayersButton",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"selfEnabledToggle",void 0),m=e([o("esri.widgets.support.SnappingControls.VisibleElements")],m);const b=m,y=()=>Promise.all([a({icon:()=>import("../../chunks/calcite-icon.js"),label:()=>import("../../chunks/calcite-label.js"),switch:()=>import("../../chunks/calcite-switch.js"),tooltip:()=>import("../../chunks/calcite-tooltip.js")})]),_="esri-labeled-switch",k={label:`${_}__label`,labelContent:`${_}__label-content`,icon:`${_}__icon`,tooltip:`${_}__tooltip`};function j({checked:e,disabled:t,hint:s,key:i,label:l,onChange:n}){return p("calcite-label",{class:k.label,disabled:t,key:i,layout:"inline-space-between",scale:"s"},p("div",{class:k.labelContent,key:"label-content"},s?p(d,null,p("div",null,l),p("calcite-icon",{class:k.icon,icon:"information",id:i,scale:"s"}),p("calcite-tooltip",{class:k.tooltip,referenceElement:i},s)):l),p("calcite-switch",{checked:e,disabled:t,scale:"s",onCalciteSwitchChange:e=>n(e.target.checked)}))}const L="esri-snapping-controls",w={base:L,container:`${L}__container`,item:`${L}__item`,toggleBlock:`${L}__toggle-block`,layerListBlock:`${L}__layer-list-block`,layerList:`${L}__layer-list`,layerListFilter:`${L}__layer-list__filter`,layerListButton:`${L}__layer-list__button`,layerListItem:`${L}__layer-list__item`,layerListGroup:`${L}__layer-list__group`,nestedContainer:`${L}__nested-container`};let v=class extends r{constructor(e,t){super(e,t),this._defaultViewModel=null,this._layerListFilter=null,this.layerListOpen=!0,this.messages=null,this.visibleElements=new b,this._enableSnappingSwitchChange=e=>{this.snappingOptions.enabled=e},this._featureEnabledSwitchChange=e=>{this.snappingOptions.featureEnabled=e},this._selfEnabledSwitchChange=e=>{this.snappingOptions.selfEnabled=e},this._onToggleLayersButtonClick=e=>{this.viewModel.toggleSnappingForAllLayers(!this.viewModel.allLayersEnabled),requestAnimationFrame((()=>e.target.setFocus()))};const{snappingOptions:s,view:i,viewModel:l}=e;this.viewModel=l??(this._defaultViewModel=new u({snappingOptions:s,view:i}))}normalizeCtorArgs(e){const{snappingOptions:t,view:s,viewModel:i,...l}=e;return l}destroy(){this.viewModel!==this._defaultViewModel&&(this._defaultViewModel=s(this._defaultViewModel))}loadDependencies(){return Promise.all([a({block:()=>import("../../chunks/calcite-block.js"),button:()=>import("../../chunks/calcite-button.js"),input:()=>import("../../chunks/calcite-input.js"),list:()=>import("../../chunks/calcite-list.js"),"list-item":()=>import("../../chunks/calcite-list-item.js"),checkbox:()=>import("../../chunks/calcite-checkbox.js")}),y()])}get icon(){return"snap-to-point"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}set viewModel(e){e!==this._get("viewModel")&&(null!=this._defaultViewModel&&this._defaultViewModel===e||(this._defaultViewModel=s(this._defaultViewModel)),this._set("viewModel",e))}render(){const{label:e}=this;return p("div",{"aria-label":e,class:this.classes(w.base,c.widget)},p("div",{class:w.container},this._renderContent()))}_renderContent(){return[this._renderToggles(),this._renderLayerList()]}_renderToggles(){const{visibleElements:e}=this,s=[e.selfEnabledToggle?this._renderSelfEnabledToggle():null,e.featureEnabledToggle?this._renderFeatureEnabledToggle():null].filter(t),i=[e.enabledToggle?this._renderEnabledToggle():null,s.length>0?p("div",{class:w.nestedContainer},s):null].filter(t);return 0===i.length?null:p("calcite-block",{class:w.toggleBlock,heading:e.header?this.label:"",key:"toggle-block",open:!0},i)}_renderEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t;return p(j,{checked:s.enabled,disabled:this._enabledToggleDisabled,key:`${this.id}__enabled-toggle`,label:e.enableSnapping,onChange:this._enableSnappingSwitchChange})}_renderSelfEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t,i=s.enabled&&s.selfEnabled;return p(j,{checked:i,disabled:this._secondaryElementsDisabled,key:`${this.id}__self-enabled-toggle`,label:e.geometryGuides,onChange:this._selfEnabledSwitchChange})}_renderFeatureEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t,i=s.enabled&&s.featureEnabled;return p(j,{checked:i,disabled:this._secondaryElementsDisabled,key:`${this.id}__feature-enabled-toggle`,label:e.featureToFeature,onChange:this._featureEnabledSwitchChange})}_renderLayerList(){if(!this.visibleElements.layerList)return null;const{messages:e,viewModel:t}=this,s=t.layerListViewModel.operationalItems.length>9?p("calcite-input",{class:w.layerListFilter,clearable:!0,placeholder:e?.searchLayers,onCalciteInputInput:({target:{value:e}})=>{this._layerListFilter=""===e?null:new RegExp(e,"i")}}):null,i=this._secondaryElementsDisabled,l=this.layerListOpen&&!i;return p("calcite-block",{class:w.layerListBlock,collapsible:!0,disabled:this._secondaryElementsDisabled,heading:e.snappingLayers,key:"list-block",open:l,onCalciteBlockToggle:e=>this.layerListOpen=e.target.open},s,this._renderToggleLayersButton(),p("calcite-list",{class:w.layerList,selectionMode:"none"},this._renderLayerListItemCollection(t.layerListViewModel.operationalItems)))}_renderLayerListItemCollection(e){const s=this._layerListFilter;return e.map((e=>{switch(s?g(e,s):null){case"children":{const t=e.children.filter((e=>!1!==g(e,s)));return this._renderLayerListItemGroup(e,t)}case"self":case null:return this._renderLayerListItemOrGroup(e);case!1:return"self"===g(e.parent,s)?this._renderLayerListItemOrGroup(e):null}})).toArray().filter(t)}_renderToggleLayersButton(){if(!this.visibleElements.layerListToggleLayersButton)return null;const{viewModel:{allLayersEnabled:e},messages:t}=this,s=e?t.disableAllLayers:t.enableAllLayers;return p("calcite-button",{appearance:"transparent",class:w.layerListButton,label:s,name:"layer-toggle",onclick:this._onToggleLayersButtonClick},s)}_renderLayerListItemOrGroup(e){if(e.children.length)return this._renderLayerListItemGroup(e);const{messages:{untitledLayer:t}}=this,s=e.title||t,i=()=>{this.viewModel.toggleSnappingForLayers([e.layer.id],"enabled"!==e.enabled)};return p("calcite-list-item",{class:w.layerListItem,key:`${this.id}-list-item-${e.uid}`,label:s,onCalciteListItemSelect:e=>{e.stopPropagation(),i()}},p("calcite-checkbox",{checked:"enabled"===e.enabled,slot:"actions-start",onCalciteCheckboxChange:i}))}_renderLayerListItemGroup(e,t){const{children:s,title:i}=e,n=i||this.messages.untitledLayer,o=i&&""!==i?i:l(),r=t??s,a=()=>{this.viewModel.toggleSnappingForLayers(e.childLayerIds,"enabled"!==e.enabled)};return p("calcite-list-item",{class:w.layerListGroup,key:o,label:n,open:!!t?.length,onCalciteListItemSelect:e=>{e.stopPropagation(),a()}},p("calcite-checkbox",{checked:"enabled"===e.enabled,indeterminate:"indeterminate"===e.enabled,slot:"actions-start",onCalciteCheckboxChange:a}),p("calcite-list",null,this._renderLayerListItemCollection(r)))}get _enabledToggleDisabled(){const e=this.snappingOptions;return e.enabledToggled||e.forceDisabled}get _secondaryElementsDisabled(){return this._enabledToggleDisabled||!this.snappingOptions.enabled}};e([n()],v.prototype,"_defaultViewModel",void 0),e([n()],v.prototype,"_layerListFilter",void 0),e([n()],v.prototype,"label",null),e([n({type:Boolean,nonNullable:!0})],v.prototype,"layerListOpen",void 0),e([n(),h("esri/widgets/support/SnappingControls/t9n/SnappingControls")],v.prototype,"messages",void 0),e([n()],v.prototype,"snappingOptions",null),e([n()],v.prototype,"view",null),e([n()],v.prototype,"viewModel",null),e([n({type:b,nonNullable:!0})],v.prototype,"visibleElements",void 0),e([n()],v.prototype,"_enabledToggleDisabled",null),e([n()],v.prototype,"_secondaryElementsDisabled",null),v=e([o("esri.widgets.support.SnappingControls")],v);const f=v;export{j as L,b as S,f as default,y as l};
