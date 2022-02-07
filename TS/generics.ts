/*
    function fun_one<x,y>(param1:x,param2:y):any{
        console.log( param1, param2 );
    }
    fun_one<string,number>("Hello",100);        
    //Hello 100
*/


/*
    function fun_one<x,y>(param1:x,param2:y,param3:string):any{
        console.log( param1, param2, param3 );
    };
    fun_one<any,any>("Hello_1","Hello_2","Hello_3");
    //Hello_1 Hello_2 Hello_3
*/


/*
    class class_one<A,B,C>{
        sub_one:A;
        sub_two:B;
        sub_three:C;
        constructor(arg1:A,arg2:B,arg3:C){
            this.sub_one = arg1;
            this.sub_two = arg2;
            this.sub_three = arg3;
        }
    }
    let obj:class_one<string,string,string> = new class_one("ReactJS","NodeJS","MongoDB");
    console.log(
        obj.sub_one, obj.sub_two, obj.sub_three
    );
    //ReactJS NodeJS MongoDB
*/



interface interface1<X,Y,Z>{
    var_one:X;
    var_two:Y;
    var_three:Z;
};

class class_one implements interface1<string,string,string>{
    var_one: string = "Hello_1";
    var_two: string = "Hello_2";
    var_three: string = "Hello_3";
}
let obj:class_one = new class_one();
console.log( obj.var_one, obj.var_two, obj.var_three );
//Hello_1 Hello_2 Hello_3


let obj2:interface1<number,number,number> = {
    var_one : 100,
    var_two : 200,
    var_three : 300
}
console.log( obj2.var_one, obj2.var_two, obj2.var_three );
//100 200 300



























































