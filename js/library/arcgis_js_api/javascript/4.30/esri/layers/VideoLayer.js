// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../geometry ../request ../core/Error ../core/mathUtils ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Polyline ../geometry/SpatialReference ./Layer ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/ScaleRangeLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/PlaybackInfo ./support/serviceCapabilitiesUtils ./support/TelemetryData ./support/TelemetryDisplay ./support/VideoFrame ./video/VideoController ./video/videoUtils ../geometry/Polygon ../geometry/Extent".split(" "),
function(b,a,l,m,r,t,k,c,K,L,M,n,u,v,w,x,y,z,A,B,C,D,E,F,p,G,H,h,I,q){a=class extends y.BlendLayer(A.ScaleRangeLayer(t.MultiOriginJSONMixin(z.CustomParametersMixin(x)))){constructor(d){super(d);this._trailPoints=[];this.connectionInfo=this.capabilities=null;this.controller=new H;this.posterUrl=this.playbackInfo=this.layerId=this.initialExtent=this.fullExtent=this.frameCount=this.frame=this.elevationSource=this.description=this.created=this.coverage=this.copyright=null;this.protocol="hls";this.sourceType=
this.sourceQuality=this.sourceJSON=this.serviceItemId=this.qualities=null;this.spatialReference=w.WGS84;this.title=this.telemetryDisplay=null;this.type="video";this.videoTimeExtent=this.url=null}initialize(){this.telemetryDisplay=new p({frameCenter:!0,frameOutline:!0,lineOfSight:!0,sensorLocation:!0,sensorTrail:!0});this.addHandles([k.watch(()=>this.metadata,()=>{this.notifyChange("telemetry");this.notifyChange("groundControlPoints");this.notifyChange("frameHorizonPoints")}),k.watch(()=>this.telemetry?.sensorLocation,
d=>this._setSensorTrail(d),k.initial)])}load(d){this.addResolvingPromise(this._fetchService(null!=d?d.signal:null));return Promise.resolve(this)}get buffered(){return this.controller.buffered}readCapabilitiesFromService(d,e){return E.getVideoLayerCapabilities(e)}readConnectionInfo(d,e){d=e.connectionUrl;this.controller.playerUrl=d&&this.protocol?d[this.protocol]:"";return d}get currentTime(){return this.controller.currentTime}get duration(){return this.controller.duration}get ended(){return this.controller.ended}get frameHorizonPoints(){return h.getFrameHorizonPoints(this.metadata)}get groundControlPoints(){return h.getGroundControlPoints(this.metadata)}get loop(){return this.controller.loop}set loop(d){this.controller.loop=
d}get metadata(){return this.controller?.currentMetadata}get muted(){return this.controller.muted}set muted(d){this.controller.muted=d}get playbackRate(){return this.controller.rate}set playbackRate(d){this.controller.rate=d}get playerUrl(){return this.controller.playerUrl}get playing(){return this.controller.playing}get state(){return this.controller.state}get telemetry(){return h.getTelemetryData(this.metadata)}get videoElement(){return this.controller?.element}get videoHeight(){return this.controller?.videoHeight}get videoWidth(){return this.controller?.videoWidth}get waiting(){return this.controller.waiting}play(){this.controller.play()}pause(){this.controller.pause()}reset(){this.controller.reset()}setCurrentTime(d){this.duration&&
(d=r.clamp(d,0,this.duration),this.controller.setCurrentTime(d))}getCurrentFrame(){}toGround(d,e){return this.controller?.sensorModel?.metadataSupportsTransforms?this.controller.sensorModel.transformImageToGeo(d,e):null}toVideo(d){if(!this.controller?.sensorModel?.metadataSupportsTransforms)return null;d=this.controller.sensorModel.transformGeoToImage(d.x,d.y,d.z);return{x:d[0],y:d[1]}}async _fetchService(d){if(!this.sourceJSON){var e=B.parse(this.parsedUrl?.path);if(null==e)throw new m("arcgis-layers:url-mismatch",
"The url is not a valid arcgis resource");var f=null,{data:g,ssl:J}=await l(e.url.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:d});this.url=e.url.path;J&&(this.url=this.url.replace(/^http:/i,"https:"));if(g?.currentVersion){f=e?.sublayer;null==f&&g.layers?.length&&(f=g.layers[0].id);if(null==f)throw new m("arcgis-layers:url-mismatch","The url is not a valid arcgis resource");this.url=`${e.url.path}/${f}`;f=await l(this.url,{query:{f:"json",...this.customParameters},
signal:d});this.sourceJSON={...g,...f.data}}else g.currentVersion="11.2",this.sourceJSON=g}this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl})}_setSensorTrail(d){if(d){this._trailPoints=[...h.getSensorTrailPoints(d,this._trailPoints)];var e=this._trailPoints.map(f=>f.toArray());d=new v({hasZ:d.hasZ,paths:[e]});this.telemetry.sensorTrail=d.clone()}}};b.__decorate([c.property({readOnly:!0})],a.prototype,"buffered",null);b.__decorate([c.property({readOnly:!0,json:{read:!1}})],a.prototype,
"capabilities",void 0);b.__decorate([n.reader("service","capabilities","supportsAppend supportsCoverageQuery supportsExportClip supportsExportFrameset supportsMensuration supportsUpdate".split(" "))],a.prototype,"readCapabilitiesFromService",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"connectionInfo",void 0);b.__decorate([n.reader("connectionInfo",["connectionUrl"])],a.prototype,"readConnectionInfo",null);b.__decorate([c.property()],a.prototype,"controller",void 0);b.__decorate([c.property({type:String})],
a.prototype,"copyright",void 0);b.__decorate([c.property({type:I})],a.prototype,"coverage",void 0);b.__decorate([c.property({type:Date})],a.prototype,"created",void 0);b.__decorate([c.property({type:Number})],a.prototype,"currentTime",null);b.__decorate([c.property({type:String})],a.prototype,"description",void 0);b.__decorate([c.property({type:Number})],a.prototype,"duration",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"elevationSource",void 0);b.__decorate([c.property({type:Boolean})],
a.prototype,"ended",null);b.__decorate([c.property({type:G})],a.prototype,"frame",void 0);b.__decorate([c.property({type:Number})],a.prototype,"frameCount",void 0);b.__decorate([c.property({type:q})],a.prototype,"fullExtent",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"frameHorizonPoints",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"groundControlPoints",null);b.__decorate([c.property({type:q})],a.prototype,"initialExtent",void 0);b.__decorate([c.property({readOnly:!0,
json:{read:{source:"id"}}})],a.prototype,"layerId",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"loop",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"metadata",null);b.__decorate([c.property({type:Boolean})],a.prototype,"muted",null);b.__decorate([c.property({type:D})],a.prototype,"playbackInfo",void 0);b.__decorate([c.property({type:Number})],a.prototype,"playbackRate",null);b.__decorate([c.property({type:String})],a.prototype,"playerUrl",null);b.__decorate([c.property({readOnly:!0})],
a.prototype,"playing",null);b.__decorate([c.property({readOnly:!0,json:{read:{source:"poster"}}})],a.prototype,"posterUrl",void 0);b.__decorate([c.property({type:String})],a.prototype,"protocol",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"qualities",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"serviceItemId",void 0);b.__decorate([c.property()],a.prototype,"sourceJSON",void 0);b.__decorate([c.property()],a.prototype,"sourceQuality",void 0);b.__decorate([c.property({readOnly:!0,
json:{name:"serviceType"}})],a.prototype,"sourceType",void 0);b.__decorate([c.property()],a.prototype,"spatialReference",void 0);b.__decorate([c.property({type:String})],a.prototype,"state",null);b.__decorate([c.property({type:F})],a.prototype,"telemetry",null);b.__decorate([c.property({type:p})],a.prototype,"telemetryDisplay",void 0);b.__decorate([c.property({readOnly:!1,json:{read:{source:"name"}}})],a.prototype,"title",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"type",void 0);
b.__decorate([c.property(C.url)],a.prototype,"url",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"videoElement",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"videoHeight",null);b.__decorate([c.property({readOnly:!0,nonNullable:!1,json:{read:{reader:h.readVideoTimeExtent,source:"time"}}})],a.prototype,"videoTimeExtent",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"videoWidth",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"waiting",null);return a=
b.__decorate([u.subclass("esri.layers.VideoLayer")],a)});