/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{A as t}from"./TimeOnly.js";import{p as r,x as o,t as e,s,u as i,A as n,E as a,aa as m,R as p,_ as c}from"./arcadeUtils.js";import{WhereClause as u,S as l}from"../core/sql/WhereClause.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./handleUtils.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./ImmutableArray.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./number2.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"../layers/support/FieldsIndex.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./timeZoneUtils.js";import"./number.js";import"./substitute.js";import"./messages.js";import"./hash.js";import"./uuid.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./_commonjsHelpers.js";async function j(t,r,s,n){if(1===s.length){if(e(s[0]))return m(t,s[0],p(s[1],-1));if(i(s[0]))return m(t,s[0].toArray(),p(s[1],-1))}else if(2===s.length){if(e(s[0]))return m(t,s[0],p(s[1],-1));if(i(s[0]))return m(t,s[0].toArray(),p(s[1],-1));if(o(s[0])){const o=await s[0].load(),e=await f(u.create(s[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),n,r);return d(r,await s[0].calculateStatistic(t,e,p(s[2],1e3),r.abortSignal))}}else if(3===s.length&&o(s[0])){const o=await s[0].load(),e=await f(u.create(s[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),n,r);return d(r,await s[0].calculateStatistic(t,e,p(s[2],1e3),r.abortSignal))}return m(t,s,-1)}function d(r,o){return o instanceof l?t.fromReaderAsTimeStampOffset(o.toStorageFormat()):o instanceof Date?t.dateJSAndZoneToArcadeDate(o,c(r)):o}async function f(t,r,o){const e=t.getVariables();if(e.length>0){const s=[];for(let t=0;t<e.length;t++){const i={name:e[t]};s.push(await r.evaluateIdentifier(o,i))}const i={};for(let t=0;t<e.length;t++)i[e[t]]=s[t];return t.parameters=i,t}return t}function y(t){"async"===t.mode&&(t.functions.stdev=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("stdev",r,s,t)))},t.functions.variance=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("variance",r,s,t)))},t.functions.average=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("mean",r,s,t)))},t.functions.mean=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("mean",r,s,t)))},t.functions.sum=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("sum",r,s,t)))},t.functions.min=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("min",r,s,t)))},t.functions.max=function(r,o){return t.standardFunctionAsync(r,o,((o,e,s)=>j("max",r,s,t)))},t.functions.count=function(m,p){return t.standardFunctionAsync(m,p,(async(t,c,u)=>{if(r(u,1,1,m,p),o(u[0]))return u[0].count(t.abortSignal);if(e(u[0])||s(u[0]))return u[0].length;if(i(u[0]))return u[0].length();throw new n(m,a.InvalidParameter,p)}))})}export{y as registerFunctions};
