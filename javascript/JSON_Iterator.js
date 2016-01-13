var recordsPerIteration;

var iterationNumber;

// Random JSON data generated here: https://www.mockaroo.com/

process.argv.forEach(
    function (val, index, array) {
        console.log("Element " + index  + ": " + array[index]);

        if (array.length > 2) {
            if (index == 2) {
                recordsPerIteration = parseInt(array[index]);
            }

            if (index == 3) {
                iterationNumber = parseInt(array[index]);
            }
        }

        if (index == array.length - 1) {
            processFile();
        }
    }
);

function processFile() {
    if (typeof recordsPerIteration === "undefined") {
        recordsPerIteration = 50;
    }

    if (typeof iterationNumber === "undefined") {
        iterationNumber = 1;
    }

    console.log("recordsPerIteration" + " = " + recordsPerIteration);
    console.log("iterationNumber" + " = " + iterationNumber);

    var data = require("./MOCK_DATA.json");

    var numberOfElements = data.length;
    console.log("numberOfElements" + " = " + numberOfElements);

    var minIndex = recordsPerIteration * iterationNumber;
    console.log("minIndex" + " = " + minIndex);

    var maxIndex = minIndex + recordsPerIteration;
    console.log("maxIndex" + " = " + maxIndex);

    data.forEach(
        function(element, index, array) {
            if (index >= minIndex && index < maxIndex) {
                console.log("index" + " = " + index);
                processElement(element);
            }
        }
    );
}

function processElement(element) {
    console.dir(element);
}
