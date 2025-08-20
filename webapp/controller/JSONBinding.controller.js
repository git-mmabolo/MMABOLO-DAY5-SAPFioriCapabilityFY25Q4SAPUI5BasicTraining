sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/ProductsModel",
    "../model/formatter"
], (Controller, JSONModel, ProductsModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        onInit() {
            var oProductsModel = new JSONModel({
                products: [ProductsModel.createProduct()]
            })
            this.getView().setModel(oProductsModel, "productsModel");

            var oFormatter = new JSONModel({
                formatter: [formatter.createAddress()]
            })
            this.getView().setModel(oFormatter, "formatter");
        },

        onSendEmail: function() {
            var sTo = "@acceture.com";
            var sSubject = "Test email to";
            var sBody = "Hi! How are you?";

            URLHelper.triggerEmail(sTo, sSubject, sBody);
        }
    });
});