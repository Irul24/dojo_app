// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../chunks/tslib.es6","../../GraphShaderModule","../../graph/glsl","./utils"],function(g,h,c,a,m){class d extends c.UniformGroup{getColor(b,n,p){return a.cond([a.or(m.isNan(b),p),n],[a.lessThanEqual(b,this.values.first()),this.colors.first()],[a.greaterThanEqual(b,this.values.last()),this.colors.last()],[!0,()=>{const e=this.values.findIndex(q=>a.greaterThan(q,b));var f=this.values.get(e);const k=e.subtract(1),l=this.values.get(k);f=b.subtract(l).divide(f.subtract(l));
return a.mix(this.colors.get(k),this.colors.get(e),f)}])}}h.__decorate([c.uniform(a.FixedArray.ofType(a.Vec4,8))],d.prototype,"colors",void 0);h.__decorate([c.uniform(a.FixedArray.ofType(a.Float,8))],d.prototype,"values",void 0);g.VisualVariableColor=d;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});