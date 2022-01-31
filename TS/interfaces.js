//interface
//when ever we know only declarations, we dont know implementation then we will choose interfaces
//we will define interfaces by using "interface" keyword
//implementation provided by either classes or json
var obj = {
    fun_one: function () {
        return "Hello_1";
    },
    fun_two: function () {
        return "Hello_2";
    },
    fun_three: function () {
        return "Hello_3";
    },
    fun_four: function () {
        return "Hello_4";
    }
};
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three(), obj.fun_four());
