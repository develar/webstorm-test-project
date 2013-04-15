///<reference path='Vehicle.ts'/>
class Truck extends Vehicle {
      constructor(mpg:number, fuel:number) {
            super(mpg, fuel);
            this.name = "Truck";
            console.log("Truck created");
      }
      public useAccessory():void {
            super.useAccessory();
            this.lowerTailgate();
      }

      private lowerTailgate():void {
            console.log(this.name, "lowered tailgate");
      }
}