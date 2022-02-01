//when ever we know the partial implementations, then we will choose "abstract" classes
//"abstract" is the keyword used to define the "abstract" class
//implementation provided by "child" classes
/*
    abstract class class_one{
        fun_one():any{
            return "Hello_1";   
        }

        abstract fun_two():any;
    };

    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        }
    }

    let obj:class_two = new class_two();
    console.log( obj.fun_one(), obj.fun_two() );                    //Hello_1 Hello_2
*/


/*
    abstract class class_one{
        abstract fun_one():any;
    };

    abstract class class_two extends class_one{
        fun_one():any{
            return "Hello_1";
        }
        abstract fun_two():any;
    };

    class class_three extends class_two{
        fun_two():any {
            return "Hello_2";
        }
    }

    let obj:class_three = new class_three();
    console.log( obj.fun_one(), obj.fun_two() );
    //Hello_1 Hello_2
*/

interface interface1{
    fun_one():any;
}

abstract class class_one implements interface1{
    fun_one():any{
        return "Hello_1";
    }

    abstract fun_two():any;
}

class class_two extends class_one{
    fun_two():any{
        return "Hello_2";
    }
}

let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two() );
//Hello_1 Hello_2



















































