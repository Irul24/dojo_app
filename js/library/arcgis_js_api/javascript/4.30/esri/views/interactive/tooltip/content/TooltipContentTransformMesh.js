// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ./Fields ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(c,d,m,n,p,q,e,f,g,r,h){c.TooltipContentTransformMesh=class extends g.TooltipContent{_renderContent(){const {fieldContext:k,info:a,mode:l}=this,{visibleElements:b}=a;return h.tsx(f.Fields,
{context:k,fields:[b.coordinates?a.effectiveX:void 0,b.coordinates?a.effectiveY:void 0,b.elevation?a.elevation:void 0,b.orientation?a.orientation:void 0,b.scale?a.scale:void 0],mode:l})}};c.TooltipContentTransformMesh=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")],c.TooltipContentTransformMesh);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});