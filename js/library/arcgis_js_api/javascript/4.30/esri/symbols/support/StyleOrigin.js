// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../portal/Portal".split(" "),function(b,a,c,h,k,l,e,f){var d;a=d=class extends a{constructor(g){super(g);this.portal=this.styleName=this.styleUrl=this.name=null}clone(){return new d({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};b.__decorate([c.property({type:String})],
a.prototype,"name",void 0);b.__decorate([c.property({type:String})],a.prototype,"styleUrl",void 0);b.__decorate([c.property({type:String})],a.prototype,"styleName",void 0);b.__decorate([c.property({type:f})],a.prototype,"portal",void 0);return a=d=b.__decorate([e.subclass("esri.symbols.support.StyleOrigin")],a)});