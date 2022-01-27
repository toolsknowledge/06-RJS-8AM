class class_one{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;

    constructor(){
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }

    public fun_one():string{
        return this.sub_one;
    }

    public fun_two():string{
        return this.sub_two;
    }

    public fun_three():string{
        return this.sub_three;
    }
}

let obj:class_one = new class_one();
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );               //ReactJS NodeJS MongoDB
