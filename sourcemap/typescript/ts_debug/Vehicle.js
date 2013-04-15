var Vehicle = (function () {
    function Vehicle(mpg, fuel) {
        if (typeof mpg === "undefined") { mpg = 21; }
        if (typeof fuel === "undefined") { fuel = 18.5; }
        this._moving = false;
        this._gasMileage = mpg;
        this._fuelAvailable = fuel;
        this._milesTraveled = 0;
    }
    Vehicle.prototype.useAccessory = function () {
        console.log(this.name, "turned on lights");
    };
    Vehicle.prototype.changeGear = function () {
        console.log(this.name, "changed gear");
    };
    Vehicle.prototype.drive = function () {
        this._fuelAvailable--;
        this._milesTraveled += this._gasMileage;
        if(this._fuelAvailable > 0) {
            this.drive();
        } else {
            console.log("The", this.name, "has a gas mileage of", this._gasMileage, "and traveled", this._milesTraveled, "miles.");
        }
        return "The " + this.name + " has a gas mileage of " + this._gasMileage + " and traveled " + this._milesTraveled + "miles.";
    };
    Vehicle.prototype.getGasMileage = function () {
        return this._gasMileage;
    };
    Vehicle.prototype.setGasMileage = function (mpg) {
        this._gasMileage = mpg;
    };
    Vehicle.prototype.getFuelAvailable = function () {
        return this._fuelAvailable;
    };
    Vehicle.prototype.setFuelAvailable = function (fuel) {
        this._fuelAvailable = fuel;
    };
    Vehicle.prototype.getMilesTraveled = function () {
        return this._milesTraveled;
    };
    return Vehicle;
})();
//@ sourceMappingURL=Vehicle.js.map
