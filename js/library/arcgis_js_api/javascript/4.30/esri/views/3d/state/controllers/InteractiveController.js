// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../ViewStateManager ./CameraController ../../webgl/RenderCamera".split(" "),function(b,c,d,l,m,n,k,e,f,g){b.InteractiveController=class extends f.CameraController{constructor(){super(...arguments);this.startCamera=new g;this.currentCamera=new g;this._lastInteraction=0}get isInteractive(){return performance.now()-
this._lastInteraction<e.interactingTimeout}stepController(a,h){h.copyViewFrom(this.currentCamera);this.currentCamera.copyFrom(h)}onControllerStart(a){this.state=f.State.Running;this.startCamera.copyFrom(a);this.currentCamera.copyFrom(a)}onControllerEnd(a){a.copyViewFrom(this.currentCamera)}commitCamera(){this._lastInteraction=performance.now();setTimeout(()=>this.notifyChange("isInteractive"),e.interactingTimeout);this.view.state.updateCamera(a=>this.stepController(0,a));this.steppingFinished&&this.finishController()}};
c.__decorate([d.property({readOnly:!0})],b.InteractiveController.prototype,"isInteractive",null);c.__decorate([d.property()],b.InteractiveController.prototype,"_lastInteraction",void 0);b.InteractiveController=c.__decorate([k.subclass("esri.views.3d.state.controllers.InteractiveController")],b.InteractiveController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});