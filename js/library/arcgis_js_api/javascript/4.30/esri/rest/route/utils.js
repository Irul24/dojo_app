// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../support/networkEnums"],function(d,g){d.closestFacilityParametersToQueryParameters=function(a){a=a.toJSON();a.accumulateAttributeNames&&(a.accumulateAttributeNames=a.accumulateAttributeNames?.join());a.attributeParameterValues&&(a.attributeParameterValues=JSON.stringify(a.attributeParameterValues));a.barriers&&(a.barriers=JSON.stringify(a.barriers));a.facilities&&(a.facilities=JSON.stringify(a.facilities));a.incidents&&(a.incidents=JSON.stringify(a.incidents));a.outSR&&(a.outSR=
a.outSR?.wkid);a.overrides&&(a.overrides=JSON.stringify(a.overrides));a.polygonBarriers&&(a.polygonBarriers=JSON.stringify(a.polygonBarriers));a.polylineBarriers&&(a.polylineBarriers=JSON.stringify(a.polylineBarriers));a.restrictionAttributeNames&&(a.restrictionAttributeNames=a.restrictionAttributeNames?.join());a.travelMode&&(a.travelMode=JSON.stringify(a.travelMode));return a};d.fromKebabImpedanceAttributes=function(a){const b={};for(const c of Object.keys(a)){const e=g.impedanceAttributeNameJsonMap.toJSON(c);
b[e]=a[c]}return b};d.getPrefixedProperties=function(a,b){if(null==a)return null;const c={},e=new RegExp(`^${b}`,"i");for(const h of Object.keys(a))if(e.test(h)){var f=h.substring(b.length);f=g.impedanceAttributeNameJsonMap.fromJSON(f);c[f]=a[h]}return c};d.getTimezoneOffset=function(a,b){return null==a||null==b?null:Math.round((a-b)/6E4)};d.routeParametersToQueryParameters=function(a){a=a.toJSON();a.accumulateAttributeNames&&(a.accumulateAttributeNames=a.accumulateAttributeNames?.join());a.attributeParameterValues&&
(a.attributeParameterValues=JSON.stringify(a.attributeParameterValues));a.barriers&&(a.barriers=JSON.stringify(a.barriers));a.outSR&&(a.outSR=a.outSR?.wkid);a.overrides&&(a.overrides=JSON.stringify(a.overrides));a.polygonBarriers&&(a.polygonBarriers=JSON.stringify(a.polygonBarriers));a.polylineBarriers&&(a.polylineBarriers=JSON.stringify(a.polylineBarriers));a.restrictionAttributeNames&&(a.restrictionAttributeNames=a.restrictionAttributeNames?.join());a.stops&&(a.stops=JSON.stringify(a.stops));a.travelMode&&
(a.travelMode=JSON.stringify(a.travelMode));return a};d.serviceAreaParametersToQueryParameters=function(a){a=a.toJSON();a.accumulateAttributeNames&&(a.accumulateAttributeNames=a.accumulateAttributeNames?.join());a.attributeParameterValues&&(a.attributeParameterValues=JSON.stringify(a.attributeParameterValues));a.barriers&&(a.barriers=JSON.stringify(a.barriers));a.defaultBreaks&&(a.defaultBreaks=a.defaultBreaks?.join());a.excludeSourcesFromPolygons&&(a.excludeSourcesFromPolygons=a.excludeSourcesFromPolygons?.join());
a.facilities&&(a.facilities=JSON.stringify(a.facilities));a.outSR&&(a.outSR=a.outSR?.wkid);a.overrides&&(a.overrides=JSON.stringify(a.overrides));a.polygonBarriers&&(a.polygonBarriers=JSON.stringify(a.polygonBarriers));a.polylineBarriers&&(a.polylineBarriers=JSON.stringify(a.polylineBarriers));a.restrictionAttributeNames&&(a.restrictionAttributeNames=a.restrictionAttributeNames?.join());a.travelMode&&(a.travelMode=JSON.stringify(a.travelMode));return a};d.setPrefixedProperties=function(a,b,c){if(null!=
a){b.attributes||(b.attributes={});for(const e in a){const f=g.impedanceAttributeNameJsonMap.toJSON(e);b.attributes[`${c}${f}`]=a[e]}}};d.toKebabImpedanceAttributes=function(a){const b={};for(const c of Object.keys(a)){const e=g.impedanceAttributeNameJsonMap.fromJSON(c);b[e]=a[c]}return b};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});