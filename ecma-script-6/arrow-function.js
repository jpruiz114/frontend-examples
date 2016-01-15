var data = [
    {name: "Mateo"}, {name: "Marcos"}, {name: "Lucas"}, {name: "Juan"}
];

console.log("***** ***** ***** ***** *****");

// ES5

data.forEach(
    function(currentElement) {
        console.dir(currentElement);
    }
);

console.log("***** ***** ***** ***** *****");

//ES6

data.forEach(
    elem => {
        console.log(elem);
    }
);

console.log("***** ***** ***** ***** *****");
