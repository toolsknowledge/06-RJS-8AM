/*
    namespace namespace1{
        export let var_one:string = "Hello";
    }
*/
var namespace1;
(function (namespace1) {
    function fun_one() {
        return "Hello";
    }
    namespace1.fun_one = fun_one;
})(namespace1 || (namespace1 = {}));
/*
    /// <reference path="namespace1.ts" />
    console.log( namespace1.var_one );
*/
/// <reference path="namespace1.ts" />
console.log(namespace1.fun_one());
