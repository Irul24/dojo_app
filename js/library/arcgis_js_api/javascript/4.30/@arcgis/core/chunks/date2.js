/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e){return null!=u(e)||null!=s(e)}function t(e){return r.test(e)}function n(e){return u(e)??s(e)}function s(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(i&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!o.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){const t=r.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,u=+n.month-1,o=+n.day,i=+(n.hours??"0"),f=+(n.minutes??"0"),a=+(n.seconds??"0");if(i>23)return null;if(f>59)return null;if(a>59)return null;const l=n.ms??"0",m=l?+l.padEnd(3,"0").substring(0,3):0;let c;if(n.isUTC||!n.offsetSign)c=Date.UTC(s,u,o,i,f,a,m);else{const e=+n.offsetHours,t=+n.offsetMinutes;c=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,u,o,i,f,a,m)}return Number.isNaN(c)?null:c}const r=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,o=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,i=!Number.isNaN(new Date("technology 10").getTime());export{e as a,t as i,n as p};
