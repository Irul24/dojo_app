/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import r from"./ColumnTemplateBase.js";import{EditableColumnTemplateMixin as o}from"./EditableColumnTemplateMixin.js";import"../../../chunks/ensureType.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../form/elements/support/inputs.js";import"../../../form/elements/inputs/BarcodeScannerInput.js";import"../../../form/elements/inputs/TextInput.js";import"../../../form/elements/inputs/Input.js";import"../../../form/elements/inputs/ComboBoxInput.js";import"../../../form/elements/inputs/DatePickerInput.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../../../form/elements/inputs/DateTimePickerInput.js";import"../../../form/elements/inputs/RadioButtonsInput.js";import"../../../form/elements/inputs/SwitchInput.js";import"../../../form/elements/inputs/TextAreaInput.js";import"../../../form/elements/inputs/TextBoxInput.js";import"../../../form/elements/inputs/TimePickerInput.js";let p=class extends(o(r)){constructor(t){super(t),this.type="column"}};t([e({type:String,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=t([s("esri.widgets.FeatureTable.support.ColumnTemplate")],p);const m=p;export{m as default};
