// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ./ColumnTemplate ./ColumnTemplateBase ./FieldColumnTemplate ./tableUtils".split(" "),function(d,g,h,m,b,r,n,k,p,l,q){b=class extends p{constructor(c){super(c);this.columnTemplates=null;this.type="group"}castColumnTemplates(c){if(!c||!Array.isArray(c))return[];
const e=[];c.forEach(a=>{if(a instanceof l||a instanceof k)e.push(a);else if(q.isTemplateObjectWithType(a)){const f=a.type;"field"===f?e.push(new l(a)):"group"===f?g.getLogger(this).warn("A GroupColumnTemplate cannot contain other GroupColumn templates. Template removed from 'GroupColumnTemplate.columnTemplates'."):"column"===f&&e.push(new k(a))}else g.getLogger(this).warn("Property 'type' is missing from the provided template. Template removed from 'tableTemplate.columnTemplates'.")});return e}};
d.__decorate([h.property({json:{write:!0}})],b.prototype,"columnTemplates",void 0);d.__decorate([m.cast("columnTemplates")],b.prototype,"castColumnTemplates",null);d.__decorate([h.property({type:String,json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=d.__decorate([n.subclass("esri.widgets.FeatureTable.support.GroupColumnTemplate")],b)});