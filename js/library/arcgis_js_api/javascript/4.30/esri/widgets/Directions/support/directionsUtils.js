// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/quantityUtils","../../../core/unitFormatUtils","../../../intl/number"],function(e,d,k,l){function f(b,a){return l.formatNumber(b,{style:"unit",unit:a,unitDisplay:"short"})}const h=new Map([["arrive","route-to"],["bear-left","bear-left"],["bear-right","bear-right"],["boundary-crossing","blank"],["central-fork","fork-middle"],["clockwise-roundabout","round-about-right"],["counter-clockwise-roundabout","round-about"],["depart","route-from"],["door","walk-through-door"],
["down-elevator","elevator-down"],["down-escalator","escalator-down"],["down-stairs","stairs-down"],["elevator","elevator"],["escalator","escalator"],["general-event","information"],["header","blank"],["landmark","map-pin"],["lane","blank"],["left-fork","fork-left"],["left-handed-u-turn","u-turn"],["left-ramp","ramp-left"],["left-turn","left"],["left-turn-and-immediate-left-turn","left-left"],["left-turn-and-immediate-right-turn","left-right"],["off-ferry","disembark"],["on-ferry","embark"],["pedestrian-ramp",
"take-pedestrian-ramp"],["restriction-violation","exclamation-mark-triangle"],["right-fork","fork-right"],["right-handed-u-turn","u-turn-right"],["right-ramp","ramp-right"],["right-turn","right"],["right-turn-and-immediate-left-turn","right-left"],["right-turn-and-immediate-right-turn","right-right"],["roundabout","round-about"],["scaled-cost-barrier-event","blank"],["sharp-left","sharp-left"],["sharp-right","sharp-right"],["stairs","stairs"],["straight","straight"],["time-zone-change","clock"],["traffic-event",
"exclamation-mark-triangle"],["u-turn","u-turn"],["up-elevator","elevator-up"],["up-escalator","escalator-up"],["up-stairs","stairs-up"]]);e.DepartureTimeOption=void 0;(function(b){b.NOW="now";b.DEPART_AT="depart-at";b.UNSPECIFIED="unspecified"})(e.DepartureTimeOption||(e.DepartureTimeOption={}));e.formatDistance=function(b,a,c){if(0===a)return"";let g=0;a=d.createLength(a,"meters");switch(c){case "metric":.01>a.value?{value:c,unit:a}=d.toUnit(a,"millimeters"):1>a.value?{value:c,unit:a}=d.toUnit(a,
"centimeters"):1E3>a.value?{value:c,unit:a}=d.toUnit(a,"meters"):1E5>a.value?({value:c,unit:a}=d.toUnit(a,"kilometers"),g=1):{value:c,unit:a}=d.toUnit(a,"kilometers");break;case "imperial":.254>a.value?{value:c,unit:a}=d.toUnit(a,"inches"):160.9344>a.value?{value:c,unit:a}=d.toUnit(a,"feet"):160934.4>a.value?({value:c,unit:a}=d.toUnit(a,"miles"),g=1):{value:c,unit:a}=d.toUnit(a,"miles");break;default:({value:c,unit:a}=d.toUnit(a,c)),g=2}return k.formatDecimal(b,c,a,g)};e.formatDuration=function(b){if(0===
b)return"";if(1>b)return f(Math.floor(60*b),"second");if(60>b)return f(Math.floor(b),"minute");const a=Math.floor(b/60);return 1440>b?(b=Math.floor(b%60),0===b?`${f(a,"hour")}`:`${f(a,"hour")} ${f(b,"minute")}`):f(a,"hour")};e.getIconName=function(b){return null!=b&&h.has(b)?h.get(b):"blank"};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});