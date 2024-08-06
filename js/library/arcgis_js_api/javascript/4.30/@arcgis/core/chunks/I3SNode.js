/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{f as e}from"./vec4f64.js";import{f as i}from"./sphere.js";import{i as n}from"./I3SUtil.js";import{E as s}from"./ElevationRange.js";class t extends s{constructor(e,n){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=i(0,0,0,-1)}invalidateServiceBVsInRenderSR(){n(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}var o,a,r,d,c;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(o||(o={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(a||(a={}));class h extends t{constructor(i,n,s,t,o,d,c,h,l,v){super(i,s),this.index=n,this.childCount=t,this.level=o,this.resources=d,this.version=c,this.lodMetric=h,this.maxError=l,this.numFeatures=v,this.failed=!1,this.cacheState=r.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=a.NotChecked,this.elevationAgnosticBoundingVolume=e(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(r||(r={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(c||(c={}));class l{constructor(e,i,n,s){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=n,this.version=s}}export{r as C,d as L,o as N,a,t as b,h as c,l as d,c as e};
