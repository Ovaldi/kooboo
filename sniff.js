define(["has"],function(has){
    "use strict";
    
    var n = navigator,
        dua = n.userAgent;

    has.add("chrome", parseFloat(dua.split("Chrome/")[1]) || undefined);
    has.add("quirks", document.compatMode == "BackCompat");

    return has;
});
