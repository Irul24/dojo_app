// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelDynamicSection ./VoxelSlice".split(" "),function(b,c,k,a,l,d,m,n,f,g){var h;a=h=class extends a.JSONSupport{constructor(e){super(e);this.volumeId=0;this.verticalExaggeration=1;this.exaggerationMode="scale-height";this.verticalOffset=0;this.slices=
new (c.ofType(g));this.dynamicSections=new (c.ofType(f))}set slices(e){this._set("slices",k.referenceSetter(e,this._get("slices"),c.ofType(g)))}set dynamicSections(e){this._set("dynamicSections",k.referenceSetter(e,this._get("dynamicSections"),c.ofType(f)))}clone(){return new h({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:l.clone(this.slices),dynamicSections:l.clone(this.dynamicSections)})}};
b.__decorate([d.property({type:m.Integer,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"volumeId",void 0);b.__decorate([d.property({type:Number,json:{default:1,write:!0}})],a.prototype,"verticalExaggeration",void 0);b.__decorate([d.property({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],a.prototype,"exaggerationMode",void 0);b.__decorate([d.property({type:Number,json:{default:0,write:!0}})],a.prototype,"verticalOffset",void 0);b.__decorate([d.property({type:c.ofType(g),
json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&0<this.slices.length}}}}})],a.prototype,"slices",null);b.__decorate([d.property({type:c.ofType(f),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&0<this.dynamicSections.length}}}}})],a.prototype,"dynamicSections",null);return a=h=b.__decorate([n.subclass("esri.layers.voxel.VoxelVolumeStyle")],a)});