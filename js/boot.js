// importing dojo&esri library & widget module 
require([
    // Esri Library
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",

    // Widget Module 
    "bufferRadius/bufferRadius",
    "layer/LayerList",
    "menu/menuBar",
    "utils/home",
    
    // dojo library
    "dojo/domReady",
    "dojo/parser", 
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
], function(Config, WebMap, MapView,osx_buffer,Layer,menuBar,Osx_Home,ready) {
    ready(function () {
        const webmap = new WebMap({
            portalItem: {
                id: "60994025213a4874bdb2e39503c72407"
            }
        });

        var view = new MapView({
            container: "map",
            map: webmap,
            center: [106.840837, -6.294844],
        zoom: 16
        });

        // call module widget
        var bufferRadius = new osx_buffer(view);
        var layerList = new Layer(view);
        var menus = new menuBar();
        var Home = new Osx_Home(view);

    });
}
);