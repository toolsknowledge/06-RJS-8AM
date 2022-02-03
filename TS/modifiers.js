/*
    class class_one{
        public var_one:any;
        public constructor(){
            this.var_one = "Hello";
        }
        public fun_one():any{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.fun_one() );
    //Hello Hello_2
*/
/*
    class class_one{
        public var_one:string = "Hello_1";
    };

    class class_two extends class_one{
        public var_two:string = "Hello_2";
    };

    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.var_two );
    //Hello_1 Hello_2
*/
/*
    class class_one{
        private var_one:string;
        private constructor(){

        }
        private fun_one():any{}
    };
*/
/*
    class class_one{
        private constructor(){}
    };

    let obj = new class_one();      //Constructor of class 'class_one' is private and only accessible within the class declaration.ts(2673)
*/
/*
    class Parent{
        private var_one:string = "Hello_1";
    }

    class Child extends Parent{

    }

    let obj:Child = new Child();
    obj.var_one;                    //Property 'var_one' is private and only accessible within class 'Parent'.
*/
/*
    class class_one{
        private var_one:string = "Hello";
    };

    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        protected var_one:string = "Hello";
    }
    let obj:class_one = new class_one();
    obj.var_one;                    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/
/*
    class class_one{
        protected var_one:string = "Hello";
    };

    class class_two extends class_one{}

    let obj:class_two = new class_two();

    obj.var_one;                            //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/
/*
    class class_one{
        protected var_one:string = "Hello";
    };

    class class_two extends class_one{
        var_two:string = this.var_one;
    };

    let obj:class_two = new class_two();
    console.log( obj.var_two );                                 //Hello
*/
//static
//static members we can access by using "class names"
//static members we can't access by using "class objects"
/*
    class class_one{
        static var_one:any = "Hello";
    }
    console.log( class_one.var_one );                       //Hello

    let obj:class_one = new class_one();
    obj.var_one;                                            //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/
/*
    class class_one{
        static fun_one():string{
            return "Hello";
        }
    };
    console.log( class_one.fun_one() );                 //Hello
*/
/*
    class class_one{
        sub_one:string = "Hello_1";
        sub_two:string = "Hello_2";
        sub_three:string = "Hello_3";
        private constructor(){}
        static fun_one():any{
            return new class_one();
        }
    };

    let obj:class_one = class_one.fun_one();
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );
    //Hello_1 Hello_2 Hello_3
*/
//super
//super keyword, used to call the parent class members from child classes
//we can't access variables by using super keyword
/*
    class class_one{
        public var_one:string = "Hello";
    }
    class class_two extends class_one{
        var_two = super.var_one;
    }
    let obj:class_two = new class_two();
    console.log( obj.var_two );
*/
/*
    class class_one{
        fun_one():any{
            return "Hello";
        }
    }
    class class_two extends class_one{
        fun_two():any{
            return super.fun_one();
        }
    };
    let obj:class_two = new class_two();
    console.log( obj.fun_two() );                       //Hello
*/
/*
    class class_one{
        var_one:string;
        constructor(arg1:string){
            this.var_one = arg1;
        };
    };
    class class_two extends class_one{
        var_two:string;
        constructor(arg1:string,arg2:string){
            super(arg1);
            this.var_two = arg2;
        };
    };
    class class_three extends class_two{
        var_three:string;
        constructor(arg1:string,arg2:string,arg3:string){
            super(arg1,arg2);
            this.var_three = arg3;
        }
    }
    let obj:class_three = new class_three("Hello_1","Hello_2","Hello_3");
    console.log( obj.var_one, obj.var_two, obj.var_three );                     //Hello_1 Hello_2 Hello_3
*/
//readonly
//we can only read the data
//but we can't modify the data
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one);
