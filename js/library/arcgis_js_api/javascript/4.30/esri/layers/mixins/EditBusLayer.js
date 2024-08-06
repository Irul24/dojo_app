// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Evented ../../core/lang ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../versionManagement/support/versionManagementUtils".split(" "),function(g,w,E,m,F,G,K,L,H,x){function y(a){return n.on("apply-edits",new WeakRef(a))}function z(a){return n.on("update-moment",new WeakRef(a))}function k(a){return null!=a&&"object"===typeof a&&"gdbVersion"in
a}function p(a,f,e){a=(new URL(a)).host;a=x.defaultVersionNameLookup.get(a);return(!f||f===a)&&(!e||e===a)||f===e}const n=new E.EventEmitter,A=Symbol();g.EditBusLayer=a=>{a=class extends a{constructor(...e){super(...e);this[f]=!0;this._applyEditsHandler=c=>{const {serviceUrl:d,layerId:q,gdbVersion:l,mayReceiveServiceEdits:u,result:v}=c;c=d===this.url;const r=null!=q&&null!=this.layerId&&q===this.layerId,I=k(this),J=k(this)&&p(d,l,this.gdbVersion);!c||I&&!J||!r&&!u||(c=v.then(b=>{this.lastEditsEventDate=
new Date;if(r&&(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length||b.addedAttachments.length||b.updatedAttachments.length||b.deletedAttachments.length))return this.emit("edits",m.clone(b)),b;const B=b.editedFeatures?.find(({layerId:t})=>t===this.layerId);if(B){const {adds:t,updates:C,deletes:D}=B.editedFeatures;b={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:t?t.map(({attributes:h})=>({objectId:this.objectIdField&&h[this.objectIdField],
globalId:this.globalIdField&&h[this.globalIdField]})):[],deletedFeatures:D?D.map(({attributes:h})=>({objectId:this.objectIdField&&h[this.objectIdField],globalId:this.globalIdField&&h[this.globalIdField]})):[],updatedFeatures:C?C.map(({current:{attributes:h}})=>({objectId:this.objectIdField&&h[this.objectIdField],globalId:this.globalIdField&&h[this.globalIdField]})):[],editedFeatures:m.clone(b.editedFeatures),exceededTransferLimit:!1,historicMoment:m.clone(b.historicMoment)};this.emit("edits",b);return b}b=
{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:m.clone(b.editedFeatures),exceededTransferLimit:!1,historicMoment:m.clone(b.historicMoment)};"historicMoment"in this&&this._shouldUpdateHistoricMoment(d,l,b.historicMoment)&&this.emit("edits",b);return b}).then(b=>{"historicMoment"in this&&this._shouldUpdateHistoricMoment(d,l,b.historicMoment)&&(this.historicMoment=b.historicMoment);return b}),this.emit("apply-edits",
{result:c}))};this._updateMomentHandler=c=>{const {serviceUrl:d,gdbVersion:q,moment:l}=c;c=d===this.url;const u=k(this),v=k(this)&&p(d,q,this.gdbVersion),r=k(this)&&!p(d,this.gdbVersion,null);c&&u&&v&&r&&"historicMoment"in this&&this.historicMoment!==l&&(this.historicMoment=l)};this.when().then(()=>{this.addHandles(y(this._applyEditsHandler));"historicMoment"in this&&this.addHandles(z(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(e,c,d){return"historicMoment"in this&&this.historicMoment!==
d&&x.isVersionInEditSession(e,c)}};var f=A;w.__decorate([G.property()],a.prototype,"lastEditsEventDate",void 0);return a=w.__decorate([H.subclass("esri.layers.mixins.EditBusLayer")],a)};g.emitApplyEditsEvent=function(a,f,e=null,c=!1){const d=F.createResolver();n.emit("apply-edits",{serviceUrl:a,layerId:f,gdbVersion:e,mayReceiveServiceEdits:null==f?!0:c,result:d.promise});return d};g.emitUpdateMomentEvent=function(a,f,e=null,c){n.emit("update-moment",{serviceUrl:a,layerId:f,gdbVersion:e,moment:c})};
g.isEditBusLayer=function(a){return null!=a&&"object"===typeof a&&A in a};g.isLayerWithGDBVersion=k;g.onApplyEditsEvent=y;g.onUpdateMomentEvent=z;g.versionMatches=p;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});