function foo(position) {
    console.dir(arguments);

    var argumentsLength = arguments.length;
    console.log("argumentsLength" + " = " + argumentsLength);

    console.log("position" + " = " + position);

    return arguments[position];
}

console.log("Argument 1: " + foo(1, 'a', 'b', 'c', 'd', 'e'));
console.log("Argument 2: " + foo(2, 'a', 'b', 'c', 'd', 'e'));
console.log("Argument 3: " + foo(3, 'a', 'b', 'c', 'd', 'e'));
console.log("Argument 4: " + foo(4, 'a', 'b', 'c', 'd', 'e'));
console.log("Argument 5: " + foo(5, 'a', 'b', 'c', 'd', 'e'));
