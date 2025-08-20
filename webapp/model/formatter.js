sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
], 
function (JSONModel, Device) {
    "use strict";

    return {
        createAddress: function() {
            return {
                Eid: "john.j.t.mallari",
                Enabled: "true",
                Address: { Street: "Acacia",
                           City: "Dasmarinas Cavite",
                           Zip: "4114",
                           Country: "Philippines", 
                },
                SalesAmount: "999,999,999.00",
                CurrencyCode: "Php",
                UnitPrice: "999,999,999.00",
            }
        }
    };

});