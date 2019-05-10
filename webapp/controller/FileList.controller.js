sap.ui.define([
	"dk/sorenviggo/test/PDF_View_Test002/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("dk.sorenviggo.test.PDF_View_Test002.controller.FileList", {
		onInit: function () {
			this.setViewModel();

			this._pdfViewer = new sap.m.PDFViewer();
			this.getView().addDependent(this._pdfViewer);
		},
		
		setViewModel: function(){
			var oModel = new JSONModel(
				{
					files: [
						{
							fileId: "1",
							title: "Sample - via PDFViewer (embedded)",
							type: "UI5_EMBEDDED",
							file: "sample.pdf"
						},
						{
							fileId: "2",
							title: "ABAP - via PDFViewer (embedded)",
							type: "UI5_EMBEDDED",
							file: "abap.pdf"
						},
						{
							fileId: "5",
							title: "Sample - via PDFViewer (new window)",
							type: "UI5_POPUP",
							file: "sample.pdf"
						},
						{
							fileId: "6",
							title: "ABAP - via PDFViewer (new window)",
							type: "UI5_POPUP",
							file: "abap.pdf"
						},
						{
							fileId: "3",
							title: "Sample - via PDF.js",
							type: "PDFJS",
							file: "sample.pdf"
						},
						{
							fileId: "4",
							title: "ABAP - via PDF.js",
							type: "PDFJS",
							file: "abap.pdf"
						}
					]
				}
			);
			this.getView().setModel(oModel, "ViewModel");
		},
		
		onItemPress: function(oEvent){
			var obj = oEvent.getParameter("listItem").getBindingContext("ViewModel").getObject();
			var fileId = obj.fileId;
			if (fileId === "1" || fileId === "2"){
				this.navTo("viewFile", { fileId : fileId });
			}else if (obj.type === "PDFJS"){
				location.href = this.getModulePath() + "/PDFjs/web/viewer.html?file=../../knowledge/" + obj.file;
			}else if (obj.type === "UI5_POPUP"){
				var filePath = this.getModulePath() + "/knowledge/" + obj.file;
				this._pdfViewer.setSource(filePath);
				this._pdfViewer.setTitle(obj.file);
				this._pdfViewer.open();	
			}
		}

	});
});