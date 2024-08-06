// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/timeUtils","../../intl/date","../../chunks/SunCalc","./globalCss"],function(e,g,h,p,k){function l(a,b){return"tick"===b?(a=Math.round(g.convertTime(a,"minutes","hours")),new Date(g.convertTime(a,"hours","milliseconds"))):new Date(6E4*a)}const m={hour:"numeric",minute:"numeric",timeZone:"UTC"},n={hour:"numeric",timeZone:"UTC"};e.formatSliderLabel=function(a,b){const c=l(a,b);let d=h.formatDate(c,m);0!==a&&"00:00"===d&&(d="24:00");"tick"===b&&d.includes(" ")&&(d=h.formatDate(c,
n),d=d.replace(":00",""));return d};e.getSunriseAndSunsetTimes=function(a,b,c,d){if(null==b||null==c)return null;c=p.SunCalc.getTimes(a,b,c);b=c.sunrise;c=c.sunset;a=g.offsetDate(a,d,"hours");const f=g.offsetDate(b,d,"hours");d=g.offsetDate(c,d,"hours");if(a.getUTCDate()!==f.getUTCDate()||a.getUTCDate()!==d.getUTCDate())d=0<a.getTime()-f.getTime()?1:-1,b.setUTCDate(b.getUTCDate()+d),c.setUTCDate(c.getUTCDate()+d);return{sunrise:b,sunset:c}};e.getTimezoneInfos=function(a){return[{utcOffset:-12,short:"UTC-12",
long:a.timezoneDateline},{utcOffset:-11,short:"UTC-11",long:a.timezoneSamoa},{utcOffset:-10,short:a.timezoneHAST,long:a.timezoneHawaii},{utcOffset:-9,short:a.timezoneAKST,long:a.timezoneAlaska},{utcOffset:-8,short:a.timezonePST,long:a.timezoneBaja},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneMountain},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneLaPaz},{utcOffset:-7,short:a.timezoneMST,long:a.timezoneArizona},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneSaskatchewan},{utcOffset:-6,short:a.timezoneCST,
long:a.timezoneCentralAmerica},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneCentralTime},{utcOffset:-6,short:a.timezoneCST,long:a.timezoneMexico},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneEasternUS},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneLima},{utcOffset:-5,short:a.timezoneEST,long:a.timezoneIndiana},{utcOffset:-4,short:null,long:a.timezoneAtlantic},{utcOffset:-4,short:null,long:a.timezoneCuiaba},{utcOffset:-4,short:null,long:a.timezoneSantiago},{utcOffset:-4,short:null,long:a.timezoneManaus},
{utcOffset:-4,short:null,long:a.timezoneAsuncion},{utcOffset:-3,short:null,long:a.timezoneBrasilia},{utcOffset:-3,short:null,long:a.timezoneGreenland},{utcOffset:-3,short:null,long:a.timezoneMontevideo},{utcOffset:-3,short:null,long:a.timezoneCayenne},{utcOffset:-3,short:null,long:a.timezoneBuenosAires},{utcOffset:-2,short:null,long:a.timezoneMidAtlantic},{utcOffset:-1,short:null,long:a.timezoneAzores},{utcOffset:-1,short:null,long:a.timezoneCaboVerde},{utcOffset:0,short:null,long:a.timezoneDublin},
{utcOffset:0,short:null,long:a.timezoneReykjavik},{utcOffset:0,short:null,long:a.timezoneCasablanca},{utcOffset:1,short:a.timezoneCET,long:a.timezoneBelgrade},{utcOffset:1,short:a.timezoneCET,long:a.timezoneSarajevo},{utcOffset:1,short:a.timezoneCET,long:a.timezoneBrussels},{utcOffset:1,short:a.timezoneCET,long:a.timezoneWCAfrica},{utcOffset:1,short:a.timezoneCET,long:a.timezoneAmsterdam},{utcOffset:1,short:a.timezoneCET,long:a.timezoneWindhoek},{utcOffset:2,short:a.timezoneEET,long:a.timezoneMinsk},
{utcOffset:2,short:a.timezoneEET,long:a.timezoneCairo},{utcOffset:2,short:a.timezoneEET,long:a.timezoneHelsinki},{utcOffset:2,short:a.timezoneEET,long:a.timezoneAthens},{utcOffset:2,short:a.timezoneEET,long:a.timezoneJerusalem},{utcOffset:2,short:a.timezoneEET,long:a.timezoneAmman},{utcOffset:2,short:a.timezoneEET,long:a.timezoneBeirut},{utcOffset:2,short:a.timezoneEET,long:a.timezoneHarare},{utcOffset:2,short:a.timezoneEET,long:a.timezoneDamascus},{utcOffset:2,short:a.timezoneEET,long:a.timezoneIstanbul},
{utcOffset:3,short:a.timezoneMSK,long:a.timezoneKuwait},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneBaghdad},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneNairobi},{utcOffset:3,short:a.timezoneMSK,long:a.timezoneKaliningrad},{utcOffset:4,short:a.timezoneGST,long:a.timezoneMoscow},{utcOffset:4,short:a.timezoneGST,long:a.timezoneMuscat},{utcOffset:4,short:a.timezoneGST,long:a.timezoneBaku},{utcOffset:4,short:a.timezoneGST,long:a.timezoneYerevan},{utcOffset:4,short:a.timezoneGST,long:a.timezoneTbilisi},
{utcOffset:4,short:a.timezoneGST,long:a.timezonePortLouis},{utcOffset:5,short:null,long:a.timezoneTashkent},{utcOffset:5,short:null,long:a.timezoneIslamabad},{utcOffset:6,short:null,long:a.timezoneEkaterinburg},{utcOffset:6,short:null,long:a.timezoneAstana},{utcOffset:6,short:null,long:a.timezoneDhaka},{utcOffset:7,short:a.timezoneICT,long:a.timezoneNovosibirsk},{utcOffset:7,short:a.timezoneICT,long:a.timezoneBangkok},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneKrasnoyarsk},{utcOffset:8,short:a.timezoneCCT,
long:a.timezoneBeijing},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneSingapore},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneTaipei},{utcOffset:8,short:a.timezoneCCT,long:a.timezonePerth},{utcOffset:8,short:a.timezoneCCT,long:a.timezoneUlaanbaatar},{utcOffset:9,short:a.timezoneJST,long:a.timezoneIrkutsk},{utcOffset:9,short:a.timezoneJST,long:a.timezoneSeoul},{utcOffset:9,short:a.timezoneJST,long:a.timezoneOsaka},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneYakutsk},{utcOffset:10,short:a.timezoneAEST,
long:a.timezoneCanberra},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneBrisbane},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneHobart},{utcOffset:10,short:a.timezoneAEST,long:a.timezoneGuam},{utcOffset:11,short:null,long:a.timezoneVladivostok},{utcOffset:11,short:null,long:a.timezoneSolomon},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneMagadan},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneFiji},{utcOffset:12,short:a.timezoneNZST,long:a.timezoneAuckland},{utcOffset:12,short:a.timezoneNZST,
long:a.timezoneNukualofa}].map(({utcOffset:b,short:c,long:d})=>{const f=0<b?`UTC+${b}`:0>b?`UTC${b}`:"GMT";return c?{utcOffset:b,short:c,shortWithUTC:`${f} (${c})`,long:d}:{utcOffset:b,short:f,shortWithUTC:f,long:d}})};e.onPrimaryTickCreated=function({tickElement:a,labelElement:b,tickClasses:c=[],onClick:d}){a&&b&&(a.classList.add(...c,k.globalCss.primaryTick),b.classList.add(...c,k.globalCss.primaryTickLabel),d&&(b.onclick=a.onclick=()=>d()))};e.onSecondaryTickCreated=function({tickElement:a,tickClasses:b=
[],onClick:c}){a&&(a.classList.add(...b,k.globalCss.secondaryTick),c&&(a.onclick=()=>c()))};e.timeStringFormattingOptions=m;e.useAmPm=function(){return h.getDateTimeFormatter(n).formatToParts(l(0,"value")).some(({type:a})=>"dayPeriod"===a)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});