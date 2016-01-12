var fibonacci = (
    function() {
        var memo = {};

        function f(x, n) {
            var value;

            memo[x] = memo[x] || {};

            if (x in memo && n in memo[x]) {
                value = memo[x][n];
            } else {
                if (n === 0 || n === 1) {
                    value = n;
                } else {
                    value = f(x, n - 1) + f(x, n - 2);
                }

                memo[x][n] = value;
            }

            return value;
        }

        return f;
    }
)();

console.log("fibonacci('cache', 1)" + " = " + fibonacci("cache", 1));
console.log("fibonacci('cache', 2)" + " = " + fibonacci("cache", 2));
console.log("fibonacci('cache', 3)" + " = " + fibonacci("cache", 3));
console.log("fibonacci('cache', 4)" + " = " + fibonacci("cache", 4));
console.log("fibonacci('cache', 5)" + " = " + fibonacci("cache", 5));
console.log("fibonacci('cache', 6)" + " = " + fibonacci("cache", 6));
console.log("fibonacci('cache', 5)" + " = " + fibonacci("cache", 5));
console.log("fibonacci('cache', 4)" + " = " + fibonacci("cache", 4));
console.log("fibonacci('cache', 3)" + " = " + fibonacci("cache", 3));
console.log("fibonacci('cache', 2)" + " = " + fibonacci("cache", 2));
console.log("fibonacci('cache', 1)" + " = " + fibonacci("cache", 1));
