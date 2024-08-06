// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../../core/promiseUtils","../../../../layers/mixins/RefreshableLayer","../../terrain/terrainUtils"],function(e,g,f,h,k){e.fetchTile=async function(c,a,d){var b=c.layer;if(k.useFetchTileForLayer(b)){b=await b.fetchTile(a[0],a[1],a[2],d);if(f.isAborted(d))throw g.getLogger(c).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),f.createAbortError();return b}a=c.getTileUrl(a);
h.isRefreshableLayer(b)&&b.refreshTimestamp&&(a+=`${a.includes("?")?"\x26":"?"}_ts=${b.refreshTimestamp}`);return d.requester.request(a,c.hasMixedImageFormats?"image+type":"image",d)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});