/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{o as r}from"../../../core/lang.js";import o from"../../../core/Collection.js";import{L as s}from"../../../chunks/Logger.js";import{property as i}from"../../../core/accessorSupport/decorators/property.js";import{subclass as n}from"../../../core/accessorSupport/decorators/subclass.js";import a from"./FeatureSnappingLayerSource.js";import{d as c}from"../../../chunks/Settings2.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../core/Evented.js";import"../../../chunks/ensureType.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../core/JSONSupport.js";let u=class extends t{constructor(e){super(e),this.enabled=!1,this.enabledToggled=!1,this.forceDisabled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.attributeRulesEnabled=!1,this.featureSources=new o,this.distance=c.distance,this.touchSensitivityMultiplier=c.touchSensitivityMultiplier}get effectiveEnabled(){return!this.forceDisabled&&(this.enabledToggled?!this.enabled:this.enabled)}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}get _effectiveFeatureSources(){const e=this.featureSources;e.some(p)&&s.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");const t=e.filter(f),i=this._get("_effectiveFeatureSources")?.filter(p)??new o;for(const e of t){const t=i.find((t=>t.layer===e.layer.parent));if(t)t.sublayerSources.includes(e)||t.sublayerSources.add(e);else if(e.layer.parent){const t=new a({layer:e.layer.parent});t.sublayerSources.add(e),i.add(t)}}for(const e of i){const r=e.sublayerSources.filter((e=>!t.includes(e)));e.sublayerSources.removeMany(r)}i.removeMany(i.filter((e=>0===e.sublayerSources.length)));const n=e.filter(d),c=this._get("_effectiveFeatureSources")??new o,{added:u,removed:l}=r(c.toArray(),[...n,...i]);return c.removeMany(l),c.addMany(u),c}};e([i()],u.prototype,"enabled",void 0),e([i()],u.prototype,"enabledToggled",void 0),e([i()],u.prototype,"forceDisabled",void 0),e([i()],u.prototype,"selfEnabled",void 0),e([i()],u.prototype,"featureEnabled",void 0),e([i()],u.prototype,"attributeRulesEnabled",void 0),e([i({type:o.ofType(a)})],u.prototype,"featureSources",void 0),e([i()],u.prototype,"distance",void 0),e([i()],u.prototype,"touchSensitivityMultiplier",void 0),e([i({readOnly:!0})],u.prototype,"effectiveEnabled",null),e([i({readOnly:!0})],u.prototype,"effectiveSelfEnabled",null),e([i({readOnly:!0})],u.prototype,"effectiveFeatureEnabled",null),e([i({readOnly:!0})],u.prototype,"_effectiveFeatureSources",null),u=e([n("esri.views.interactive.snapping.SnappingOptions")],u);const l=u;function p(e){return"subtype-group"===e.layer.type}function d(e){return"subtype-group"!==e.layer.type}function f(e){return"subtype-sublayer"===e.layer.type}export{l as default};
