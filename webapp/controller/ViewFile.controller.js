sap.ui.define([
	"dk/sorenviggo/test/PDF_View_Test002/controller/BaseController",
	"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";
		return BaseController.extend("dk.sorenviggo.test.PDF_View_Test002.controller.ViewFile", {
			
			onInit : function () {
				this.getRouter().getRoute("viewFile").attachMatched(this._onRouteMatched, this);
			},
			
			_onRouteMatched : function(oEvent){
				this._updateViewModel(oEvent);
			},
			
			_updateViewModel : function(oEvent){
				var fileId = oEvent.getParameter("arguments").fileId;
				var fileName = "";
				if (fileId === "1" ){
					fileName = "sample.pdf";
				}else{
					fileName = "abap.pdf";
				}
				var file = "";
				file = this.getModulePath() + "/knowledge/" + fileName;
				var oModel = new JSONModel( { file : file } );
				this.getView().setModel(oModel, "ViewModel");
			}
		});
	}
);			