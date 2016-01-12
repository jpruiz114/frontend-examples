// Each of the following options will create a new empty object:

var newObject = {};
console.dir(newObject);

// or
var newObject = Object.create(Object.prototype);
console.dir(newObject);

// or
var newObject = new Object();
console.dir(newObject);
