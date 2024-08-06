// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/handleUtils ../../core/MapUtils ../input/InputManager ../input/keys".split(" "),function(e,l,k,m,n,f){f={moveUp:{key:"ArrowUp",modifier:"Shift",repeats:!0},moveDown:{key:"ArrowDown",modifier:"Shift",repeats:!0},moveLeft:{key:"ArrowLeft",modifier:"Shift",repeats:!0},moveRight:{key:"ArrowRight",modifier:"Shift",repeats:!0},scaleUp:{key:"+",modifier:"Shift"},scaleDown:{key:"-",modifier:"Shift"},factorModifier:{key:f.primaryKey,continuePropagation:!0},
toggleOpacity:"t",preserveAspectRatio:{key:"Shift",continuePropagation:!0},rotateIncrements:{key:"Shift",continuePropagation:!0},undo:"z",redo:"r"};class p{constructor(){this._bindings=new Map}add(c,a){return this.addToggle(c,b=>{"key-down"===b.type&&a(b)})}addToggle(c,a){const b=g.fromDefinition(c,a),d=m.getOrCreateMapValue(this._bindings,b.key,()=>[]);d.push(b);return k.makeHandle(()=>l.remove(d,b))}register(c,a=n.ViewEventPriorities.WIDGET){return k.handlesGroup([c.on("key-down",b=>this.dispatch(c.inputManager,
b),a),c.on("key-up",b=>this.dispatch(c.inputManager,b),a)])}dispatch(c,a){const b=this._bindings.get(a.key);if(b)for(const d of b)d.process(c,a)}}class g{constructor(c,a,b,d,h){this.key=c;this.modifiers=a;this.repeats=b;this.continuePropagation=d;this.callback=h}process(c,a){if(!(a.key!==this.key||"repeat"in a&&a.repeat&&!this.repeats)){for(const b of this.modifiers)if(!c.isModifierKeyDown(b))return;this.continuePropagation||a.stopPropagation();this.callback(a)}}static fromDefinition(c,a){if("string"===
typeof c)return new g(c,[],!1,!1,a);const {key:b,modifier:d,repeats:h,continuePropagation:q}=c;return new g(b,d?Array.isArray(d)?d:[d]:[],!!h,!!q,a)}}e.KeyBindings=p;e.mediaKeys=f;e.sketchKeys={redo:"r",undo:"z",center:"Alt",constraint:"Shift",cancel:"Escape",delete:["Backspace","Delete"],complete:"Enter",vertexAdd:"f",pan:" "};e.snappingKeys={toggle:"Control"};e.tooltipKeys={enterInputMode:"Tab",commit:"Enter",discard:"Escape",next:"Tab"};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});