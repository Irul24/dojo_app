// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../core/Accessor ../core/clock ../core/Collection ../core/has ../core/Logger ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../core/support/UpdatingHandles ./input/InputManager ./input/ViewEvents ./interactive/interactiveToolUtils ./interactive/interfaces ./interactive/ToolViewManagerManipulatorState".split(" "),function(d,e,k,n,l,y,p,q,g,f,z,r,t,u,v,h,w,x){d.ToolViewManager=
class extends k{constructor(a){super(a);this._updatingHandles=new t.UpdatingHandles;this._clock=n.clock;this._manipulatorState=new x.ToolViewManagerManipulatorState;this.tools=new l;this.cursor=null;this._interacting=!1;this._interactingTimeout=1E3;this._interactingTimeoutHandle=null;this._forEachTool=b=>{for(const c of this.tools.items)if(b(c))break}}initialize(){this.addHandles([this.view.on(v.eventTypes,a=>{this._handleInputEvent(a)},u.ViewEventPriorities.TOOL),...h.getToolCollectionHandles(this.tools),
this.tools.on("before-add",({item:a})=>{this._updateToolEditableFlag(a)}),this.tools.on("before-remove",({item:a})=>{this._manipulatorState.clearPointers(a,this._manipulatorStateEventArgs);this._updateCursor()}),this.tools.on("change",()=>{this._refreshToolWatchers()})])}destroy(){this.activeTool=null;this.tools.drain(a=>a.destroy());this._clearInteractingTimeout();this._interacting=!1;this._updatingHandles.destroy()}get _manipulatorStateEventArgs(){return{forEachTool:this._forEachTool,activeTool:this.activeTool,
setActiveTool:a=>{this.activeTool=a},view:this.view}}set activeTool(a){if(null!=a&&!this.view.ready)p.getLogger(this).error("Cannot set active tool while view is not ready.");else if(a!==this.activeTool){var b=this.activeTool;this._set("activeTool",a);null!=b&&b.deactivate();null!=a&&a.activate();this._removeIncompleteTools(a);for(const c of this.tools)this._updateToolEditableFlag(c),a=h.areToolManipulatorsEditable(c),null!=this.activeTool&&a||this._manipulatorState.clearPointers(c,this._manipulatorStateEventArgs,
!a);this._updateCursor()}}get updating(){return this._updatingHandles.updating||this.tools.some(a=>a.updating)}get interacting(){return this._interacting}_clearInteractingTimeout(){this._interactingTimeoutHandle=q.removeMaybe(this._interactingTimeoutHandle)}_startInteractingTimeout(){this._clearInteractingTimeout();this._interactingTimeoutHandle=this._clock.setTimeout(()=>this._interacting=!1,this._interactingTimeout)}attach(){"3d"===this.view.type?this.addHandles([g.watch(()=>{const {state:a}=this.view;
return"camera"in a&&a.camera},()=>this._forEachManipulator(a=>a.onViewChange())),this.view.elevationProvider?.on("elevation-change",a=>this._forEachManipulator(b=>b.onElevationChange(a)))],"attached"):this.addHandles(g.watch(()=>this.view.extent,()=>this._forEachManipulator(a=>a.onViewChange())))}detach(){this.activeTool=null;this.tools.removeAll();this.removeHandles("attached");this._clearInteractingTimeout();this._interacting=!1}_forEachManipulator(a){this._forEachTool(b=>{b.manipulators&&b.manipulators.forEach(({manipulator:c})=>
a(c,b))})}_handleInputEvent(a){let b=!1;const c={...a,stopPropagation:()=>{b=!0;a.stopPropagation()}};null!=this.activeTool?this.activeTool.handleInputEvent&&this.activeTool.handleInputEvent(c):this._forEachTool(m=>{!b&&m.visible&&m.handleInputEvent(c)});!b&&"key-down"===a.type&&"Escape"===a.key&&this.activeTool&&(a.stopPropagation(),this.activeTool=null);this._manipulatorState.handleInputEvent(c,this._manipulatorStateEventArgs);b||null==this.activeTool||this.activeTool.handleInputEventAfter(c);this._manipulatorState.handleHoverEvent(c,
this._forEachTool);this._updateCursor();"pointer-move"===a.type&&(this._manipulatorState.hasFocusedManipulators()||this.activeTool)&&(this._interacting=!0,this._startInteractingTimeout())}_refreshToolWatchers(){this.removeHandles("tools");this._forEachTool(a=>{if(a instanceof k){const b=g.watch(()=>[a.cursor,a.visible,a.editable],()=>{h.areToolManipulatorsEditable(a)||this._manipulatorState.clearPointers(a,this._manipulatorStateEventArgs);this._updateCursor()});this.addHandles(b,"tools")}a.manipulators&&
this.addHandles([a.manipulators.on("after-remove",b=>{this._manipulatorState.clearPointers(a,this._manipulatorStateEventArgs,!0,b.item.manipulator)}),a.manipulators.on("change",()=>{this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool);this._updateCursor()})],"tools")});this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool);this._updateCursor()}_updateToolEditableFlag(a){a.setEditableFlag?.(w.EditableFlag.MANAGER,null==this.activeTool||a===this.activeTool)}_updateCursor(){let a=
this._manipulatorState.cursor;null==a&&this._forEachTool(b=>null!=b.cursor&&b.visible?(a=b.cursor,!0):!1);this._get("cursor")!==a&&this._set("cursor",a)}_removeIncompleteTools(a){this.tools.filter(b=>(null==a||b!==a)&&!b.created&&b.removeIncompleteOnCancel).forEach(b=>{this.tools.remove(b)})}get test(){}};e.__decorate([f.property({constructOnly:!0,nonNullable:!0})],d.ToolViewManager.prototype,"view",void 0);e.__decorate([f.property({value:null})],d.ToolViewManager.prototype,"activeTool",null);e.__decorate([f.property({readOnly:!0,
type:l})],d.ToolViewManager.prototype,"tools",void 0);e.__decorate([f.property({readOnly:!0})],d.ToolViewManager.prototype,"cursor",void 0);e.__decorate([f.property({readOnly:!0})],d.ToolViewManager.prototype,"updating",null);e.__decorate([f.property()],d.ToolViewManager.prototype,"_interacting",void 0);e.__decorate([f.property({readOnly:!0})],d.ToolViewManager.prototype,"interacting",null);d.ToolViewManager=e.__decorate([r.subclass("esri.views.ToolViewManager")],d.ToolViewManager);d.interactingTimeout=
1E3;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});