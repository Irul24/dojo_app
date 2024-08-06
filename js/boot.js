require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "dojo/domReady",
    "bufferRadius/bufferRadius",
    "layer/LayerList",
    "menu/menuBar",
    "utils/home",
    "dojo/parser", 
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
], function(Config, WebMap, MapView,ready,osx_buffer,Layer,menuBar,Osx_Home) {
    ready(function () {
        const webmap = new WebMap({
            portalItem: {
                // autocasts as new PortalItem()
                id: "60994025213a4874bdb2e39503c72407"
            }
        });

        var view = new MapView({
            container: "map",
            map: webmap,
            center: [106.840837, -6.294844], // longitude, latitude
        zoom: 16
        });
        var bufferRadius = new osx_buffer(view);
        var layerList = new Layer(view);
        var menus = new menuBar();
        var Home = new Osx_Home(view);

    });
}
);