// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../handleUtils","./tracking","./tracking/SimpleTrackingTarget"],function(l,m,h,n){let g=!1;const d=[];l.autorun=function(e){function f(){if(b&&!a)if(g)d.includes(f)||d.unshift(f);else for(b.clear(),a=g=!0,h.runTracked(b,e),g=a=!1;d.length;)d.pop()()}let b=new n.SimpleTrackingTarget(f),a=!1;a=!0;h.runTracked(b,e);a=!1;return m.makeHandle(function(){b&&(b.destroy(),b=null)})};l.reaction=function(e,f){function b(){if(a&&!k)if(g)d.includes(b)||d.unshift(b);else{var p=c;a.clear();k=
g=!0;c=h.runTracked(a,e);g=k=!1;for(f(c,p);d.length;)d.pop()()}}let a=new n.SimpleTrackingTarget(b),c=null,k=!1;k=!0;c=h.runTracked(a,e);k=!1;return m.makeHandle(function(){a&&(a.destroy(),c=a=null)})};l.reactionDeferred=function(e,f){function b(){if(!a)return null;a.clear();return c=h.runTracked(a,e)}let a=new n.SimpleTrackingTarget(function(){f(c,b)}),c=null;b();return m.makeHandle(function(){a&&(a.destroy(),a=null);c=null})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});