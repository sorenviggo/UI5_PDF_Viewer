/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dk/sorenviggo/test/PDF_View_Test002/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});