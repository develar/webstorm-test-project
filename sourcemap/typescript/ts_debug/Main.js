var Main = (function () {
    function Main() { }
    return Main;
})();
function runCar() {
    var m = new Main();
    m._compact = new Car(21, 18);
    return m._compact.drive();
}
function runTruck() {
    var m = new Main();
    m._pickup = new Truck(21, 18);
    var message = getMessage(m._pickup);
    console.log(message);
    return m._pickup.drive();
}
//@ sourceMappingURL=Main.js.map
