function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("fibonacci(1)" + " = " + fibonacci(1));
console.log("fibonacci(2)" + " = " + fibonacci(2));
console.log("fibonacci(3)" + " = " + fibonacci(3));
console.log("fibonacci(4)" + " = " + fibonacci(4));
console.log("fibonacci(5)" + " = " + fibonacci(5));
console.log("fibonacci(6)" + " = " + fibonacci(6));
console.log("fibonacci(7)" + " = " + fibonacci(7));
console.log("fibonacci(8)" + " = " + fibonacci(8));
