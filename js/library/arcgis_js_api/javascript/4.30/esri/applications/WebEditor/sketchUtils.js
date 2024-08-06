// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/asyncUtils ../../core/events ../../core/handleUtils ../../core/promiseUtils ../../core/reactiveUtils ../../core/scheduling ../../core/screenUtils ../../views/interactive/sketch/SketchTooltipVisibleElements".split(" "),function(l,p,q,r,c,t,u,v,w){function x(a,{hideOnBlur:e=!0}){const b=c.createResolver();if(!e)return{promise:b.promise,handle:r.makeHandle()};const f=a.contentContainer;a=q.on(f,"focusout",({relatedTarget:g})=>{g instanceof HTMLElement&&f.contains(g)||b.resolve()});
return{promise:b.promise,handle:a}}function y(a){({activeComponent:a}=a);return a&&"tooltip"in a&&"activeTooltipInfo"in a&&"destroyed"in a?a:null}const k=new Map,z={area:!1,distance:!1,direction:!1,elevation:!1,orientation:!1,radius:!1,rotation:!1,scale:!1,size:!1,totalLength:!1,coordinates:!1,helpMessage:!1,header:!1};l.hideAllVisibleElements=function(a){a.tooltipOptions.visibleElements=new w(z)};l.showTooltipAndFocusField=async function(a,e,b={}){const f=k.get(a);f&&(f.abort(),await f.promise);
const g=p.createTask(async function(h){const m=y(a);if("coordinates"===e)e="x",a.tooltipOptions.xyMode="coordinates";else if("direction"===e||"distance"===e)a.tooltipOptions.xyMode="direction-distance";await u.waitAnimationFrame();if(!c.isAborted(b)&&!c.isAborted(h)){var d=m?.tooltip;if(d&&m.activeTooltipInfo?.editableFields?.find(A=>A.name===e)){var {handle:B,promise:C}=x(d,b),n=c.createResolver(),D=c.onAbort(b.signal,n.resolve),E=c.onAbort(h,n.resolve),F=d.position;try{a.tooltipOptions.forceEnabled=
!0,b.position&&(d.position=v.createScreenPoint(b.position[0],b.position[1])),await d.enterInputMode(e),c.isAborted(b)||c.isAborted(h)||(b.onOpen?.(),await Promise.race([t.whenOnce(()=>m.destroyed||"feedback"===d.content?.mode,b),C,n.promise]))}finally{D?.remove(),E?.remove(),B.remove(),h=d.contentContainer.contains(document.activeElement),a.tooltipOptions.enabled?await d.exitInputMode({focusOnView:h}):h&&a.view?.focus(),b.onClose?.(),d.position=F,a.tooltipOptions.forceEnabled=!1}}}});k.set(a,g);return g.promise.catch(c.ignoreAbortErrors).finally(()=>
{k.get(a)===g&&k.delete(a)})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});