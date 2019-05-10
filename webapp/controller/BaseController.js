sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
		"use strict";

		return Controller.extend("dk.sorenviggo.test.PDF_View_Test002.controller.BaseController", {
			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this component
			 */
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},
			
			navTo : function(route, object){
				var obj = object;
				if(!obj){
					obj = {};
				}
				this.getRouter().navTo(route, obj, false);
			},
			
			navBack : function(route){
				var sPreviousHash = History.getInstance().getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					//Validate route.
					var oRoute = this.getRouter().getRoute(route);
					if(oRoute){
						this.getRouter().navTo(route, {}, true);
					}else{
						this.getRouter().navTo("fileList", {}, true);
					}
				}
			},
			
			getModulePath : function(){
				return jQuery.sap.getModulePath("dk.sorenviggo.test.PDF_View_Test002");
			}
		});
	}
);			