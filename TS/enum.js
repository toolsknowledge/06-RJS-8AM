//Enum
//Enum used to create the custom datatype
//enum is the predefined keyword
/*
    enum MyDataType{
        CONST1,
        CONST2,
        CONST3,
        CONST4
    }
    console.log( MyDataType );
    console.log( MyDataType.CONST1, MyDataType.CONST2, MyDataType.CONST3, MyDataType.CONST4 );              //0 1 2 3
*/
/*
    enum MyDataType{
        CONST1 = 100,
        CONST2,
        CONST3,
        CONST4,
        CONST5
    }
    console.log( MyDataType.CONST1, MyDataType.CONST2, MyDataType.CONST3, MyDataType.CONST4, MyDataType.CONST5 );
    //100 101 102 103 104
*/
/*
    enum MyEnum{
        KEY1 = 100,
        KEY2 = 200,
        KEY3 = 300
    }
    console.log( MyEnum.KEY1, MyEnum.KEY2, MyEnum.KEY3 );           //100 200 300
*/
/*
    enum MyEnum{
        KEY1 = "Hello_1",
        KEY2 = "Hello_2",
        KEY3 = "Hello_3",
        KEY4 = "Hello_4"
    }
    console.log( MyEnum.KEY1, MyEnum.KEY2, MyEnum.KEY3, MyEnum.KEY4 );
    //Hello_1 Hello_2 Hello_3 Hello_4
*/
/*
    enum MyEnum{
        CONST1 = "Hello_1",
        CONST2,
        CONST3,
        CONST4
    }
    //if enum is string, initilization must be there
*/
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["KEY1"] = 100] = "KEY1";
    MyEnum["KEY2"] = "Hello";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.KEY1, MyEnum.KEY2);
