var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(mpg, fuel) {
        _super.call(this, mpg, fuel);
        this.name = "Car";
    }
    Car.prototype.useAccessory = function () {
        this.openSunroof();
    };
    Car.prototype.openSunroof = function () {
        console.log(this.name, 'opened sunroof');
    };
    return Car;
})(Vehicle);
//@ sourceMappingURL=Car.js.map
