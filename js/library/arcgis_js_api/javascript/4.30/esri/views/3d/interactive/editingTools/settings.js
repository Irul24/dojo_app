// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../Color ../../../../core/Accessor ../../../../core/colorUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../visualElements/ExtendedLineVisualElement ../../webgl-engine/lib/Material ../../webgl-engine/materials/lineStippleUtils".split(" "),function(d,g,e,q,c,k,C,D,E,r,p,f,t){function h(a,b){b&&Object.assign(a,b)}
class u{constructor(a){this.height=90;this.coneHeight=40;this.coneWidth=23;this.width=3;this.renderOccluded=f.RenderOccludedFlag.Opaque;this.color=a.accent}}class m{constructor({colors:a,...b}){this.size=11;this.outlineSize=1;this.collisionPadding=9;this.color=a.accent;this.outlineColor=a.outline;this.renderOccluded=f.RenderOccludedFlag.Opaque;this.hoverOutlineColor=a.selectedOutline;h(this,b)}applyColor(a){this._apply(this.color,a)}applyOutline(a){this._apply(this.outlineColor,a)}applyHoverOutline(a){this._apply(this.hoverOutlineColor,
a)}_apply(a,b){b.setParameters({color:c.unitRGBAFromColor(a),renderOccluded:this.renderOccluded})}}class v{constructor({colors:a,...b}){this.size=40;this.height=.2;this.offset=.25;this.collisionPadding=2;this.renderOccluded=f.RenderOccludedFlag.Transparent;this.minSquaredEdgeLength=900;this.color=c.multiplyOpacity(a.accent,.5);this.hoverColor=a.accent;h(this,b)}applyColor(a){this._apply(this.color,a)}applyHover(a){this._apply(this.hoverColor,a)}_apply(a,b){b.setParameters({color:c.unitRGBAFromColor(a),
renderOccluded:this.renderOccluded})}}class w{constructor(a){this.vertex=new m({colors:a,color:a.accent,outlineColor:a.outline});this.edge=new m({colors:a,color:c.desaturate(c.multiplyOpacity(a.accent,2/3),.5),outlineColor:c.multiplyOpacity(a.outline,.5),size:8,collisionPadding:8});this.selected=new m({colors:a,color:a.selected,outlineColor:a.outline});this.edgeOffset=new v({colors:a})}}class n{constructor({colors:a,...b}){this.width=1.5;this.stipplePattern=t.createStipplePatternSimple(3.3);this.falloff=
0;this.innerWidth=1.5;this.renderOccluded=f.RenderOccludedFlag.OccludeAndTransparent;this.color=a.selected;this.stippleOffColor=a.outline;this.innerColor=a.selected;h(this,b)}apply(a){a.color=c.unitRGBAFromColor(this.color);a.width=this.width;a.stipplePattern=this.stipplePattern;a.stippleOffColor=c.unitRGBAFromColor(this.stippleOffColor);a.falloff=this.falloff;a.innerWidth=this.innerWidth;a.innerColor=c.unitRGBAFromColor(this.innerColor);a.renderOccluded=this.renderOccluded}}class x{constructor({colors:a,
...b}){this.size=4;this.outlineSize=1;this.shape="square";this.color=a.selected;this.outlineColor=a.outline;h(this,b)}apply(a){a.color=c.unitRGBAFromColor(this.color);a.size=this.size;a.outlineSize=this.outlineSize;a.outlineColor=c.unitRGBAFromColor(this.outlineColor);a.primitive=this.shape}}class l{constructor({colors:a,...b}){this.innerWidth=1;this.glowFalloff=this.glowWidth=8;this.globalAlpha=.3;this.globalAlphaContrastBoost=1.5;this.radius=3;this.innerColor=a.selected;this.heightFillColor=this.glowColor=
a.accent;h(this,b)}apply(a,b=1){b={glowColor:e.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:e.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*b*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in a?a.style=b:a.laserlineStyle=b}}class y{constructor(a){this.outline=new n({colors:a,color:a.stippleOff,renderOccluded:f.RenderOccludedFlag.OccludeAndTransparentStencil,
stippleOffColor:a.stippleOn,innerWidth:0});this.staged=new n({colors:a,color:a.stippleOn,renderOccluded:f.RenderOccludedFlag.OccludeAndTransparentStencil,innerColor:a.stagedSolid,stippleOffColor:a.stippleOff});this.shadowStyle=new l({colors:a,globalAlpha:.3,glowColor:a.accent,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:1})}}class z{constructor(a){this.outline=new x({colors:a,color:a.selected,outlineColor:a.outline,outlineSize:1,shape:"circle",size:4});this.shadowStyle=new l({colors:a,
globalAlpha:.3,glowColor:a.accent,glowFalloff:1.5,glowWidth:6,innerColor:a.selected,innerWidth:1,radius:2})}}class A extends n{constructor({colors:a,...b}){super({colors:a});this.extensionType=p.ExtensionType.GROUND_RAY;h(this,b)}}class B{constructor(a){this.laserlineAlphaMultiplier=1.5;this.heightPlaneAngleCutoff=20;this.lineObjects=new y(a);this.pointObjects=new z(a);this.heightPlane=new l({colors:a,globalAlpha:.3,glowColor:a.accent,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:1});
this.heightBox=new l({colors:a,globalAlpha:.3,glowColor:a.accent,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:0,heightFillColor:a.accent});this.zVerticalLine=new A({colors:a,color:c.multiplyOpacity(a.accent,.5),falloff:2,innerColor:c.multiplyOpacity(a.selected,0),renderOccluded:f.RenderOccludedFlag.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:p.ExtensionType.GROUND_RAY})}}d.Settings=class extends q{constructor(a){super(a)}get colors(){const a=this.getTheme().accentColor,
b=a.a;return{accent:a,contrast:c.getContrast(a),selected:e.fromArray([255,255,255,b]),selectedOutline:e.fromArray([255,255,255,b]),staged:e.fromArray([12,207,255,b]),stagedSolid:e.fromArray([12,207,255,1]),outline:e.fromArray([0,0,0,.5*b]),stippleOn:e.fromArray([255,255,255,1]),stippleOff:e.fromArray([0,0,0,.5])}}get visualElements(){return new B(this.colors)}get manipulators(){return new w(this.colors)}get zManipulator(){return new u(this.colors)}};g.__decorate([k.property()],d.Settings.prototype,
"colors",null);g.__decorate([k.property()],d.Settings.prototype,"visualElements",null);g.__decorate([k.property()],d.Settings.prototype,"manipulators",null);g.__decorate([k.property()],d.Settings.prototype,"zManipulator",null);g.__decorate([k.property()],d.Settings.prototype,"getTheme",void 0);d.Settings=g.__decorate([r.subclass("esri.views.3d.interactive.editingTools.settings")],d.Settings);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});