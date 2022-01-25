/*
    function fun_one():void{
        console.log("Hello");
    }
    fun_one();
*/


/*
    function fun_one(param1:string,param2:string,param3:string):void{
        console.log(param1, param2, param3 );
    }

    //fun_one();                                //Expected 3 arguments, but got 0.
    fun_one("Hello_1","Hello_2","Hello_3");     //Hello_1 Hello_2 Hello_3
*/


/*
    //default parameters in functions
    //ES6
    function fun_one(param1:string="Hello_1",param2:string="Hello_2",param3:string="Hello_3"):void{
        console.log(param1, param2, param3 );
    }
    fun_one();                                      //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1");                           //Welcome_1 Hello_2 Hello_3
    fun_one(undefined,"Welcome_2");                 //Hello_1 Welcome_2 Hello_3
    fun_one(null,"Welcome_2",null);                 //null Welcome_2 null
*/



/*
// ... called as spread operator
// ... introduced in ES6
// because of spread operator parameter behaves like array
// we can have only "one" spread operator per "function"
// position of spread operator always "last" in parameters 
function fun_one(...param1:any):void{
    console.log(param1);
}
fun_one("Hello_1");                     //[ 'Hello_1' ]
fun_one("Hello_1","Hello_2");           //[ 'Hello_1', 'Hello_2' ]
fun_one();                              //[]
fun_one(undefined,undefined);           //[ undefined, undefined ]
fun_one(null,null);                     //[ null, null ]
*/

/*
    function fun_one(...param1:any,...param2:any){}
    //A rest parameter must be last in a parameter list.
*/


/*
    function fun_one(...param1:any,param2:any):any{}
    //A rest parameter must be last in a parameter list.
*/






































