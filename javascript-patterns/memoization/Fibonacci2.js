var fibonacci = (
    function() {
        var memo = {};

        function f(n) {
            var value;

            if (n in memo) {
                value = memo[n];
            } else {
                if (n === 0 || n === 1) {
                    value = n;
                }
                else {
                    value = f(n - 1) + f(n - 2);
                }

                memo[n] = value;
            }

            return value;
        }

        return f;
    }
)();

console.log("fibonacci(1)" + " = " + fibonacci(1));
console.log("fibonacci(2)" + " = " + fibonacci(2));
console.log("fibonacci(3)" + " = " + fibonacci(3));
console.log("fibonacci(4)" + " = " + fibonacci(4));
console.log("fibonacci(5)" + " = " + fibonacci(5));
console.log("fibonacci(6)" + " = " + fibonacci(6));
console.log("fibonacci(7)" + " = " + fibonacci(7));
console.log("fibonacci(8)" + " = " + fibonacci(8));
