//variable
//variables are used to store the data
//Ex. string, number, boolean , arrays, objects,......
// we will declare the variables by using var, let , const
//let and const keywords introduced in ES6
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables should not start with digits
//syntax:
/*
    var/let/const variablename = value;
*/

//string
//collection of characters called as string
//"" , '', ``(backtick)
//``(backtick) introduced in "ES6"
//``(backtick) operator called as "template literal"
//``(backtick) operator used to define the "multi line" strings
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var var_three = "MongoDB";
var mern_stack = `${sub_one} <==> ${sub_two} <==> ${var_three}`;
console.log( mern_stack );
//ReactJS <==> NodeJS <==> MongoDB


var decimal_num = 100;
var double_num = 100.12345;
var hexadecinal_num = 0x1234ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, double_num, hexadecinal_num, octal_num, binary_num );
//100 100.12345 19090108 83 10


var flag = true;
var flag1 = false;
console.log( flag, flag1 );         //true false



var arr = [100,200,300,400,500];
//ES6
arr.forEach( (arg1,arg2,arg3)=>{
    console.log( arg1 );
    console.log( arg2 );
    console.log( arg3 );
} );


//JSON
//java script object notation
//json used to transfer the data over the "network"
//json is "light" weight
//objects --- {}
//arrays  --- []
//data    --- key & value pairs
var obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );
//ReactJS NodeJS MongoDB


/*
    for(let i=0;i<5;i++){
        
    }
    console.log(i);
    //var : 5
    //let : ReferenceError: i is not defined
*/


//global variable
let data = 100;


{
    //local variable
    let data = 200;
    
}


console.log( data );            

//var : 200
//let : 100










































































