/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../TimeInterval.js";import{e as i}from"../core/lang.js";import{n as s}from"../chunks/compilerUtils.js";import{k as o}from"../core/Accessor.js";import{L as r}from"../chunks/Logger.js";import{watch as n,initial as a}from"../core/reactiveUtils.js";import{t as l,o as m}from"../chunks/timeUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{f as d,c as p}from"../chunks/date.js";import{a as h,s as v}from"../chunks/timeZoneUtils.js";import f from"./Slider.js";import y,{l as g}from"./Widget.js";import{g as b}from"../chunks/globalCss.js";import{l as k}from"../chunks/legacyIcon.js";import{a as j}from"../chunks/accessibleHandler.js";import{m as _}from"../chunks/messageBundle.js";import{v as x}from"../chunks/vmEvent.js";import{t as w}from"../chunks/jsxFactory.js";import{o as T}from"../chunks/widgetUtils.js";import{g as E}from"../chunks/themeUtils.js";import S from"./TimeSlider/TimeSliderViewModel.js";import"../core/Clonable.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../chunks/ensureType.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../core/accessorSupport/decorators/cast.js";import"./Slider/SliderViewModel.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../TimeExtent.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/Widgets.js";import"../webdoc/widgets/TimeSlider.js";const M="esri-time-slider",F={timeSlider:`${M}`,timeSliderOutOfBounds:`${M}--out-of-bounds`,timeSliderMode:`${M}__mode--`,timeSliderLayout:`${M}__layout--`,timeSliderRow:`${M}__row`,animation:`${M}__animation`,animationButton:`${M}__animation-button`,timeExtent:`${M}__time-extent`,timeExtentGroup:`${M}__time-extent-group`,timeExtentDate:`${M}__time-extent-date`,timeExtentTime:`${M}__time-extent-time`,timeExtentSeparator:`${M}__time-extent-separator`,playbackControls:`${M}__playback-controls`,min:`${M}__min`,minDate:`${M}__min-date`,minTime:`${M}__min-time`,slider:`${M}__slider`,sliderMajorTick:"majorTick",sliderMinorTick:"minorTick",max:`${M}__max`,maxDate:`${M}__max-date`,maxTime:`${M}__max-time`,previous:`${M}__previous`,previousButton:`${M}__previous-button`,next:`${M}__next`,nextButton:`${M}__next-button`,warning:`${M}__warning`,warningText:`${M}__warning-text`,hasActions:`${M}--has-actions`,actions:`${M}__actions`,actionsButton:`${M}__actions-button`},$=[{minor:{value:100,unit:"milliseconds"},major:{value:1,unit:"seconds"},format:{second:"numeric"}},{minor:{value:500,unit:"milliseconds"},major:{value:5,unit:"seconds"},format:{second:"numeric"}},{minor:{value:1,unit:"seconds"},major:{value:20,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:2,unit:"seconds"},major:{value:30,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:10,unit:"seconds"},major:{value:1,unit:"minutes"},format:{minute:"numeric"}},{minor:{value:15,unit:"seconds"},major:{value:5,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"minutes"},major:{value:20,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:5,unit:"minutes"},major:{value:2,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:15,unit:"minutes"},major:{value:6,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"hours"},major:{value:1,unit:"days"},format:{day:"numeric",month:"short"}},{minor:{value:6,unit:"hours"},major:{value:1,unit:"weeks"},format:{day:"numeric",month:"short"}},{minor:{value:1,unit:"days"},major:{value:1,unit:"months"},format:{month:"long"}},{minor:{value:2,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:3,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:4,unit:"days"},major:{value:3,unit:"months"},format:{month:"short",year:"numeric"}},{minor:{value:1,unit:"weeks"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"months"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:2,unit:"months"},major:{value:2,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"years"},major:{value:1,unit:"decades"},format:{year:"numeric"}},{minor:{value:2,unit:"years"},major:{value:5,unit:"decades"},format:{year:"numeric"}},{minor:{value:5,unit:"decades"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1,unit:"centuries"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:2,unit:"centuries"},major:{value:20,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:5,unit:"centuries"},major:{value:50,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:10,unit:"centuries"},major:{value:100,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:20,unit:"centuries"},major:{value:200,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:50,unit:"centuries"},major:{value:500,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:100,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:200,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:500,unit:"centuries"},major:{value:5e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1e3,unit:"centuries"},major:{value:1e4,unit:"centuries"},format:{era:"short",year:"numeric"}}];let C=class extends y{constructor(t,e){super(t,e),this._ignoreNextSliderUpdate=!1,this._slider=new f({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1}),this._tickFormat=null,this.disabled=!1,this.labelFormatFunction=null,this.messages=null,this.messagesCommon=null,this.tickConfigs=null,this.timeVisible=!1,this.viewModel=new S}initialize(){this.addHandles([n((()=>this._slider.values),(t=>{if(this._ignoreNextSliderUpdate)return void(this._ignoreNextSliderUpdate=!1);const e=this.viewModel.valuesToTimeExtent(t);null!=this.timeExtent?null!=e?this.timeExtent.equals(e)||(this.timeExtent=e):this.timeExtent=null:null!=e&&(this.timeExtent=e)})),n((()=>this.effectiveStops),(()=>this._updateSliderSteps()),a)])}loadDependencies(){return g({action:()=>import("../chunks/calcite-action.js"),"action-menu":()=>import("../chunks/calcite-action-menu.js")})}destroy(){this._slider.destroy(),this._tickFormat=null}get _dateFormat(){return this._getIntlOptions("short-date")}get _timeFormat(){return this._getIntlOptions("long-time")}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get effectiveStops(){return this.viewModel.effectiveStops}get fullTimeExtent(){return this.viewModel.fullTimeExtent}set fullTimeExtent(t){this.viewModel.fullTimeExtent=t}get icon(){return"clock"}set icon(t){this._overrideIfSome("icon",t)}get interactive(){return!(this.disabled||"disabled"===this.viewModel.state||this.timeZone===h)}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}set layout(t){["auto","compact","wide"].includes(t)||(t="auto"),this._set("layout",t)}get loop(){return this.viewModel.loop}set loop(t){this.viewModel.loop=t}get mode(){return this.viewModel.mode}set mode(t){this.viewModel.mode=t}get playRate(){return this.viewModel.playRate}set playRate(t){this.viewModel.playRate=t}get stops(){return this.viewModel.stops}set stops(t){this.viewModel.stops=t}get tickFormats(){const{timeZone:t}=this;return $.map((({minor:i,major:s,format:o})=>({minor:new e(i),major:new e(s),format:{...o,timeZone:t}})))}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(t){this.viewModel.timeExtent=t}get timeZone(){return this.viewModel.view?.timeZone??v}set timeZone(t){this._overrideIfSome("timeZone",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}static async getPropertiesFromWebMap(t,e){return o(r.getLogger("esri.widgets.TimeSlider"),"`TimeSlider.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0}),S.getPropertiesFromWebMap(t,e)}next(){return this.viewModel.next()}play(){return this.viewModel.play()}previous(){return this.viewModel.previous()}stop(){return this.viewModel.stop()}render(){const{_slider:t,actions:e,domNode:s,effectiveStops:o,fullTimeExtent:r,interactive:n,messages:a,messagesCommon:l,mode:m,tickConfigs:u,timeExtent:c,timeVisible:p,viewModel:{state:h,timeExtentValues:v}}=this;if(null!=r){const{start:e,end:i}=r;if(null!=e&&null!=i){const s=e.getTime(),o=i.getTime(),r=t.min!==s||t.max!==o;if(r&&(t.min=s,t.max=o),null!=u)t.tickConfigs!==u&&(t.tickConfigs=u);else{const e=(o-s)/(t.trackElement?.offsetWidth||400),i=this.tickFormats.find((t=>t.minor.toMilliseconds()>3*e))??this.tickFormats.at(-1),n=this._tickFormat!==i&&null!=i;if(n&&(this._tickFormat=i),r||n){const e={mode:"position",values:this._getTickPositions(i.minor),labelsVisible:!1,tickCreatedFunction:(t,e)=>{e?.classList.add(F.sliderMinorTick)}},s={mode:"position",values:this._getTickPositions(i.major),labelsVisible:!0,tickCreatedFunction:(t,e)=>{e?.classList.add(F.sliderMajorTick)},labelFormatFunction:t=>d(t,i.format)};t.tickConfigs=[e,s]}}}}const f=null==this.fullTimeExtent?.start||null==this.fullTimeExtent.end||null==this.timeExtent||this.timeExtent.isAllTime||this.timeExtent.isEmpty||null!=this.timeExtent.start&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||null!=this.timeExtent.end&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start);if(f)switch(this._ignoreNextSliderUpdate=!0,m){case"time-window":t.values=[t.min,t.max];break;case"instant":case"cumulative-from-end":t.values=[t.min];break;case"cumulative-from-start":t.values=[t.max]}else null!=v?i(t.values,v)||(t.values=v):t.values=null;t.disabled=!n;const y="ready"===h,g="playing"===h,j=f||!n||null==o||0===o.length,_="auto"===this.layout?s.clientWidth<858?"compact":"wide":this.layout,x=w("div",{class:F.animation},w("button",{"aria-disabled":j?"true":"false","aria-label":g?l.control.stop:l.control.play,bind:this,class:this.classes(b.widgetButton,F.animationButton,j&&b.buttonDisabled),disabled:j,onclick:this._playOrStopClick,title:g?l.control.stop:l.control.play,type:"button"},w("div",{class:this.classes((y||j)&&k.play,g&&k.pause)}))),S=null!=this.labelFormatFunction?w("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:F.timeExtentDate,"data-date":c?[c.start,c.end]:null,"data-layout":_,"data-type":"extent",key:"extent"}):null==c||null!=c&&c.isAllTime?[w("div",{class:this.classes(F.warning,k.noticeTriangle)}),w("div",{class:F.warningText,key:"warning-text"},a.noTimeExtent)]:c.isEmpty?[w("div",{class:this.classes(F.warning,k.noticeTriangle)}),w("div",{class:F.warningText,key:"warning-text"},a.emptyTimeExtent)]:[null!=c.start&&w("div",{class:F.timeExtentGroup,key:"start-date-group"},w("div",{class:F.timeExtentDate,key:"start-date"},this._formatDate(c.start)),p?w("div",{class:F.timeExtentTime,key:"start-time"},this._formatTime(c.start)):null),null!=c.start&&null!=c.end&&c.start.getTime()!==c.end.getTime()&&w("div",{class:F.timeExtentSeparator,key:"separator"},"–"),null!=c.end&&(null==c.start||c.start.getTime()!==c.end.getTime())&&w("div",{class:F.timeExtentGroup,key:"end-date-group"},w("div",{class:F.timeExtentDate,key:"end-date"},this._formatDate(c.end)),p?w("div",{class:F.timeExtentTime,key:"end-time"},this._formatTime(c.end)):null)],M=w("div",{class:this.classes(F.timeExtent,!n&&b.buttonDisabled)},[S]),$=null!=this.labelFormatFunction?w("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:F.minDate,"data-date":r?.start,"data-layout":_,"data-type":"min",key:"min-date"}):null!=r?.start&&[w("div",{class:F.minDate,key:"min-date"},this._formatDate(r.start)),p&&w("div",{class:F.minTime,key:"min-time"},this._formatTime(r.start))],C=w("div",{class:this.classes(F.min,!n&&b.buttonDisabled)},[$]),D=w("div",{class:F.slider},t.render()),U=null!=this.labelFormatFunction?w("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:F.maxDate,"data-date":r?.end,"data-layout":_,"data-type":"max",key:"max-date"}):null!=r?.end&&[w("div",{class:F.maxDate,key:"max-date"},this._formatDate(r.end)),p&&w("div",{class:F.maxTime,key:"max-time"},this._formatTime(r.end))],L=w("div",{class:this.classes(F.max,!n&&b.buttonDisabled)},[U]),B=w("div",{class:F.previous},w("button",{"aria-disabled":j?"true":"false","aria-label":l.pagination.previous,bind:this,class:this.classes(b.widgetButton,F.previousButton,(g||j)&&b.buttonDisabled),disabled:j,onclick:this._previousClick,title:l.pagination.previous,type:"button"},w("div",{class:k.reverse}))),O=w("div",{class:F.next},w("button",{"aria-disabled":j?"true":"false","aria-label":l.pagination.next,bind:this,class:this.classes(b.widgetButton,F.nextButton,(g||j)&&b.buttonDisabled),disabled:j,onclick:this._nextClick,title:l.pagination.next,type:"button"},w("div",{class:k.forward}))),W=e?.length>0,Z=W&&w("div",{class:F.actions,title:l.options},w("calcite-action-menu",{class:F.actionsButton,label:l.options},e.toArray().map((t=>w("calcite-action",{bind:this,icon:t.icon,id:t.id,onclick:()=>this.viewModel.triggerAction(t),text:t.title,textEnabled:!0,title:t.title})))));return w("div",{afterCreate:t=>{this.addHandles(T(t,(()=>this.scheduleRender())))},"aria-label":a.widgetLabel,class:this.classes(F.timeSlider,b.widget,`${F.timeSliderMode}${m}`,`${F.timeSliderLayout}${_}`,!n&&b.disabled,f&&F.timeSliderOutOfBounds,W&&F.hasActions,E())},"wide"===_&&w("div",{class:F.timeSliderRow},w("div",{class:F.playbackControls},[x,M,C,D,L,B,O]),Z),"compact"===_&&[w("div",{class:F.timeSliderRow,key:"time-slider-row-1"},[M,Z]),w("div",{class:F.timeSliderRow,key:"time-slider-row-2"},[D]),w("div",{class:F.timeSliderRow,key:"time-slider-row-3"},[C,B,x,O,L])])}updateWebDocument(t){this.viewModel?.updateWebDocument(t)}_createLabel(t){if(null==this.labelFormatFunction)return;const e=t.getAttribute("data-type"),i=t.getAttribute("data-layout"),s=t["data-date"];this.labelFormatFunction(s,e,t,i)}_formatDate(t){return d(t,this._dateFormat)}_formatTime(t){return d(t,this._timeFormat)}_getIntlOptions(t){const{timeZone:e}=this;return{...p(t),timeZone:e}}_getTickPositions(t){const{fullTimeExtent:e}=this;if(null==e?.start||null==e.end)return[];const{start:i,end:s}=e,o=[],{value:r,unit:n}=t;let a=l(i,n,this.timeZone);for(;a.getTime()<=s.getTime();)a.getTime()>=i.getTime()&&o.push(a.getTime()),a=m(a,r,n,this.timeZone);return o}_updateSliderSteps(){this._slider.steps=null!=this.effectiveStops&&this.effectiveStops.length>0?this.effectiveStops.map((t=>t.getTime())):null}_playOrStopClick(){switch(this.viewModel.state){case"ready":this.viewModel.play();break;case"playing":this.viewModel.stop();break;case"disabled":break;default:s(this.viewModel.state)}}_previousClick(){this.viewModel.previous()}_nextClick(){this.viewModel.next()}};t([u()],C.prototype,"_dateFormat",null),t([u()],C.prototype,"_timeFormat",null),t([u()],C.prototype,"actions",null),t([u()],C.prototype,"disabled",void 0),t([u()],C.prototype,"effectiveStops",null),t([u()],C.prototype,"fullTimeExtent",null),t([u()],C.prototype,"icon",null),t([u({readOnly:!0})],C.prototype,"interactive",null),t([u()],C.prototype,"label",null),t([u()],C.prototype,"labelFormatFunction",void 0),t([u({value:"auto"})],C.prototype,"layout",null),t([u()],C.prototype,"loop",null),t([u(),_("esri/widgets/TimeSlider/t9n/TimeSlider")],C.prototype,"messages",void 0),t([u(),_("esri/t9n/common")],C.prototype,"messagesCommon",void 0),t([u()],C.prototype,"mode",null),t([u()],C.prototype,"playRate",null),t([u()],C.prototype,"stops",null),t([u()],C.prototype,"tickConfigs",void 0),t([u()],C.prototype,"tickFormats",null),t([u()],C.prototype,"timeExtent",null),t([u({nonNullable:!0})],C.prototype,"timeVisible",void 0),t([u()],C.prototype,"timeZone",null),t([u()],C.prototype,"view",null),t([u({type:S}),x("trigger-action")],C.prototype,"viewModel",void 0),t([j()],C.prototype,"_playOrStopClick",null),t([j()],C.prototype,"_previousClick",null),t([j()],C.prototype,"_nextClick",null),C=t([c("esri.widgets.TimeSlider")],C);const D=C;export{D as default};
