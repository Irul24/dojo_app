// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../request ../core/Error ../core/JSONSupport ../core/Loadable ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../layers/mixins/EditBusLayer ../rest/utils ./support/EditMomentStack ./support/versionManagementUtils ./versionAdapters/utils".split(" "),function(h,m,w,t,l,x,u,q,E,F,G,
y,z,A,n,B,C,g,v){const p=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));l=class extends l.JSONSupportMixin(x){constructor(a){super(a);this.capabilities=this.defaultVersionIdentifier=this.name=this.sourceJSON=this.url=null;this._isDefault=b=>!b||b===this.defaultVersionIdentifier.name;this._dateEquals=(b,c)=>b||c?b&&c?b.toISOString()===c.toISOString():!1:!0;this._applyEditsHandler=b=>{const {serviceUrl:c,gdbVersion:e,result:d}=b;c===this._featureServiceUrl&&
d.then(f=>{(f=f.historicMoment)&&this._addMomentToVersionItem(e,f)})}}initialize(){this.url=u.removeTrailingSlash(this.url);this._featureServiceUrl=this.url.replace(/\/VersionManagementServer/i,"/FeatureServer");g.versionCollection.has(this.url)||g.versionCollection.set(this.url,new Map);const a=(g.versionCollectionCount.get(this.url)??0)+1;g.versionCollectionCount.set(this.url,a);this.when().then(()=>this.addHandles(n.onApplyEditsEvent(this._applyEditsHandler)),()=>{})}destroy(){const a=(g.versionCollectionCount.get(this.url)??
1)-1;g.versionCollectionCount.set(this.url,a);0===a&&g.versionCollection.delete(this.url);g.defaultVersionNameLookup.delete(this._featureServiceUrl)}read(a,b){this.sourceJSON=a;super.read(a,b)}readDefaultVersionIdentifier(a,b){return{name:b.defaultVersionName,guid:b.defaultVersionGuid}}writeDefaultVersionIdentifier(a,b){b.defaultVersionName=a.name;b.defaultVersionGuid=a.guid}load(a){this.addResolvingPromise(this._fetchService(this.url,a));return Promise.resolve(this)}async createVersion(a){const [{createVersion:b},
{default:c}]=await Promise.all([new Promise((e,d)=>h(["../rest/versionManagement/createVersion"],e,d)),new Promise((e,d)=>h(["../rest/versionManagement/support/CreateVersionParameters"],f=>e(p(f)),d))]);a=c.from(a);return b(this.url,a)}async deleteVersion(a){const [{deleteVersion:b},{default:c}]=await Promise.all([new Promise((d,f)=>h(["../rest/versionManagement/deleteVersion"],d,f)),new Promise((d,f)=>h(["../rest/versionManagement/support/DeleteVersionParameters"],k=>d(p(k)),f))]);let e=void 0;a.guid&&
g.versionCollection.get(this.url)?.has(a.guid)&&(e=g.currentSessionId??void 0);a=new c({versionName:a.name,sessionId:e});return b(this.url,a)}async getVersionInfoExtended(a){const {getVersion:b}=await new Promise((c,e)=>h(["../rest/versionManagement/getVersion"],c,e));return b(this.url,a.guid)}async getVersionInfos(a={}){const [{getVersionInfos:b},{default:c}]=await Promise.all([new Promise((e,d)=>h(["../rest/versionManagement/getVersionInfos"],e,d)),new Promise((e,d)=>h(["../rest/versionManagement/support/GetVersionInfosParameters"],
f=>e(p(f)),d))]);a=c.from(a);return b(this.url,a)}async reconcile(a,b={}){const [{reconcile:c},{default:e}]=await Promise.all([new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/reconcile"],d,f)),new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/support/ReconcileParameters"],k=>d(p(k)),f))]);b=e.from(b);b.sessionId=g.currentSessionId;return c(this.url,a.guid,b)}async post(a){const [{post:b},{default:c}]=await Promise.all([new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/post"],
d,f)),new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/support/PostParameters"],k=>d(p(k)),f))]),e=c.from({sessionId:g.currentSessionId});return b(this.url,a.guid,e)}async alterVersion(a,b){const [{alterVersion:c},{default:e}]=await Promise.all([new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/alterVersion"],d,f)),new Promise((d,f)=>h(["../rest/versionManagement/gdbVersion/support/AlterVersionParameters"],k=>d(p(k)),f))]);b=e.from(b);return c(this.url,a.guid,b)}async startReading(a){return(await this.startReadingWithResult(a)).success}async startReadingWithResult(a){var {startReading:b}=
await new Promise((c,e)=>h(["../rest/versionManagement/gdbVersion/startReading"],c,e));b=await b(this.url,a.guid,g.currentSessionId);if(b.success){const c=await this.getVersionInfoExtended(a),e=new Date(c.modifiedDate);this._addOrUpdateItem(a.guid,{name:c.versionIdentifier.name,moment:e,lockType:"read"});n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,e)}return b}async stopReading(a){return(await this.stopReadingWithResult(a)).success}async stopReadingWithResult(a){var {stopReading:b}=
await new Promise((c,e)=>h(["../rest/versionManagement/gdbVersion/stopReading"],c,e));b=await b(this.url,a.guid,g.currentSessionId);b.success&&(g.versionCollection.get(this.url)?.delete(a.guid),n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,null));return b}async startEditing(a){return(await this.startEditingWithResult(a)).success}async startEditingWithResult(a){var {startEditing:b}=await new Promise((e,d)=>h(["../rest/versionManagement/gdbVersion/startEditing"],e,d));b=await b(this.url,
a.guid,g.currentSessionId);if(b.success){var c=await this.getVersionInfoExtended(a);c=new Date(c.modifiedDate);const e=new C(c);this._addOrUpdateItem(a.guid,{name:a.name,moment:c,lockType:"edit",stack:e});n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,c)}return b}async stopEditing(a,b){return(await this.stopEditingWithResult(a,b)).success}async stopEditingWithResult(a,b){if(b){var c=g.versionCollection.get(this.url)?.get(a.guid);if(c?.stack?.canRedo()){const [{deleteForwardEdits:e},{default:d}]=
await Promise.all([new Promise((f,k)=>h(["../rest/versionManagement/gdbVersion/deleteForwardEdits"],f,k)),new Promise((f,k)=>h(["../rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters"],r=>f(p(r)),k))]);c=await e(this.url,a.guid,new d({sessionId:g.currentSessionId,moment:c.moment}));if(!c.success)return c}}({stopEditing:c}=await new Promise((e,d)=>h(["../rest/versionManagement/gdbVersion/stopEditing"],e,d)));b=await c(this.url,a.guid,g.currentSessionId,b);b.success&&(c=await this.getVersionInfoExtended(a),
c=new Date(c.modifiedDate),this._addOrUpdateItem(a.guid,{name:a.name,moment:c,lockType:"read",editMomentStack:void 0}),n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,c));return b}getLockType(a){return g.versionCollection.get(this.url)?.get(a.guid)?.lockType??"none"}async changeVersion(a,b,c){if(c&&"name"in c&&!await this.getVersionInfoExtended(c))throw new t("version-management-service:invalid-version","version does not exist");if("networkServiceUrl"in a){if(this._featureServiceUrl.toLowerCase()===
a.featureServiceUrl.toLowerCase())return this._changeVersionInternal(a,b,c)}else{let e;"layers"in a?(e=a.allTables.concat(a.allLayers),a.utilityNetworks&&a.utilityNetworks.forEach(d=>{this._featureServiceUrl.toLowerCase()===d.featureServiceUrl.toLowerCase()&&this._changeVersionInternal(d,b,c)})):e=a;for(const d of e)if("feature"===d.type||"subtype-group"===d.type){if(a=d.url.replace(/^(.*\/FeatureServer)\/\d+$/,"$1"),this._featureServiceUrl.toLowerCase()===a.toLowerCase()&&!this._changeVersionInternal(d,
b,c))return!1}else if("group"===d.type){a=d.allTables.concat(d.allLayers);for(const f of a)if("feature"===f.type||"subtype-group"===f.type)if(a=f.url.replace(/^(.*\/FeatureServer)\/\d+$/,"$1"),this._featureServiceUrl.toLowerCase()===a.toLowerCase()&&!this._changeVersionInternal(f,b,c))return!1}}return!0}async changeVersionWithResult(a,b,c){if("layers"in a){const d=v.createVersionAdapters(a.allTables.concat(a.allLayers).filter(f=>"group"!==f.type).toArray());a.utilityNetworks&&a.utilityNetworks.forEach(f=>
{f=v.createVersionAdapters([f]);d.push(...f)});a=d}if(c&&"name"in c&&!await this.getVersionInfoExtended(c)){b=new Map;for(var e of a)b.set(e,{success:!1});return b}if(b&&"name"in b&&"none"!==this.getLockType(b)){b=new Map;for(const d of a)b.set(d,{success:!1});return b}e=new Map;for(const d of a)d&&(d.featureServiceUrl.toLowerCase()===this._featureServiceUrl.toLowerCase()?(a=this._changeVersionInternalWithResult(d,b,c),e.set(d,a)):e.set(d,{success:!1}));return e}async getVersionIdentifierFromName(a){try{return(await this.getVersionInfos({includeHidden:!0})).find(b=>
b.versionIdentifier.name===a)?.versionIdentifier||null}catch{return null}}async getVersionIdentifierFromGuid(a){const {getVersion:b}=await new Promise((c,e)=>h(["../rest/versionManagement/getVersion"],c,e));try{return(await b(this.url,a)).versionIdentifier}catch{return null}}canUndo(a){return!!g.versionCollection.get(this.url)?.get(a.guid)?.stack?.canUndo()}canRedo(a){return!!g.versionCollection.get(this.url)?.get(a.guid)?.stack?.canRedo()}undo(a){const b=g.versionCollection.get(this.url)?.get(a.guid);
var c=b?.stack?.undo()||void 0;b&&c&&(c=b.stack.peek(),n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,c),g.versionCollection.get(this.url)?.set(a.guid,{...b,moment:c}))}redo(a){const b=g.versionCollection.get(this.url)?.get(a.guid),c=b?.stack?.redo()||void 0;b&&c&&(n.emitUpdateMomentEvent(this._featureServiceUrl,null,a.name,c),g.versionCollection.get(this.url)?.set(a.guid,{...b,moment:c}))}_setUpData(a,b){let c=null,e=null,d=null,f=null;const k=r=>{const D=g.versionCollection?.get(this.url)?.get(r.guid);
d=r.name;f=D?.moment??null};if(a&&"name"in a){if("none"!==this.getLockType(a))throw new t("version-management-service:version-locked","version is locked");c=a.name;e=null}else c=this.defaultVersionIdentifier.name,e=a;b&&"name"in b?k(b):(d=this.defaultVersionIdentifier.name,f=b);return{fromVersionName:c,fromMoment:e,toVersionName:d,toMoment:f}}_changeVersionInternal(a,b,c){try{const {fromVersionName:e,fromMoment:d,toVersionName:f,toMoment:k}=this._setUpData(b,c);this._isDefault(e)&&this._isDefault(a.gdbVersion)&&
this._dateEquals(a.historicMoment,d)?(a.gdbVersion=f,a.historicMoment=k):e===a.gdbVersion&&this._dateEquals(a.historicMoment,d)&&(a.gdbVersion=f,a.historicMoment=k)}catch(e){return!1}return!0}_changeVersionInternalWithResult(a,b,c){try{const {fromVersionName:e,fromMoment:d,toVersionName:f,toMoment:k}=this._setUpData(b,c);return this._isDefault(e)&&this._isDefault(a.gdbVersion)&&this._dateEquals(a.historicMoment,d)||e===a.gdbVersion&&this._dateEquals(a.historicMoment,d)?(a.gdbVersion=f,a.historicMoment=
k,{success:!0}):{success:!1}}catch(e){return{success:!1}}}_addMomentToVersionItem(a,b){const c=g.versionCollection.get(this.url);if(c)for(const [e,d]of c)d.name===a&&this._addToStack(e,b)}_addToStack(a,b){const c=g.versionCollection.get(this.url),e=c?.get(a);if(e?.stack){var d;if(d=e.stack.peek()){d=d.getTime();const f=b.getTime();d=d<f}else d=!0;d&&e.stack.push(b);c.set(a,{...e,moment:b});return!0}return!1}_addOrUpdateItem(a,b){const c=g.versionCollection.get(this.url),e=c?.get(a);return e?(c.set(a,
{...e,...b}),!0):b.name&&b.lockType?(c?.set(a,{...b,lockType:b.lockType}),!0):!1}async _fetchService(a,b){this.sourceJSON?(this.read(this.sourceJSON,{origin:"service",url:B.parseUrl(a)}),a=(new u.Url(this.url)).host,g.defaultVersionNameLookup.set(a,this.defaultVersionIdentifier.name)):(a=await w(a,{responseType:"json",query:{f:"json"},...b}),this.read(a.data))}};m.__decorate([q.property()],l.prototype,"url",void 0);m.__decorate([q.property()],l.prototype,"sourceJSON",void 0);m.__decorate([q.property({type:String,
json:{write:!0}})],l.prototype,"name",void 0);m.__decorate([q.property({json:{write:{target:{defaultVersionName:{type:String},defaultVersionGuid:{type:String}}},read:{source:["defaultVersionName","defaultVersionGuid"]}}})],l.prototype,"defaultVersionIdentifier",void 0);m.__decorate([y.reader("defaultVersionIdentifier",["defaultVersionName","defaultVersionGuid"])],l.prototype,"readDefaultVersionIdentifier",null);m.__decorate([A.writer("defaultVersionIdentifier",{defaultVersionName:{type:String},defaultVersionGuid:{type:String}})],
l.prototype,"writeDefaultVersionIdentifier",null);m.__decorate([q.property({json:{write:!0}})],l.prototype,"capabilities",void 0);return l=m.__decorate([z.subclass("esri.versionManagement.VersionManagementService")],l)});