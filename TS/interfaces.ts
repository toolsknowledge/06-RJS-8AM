//interface
//when ever we know only declarations, we dont know implementation then we will choose interfaces
//we will define interfaces by using "interface" keyword
//implementation provided by either classes or json

/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    }
    class class_one implements interface1{
        sub_one: string = "Angular13";
        sub_two: string = "NodeJS";
        sub_three: string = "MongoDB";
    }
    class class_two implements interface1{
        sub_one: string = "ReactJS";
        sub_two: string = "NodeJS";
        sub_three: string = "MongoDB";
    }
    let my_json:interface1 = {
        "sub_one" : "VueJS",
        "sub_two" : "NodeJS",
        "sub_three" : "MongoDB"
    }
    let obj1:class_one = new class_one();
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );                  //Angular13 NodeJS MongoDB

    let obj2:class_two = new class_two();
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );                  //ReactJS NodeJS MongoDB

    console.log( my_json.sub_one, my_json.sub_two, my_json.sub_three );         //VueJS NodeJS MongoDB
*/

/*
    interface interface1{
        fun_one():any;
    };

    class class_one implements interface1{
        fun_one():any{
            return "Hello";
        }
    }
    let obj1:class_one = new class_one();
    console.log( obj1.fun_one() );


    let obj2:interface1 = {
        fun_one : ():any=>{
            return "Welcome";
        }
    }
    console.log(obj2.fun_one());
*/


/*
interface interface1{
    var_one:string;
};

interface interface2 extends interface1{
    var_two:string;
}

let obj:interface2 = {
    var_one : "Hello_1",
    var_two : "Hello_2"
}

console.log( obj.var_one, obj.var_two );
*/




/*
    interface interface1{
        var_one:any;
    };

    interface interface2 extends interface1{
        var_two:any;
    };

    interface interface3 extends interface2{
        var_three:any;
    };

    let obj:interface3 = {
        var_one : "hello_1",
        var_two : "hello_2",
        var_three : "hello_3"
    };

    console.log( obj.var_one, obj.var_two, obj.var_three );
*/

/*
    interface interface1{
        var_one:string;
    };
    interface interface2{
        var_two:string;
    };
    interface interface3 extends interface1,interface2{
        var_three:string;
    };
    let obj:interface3 = {
        var_one : "Hello_1",
        var_two : "Hello_2",
        var_three : "Hello_3"
    };
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/

/*
interface interface1{
    var_one:string;
}

interface interface2 extends interface1{
    var_two:string;
}

interface interface3 extends interface1{
    var_two:string;
}

interface interface4 extends interface1{
    var_two:string;
}

let obj1:interface2 = {
    var_one : "Hello_1",
    var_two : "Hello_2"
};

let obj2:interface3 = {
    var_one : "Hello_1",
    var_two : "Hello_3"
};


let obj3:interface4 = {
    var_one : "Hello_1",
    var_two : "Hello_4"
};

console.log( obj1.var_one, obj1.var_two );
console.log( obj2.var_one, obj2.var_two );
console.log( obj3.var_one, obj3.var_two );
*/


interface interface1{
    fun_one():any;
}
interface interface2 extends interface1{
    fun_two():any;
}
interface interface3 extends interface1{
    fun_three():any;
}
interface interface4 extends interface2,interface3{
    fun_four():any;
}
let obj:interface4 = {
    fun_one : ():any=>{
        return "Hello_1"
    },
    fun_two : ():any=>{
        return "Hello_2"
    },
    fun_three : ():any=>{
        return "Hello_3"
    },
    fun_four : ():any=>{
        return "Hello_4"
    }
}
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three(), obj.fun_four() );




















































































































































