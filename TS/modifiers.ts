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





































































































