// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/number","../../../intl/locale","./Format"],function(u,q,E,l){function d(c){var g=c.match(F);g=g?g[0]:"";const b=c.includes(".")?c.split(".")[1].length:0;return g+q.format(Number(c),{pattern:"###0.###",places:b,round:-1})}function e(c){return q.parse(c)}const m=q.getCustoms().decimal,n={N:"north",S:"south",E:"east",W:"west"},r=new RegExp(`-?\\d+[\\.|\\${m}]?\\d*`),F=/^[\\0]+(?=\d)/;u.generateDefaultFormats=function(){const c=RegExp("N|S","i"),g=RegExp("E|W","i");return[new l({name:"basemap",
coordinateSegments:[{alias:"X",description:"easting",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"Y",description:"northing",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}}],defaultPattern:"X, Y",viewModel:null}),new l({name:"dd",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${m}]?\\d*(?=\\D*?[N|S])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},
{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}[\\.|\\${m}]?\\d*(?=\\D*?[E|W|])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",searchPattern:g}],defaultPattern:"Y\u00b0\u200eN, X\u00b0\u200eE",viewModel:null}),new l({name:"ddm",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"A",description:"minutes latitude",
searchPattern:new RegExp(`\\d{1,2}[\\.\\${m}]?\\d*(?=.*?[N|S])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},{alias:"X",description:"degrees longitude",searchPattern:RegExp("\\d{1,3}(?\x3d\\D*?\\s+.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"B",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\|${m}]?\\d*(?=.*?[E|W])`,"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",
searchPattern:g}],defaultPattern:"Y\u00b0\u200e A'N, X\u00b0\u200e B'E",viewModel:null}),new l({name:"dms",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"A",description:"minutes latitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?[N|S])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"B",description:"seconds latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${m}]?\\d*(?=.*?[N|S])`,
"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"N",description:"north/south indicator",searchPattern:c},{alias:"X",description:"degrees longitude",searchPattern:RegExp("\\d{1,3}(?\x3d.*?\\s+.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"C",description:"minutes longitude",searchPattern:RegExp("\\d{1,2}(?\x3d.*?[E|W])","i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"D",description:"seconds longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${m}]?\\d*(?=.*?[E|W])`,
"i"),substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"E",description:"east/west indicator",searchPattern:g}],defaultPattern:"Y\u00b0\u200e A' B\"N, X\u00b0\u200e C' D\"E",viewModel:null}),new l({name:"xy",coordinateSegments:[{alias:"X",description:"longitude",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}},{alias:"Y",description:"latitude",searchPattern:r,substitution:{input:b=>e(b),output:b=>d(b)}}],defaultPattern:"X\u00b0\u200e, Y\u00b0\u200e",viewModel:null}),new l({name:"mgrs",
coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new l({name:"usng",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},
{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new l({name:"utm",coordinateSegments:[{alias:"Z",description:"zone number",searchPattern:/\d{1,2}|[abyz]/i},{alias:"B",description:"latitude band",searchPattern:/^\D/},{alias:"X",description:"easting",
searchPattern:/\d{1,7}(?=\s*\d{7}$)/},{alias:"Y",description:"northing",searchPattern:/\d{1,7}/}],defaultPattern:"ZB X Y",viewModel:null})]};u.setDefaultPatterns=function(c,g){const b="ar"===E.getLocale(),z=c.abbreviatedDirections.north,A=c.abbreviatedDirections.south,B=c.abbreviatedDirections.east,C=c.abbreviatedDirections.west,v=q.getCustoms().decimal,p={[z]:"N",[A]:"S",[B]:"E",[C]:"W"},t=new RegExp(`-?\\d+[\\.|\\${v}]?\\d*`),w=new RegExp(`N|S|${z}|${A}`,"i"),x=new RegExp(`E|W|${B}|${C}`,"i"),D=
{ddm:`Y${"\u00b0\u200e"} A'${c.abbreviatedDirections.north}, X${"\u00b0\u200e"} B'${c.abbreviatedDirections.east}`,dms:`Y${"\u00b0\u200e"} A' B"${c.abbreviatedDirections.north}, X${"\u00b0\u200e"} C' D"${c.abbreviatedDirections.east}`,dd:`Y${"\u00b0\u200e"}${c.abbreviatedDirections.north}, X${"\u00b0\u200e"}${c.abbreviatedDirections.east}`,xy:"X\u00b0\u200e, Y\u00b0\u200e",basemap:"X, Y"},G={ddm:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X 'B`,
dms:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A "B ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X 'C "D`,dd:`${c.abbreviatedDirections.north}${"\u00b0\u200e"}Y ,${c.abbreviatedDirections.east}${"\u00b0\u200e"}X`,xy:"X\u00b0\u200e ,Y\u00b0\u200e",basemap:"X ,Y"},H=f=>null!=f?Object.keys(D).includes(f):!1,h=new RegExp(`\\d{1,2}[\\.|\\${v}]?\\d*`,"i"),y=new RegExp(`\\d{1,3}[\\.|\\${v}]?\\d*`,"i");g.forEach(f=>{var {name:k}=f;"dd"===k?f.coordinateSegments=[{alias:"Y",description:"degrees latitude",
searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.east,description:"east/west indicator",searchPattern:x,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}}]:"ddm"===k?f.coordinateSegments=
[{alias:"Y",description:"degrees latitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"A",description:"minutes latitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"B",description:"minutes longitude",
searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.east,description:"east/west indicator",searchPattern:x,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}}]:"dms"===k?f.coordinateSegments=[{alias:"Y",description:"degrees latitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"A",description:"minutes latitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"B",description:"seconds latitude",searchPattern:h,
substitution:{input:a=>e(a),output:a=>d(a)}},{alias:c.abbreviatedDirections.north,description:"north/south indicator",searchPattern:w,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}},{alias:"X",description:"degrees longitude",searchPattern:y,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"C",description:"minutes longitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"D",description:"seconds longitude",searchPattern:h,substitution:{input:a=>e(a),output:a=>
d(a)}},{alias:c.abbreviatedDirections.east,description:"east/west indicator",searchPattern:x,substitution:{input:a=>p[a],output:a=>c.abbreviatedDirections[n[a]]}}]:"xy"===f.name?f.coordinateSegments=[{alias:"X",description:"easting",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}},{alias:"Y",description:"northing",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}}]:"basemap"===f.name&&(f.coordinateSegments=[{alias:"X",description:"easting",searchPattern:t,substitution:{input:a=>
e(a),output:a=>d(a)}},{alias:"Y",description:"northing",searchPattern:t,substitution:{input:a=>e(a),output:a=>d(a)}}]);H(k)&&(k=b?G[k]:D[k],f.defaultPattern=k,f.currentPattern=k)})};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});