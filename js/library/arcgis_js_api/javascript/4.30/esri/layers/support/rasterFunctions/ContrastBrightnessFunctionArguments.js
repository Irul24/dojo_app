// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments".split(" "),function(b,d,a,g,h,e,f){var c;a=c=class extends f{constructor(){super(...arguments);this.brightnessOffset=this.contrastOffset=0}clone(){return new c({contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset,raster:this.raster})}};b.__decorate([d.property({json:{write:!0}})],
a.prototype,"contrastOffset",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"brightnessOffset",void 0);return a=c=b.__decorate([e.subclass("esri.layers.support.rasterFunctions.ContrastBrightnessFunctionArguments")],a)});