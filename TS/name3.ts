/// <reference path="name2.ts" />

namespace namespace3{
    export class class_one{
        my_fun():any{
            return namespace2.fun_one();
        }
    }
}
