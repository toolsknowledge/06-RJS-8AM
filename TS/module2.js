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
var module1_1 = require("./module1");
console.log((0, module1_1.fun_one)(), (0, module1_1.fun_two)(), (0, module1_1.fun_three)());
