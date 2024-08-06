/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{i as e,q as t,a as n}from"./dom.js";import{c as l}from"./component.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const s="calciteInternalLabelClick",a="calciteInternalLabelConnected",o="calciteInternalLabelDisconnected",i="calcite-label",r=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,m=new Set,f=e=>{const{id:l}=e,s=l&&t(e,{selector:`${i}[for="${l}"]`});if(s)return s;const a=n(e,i);return!a||function(e,t){let n;const l="custom-element-ancestor-check",s=l=>{l.stopImmediatePropagation();const s=l.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};return e.addEventListener(l,s,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,s),n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function b(e){if(!e)return;const t=f(e.el);if(c.has(t)&&t===e.labelEl||!t&&m.has(e))return;const n=L.bind(e);if(t){e.labelEl=t;const l=r.get(t)||[];l.push(e),r.set(t,l.sort(h)),c.has(e.labelEl)||(c.set(e.labelEl,g),e.labelEl.addEventListener(s,g)),m.delete(e),document.removeEventListener(a,d.get(e)),u.set(e,n),document.addEventListener(o,n)}else m.has(e)||(n(),document.removeEventListener(o,u.get(e)))}function E(e){if(!e)return;if(m.delete(e),document.removeEventListener(a,d.get(e)),document.removeEventListener(o,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,c.get(e.labelEl)),c.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(h)),e.labelEl=null}function h(t,n){return e(t.el,n.el)?-1:1}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function g(e){const t=e.detail.sourceEvent.target,n=r.get(this),l=n.find((e=>e.el===t));if(n.includes(l))return;const s=n[0];s.disabled||s.onLabelClick(e)}function p(){m.has(this)&&b(this)}function L(){m.add(this);const e=d.get(this)||p.bind(this);d.set(this,e),document.addEventListener(a,e)}async function k(e){if(await l(e),r.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of m)if(e.el===t){b(e);break}}))}export{k as a,o as b,b as c,E as d,v as g,a as l};
