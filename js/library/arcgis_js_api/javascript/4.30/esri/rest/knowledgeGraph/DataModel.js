// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference ./EntityType ./RelationshipType".split(" "),function(b,a,c,l,m,n,f,g,e,h){a=class extends a.JSONSupport{constructor(d){super(d);this.metaEntityTypes=this.relationshipTypes=this.entityTypes=this.searchIndexes=this.identifierInfo=this.arcgisManaged=this.globalIdField=this.objectIdField=
this.strict=this.spatialReference=this.timestamp=null}};b.__decorate([c.property({type:Date,json:{type:Number,write:{writer:(d,k)=>{k.timestamp=d?.getTime()}}}})],a.prototype,"timestamp",void 0);b.__decorate([c.property({type:g,json:{write:!0}})],a.prototype,"spatialReference",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"strict",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"objectIdField",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"globalIdField",void 0);b.__decorate([c.property()],a.prototype,"arcgisManaged",void 0);b.__decorate([c.property()],a.prototype,"identifierInfo",void 0);b.__decorate([c.property()],a.prototype,"searchIndexes",void 0);b.__decorate([c.property({type:[e],json:{write:!0}})],a.prototype,"entityTypes",void 0);b.__decorate([c.property({type:[h],json:{write:!0}})],a.prototype,"relationshipTypes",void 0);b.__decorate([c.property({type:[e],json:{write:!0}})],a.prototype,"metaEntityTypes",
void 0);return a=b.__decorate([f.subclass("esri.rest.knowledgeGraph.DataModel")],a)});