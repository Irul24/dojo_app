// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass".split(" "),function(g,h,k,l,m,n,r,t,p){function e(c,b,a){if(c)for(let f=0,q=c.length;f<q;f++){var d=c.at(f);if(d[b]===a||"group"===d?.type&&(d=e(d.tables,b,a)))return d}}g.TablesMixin=c=>{c=class extends c{constructor(...b){super(...b);this.tables=new k;this.addHandles([this.tables.on("after-add",
a=>{a=a.item;a.parent&&a.parent!==this&&"tables"in a.parent&&a.parent.tables.remove(a);a.parent=this;"feature"!==a.type&&m.getLogger(this).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",a=>{a.item.parent=null})])}destroy(){const b=this.tables.toArray();for(const a of b)a.destroy();this.tables.destroy()}set tables(b){this._set("tables",l.referenceSetter(b,this._get("tables")))}findTableById(b){return e(this.tables,
"id",b)}findTableByUid(b){return e(this.tables,"uid",b)}};h.__decorate([n.property()],c.prototype,"tables",null);return c=h.__decorate([p.subclass("esri.support.TablesMixin")],c)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});