/*
    function fun_one<x,y>(param1:x,param2:y):any{
        console.log( param1, param2 );
    }
    fun_one<string,number>("Hello",100);
    //Hello 100
*/
;
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
        this.var_three = "Hello_3";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three);
//Hello_1 Hello_2 Hello_3
var obj2 = {
    var_one: 100,
    var_two: 200,
    var_three: 300
};
console.log(obj2.var_one, obj2.var_two, obj2.var_three);
