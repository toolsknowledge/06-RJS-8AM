var namespace1;
(function (namespace1) {
    namespace1.var_one = "Hello";
})(namespace1 || (namespace1 = {}));
/// <reference path="name1.ts" />
var namespace2;
(function (namespace2) {
    function fun_one() {
        return namespace1.var_one;
    }
    namespace2.fun_one = fun_one;
})(namespace2 || (namespace2 = {}));
;
/// <reference path="name2.ts" />
var namespace3;
(function (namespace3) {
    var class_one = /** @class */ (function () {
        function class_one() {
        }
        class_one.prototype.my_fun = function () {
            return namespace2.fun_one();
        };
        return class_one;
    }());
    namespace3.class_one = class_one;
})(namespace3 || (namespace3 = {}));
/// <reference path="name3.ts" />
var obj = new namespace3.class_one();
console.log(obj.my_fun());
