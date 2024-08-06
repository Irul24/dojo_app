// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Handles ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ./Manipulation ./utils ../../../../draw/support/drawUtils ../../../../interactive/dragEventPipeline ../../../../interactive/GraphicManipulator ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/operations/UpdateVertices ../../../../interactive/editGeometry/support/editPlaneUtils".split(" "),function(f,n,p,q,g,r,t,h,u,k,v,w){class x extends g.Manipulation{constructor(b){super();
this._handles=new n;this._originCache=q.create();this._view=b.view;this._tool=b.tool;this._graphic=b.graphic;this._snapRotation=b.snapRotation;this._manipulator=this._createManipulator();this._handles.add([this._manipulator.events.on("grab-changed",d=>r.onGrabChangedHandle(d,this._manipulator))]);this.forEachManipulator(d=>this._tool.manipulators.add(d))}destroy(){this._handles.destroy();this.forEachManipulator(b=>{this._tool.manipulators.remove(b);b.destroy()});this._originCache=this._handles=this._graphic=
this._snapRotation=this._manipulator=this._view=this._tool=null}forEachManipulator(b){b(this._manipulator,g.ManipulatorType.ROTATE)}createDragPipeline(b,d){let e=null,l=null;return h.createManipulatorDragEventPipeline(this._manipulator,(m,y)=>{y.next(a=>{if("start"===a.action){m.cursor="grabbing";const c=b();e=c.plane;l=c.editGeometryOperations}return a}).next(h.screenToMap(this._view)).next(a=>({...a,rotateAngle:t.getRotationAngle(a.mapStart,a.mapEnd,{x:e.origin[0],y:e.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),
this._snapRotation.next).next(a=>{var c=p.copy(this._originCache,e.origin);c=l.rotate(c,a.rotateAngle,"start"===a.action?k.AccumulationBehavior.NEW_STEP:k.AccumulationBehavior.ACCUMULATE_STEPS,v.AccumulationType.REPLACE);w.apply(c,e);d(a,c);return a}).next(a=>{"end"===a.action&&(m.cursor="grab");return a})})}_createManipulator(){return new u.GraphicManipulator({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}f.RotateManipulation=x;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});