///<reference path='Vehicle.ts'/>
///<reference path='Truck.ts'/>

function getMessage(v:Vehicle):string {
    if (v instanceof Truck) {
        return "Truck called";
    }
    else {
        return "Car called";
    }
}
