// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../config ../Graphic ../PopupTemplate ../request ../core/Collection ../core/CollectionFlattener ../core/jsonMap ../core/lang ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/write ../geometry/Extent ../geometry/SpatialReference ../geometry/support/scaleUtils ../geometry/support/spatialReferenceUtils ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./ogc/crsUtils ./support/arcgisLayerUrl ./support/commonProperties ./support/ExportWMSImageParameters ./support/imageBitmapUtils ./support/WMSSublayer ./support/wmsUtils".split(" "),
function(g,F,G,H,v,y,I,n,J,d,K,m,p,h,L,q,M,w,N,O,t,z,P,Q,R,S,T,U,V,W,X,Y,A,B,Z,x,r){function C(a){return"text/html"===a}function D(a){return"text/plain"===a}function aa(a,b){return a.some(c=>{for(const e in c)if(N.willPropertyWrite(c,e,null,b))return!0;return!1})}function E(a,b,c){a=a??[];const e=new Map;a.every(f=>null==f.id)&&(a=J.clone(a),a.forEach((f,k)=>f.id=k));for(const f of a){const k=new x;k.read(f,b);c&&!c.includes(k.name)&&(k.visible=!1);e.set(k.id,k)}b=[];for(const f of a)if(a=null!=f.id?
e.get(f.id):null)if(null!=f.parentLayerId&&0<=f.parentLayerId){if(c=e.get(f.parentLayerId))c.sublayers||(c.sublayers=new y),c.sublayers.push(a)}else b.push(a);return b}n=new n.JSONMap({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});d=class extends R.BlendLayer(W.TemporalLayer(U.RefreshableLayer(V.ScaleRangeLayer(S.OperationalLayer(T.PortalLayer(d.MultiOriginJSONMixin(Q))))))){constructor(...a){super(...a);this.allSublayers=new I({getCollections:()=>
[this.sublayers],getChildrenFunction(b){return b.sublayers}});this.imageFormat=this.fetchFeatureInfoFunction=this.featureInfoUrl=this.featureInfoFormats=this.fullExtents=this.fullExtent=this.dimensions=this.description=this.copyright=this.customLayerParameters=this.customParameters=null;this.imageMaxWidth=this.imageMaxHeight=2048;this.legendEnabled=this.imageTransparency=!0;this.isReference=this.mapUrl=null;this.operationalLayerType="WMS";this.sublayers=this.spatialReferences=this.spatialReference=
null;this.type="wms";this.version=null;this.addHandles([m.on(()=>this.sublayers,"after-add",({item:b})=>{b.parent=b.layer=this},m.sync),m.on(()=>this.sublayers,"after-remove",({item:b})=>{b.layer=b.parent=null},m.sync),m.watch(()=>this.sublayers,(b,c)=>{if(c)for(const e of c)e.layer=e.parent=null;if(b)for(const e of b)e.parent=e.layer=this},m.sync)])}normalizeCtorArgs(a,b){return"string"===typeof a?{url:a,...b}:a}destroy(){this.allSublayers.destroy()}load(a){const b=null!=a?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},
a).catch(K.throwIfAbortError).then(()=>this._fetchService(b)));return Promise.resolve(this)}readFullExtentFromItemOrMap(a,b){return(a=b.extent)?new O({xmin:a[0][0],ymin:a[0][1],xmax:a[1][0],ymax:a[1][1]}):null}writeFullExtent(a,b){b.extent=[[a.xmin,a.ymin],[a.xmax,a.ymax]]}get featureInfoFormat(){return null==this.featureInfoFormats?null:this.featureInfoFormats.find(C)??this.featureInfoFormats.find(D)??null}set featureInfoFormat(a){null!=a?(C(a)||D(a))&&this._override("featureInfoFormat",a):(this.revert("featureInfoFormat",
"service"),this._clearOverride("featureInfoFormat"))}readImageFormat(a,b){return(a=b.supportedImageFormatTypes)&&a.includes("image/png")?"image/png":a&&a[0]}readSpatialReferenceFromItemOrDocument(a,b){return new t(b.spatialReferences[0])}writeSpatialReferences(a,b){const c=this.spatialReference?.wkid;a&&c?(b.spatialReferences=a.filter(e=>e!==c),b.spatialReferences.unshift(c)):b.spatialReferences=a}readSublayersFromItemOrMap(a,b,c){return E(b.layers,c,b.visibleLayers)}readSublayers(a,b,c){return E(b.layers,
c)}writeSublayers(a,b,c,e){b.layers=[];c=new Map;a=a.flatten(({sublayers:l})=>l??[]);for(var f of a)if("number"===typeof f.parent?.id){var k=c.get(f.parent.id);null!=k?k.push(f.id):c.set(f.parent.id,[f.id])}for(const l of a)f={sublayer:l,...e},k=l.write({parentLayerId:"number"===typeof l.parent?.id?l.parent.id:-1},f),c.has(l.id)&&(k.sublayerIds=c.get(l.id)),!l.sublayers&&l.name&&(f=l.write({},f),delete f.id,b.layers.push(f));b.visibleLayers=a.filter(({visible:l,sublayers:u})=>l&&!u).map(({name:l})=>
l).toArray()}set url(a){if(a){var {path:b,query:c}=p.urlToObject(a);for(const e in c)/^(request|service)$/i.test(e)&&delete c[e];a=p.addQueryParameters(b,c??{});this._set("url",a)}else this._set("url",a)}createExportImageParameters(a,b,c,e){c=e?.pixelRatio??1;b=z.getScale({extent:a,width:b})*c;b=new B.ExportWMSImageParameters({layer:this,scale:b});const {xmin:f,ymin:k,xmax:l,ymax:u,spatialReference:ba}=a;a=r.normalizeWKID(ba,this.spatialReferences);c="1.3.0"===this.version&&X.isAxesOrderReversedForWkid(a)?
`${k},${f},${u},${l}`:`${f},${k},${l},${u}`;b=b.toJSON();return{bbox:c,["1.3.0"===this.version?"crs":"srs"]:null==a||isNaN(a)?void 0:"EPSG:"+a,...b}}async fetchImage(a,b,c,e){var f=this.mapUrl;a=this.createExportImageParameters(a,b,c,e);if(!a.layers)return f=document.createElement("canvas"),f.width=b,f.height=c,f;const k=r.toTimeQueryParameter(e?.timeExtent);b={responseType:"image",query:this._mixCustomParameters({width:b,height:c,...a,time:k,...this.refreshParameters}),signal:e?.signal};return v(f??
"",b).then(l=>l.data)}async fetchImageBitmap(a,b,c,e){const f=this.mapUrl??"";a=this.createExportImageParameters(a,b,c,e);if(!a.layers)return e=document.createElement("canvas"),e.width=b,e.height=c,e;const k=r.toTimeQueryParameter(e?.timeExtent);b={responseType:"blob",query:this._mixCustomParameters({width:b,height:c,...a,time:k,...this.refreshParameters}),signal:e?.signal};({data:b}=await v(f,b));return Z.createBitmap(b,f,e?.signal)}fetchFeatureInfo(a,b,c,e,f){var k=z.getScale({extent:a,width:b});
k=new B.ExportWMSImageParameters({layer:this,scale:k});k=r.getPopupLayers(k.visibleSublayers);if(null==this.featureInfoUrl||null==k||null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);e={query_layers:k,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:b,height:c,...("1.3.0"===this.version?{I:e,J:f}:{x:e,y:f})};a={...this.createExportImageParameters(a,b,c),...e};a=this._mixCustomParameters(a);return null!=this.fetchFeatureInfoFunction?
this.fetchFeatureInfoFunction(a):this._defaultFetchFeatureInfoFunction(p.addQueryParameters(this.featureInfoUrl,a))}findSublayerById(a){return this.allSublayers.find(b=>b.id===a)}findSublayerByName(a){return this.allSublayers.find(b=>b.name===a)}serviceSupportsSpatialReference(a){return Y.isWmsServer(this.url)||null!=this.spatialReferences&&this.spatialReferences.some(b=>{b=900913===b?t.WebMercator:new t({wkid:b});return P.equals(b,a)})}_defaultFetchFeatureInfoFunction(a){const b=document.createElement("iframe");
b.src=p.addProxy(a);b.style.border="none";b.style.margin="0";b.style.width="100%";b.setAttribute("sandbox","");a=new H({title:this.title,content:b});a=new G({sourceLayer:this,popupTemplate:a});return Promise.resolve([a])}async _fetchService(a){if(!this.resourceInfo&&this.parsedUrl?.path){const {path:b,query:c}=this.parsedUrl;({data:a}=await v(b,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...c,...this.customParameters},responseType:"xml",signal:a}));this.resourceInfo=r.parseCapabilities(a)}if(this.parsedUrl){a=
new p.Url(this.parsedUrl.path);const {httpsDomains:b}=F.request;"https"!==a.scheme||a.port&&"443"!==a.port||!a.host||b.includes(a.host)||b.push(a.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(a){if(!this.customLayerParameters&&!this.customParameters)return a;const b={...this.customParameters,...this.customLayerParameters};for(const c in b)a[c.toLowerCase()]=b[c];return a}};g.__decorate([h.property({readOnly:!0})],d.prototype,"allSublayers",void 0);g.__decorate([h.property({json:{type:Object,
write:!0}})],d.prototype,"customParameters",void 0);g.__decorate([h.property({json:{type:Object,write:!0}})],d.prototype,"customLayerParameters",void 0);g.__decorate([h.property({type:String,json:{write:!0}})],d.prototype,"copyright",void 0);g.__decorate([h.property()],d.prototype,"description",void 0);g.__decorate([h.property({readOnly:!0})],d.prototype,"dimensions",void 0);g.__decorate([h.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},
"portal-item":{write:{ignoreOrigin:!0}}}}})],d.prototype,"fullExtent",void 0);g.__decorate([q.reader(["web-document","portal-item"],"fullExtent",["extent"])],d.prototype,"readFullExtentFromItemOrMap",null);g.__decorate([w.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],d.prototype,"writeFullExtent",null);g.__decorate([h.property()],d.prototype,"fullExtents",void 0);g.__decorate([h.property({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoFormat",
null);g.__decorate([h.property({type:[String],readOnly:!0})],d.prototype,"featureInfoFormats",void 0);g.__decorate([h.property({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoUrl",void 0);g.__decorate([h.property()],d.prototype,"fetchFeatureInfoFunction",void 0);g.__decorate([h.property({type:String,json:{origins:{"web-document":{default:"image/png",type:n.jsonValues,read:{reader:n.read,source:"format"},write:{writer:n.write,target:"format"}}}}})],d.prototype,"imageFormat",
void 0);g.__decorate([q.reader("imageFormat",["supportedImageFormatTypes"])],d.prototype,"readImageFormat",null);g.__decorate([h.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],d.prototype,"imageMaxHeight",void 0);g.__decorate([h.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],d.prototype,"imageMaxWidth",void 0);g.__decorate([h.property()],d.prototype,"imageTransparency",void 0);g.__decorate([h.property(A.legendEnabled)],d.prototype,
"legendEnabled",void 0);g.__decorate([h.property({type:["show","hide","hide-children"]})],d.prototype,"listMode",void 0);g.__decorate([h.property({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"mapUrl",void 0);g.__decorate([h.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],d.prototype,"isReference",void 0);g.__decorate([h.property({type:["WMS"]})],d.prototype,"operationalLayerType",void 0);g.__decorate([h.property()],d.prototype,"resourceInfo",
void 0);g.__decorate([h.property({type:t,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],d.prototype,"spatialReference",void 0);g.__decorate([q.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],d.prototype,"readSpatialReferenceFromItemOrDocument",null);g.__decorate([h.property({type:[L.Integer],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],
d.prototype,"spatialReferences",void 0);g.__decorate([w.writer(["web-document","portal-item"],"spatialReferences")],d.prototype,"writeSpatialReferences",null);g.__decorate([h.property({type:y.ofType(x),json:{write:{target:"layers",overridePolicy(a,b,c){if(aa(this.allSublayers,c))return{ignoreOrigin:!0}}}}})],d.prototype,"sublayers",void 0);g.__decorate([q.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],d.prototype,"readSublayersFromItemOrMap",null);g.__decorate([q.reader("service",
"sublayers",["layers"])],d.prototype,"readSublayers",null);g.__decorate([w.writer("sublayers",{layers:{type:[x]},visibleLayers:{type:[String]}})],d.prototype,"writeSublayers",null);g.__decorate([h.property({json:{read:!1},readOnly:!0,value:"wms"})],d.prototype,"type",void 0);g.__decorate([h.property(A.url)],d.prototype,"url",null);g.__decorate([h.property({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"version",void 0);return d=g.__decorate([M.subclass("esri.layers.WMSLayer")],d)});