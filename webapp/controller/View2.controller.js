sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("st.smarttable.controller.View2", {
			onInit: function () {
                  this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
                this.oRouter.attachRoutePatternMatched(this.onClickList, this);
                //   this.oRouter.attachRoutePatternMatched(this.onClickList, this);
			},
            onClickList:function(oEvent){
                debugger;
                
                this.sPath= oEvent.getParameter("arguments").data1;
                // this.getView().byId("smartForm").bindElement("/Employees(sPath)");
               this.getView().byId("smartForm").bindElement("/Employees(" + this.sPath + ")");
               
                
            },
           

            onNavP:function(){
                debugger;
                this.oRouter.navTo("RouteView1");

            }
			
		});
	});
