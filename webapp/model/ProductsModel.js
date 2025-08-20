sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
            createProduct: function() {
                return {
                    ProductID: "S005",
                    ProductName: "IPHONE 16 PLUS 128GB Black",
                    SupplierID: "Apple",
                    CategoryID: "iPhone",
                    QuantityPerUnit: "128",
                    UnitPrice: "62,990.00",
                    UnitsInStock: "128",
                    UnitsOnOrder: "0",
                    ReorderLevel: "0",
                    Discontinued: "false",
                }
            }
        };
});