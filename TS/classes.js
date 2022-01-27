var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }
    class_one.prototype.fun_one = function () {
        return this.sub_one;
    };
    class_one.prototype.fun_two = function () {
        return this.sub_two;
    };
    class_one.prototype.fun_three = function () {
        return this.sub_three;
    };
    return class_one;
}());
var obj = new class_one();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
