// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../support/fieldUtils ../support/sceneLayerCacheUtils ../support/TimeInfo".split(" "),function(m,b,n,v,w,d,C,D,E,p,q,x,r){let f=class extends w.JSONSupport{constructor(){super(...arguments);this.startTimeField=this.endTimeField=null}};b.__decorate([d.property({type:String})],
f.prototype,"endTimeField",void 0);b.__decorate([d.property({type:String})],f.prototype,"startTimeField",void 0);f=b.__decorate([p.subclass("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],f);m.TemporalSceneLayer=c=>{c=class extends c{constructor(){super(...arguments);this.serviceTimeInfo=null}get timeInfo(){var a=this.associatedLayer?.timeInfo;if(null==a)return null;a=a.clone();q.fixTimeInfoFields(a,this.fieldsIndex);return a}set timeInfo(a){q.fixTimeInfoFields(a,this.fieldsIndex);
this._override("timeInfo",a)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(a){this._override("timeExtent",a)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(a){this._override("timeOffset",a)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(a){this._override("datesInUnknownTimezone",a)}async loadTimeInfoFromService(a){var {serviceTimeInfo:e}=this;if(null!=e){var {startTimeField:g,endTimeField:k}=
e;if((null!=g||null!=k)&&!x.cacheIsOutOfSync({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp})){e=async h=>{let l=null;try{l=(await this.fetchStatistics?.(h,a))?.stats}catch{}if(null==l)return null;const {minTimeStr:y,min:z,maxTimeStr:A,max:B}=l;h=h===g?y??z:A??B;return null!=h?new Date(h):null};var [t,u]=await Promise.all([e(g),e(k)]);null!=g&&null==t||null!=k&&null==u||(e=new n({start:t,end:u}),this.setAtOrigin("timeInfo",new r({endField:k,startField:g,fullTimeExtent:e}),
"service"))}}}};b.__decorate([d.property({type:r,json:{read:!1,write:!1}})],c.prototype,"timeInfo",null);b.__decorate([d.property({type:n,json:{read:!1,write:!1}})],c.prototype,"timeExtent",null);b.__decorate([d.property({type:v,json:{read:!1,write:!1}})],c.prototype,"timeOffset",null);b.__decorate([d.property({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],c.prototype,"datesInUnknownTimezone",null);b.__decorate([d.property({type:f,readOnly:!0,json:{read:{source:"timeInfo"}}})],c.prototype,
"serviceTimeInfo",void 0);return c=b.__decorate([p.subclass("esri.layers.mixins.TemporalSceneLayer")],c)};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});