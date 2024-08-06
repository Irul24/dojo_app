// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/BuildingSceneLayer ../../layers/support/BuildingFilter ./BuildingDisciplinesViewModel ./BuildingLevel ./BuildingPhase ./support/buildingLayerUtils ./support/filterUtils ./support/layerUtils".split(" "),
function(c,b,k,q,r,t,g,e,z,A,u,v,w,l,m,n,x,h,y){b=class extends b{constructor(a){super(a);this.view=null;this.state="disabled";this.level=new m;this.phase=new n;this.disciplines=new l;this._loadLayers=y.createLoadLayersFunction();this.layers=new k}initialize(){this.addHandles([this.layers.on("change",()=>this._onLayersChange()),g.watch(()=>({state:this.state,layers:this.layers,filter:this._filter}),({state:a,layers:d,filter:f})=>{"ready"===a&&h.setFilterOnLayers(d,f)},{initial:!0})]);this._onLayersChange()}destroy(){this.level.destroyed||
this.level.destroy();this.phase.destroyed||this.phase.destroy();this.disciplines.destroyed||this.disciplines.destroy()}get isSupported(){return"3d"===this.view?.type}get layers(){return this._get("layers")}set layers(a){const d=a.filter(f=>f instanceof v);d.length!==a.length&&r.getLogger(this).error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget.");this._set("layers",q.referenceSetter(d,this._get("layers")))}get _filter(){var a=this.level.filterExpressions;
const d=this.phase.filterExpressions,f=[],p=h.getFilterBlockSolid([a.solid,d.solid]);null!=p&&f.push(p);a=h.getFilterBlockXRay([a.xRay,d.xRay]);null!=a&&f.push(a);return 0===f.length?null:new w({id:h.generateFilterId(),name:"Building Explorer Filter",filterBlocks:f})}async _onLayersChange(){const a=this.layers;this.level.layers=a;this.phase.layers=a;this.disciplines.layers=a;if(0===a.length)this._set("state","disabled");else{this._set("state","loading");try{await this._loadLayers(a),await Promise.all([g.whenOnce(()=>
"ready"===this.level.state),g.whenOnce(()=>"ready"===this.phase.state),g.whenOnce(()=>"ready"===this.disciplines.state)]),a.forEach(x.showFullModel),this._set("state","ready")}catch(d){t.isAbortError(d)||this._set("state","failed")}}}};c.__decorate([e.property({value:null})],b.prototype,"view",void 0);c.__decorate([e.property()],b.prototype,"isSupported",null);c.__decorate([e.property({type:k,nonNullable:!0})],b.prototype,"layers",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"state",
void 0);c.__decorate([e.property({readOnly:!0,type:m})],b.prototype,"level",void 0);c.__decorate([e.property({readOnly:!0,type:n})],b.prototype,"phase",void 0);c.__decorate([e.property({readOnly:!0,type:l})],b.prototype,"disciplines",void 0);c.__decorate([e.property()],b.prototype,"_filter",null);return b=c.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],b)});