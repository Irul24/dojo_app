define([
    "dojo/_base/declare",
    "esri/widgets/LayerList"

], function(
    declare,
    LayerList
) {
    return declare( null, {
        constructor: function(view){
            const layerList = new LayerList({
                view: view,
                container: listLay
              });

            // var bc = new BorderContainer({
            //     style: "height: 100%; width: 250px; position: fixed; right:0; left:0; z-index:1; top: 28px;"
            // });
            // var cp1 = new ContentPane({
            //     region: "left",
            //     style: "width: 250px; background-color: dimgrey; background: rgba(0,0,0,0.5);",
            //     content: "Layer List"
            // });
            // bc.addChild(cp1);
            // bc.placeAt("nav");
            // bc.startup();
        }
    });
    
});