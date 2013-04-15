/**
 * Created with JetBrains WebStorm.
 * User: Elena.Pogorelova
 * Date: 2/18/13
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */

interface IVehicle {
     getGasMileage():number;
     setGasMileage(mpg:number):void;
     getFuelAvailable():number;
     setFuelAvailable(fuel:number):void;
     getMilesTraveled():number;
}
