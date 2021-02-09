sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("st.smarttable.controller.View1", {
			onInit: function () {
             this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			},
			onChangeItemi:function(oEvent){
				debugger;
				var path = oEvent.getParameter("listItem").getBindingContextPath();
				var path2 = path.slice(11,12);

				this.oRouter.navTo("RouteView2",{
				data1: path2
				
				});

			}
		});
	});
