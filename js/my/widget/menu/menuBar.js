
define([
    "dojo/_base/declare",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dojo/dom-construct",
  ], function(
    declare,
    MenuBar,
    PopupMenuBarItem,
    Menu,
    MenuItem,
    DropDownMenu,
    domConstruct
  ) {
    return declare( null, {
      constructor: function() {
        var pMenuBar = new MenuBar({});
        var pSubMenu = new DropDownMenu({});
        pSubMenu.addChild(new MenuItem({
            label: "Finder 1",
            onClick: function(evt){
                alert('Clicked Menu Widget Finder 1')
            }
        }));
        pSubMenu.addChild(new MenuItem({
            label: "Finder 2",
            onClick: function(evt){
                alert('Clicked Menu Widget Finder 2')
            }
        }));
        pMenuBar.addChild(new PopupMenuBarItem({
            label: "Finder",
            popup: pSubMenu
        }));
    
        var pSubMenu2 = new DropDownMenu({});
        pSubMenu2.addChild(new MenuItem({
            label: "Buffer Radius",
            onClick: function(evt){
                console.log(evt);
                alert('Create Element Tab Container for Radius Buffer')
            }
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Add On 2"
        }));
        pSubMenu2.addChild(new MenuItem({
            label: "Add On 3"
        }));
        pMenuBar.addChild(new PopupMenuBarItem({
            label: "Add Ons",
            popup: pSubMenu2
        }));
        pMenuBar.placeAt("menus");
        pMenuBar.startup();
      }
    });
  });

