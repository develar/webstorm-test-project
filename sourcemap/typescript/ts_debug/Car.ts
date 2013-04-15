///<reference path='Vehicle.ts'/>


class Car extends Vehicle {



    constructor(mpg:number, fuel:number)
    {
        super(mpg, fuel);

        this.name = "Car";


    }

    public useAccessory():void
    {
        this.openSunroof();
    }

    private openSunroof():void
    {
        console.log(this.name, 'opened sunroof');
    }

}