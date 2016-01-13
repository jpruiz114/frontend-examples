/**
 *
 * @param options
 * @constructor
 */
function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";

}

/**
 *
 * @param options
 * @constructor
 */
function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

/**
 *
 * @constructor
 */
function VehicleFactory() {

}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType){
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
        //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }

    return new this.vehicleClass(options);
};

// Create an instance of our factory that makes cars
var vehicleFactory = new VehicleFactory();

var car = vehicleFactory.createVehicle({vehicleType: "car", color: "yellow", doors: 6});

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(car instanceof Car);

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);

/* ***** */

// Approach #1: Modify a VehicleFactory instance to use the Truck class

var truck = vehicleFactory.createVehicle({vehicleType: "truck", state: "like new", color: "red", wheelSize: "small"});

// Test to confirm our truck was created with the vehicleClass/prototype Truck

// Outputs: true
console.log(truck instanceof Truck);

// Outputs: Truck object of color "red", a "like new" state
// and a "small" wheelSize
console.log(truck);

/* ***** */

// Approach #2: Subclass VehicleFactory to create a factory class that builds Trucks

/**
 *
 * @constructor
 */
function TruckFactory() {

}

TruckFactory.prototype = new VehicleFactory();

TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();

var myBigTruck = truckFactory.createVehicle({state: "omg... so bad.", color: "pink", wheelSize: "so big"});

// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log(myBigTruck instanceof Truck);

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log(myBigTruck);