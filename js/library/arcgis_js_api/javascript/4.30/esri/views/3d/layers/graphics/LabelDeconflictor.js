// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./Deconflictor ./enums ../../../support/RenderState ../../../support/Yield".split(" "),function(b,d,g,m,n,p,h,e,k,l,f){b.LabelDeconflictor=class extends e.Deconflictor{constructor(a){super(a);this.visibilityGroup=k.VisibilityGroup.LABEL;this.marginFactor=.05;this._lastDeconfliction=
0}get viewState(){return this.parent.viewState}runTask(a){if(this.parent.running)return f.Yield;const c=performance.now();if(a.state!==l.RenderState.IDLE&&2E3>c-this._lastDeconfliction)return f.Yield;super.runTask(a);this.state===e.State.Idle&&(this._lastDeconfliction=c)}enabledChanged(a,c){this.modifyGraphics(c,a.labelsEnabled)}getGraphicsLayers(a){return a.labelLayers}};d.__decorate([g.property({constructOnly:!0})],b.LabelDeconflictor.prototype,"parent",void 0);b.LabelDeconflictor=d.__decorate([h.subclass("esri.views.3d.layers.graphics.LabelDeconflictor")],
b.LabelDeconflictor);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});