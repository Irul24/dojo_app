// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../geometry ../request ../core/Error ../core/MultiOriginJSONSupport ../core/string ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/imageBitmapUtils ./support/LOD ./support/TileInfo ./support/WMTSLayerInfo ../geometry/Extent ../geometry/SpatialReference ../geometry/Point".split(" "),
function(f,e,q,w,x,y,l,g,K,L,M,r,z,A,B,C,D,E,F,G,t,c,u,H,v,m,I){var p;e=p=class extends C.BlendLayer(F.RefreshableLayer(G.ScaleRangeLayer(D.OperationalLayer(E.PortalLayer(x.MultiOriginJSONMixin(B)))))){constructor(...a){super(...a);this.copyright="";this.fullExtent=new v(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,m.WebMercator);this.legendEnabled=!1;this.isReference=null;this.popupEnabled=!1;this.spatialReference=m.WebMercator;this.subDomains=null;this.tileInfo=new u({size:[256,
256],dpi:96,format:"png8",compressionQuality:0,origin:new I({x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:m.WebMercator}),spatialReference:m.WebMercator,lods:[new c({level:0,scale:5.91657527591555E8,resolution:156543.033928}),new c({level:1,scale:2.95828763795777E8,resolution:78271.5169639999}),new c({level:2,scale:1.47914381897889E8,resolution:39135.7584820001}),new c({level:3,scale:7.3957190948944E7,resolution:19567.8792409999}),new c({level:4,scale:3.6978595474472E7,resolution:9783.93962049996}),
new c({level:5,scale:1.8489297737236E7,resolution:4891.96981024998}),new c({level:6,scale:9244648.868618,resolution:2445.98490512499}),new c({level:7,scale:4622324.434309,resolution:1222.99245256249}),new c({level:8,scale:2311162.217155,resolution:611.49622628138}),new c({level:9,scale:1155581.108577,resolution:305.748113140558}),new c({level:10,scale:577790.554289,resolution:152.874056570411}),new c({level:11,scale:288895.277144,resolution:76.4370282850732}),new c({level:12,scale:144447.638572,resolution:38.2185141425366}),
new c({level:13,scale:72223.819286,resolution:19.1092570712683}),new c({level:14,scale:36111.909643,resolution:9.55462853563415}),new c({level:15,scale:18055.954822,resolution:4.77731426794937}),new c({level:16,scale:9027.977411,resolution:2.38865713397468}),new c({level:17,scale:4513.988705,resolution:1.19432856685505}),new c({level:18,scale:2256.994353,resolution:.597164283559817}),new c({level:19,scale:1128.497176,resolution:.298582141647617}),new c({level:20,scale:564.248588,resolution:.14929107082380833}),
new c({level:21,scale:282.124294,resolution:.07464553541190416}),new c({level:22,scale:141.062147,resolution:.03732276770595208}),new c({level:23,scale:70.5310735,resolution:.01866138385297604})]});this.type="web-tile";this.wmtsInfo=this.urlTemplate=null}normalizeCtorArgs(a,b){return"string"===typeof a?{urlTemplate:a,...b}:a}load(a){a=this.loadFromPortal({supportedTypes:["WMTS"]},a).then(()=>{let b="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const h=new l.Url(this.urlTemplate);
this.subDomains&&0<this.subDomains.length||!h.authority?.includes("{subDomain}")||(b="is missing 'subDomains' property")}else b="spatialReference must match tileInfo.spatialReference";else b="is missing the required 'urlTemplate' property value";if(b)throw new w("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${b}`);});this.addResolvingPromise(a);return Promise.resolve(this)}get levelValues(){const a=[];if(!this.tileInfo)return null;for(const b of this.tileInfo.lods)a[b.level]=
b.levelValue||b.level;return a}readSpatialReference(a,b){return a||m.fromJSON(b.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const a=[],{urlTemplate:b,subDomains:h}=this;var d=new l.Url(b);const k=d.scheme?d.scheme+"://":"//",n=k+d.authority+"/";d=d.authority;if(!d?.includes("{subDomain}"))a.push(n);else if(h&&0<h.length&&1<d.split(".").length)for(const J of h)a.push(k+d.replaceAll(/\{subDomain\}/gi,J)+"/");return a.map(l.ensureTrailingSlash)}get urlPath(){if(!this.urlTemplate)return null;
const a=this.urlTemplate,b=new l.Url(a);return a.substring(((b.scheme?b.scheme+"://":"//")+b.authority+"/").length)}readUrlTemplate(a,b){return a||b.templateUrl}writeUrlTemplate(a,b){l.isProtocolRelative(a)&&(a="https:"+a);a&&(a=a.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),a=l.normalize(a));b.templateUrl=a}fetchTile(a,b,h,d={}){({signal:d}=d);a=this.getTileUrl(a,b,h);return q(a,{responseType:"image",signal:d,query:{...this.refreshParameters}}).then(k=>
k.data)}async fetchImageBitmapTile(a,b,h,d={}){const {signal:k}=d;if(this.fetchTile!==p.prototype.fetchTile)return d=await this.fetchTile(a,b,h,d),t.createTileBitmap(d,a,b,h,k);d=this.getTileUrl(a,b,h);({data:d}=await q(d,{responseType:"blob",signal:k,query:{...this.refreshParameters}}));return t.createTileBitmap(d,a,b,h,k)}getTileUrl(a,b,h){const {levelValues:d,tileServers:k,urlPath:n}=this;if(!d||!k||!n)return"";a=d[a];return k[b%k.length]+y.replace(n,{level:a,z:a,col:h,x:h,row:b,y:b})}};f.__decorate([g.property({type:String,
value:"",json:{write:!0}})],e.prototype,"copyright",void 0);f.__decorate([g.property({type:v,json:{write:!0},nonNullable:!0})],e.prototype,"fullExtent",void 0);f.__decorate([g.property({readOnly:!0,json:{read:!1,write:!1}})],e.prototype,"legendEnabled",void 0);f.__decorate([g.property({type:["show","hide"]})],e.prototype,"listMode",void 0);f.__decorate([g.property({json:{read:!0,write:!0}})],e.prototype,"blendMode",void 0);f.__decorate([g.property()],e.prototype,"levelValues",null);f.__decorate([g.property({type:Boolean,
json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],e.prototype,"isReference",void 0);f.__decorate([g.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],e.prototype,"operationalLayerType",void 0);f.__decorate([g.property({readOnly:!0,json:{read:!1,write:!1}})],e.prototype,"popupEnabled",void 0);f.__decorate([g.property({type:m})],e.prototype,"spatialReference",void 0);f.__decorate([r.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],e.prototype,
"readSpatialReference",null);f.__decorate([g.property({type:[String],json:{write:!0}})],e.prototype,"subDomains",void 0);f.__decorate([g.property({type:u,json:{write:!0}})],e.prototype,"tileInfo",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"tileServers",null);f.__decorate([g.property({json:{read:!1}})],e.prototype,"type",void 0);f.__decorate([g.property()],e.prototype,"urlPath",null);f.__decorate([g.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],e.prototype,
"urlTemplate",void 0);f.__decorate([r.reader("urlTemplate",["urlTemplate","templateUrl"])],e.prototype,"readUrlTemplate",null);f.__decorate([A.writer("urlTemplate",{templateUrl:{type:String}})],e.prototype,"writeUrlTemplate",null);f.__decorate([g.property({type:H.WMTSLayerInfo,json:{write:!0}})],e.prototype,"wmtsInfo",void 0);return e=p=f.__decorate([z.subclass("esri.layers.WebTileLayer")],e)});