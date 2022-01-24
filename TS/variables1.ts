//let
//let keyword introduced in ES6
//let keyword used to declare the variables

/*
    for(let i:number=0;i<5;i++){

    }
    console.log(i);
    //var : 5
    //let : variables1.ts:4:13 - error TS2304: Cannot find name 'i'.

    //var keyword breaks the scope rule
    //let keyword obeys the "scope" rule

*/



/*
    //global variable
    let data:number = 100;



    //block
    {
        //local variable
        let data:number = 200;
    }


    console.log(data);

    //var : 200
    //let : 100

    //var keyword raised the global polluting issue
    //let keyword overcomes the global polluting issue

    //effect of block of code on global members called as global polluting issue
*/



/*
    console.log(data);
    let data:number = 100;


    //var : undefined
    //let : Block-scoped variable 'data' used before its declaration.

    //var keyword raised the variable "hoisting" issue
    //"let" keyword overcomes the variable hoisting issue
*/


/*
    let data:number = 100;
    let data:number = 200;
    console.log(data);


    //var : 200
    //let : Cannot redeclare block-scoped variable 'data'.

    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/

/*
                                var                                             let

    var keyword introduced in ES1                                   let keyword introduced in ES6

    scope rule break by var keyword                                 scope rule obey by let keyword

    global polluting issue raised by                                we can overcome global polluting issue
    var keyword                                                     by using let keyword

    variable hoisting issue raised                                  we can overcome variable hoisting issue
    by var keyword                                                  by using let keyword

    deplicate variables allowed by var                              let keyword won't allows the duplicate variables
    keyword

*/



//const keyword
//ES6
//reinitilization not possible

/*
    const data:number = 100;
    data = 200;                         //Cannot assign to 'data' because it is a constant.
*/


/*
const arr:number[] = [10,20,30,40,50];
//arr = [];                   //Cannot assign to 'arr' because it is a constant.
        
arr[0] = 100;
arr[4] = 500;

console.log(arr);                   //[ 100, 20, 30, 40, 500 ]

arr.push(600);
console.log(arr);                   //[ 100, 20, 30, 40, 500, 600 ]
*/



const obj:any = {"key1":"Hello_1","key2":"Hello_2","key3":"Hello_3"};

//obj = {};               //Cannot assign to 'obj' because it is a constant.

obj.key1 = "Welcome_1";
console.log(obj);           //{ key1: 'Welcome_1', key2: 'Hello_2', key3: 'Hello_3' }



















































































