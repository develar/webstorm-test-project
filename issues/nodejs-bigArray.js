(function () {
    "use strict";

    var i, array = [];
    for (i = 0; i < 1000; i++) {
        array.push({ID: i});
    }

    console.log(array[0]);
}());