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
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;

    {
        //local variable
        let data = 200;
    }

    console.log( data );            

    //var : 200
    //let : 100
    //var keyword raised the global polluting issue
    //let keyword overcomes the global polluting issue
*/

/*
    //1) declaration
    //2) initilization
    //3) printing
    console.log( data );
    let data = 100;
    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization
    //var keyword raised the variable hoisting issue
    //we can overcome variable hoisting by using let keyword
    //accessing the variables before its declaration and initilization called as variable hoisting
*/


/*
let data = 100;
let data = 200;
console.log( data );
*/
//var : 200
//let : SyntaxError: Identifier 'data' has already been declared

//var keyword allows the duplicate variables
//let keyword won't allows the duplicate variables

/*
                var                         let
    var keyword introduced in          let keyword introduced in 
    ES1                                 ES6

    var keyword breaks the scope        let keyword obeys the scope
    rule                                rule

    var keyword allows the duplicate    let keyword won't allows the duplicate
    variables                           variables

    global polluting issue raised       we can overcome global polluting issue
    because of var keyword              by using let keyword

    variable hoisting issue raised      we can overcome variable hoisting issue
    because of var keyword              with let keyword

    var keyword is the global scope     block scoped member
*/



//const
//ES6
//reinitilization not possible

/*const data = 100;
data = 200;
*/

//TypeError: Assignment to constant variable.

const arr1 = [10,20,30,40,50];
//arr = [];                         //SyntaxError: Identifier 'arr' has already been declared
//arr = [100,200,300,400,500];        //SyntaxError: Identifier 'arr' has already been declared


arr1[0] = 100;
arr1[5] = 600;
console.log(arr1);              //[ 100, 20, 30, 40, 50, 600 ]


const obj1 = {
    "key1" : "value1",
    "key2" : "value2",
    "key3" : "value3"
};
//obj1 = {};                  //TypeError: Assignment to constant variable.
obj1.key1 = "hello_1";
console.log( obj1 );            //{ key1: 'hello_1', key2: 'value2', key3: 'value3' }




































































