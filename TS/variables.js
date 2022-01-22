//string
//collection of characters called as "string"
//"" (double quotes) , ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) called as "template literal"
//``(backtick) used to create the "multiline" strings
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = "".concat(sub_one, "<==>").concat(sub_two, "<==>").concat(sub_three);
console.log(mern_stack);
var num1 = 100;
console.log(num1); //100
var bool = true;
console.log(bool); //true
var global = "Hello";
console.log(global); //Hello
var var1 = "Hello";
var1 = 100;
console.log(var1); //100
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [100, 200, 300, 400, 500];
var arr3 = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
var arr4 = ["Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4", "Welcome_5"];
var arr5 = [true, false];
var arr6 = [false, true];
//JSON
//Java Script Object Notation
//JavaScript objects
//JSON, used to transfer the data over the network
//Objects --- {}       Arrays --- []        data --- key & value pairs
//any
var obj = {
    "sub_one": "ReactJS",
    "sub_two": "NodeJS",
    "sub_three": "MongoDB"
};
var obj1 = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
];
var v1 = ["hello_1", "hello_2", "hello_3", "hello_4", "hello_5"];
//for loop
for (var i = 0; i < v1.length; i++) {
    console.log(v1[i]);
}
v1.forEach(function (element, index) {
    console.log(element);
});
for (var _i = 0, v1_1 = v1; _i < v1_1.length; _i++) {
    var x = v1_1[_i];
    console.log(x);
}
var my_obj = {
    "key1": "hello_1",
    "key2": "hello_2",
    "key3": "hello_3"
};
for (var k in my_obj) {
    console.log(k);
    console.log(my_obj[k]);
}
