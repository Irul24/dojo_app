// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32","../../../../core/libs/gl-matrix-2/factories/vec3f64","../../../../chunks/boundedPlane","./IntersectorInterfaces"],function(b,f,g,h,d){function c(a){return null!=a?.dist}const e=g.create();b.isHudIntersectorResult=function(a){return c(a)&&a.intersector===d.IntersectorType.HUD&&!!a.target&&"center"in a.target&&null!=a.target.center};b.isObjectIntersectorResult=function(a){return c(a)&&a.intersector===d.IntersectorType.OBJECT&&!!a.target};b.isValidIntersectorResult=
c;b.sliceFilterPredicate=function(a){return(k,l,m)=>{f.lerp(e,k,l,m);return!h.extrusionContainsPoint(a,e)}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});