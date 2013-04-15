var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(mpg, fuel) {
        _super.call(this, mpg, fuel);
        this.name = "Truck";
        console.log("Truck created");
    }
    Truck.prototype.useAccessory = function () {
        _super.prototype.useAccessory.call(this);
        this.lowerTailgate();
    };
    Truck.prototype.lowerTailgate = function () {
        console.log(this.name, "lowered tailgate");
    };
    return Truck;
})(Vehicle);
//@ sourceMappingURL=Truck.js.map
