// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function e(a,d=""){""!==d&&a.reasonsIncluded.add(d)}let f=-1383920;class c{constructor(a){this.reasonsIncluded=new Set;this.graphic=a.graphic.clone();this.layer=a.layer;e(this,a.reason)}get featureChangeId(){return`${this.layer.id}:${this.graphic.attributes[this.layer.objectIdField].toString()}`}}class g extends c{constructor(a){super(a);this.type="delete"}}class h extends c{constructor(a){super(a);this.type="add";const d=f--;a.graphic.attributes[a.layer.objectIdField]=
d;this.graphic.attributes[a.layer.objectIdField]=d}}class k extends c{constructor(a){super(a);this.type="modify";this.revertGraphic=a.originalGraphic.clone()}}class l extends c{constructor(a){super(a);this.type="addAttachment";this.attachmentData=null;this.attachmentData=a.attachmentData}}class m extends c{constructor(a){super(a);this.type="deleteAttachment";this.attachment=a.attachment}get featureChangeId(){return`${this.layer.id}:attach:${this.attachment.id.toString()}`}}b.ApplySetAddAttachmentItem=
l;b.ApplySetAddItem=h;b.ApplySetDeleteAttachmentItem=m;b.ApplySetDeleteItem=g;b.ApplySetItemBase=c;b.ApplySetModifyItem=k;b.isAddAttachmentItem=function(a){return"addAttachment"===a.type};b.isAddItem=function(a){return"add"===a.type};b.isDeleteAttachmentItem=function(a){return"deleteAttachment"===a.type};b.isDeleteItem=function(a){return"delete"===a.type};b.isModifyItem=function(a){return"modify"===a.type};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});