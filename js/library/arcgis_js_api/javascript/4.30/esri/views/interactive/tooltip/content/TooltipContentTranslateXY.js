// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../components/TooltipField ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,d,m,n,p,q,e,f,g,r,b){a.TooltipContentTranslateXY=class extends g.TooltipContent{_renderContent(){const {info:c}=this,{visibleElements:h}=c,k=this._messagesTooltip.sketch,
l=this._formatters;return b.tsx(b.tsxFragment,null,h.distance?b.tsx(f.TooltipField,{title:k.distance,value:l.length(c.distance)}):null)}};a.TooltipContentTranslateXY=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")],a.TooltipContentTranslateXY);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});