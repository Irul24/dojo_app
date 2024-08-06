// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./observers ./loadable ./Validation ./icon ./input-message".split(" "),function(c,b,g,d,h,k,l){function e(){"undefined"!==typeof customElements&&["calcite-radio-button-group","calcite-icon","calcite-input-message"].forEach(a=>{switch(a){case "calcite-radio-button-group":customElements.get(a)||customElements.define(a,f);break;case "calcite-icon":customElements.get(a)||k.defineCustomElement();break;case "calcite-input-message":customElements.get(a)||l.defineCustomElement()}})}
const f=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteRadioButtonGroupChange=b.createEvent(this,"calciteRadioButtonGroupChange",6);this.mutationObserver=g.createObserver("mutation",()=>this.passPropsToRadioButtons());this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button"));this.selectedItem=Array.from(this.radioButtons).find(a=>a.checked)||null;0<this.radioButtons.length&&
this.radioButtons.forEach(a=>{a.disabled=this.disabled||a.disabled;a.hidden=this.el.hidden;a.name=this.name;a.required=this.required;a.scale=this.scale})};this.disabled=!1;this.layout="horizontal";this.name=void 0;this.required=!1;this.selectedItem=null;this.scale="m";this.status="idle";this.validationIcon=this.validationMessage=void 0;this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons();
this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){d.setUpLoadableComponent(this)}componentDidLoad(){d.setComponentLoaded(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(a=>!a.disabled)??null}async setFocus(){await d.componentFocusable(this);if(this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(0<this.radioButtons.length)return this.getFocusableRadioButton()?.setFocus()}radioButtonChangeHandler(a){this.selectedItem=
a.target;this.calciteRadioButtonGroupChange.emit()}render(){return b.h(b.Host,{key:"2fb0413488832f3bd449c5bb41d31e088c82ab11",role:"radiogroup"},b.h("div",{key:"92b23646b20efa340d8368455bc2c2e2c3dce0f5",class:"item-wrapper"},b.h("slot",{key:"19f6211227d8d4fb003a1535a1948b7da2b4810e"})),this.validationMessage&&"invalid"===this.status?b.h(h.Validation,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],
disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return":host{display:flex;flex-direction:column}:host\x3e.item-wrapper{display:flex;max-inline-size:100vw}:host([layout\x3dhorizontal])\x3e.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout\x3dhorizontal][scale\x3ds])\x3e.item-wrapper{column-gap:1rem}:host([layout\x3dhorizontal][scale\x3dm])\x3e.item-wrapper{column-gap:1.25rem}:host([layout\x3dhorizontal][scale\x3dl])\x3e.item-wrapper{column-gap:1.5rem}:host([layout\x3dvertical])\x3e.item-wrapper{flex-direction:column}:host([scale\x3ds]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale\x3dm]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale\x3dl]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale\x3dm]) .validation-container,:host([scale\x3dl]) .validation-container{padding-block-start:0.5rem}:host([scale\x3ds]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-radio-button-group",{disabled:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],status:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]],{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}]);e();c.CalciteRadioButtonGroup=f;c.defineCustomElement=e;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});