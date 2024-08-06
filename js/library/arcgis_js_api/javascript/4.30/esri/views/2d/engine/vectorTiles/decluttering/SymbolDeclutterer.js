// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./config"],function(u,v){function w(a,b){if(a.priority-b.priority)return a.priority-b.priority;const d=a.tile.key,c=b.tile.key;return d.world-c.world?d.world-c.world:d.level-c.level?d.level-c.level:d.row-c.row?d.row-c.row:d.col-c.col?d.col-c.col:a.xTile-b.xTile?a.xTile-b.xTile:a.yTile-b.yTile}class x{get running(){return this._running}constructor(a,b,d,c,k,l){this._visibleTiles=a;this._symbolRepository=b;this._createCollisionJob=d;this._assignTileSymbolsOpacity=c;this._symbolLayerSorter=
k;this._isLayerVisible=l;this._selectionJob=null;this._selectionJobCompleted=!1;this._collisionJob=null;this._collisionJobCompleted=!1;this._opacityJob=null;this._opacityJobCompleted=!1;this._running=!0}setScreenSize(a,b){this._screenWidth===a&&this._screenHeight===b||this.restart();this._screenWidth=a;this._screenHeight=b}restart(){this._selectionJob=null;this._selectionJobCompleted=!1;this._collisionJob=null;this._collisionJobCompleted=!1;this._opacityJob=null;this._opacityJobCompleted=!1;this._running=
!0}continue(a){this._selectionJob||(this._selectionJob=this._createSelectionJob());if(!this._selectionJobCompleted){var b=performance.now();if(!this._selectionJob.work(a))return!1;this._selectionJobCompleted=!0;a=Math.max(0,a-(performance.now()-b));if(0===a)return!1}this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight));if(!this._collisionJobCompleted){b=performance.now();if(!this._collisionJob.work(a))return!1;this._collisionJobCompleted=
!0;a=Math.max(0,a-(performance.now()-b));if(0===a)return!1}this._opacityJob||(this._opacityJob=this._createOpacityJob());if(!this._opacityJobCompleted){b=performance.now();if(!this._opacityJob.work(a))return!1;this._opacityJobCompleted=!0;a=Math.max(0,a-(performance.now()-b));if(0===a)return!1}this._running=!1;return!0}_createSelectionJob(){const a=this._symbolRepository.uniqueSymbols;for(let f=0;f<a.length;f++){const h=a[f];for(let e=0;e<h.uniqueSymbols.length;e++){const m=h.uniqueSymbols[e];for(const g of m.tileSymbols)g.selectedForRendering=
!1}}const b=[];let d=0,c=0;const k=this._isLayerVisible,l=this._symbolLayerSorter;return{work:function(f){const h=performance.now();for(;c<a.length;c++,d=0){const m=a[c];var e=m.styleLayerUID;if(!k(e)){b[c]||(b[c]={styleLayerUID:e,symbols:[]});continue}b[c]=b[c]||{styleLayerUID:e,symbols:[]};const g=b[c];for(;d<m.uniqueSymbols.length;d++){e=m.uniqueSymbols[d];if(99===d%100&&performance.now()-h>f)return!1;let p=null,r=!1,t=!1;for(const q of e.tileSymbols)if(!t||!r){const n=q.tile;if(!p||n.isCoverage||
n.neededForCoverage&&!r){p=q;if(n.neededForCoverage||n.isCoverage)t=!0;n.isCoverage&&(r=!0)}}p.selectedForRendering=!0;if(t){g.symbols.push(p);e.show=!0;for(const q of e.parts)q.show=!0}else e.show=!1}}for(const m of b)m.symbols.sort(w);return!0},get sortedSymbols(){return b.sort(l)}}}_createOpacityJob(){function a(k,l){var f=k.symbols;for(const [,e]of f){var h=e;f=l;for(const m of h){h=m.unique;for(const g of h.parts)g.startOpacity+=(f-g.startTime)/v.fadeDuration*(.5<g.targetOpacity?1:-1),g.startOpacity=
Math.min(Math.max(g.startOpacity,0),1),g.startTime=f,g.targetOpacity=h.show&&g.show?1:0}}b(k,l);for(const e of k.childrenTiles)a(e,l)}const b=this._assignTileSymbolsOpacity,d=this._visibleTiles;let c=0;return{work(k){const l=performance.now();for(;c<d.length;c++){if(performance.now()-l>k)return!1;const f=d[c];if(null!=f.parentTile)continue;const h=performance.now();a(f,h)}return!0}}}}u.SymbolDeclutterer=x;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});