define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
],function(declare,dom, on){
    return declare( null, {
        constructor: function(view){
            on(dom.byId("clearGraphics"), "click", function(){
                if(view.ready){
                    view.graphics.removeAll();
                    alert("ready")
                }
            });
        }
    })
})