/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }
        public getSubOne():string{
            return this.sub_one;
        }

        public getSubTwo():string{
            return this.sub_two;
        }

        public getSubThree():string{
            return this.sub_three;
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );                 //ReactJS NodeJS MongoDB
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class class_one{
        constructor(public arg1:any,public arg2:any,public arg3:any){}
    }
    let obj1:class_one = new class_one("Angular13","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );

    let obj2:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );
*/
/*
    class class_one{
        public fun_one():any{
            return "hello";
        }
    }

    class class_two{
        constructor(public arg1:any){}
    }

    let obj:class_two = new class_two(new class_one());
    console.log( obj.arg1.fun_one() );                      //hello
*/
//inheritance
//aquiring the properties from parent class to child class called as inheritance
//we will implement the inheritance with the help of "extends" keyword
//types of inheritance
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hybrid inheritance
//5) hirarichal inheritance
/*
    class Parent{
        var_one:any = "Hello_1";
    };

    class Child extends Parent{
        var_two:any = "Hello_2";
    }

    let obj1:Parent = new Parent();
    console.log( obj1.var_one );                                //Hello_1


    let obj2:Child = new Child();
    console.log( obj2.var_one, obj2.var_two );                  //Hello_1 Hello_2


    //parent class reference holds the child class object
    let obj3:Parent = new Child();
    console.log( obj3.var_one );                                //Hello_1



    //child class reference holds the parent class object
    let obj4:Child = new Parent();                      //Property 'var_two' is missing in type 'Parent' but required in type 'Child'.
*/
/*
class Parent{
    public fun_one():any{
        console.log("Hello_1");
    }
};

class Child extends Parent{
    public fun_two():any{
        console.log("Hello_2");
    }
}

let obj:Child = new Child();
obj.fun_one();
obj.fun_two();
*/
/*
class Parent{
    var_one:string = "Hello_1";
};

class Child extends Parent{
    var_two:string = "Hello_2";
}

class Subchild extends Child{
    var_three:string = "Hello_3";
}

let obj:Subchild = new Subchild();
console.log( obj.var_one, obj.var_two, obj.var_three );
//Hello_1 Hello_2 Hello_3
*/
/*
class Parent{
    private var_one:string;
    constructor(){
        this.var_one = "Hello_1";
    }
    public fun_one():string{
        return this.var_one;
    }
}


class Child extends Parent{
    private var_two:string;
    constructor(){
        super();
        this.var_two = "Hello_2";
    }
    public fun_two():string{
        return this.var_two;
    }
}

class Subchild extends Child{
    private var_three:string;
    constructor(){
        super();
        this.var_three = "Hello_3";
    }
    public fun_three():string{
        return this.var_three;
    }
}


let obj:Subchild = new Subchild();
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
//Hello_1 Hello_2 Hello_3
*/
/*
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}

    //multiple inheritance not supported by typescript
*/
/*
    class Parent{
        var_one:string = "Hello_1";
    }

    class Child1 extends Parent{
        var_two:string = "Hello_2";
    };

    class Child2 extends Parent{
        var_two:string = "Hello_3";
    };

    class Child3 extends Parent{
        var_two:string = "Hello_4";
    };

    let obj1:Child1 = new Child1();
    console.log( obj1.var_one, obj1.var_two );                      //Hello_1 Hello_2

    let obj2:Child2 = new Child2();
    console.log( obj2.var_one, obj2.var_two );                      //Hello_1 Hello_3

    let obj3:Child3 = new Child3();
    console.log( obj3.var_one, obj3.var_two );                      //Hello_1 Hello_4
*/
/*
    class Parent{

    }

    class Child1 extends Parent{

    }

    class Child2 extends Parent{

    }

    class Subchild extends Child1,Child2{}


    //Hybrid Inheritance not supported by TypeScript
*/
//polymorphism
//behaves like many called as polymorphism
//polymorphism have two forms
//1) function overloading
//2) function overriding
/*
    class class_one{
        add(arg1:string,arg2:string):any;

        add(arg1:number,arg2:number):any;

        add(arg1:any,arg2:any):any{
            console.log( arg1+arg2 );
        }
    }

    let obj1:class_one = new class_one();
    obj1.add("Hello_1","Hello_2");
    obj1.add(10,10);
*/
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.dbFun = function () {
        return "data from oracle database soon....!";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.dbFun = function () {
        return "data from mongodb soon....!";
    };
    return Child;
}(Parent));
var obj = new Child();
console.log(obj.dbFun());
