/**
 *
 * @type {{someMethod, anotherMethod}}
 */
var Module = (
    function() {
        var privateMethod = function() {
            // private
        };

        var someMethod = function() {
            // public
        };

        var anotherMethod = function() {
            // public
        };

        return {
            someMethod: someMethod,
            anotherMethod: anotherMethod
        };
    }
)();

/**
 * New module that allows to add a third party property to Module.
 */
var ModuleTwo = (
    function(Module) {
        Module.extension = function() {
            // another method!
        };

        return Module;
    }
)(Module || {});

console.log(Module);
