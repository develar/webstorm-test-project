///<reference path='Car.ts'/>
///<reference path='Truck.ts'/>
///<reference path='utils.ts'/>
class Main {
    public _compact:Car;
    public _pickup:Truck;
}
function runCar():string {
    var m = new Main();
    m._compact = new Car(21, 18);
    return m._compact.drive();
}
function runTruck():string {
    var m = new Main();
    m._pickup = new Truck(21, 18);
    var message = getMessage(m._pickup);
    console.log(message);
    return m._pickup.drive();
}