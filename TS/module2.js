"use strict";
// import { var_one } from "./module1";
// console.log( var_one );      //Hello_1
exports.__esModule = true;
// import { sub_one } from "./module1";
// import { sub_two } from "./module1";
// import { sub_three } from "./module1";
// import { sub_one,sub_two, sub_three } from "./module1";
// import * as subjects from "./module1";
// console.log( subjects.sub_one, subjects.sub_two, subjects.sub_three );
// import { fun_one } from "./module1";
// console.log( fun_one() );               //hello_1
// import fun_one from "./module1";
// console.log( fun_one() );                   //hello_1
// import var_one from "./module1";
// console.log( var_one );                     //hello
/*
import { fun_one,fun_two, fun_three } from "./module1";
console.log( fun_one(), fun_two(), fun_three() );
//hello_1 hello_2 hello_3
*/
/*
import class_one from "./module1";
let obj:class_one = new class_one();
console.log(
    obj.var_one, obj.var_two, obj.var_three
);
//Hello_1 Hello_2 Hello_3
*/
/*
    import interface1 from "./module1";
    let obj:interface1 = {
        var_one : "Hello_1",
        var_two : "Hello_2",
        var_three : "Hello_3"
    }
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/
var module1_1 = require("./module1");
console.log(module1_1["default"].key1, module1_1["default"].key2, module1_1["default"].key3);
