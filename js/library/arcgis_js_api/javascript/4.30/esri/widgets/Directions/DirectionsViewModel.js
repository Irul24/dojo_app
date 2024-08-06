// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/Error ../../core/Evented ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../intl/date ../../intl/locale ../../rest/networkService ../../rest/support/RouteParameters ../../rest/support/Stop ../../rest/support/TravelMode ../../time/timeZoneUtils ./support/directionsUtils ../support/dateUtils ../support/GoTo ../../chunks/datetime".split(" "),
function(e,C,l,d,z,v,f,I,J,K,D,n,E,F,A,y,G,w,q,x,H,k){var h;(function(a){a[a.Active=0]="Active";a[a.Complete=1]="Complete";a[a.Failed=2]="Failed";a[a.Idle=3]="Idle";a[a.Suspended=4]="Suspended"})(h||={});d=class extends H.GoToMixin(d.EventedAccessor){constructor(a){super(a);this._routeController=this._loadController=this._loadPromise=this._highlight=null;this._serviceDescriptionStatus=h.Idle;this.apiKey=void 0;this.departureIsoTime=this.departureIsoDate=this.defaultTravelMode=null;this.departureOption=
q.DepartureTimeOption.NOW;this.departureTime="now";this.layer=this.lastRoute=this.lastError=null;this.maxStops=50;this.routeParameters=new A({directionsLengthUnits:"kilometers",findBestSequence:!1,returnZ:!0,startTime:null,startTimeIsUTC:!0,useTimeWindows:!1});this.view=this.serviceDescription=null}initialize(){this.addHandles([v.on(()=>this.layer?.stops,"change",()=>{this.clearResults()}),v.watch(()=>this.layer,b=>{if(null!=b){for(;2>b.stops.length;)b.stops.add(new y);this._set("defaultTravelMode",
null);this.addHandles(v.when(()=>null!=this.serviceDescription?b.routeInfo?.analysisSettings?.travelMode:null,g=>{this.defaultTravelMode=this._resolveDefaultTravelMode(g)},{once:!0}))}},v.syncAndInitial)]);const a=n.resolveTimeZone(this.view?.timeZone??w.system),c=k.DateTime.fromMillis(Date.now());this.departureIsoDate=c.toFormat(x.defaultDatePattern,x.getDefaultLocaleOptions(a));this.departureIsoTime=c.toFormat(x.defaultTimePattern,x.getDefaultLocaleOptions(a))}get _directionsLanguage(){if(null!=
this.serviceDescription){var a=this.serviceDescription.directionsSupportedLanguages;if(a){var c=(this.routeParameters.directionsLanguage??E.getLocale()).slice(0,2);return a.find(b=>b.toLowerCase().slice(0,2)===c)}}}get formattedEta(){var a=this.layer?.routeInfo?.endTime,c=this.layer?.routeInfo?.endTimeOffset;if(this.departureOption===q.DepartureTimeOption.UNSPECIFIED||!a||!c)return null;const b=k.DateTime.fromJSDate(a,{zone:k.FixedOffsetZone.instance(c)});a=k.DateTime.fromJSDate(a,{zone:k.IANAZone.create(n.resolveTimeZone(this.view?.timeZone??
w.system))});var g=k.DateTime.fromJSDate(new Date,{zone:k.IANAZone.create(n.resolveTimeZone(this.view?.timeZone??w.system))});c=a.offset===c?void 0:w.shortTimeZoneName;a=g.year===a.year&&g.month===a.month&&g.day===a.day?void 0:n.convertDateFormatToIntlOptions("short-date");g=n.convertDateFormatToIntlOptions("short-time");return n.formatTimestamp(b.toISO(),{...a,...g,timeZoneName:c})}get impedanceAttribute(){return this.getCostAttribute(this.routeParameters.travelMode?.impedanceAttributeName??this.routeParameters.impedanceAttribute??
this.serviceDescription?.impedance??null)}get selectedTravelMode(){return null==this.serviceDescription?null:this.defaultTravelMode??this.serviceDescription.defaultTravelMode??this.serviceDescription.supportedTravelModes?.[0]??null}set selectedTravelMode(a){this._override("selectedTravelMode",a)}get state(){if(null!=this._routeController)return"routing";if(null!=this.lastError)return"error";switch(this._serviceDescriptionStatus){case h.Suspended:return"unauthenticated";case h.Idle:return"disabled";
case h.Active:return"initializing";case h.Failed:return"error";default:return"ready"}}get timeAttribute(){return this.getCostAttribute(this.routeParameters.travelMode?.timeAttributeName??this.routeParameters.directionsTimeAttribute??this.serviceDescription?.directionsTimeAttribute??null)}get travelModes(){const a=this.serviceDescription?.supportedTravelModes?.slice()??[];null==this.defaultTravelMode||a.includes(this.defaultTravelMode)||a.unshift(this.defaultTravelMode);return a}async load(){if(null!=
this._loadPromise)return this._loadPromise;this._loadPromise=this._load();await this._loadPromise;this._loadPromise=null}async highlight(a){this.clearHighlights();this.view&&this.layer&&(this._highlight=(await this.view.whenLayerView(this.layer)).highlight(a))}clearHighlights(){null!=this._highlight&&(this._highlight.remove(),this._highlight=null)}centerAt(a){null!=this.view&&(a="esri.rest.support.Stop"===a?.declaredClass||"esri.Graphic"===a?.declaredClass?a.geometry:a,null!=a&&this.callGoTo({target:a}))}clearResults(){this._set("lastRoute",
null);this.layer?.removeResult()}async getDirections(){const {apiKey:a,layer:c,state:b}=this;if(null==c)throw new l("directions-view-model:missing-route-layer","A route layer must be associated with the view model.");if("unauthenticated"===b||"initializing"===b||"disabled"===b||this._serviceDescriptionStatus===h.Failed)throw new l("directions-view-model:not-loaded","Cannot get directions until view model loads.");this._set("lastError",null);null!=this._routeController&&(this._routeController.abort(),
this._routeController=null);const {startTime:g,startTimeIsUTC:r}=this._getStartTimeParameters();var t=this.view?.spatialReference??null,p=this.routeParameters.clone();p.set({startTime:g,startTimeIsUTC:r,directionsLanguage:this._directionsLanguage,apiKey:a,outSpatialReference:t});null!=this.selectedTravelMode&&(p.travelMode=this.selectedTravelMode);if(2>c.stops.filter(({geometry:m})=>null!=m).length)throw p=new l("directions-view-model:not-enough-stops","Not enough stops for routing"),this._set("lastError",
p),p;this._routeController=new AbortController;({signal:t}=this._routeController);let u=null;try{u=await c.solve(p,{signal:t})}catch(m){if(!z.isAbortError(m)){const B=new l("directions-view-model:unable-to-route","Unable to route to these addresses",{error:m});this._set("lastError",B);this._set("lastRoute",null);throw B;}}finally{this._routeController=null}for(const m of u.stops)null==m.geometry&&(m.name=null);c.update(u);this._set("lastRoute",u);this.zoomToRoute();return u}getCostAttribute(a){return(this.serviceDescription?.networkDataset?.networkAttributes??
[]).find(({name:c,usageType:b})=>c===a&&"cost"===b)??null}reset(){this.clearHighlights();this.clearResults();null!=this.layer&&(this.layer.removeAll(),this.layer.stops=new C([new y,new y]))}save(){if(!this.layer)throw new l("directions-view-model:missing-layer","save() requires a layer");return this.layer.save()}saveAs(a,c={}){if(!this.layer)throw new l("directions-view-model:missing-layer","saveAs() requires a layer");return this.layer.saveAs(a,c)}updateDepartureTime(){if(this.departureIsoDate&&
this.departureIsoTime)switch(this.departureOption){case q.DepartureTimeOption.NOW:this.departureTime="now";break;case q.DepartureTimeOption.DEPART_AT:this.departureTime=k.DateTime.fromISO(`${this.departureIsoDate}T${this.departureIsoTime}`,{zone:k.FixedOffsetZone.instance(0)}).toJSDate();break;case q.DepartureTimeOption.UNSPECIFIED:this.departureTime=null}}zoomToRoute(){const {view:a,layer:c}=this;if(null!=a&&null!=c?.routeInfo){var {geometry:b}=c.routeInfo;if(null!=b&&(b=b.extent)){var g=b.width>
b.height;b=b.clone().expand(g?2:1);this.callGoTo({target:b})}}}_getStartTimeParameters(){return"now"===this.departureTime?{startTime:this.serviceDescription?.capabilities.supportsNow??!1?"now":new Date,startTimeIsUTC:!0}:null==this.departureTime?{startTime:void 0,startTimeIsUTC:void 0}:{startTime:this.departureTime,startTimeIsUTC:!1}}async _load(){if(null==this.serviceDescription&&null!=this.layer){null!=this._loadController&&(this._loadController.abort(),this._loadController=null);this._loadController=
new AbortController;var {signal:a}=this._loadController;try{this._serviceDescriptionStatus=h.Active;const b=await F.fetchServiceDescription(this.layer.url,this.apiKey,{signal:a});this._set("serviceDescription",b);this._serviceDescriptionStatus=h.Complete}catch(b){if(z.isAbortError(b))this._serviceDescriptionStatus=h.Idle;else if("identity-manager:user-aborted"===b.name)this._serviceDescriptionStatus=h.Suspended;else{var c=new l("directions-view-model:service-metadata-unavailable","Cannot load route service metadata",
{error:b});this._serviceDescriptionStatus=h.Failed;this._set("lastError",c);throw c;}}finally{this._loadController=null}}}_resolveDefaultTravelMode(a){if(null==this.serviceDescription)return null;const {defaultTravelMode:c,supportedTravelModes:b}=this.serviceDescription,g=/^<(?<name>.*)>$/i.exec(a.name)?.groups?.name;if(g){const r=b?.find(({name:t})=>t.toLocaleLowerCase()===g.trim().toLocaleLowerCase());return G.fromJSON({...(r??c)?.toJSON(),...a.toJSON()})}return b?.find(({name:r})=>r.toLocaleLowerCase()===
a.name.toLocaleLowerCase())??c}};e.__decorate([f.property()],d.prototype,"_directionsLanguage",null);e.__decorate([f.property()],d.prototype,"_routeController",void 0);e.__decorate([f.property()],d.prototype,"_serviceDescriptionStatus",void 0);e.__decorate([f.property()],d.prototype,"apiKey",void 0);e.__decorate([f.property()],d.prototype,"defaultTravelMode",void 0);e.__decorate([f.property()],d.prototype,"departureTime",void 0);e.__decorate([f.property()],d.prototype,"formattedEta",null);e.__decorate([f.property({readOnly:!0})],
d.prototype,"impedanceAttribute",null);e.__decorate([f.property()],d.prototype,"lastError",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"lastRoute",void 0);e.__decorate([f.property()],d.prototype,"layer",void 0);e.__decorate([f.property({type:Number,range:{min:2,max:50},nonNullable:!0})],d.prototype,"maxStops",void 0);e.__decorate([f.property({type:A,nonNullable:!0})],d.prototype,"routeParameters",void 0);e.__decorate([f.property()],d.prototype,"selectedTravelMode",null);e.__decorate([f.property({readOnly:!0})],
d.prototype,"serviceDescription",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"state",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"timeAttribute",null);e.__decorate([f.property()],d.prototype,"travelModes",null);e.__decorate([f.property()],d.prototype,"view",void 0);e.__decorate([f.property()],d.prototype,"getDirections",null);e.__decorate([f.property()],d.prototype,"zoomToRoute",null);return d=e.__decorate([D.subclass("esri.widgets.Directions.DirectionsViewModel")],
d)});