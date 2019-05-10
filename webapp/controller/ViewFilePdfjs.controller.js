sap.ui.define([
	"dk/sorenviggo/test/PDF_View_Test002/controller/BaseController",
	"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";
		return BaseController.extend("dk.sorenviggo.test.PDF_View_Test002.controller.ViewFilePdfjs", {
			
			onInit : function () {
				this.getRouter().getRoute("viewfilepdfjs").attachMatched(this._onRouteMatched, this);
			},
			
			_onRouteMatched : function(oEvent){
				this._updateViewModel(oEvent);
			},
			
			_updateViewModel : function(oEvent){
				var height = this.getView().$().height() - 50;
				var width  = this.getView().$().width();
//				sap.m.MessageToast.show(height + "/" + width);
				
				var fileId = oEvent.getParameter("arguments").fileId;
				var fileName = "";
				if (fileId === "7" ){
					fileName = "sample.pdf";
				}else{
					fileName = "abap.pdf";
				}
				var file = this.getModulePath() + "/knowledge/" + fileName;
				var path = this.getModulePath() + "/PDFjs/web/viewer.html?file=../../knowledge/" + fileName;
				
				var html = "<iframe src=\"" + path + "\" height=\"" + height + "px\" width=\"" + width + "px\"/>";
				var oModel = new JSONModel( 
					{ 
						file : file,  
						html : html
					} );
				this.getView().setModel(oModel, "ViewModel");
			}
		});
	}
);			